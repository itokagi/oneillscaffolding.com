exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: "RESEND_API_KEY not set" }) };
  }

  try {
    const { firstName, lastName, email, phone, inquiryType, projectType, message } =
      JSON.parse(event.body || "{}");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "OSG Website <onboarding@resend.dev>",
        to: "trey@oneillscaffolding.com.au",
        reply_to: email,
        subject: `New enquiry — ${firstName} ${lastName} (${inquiryType || "General"})`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1a1a1a">
            <div style="border-bottom:3px solid #E85A00;padding-bottom:12px;margin-bottom:24px">
              <h2 style="margin:0;font-size:20px">New Contact Enquiry</h2>
              <p style="margin:4px 0 0;color:#666;font-size:13px">Submitted via oneillscaffolding.com.au</p>
            </div>
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:8px 0;color:#666;width:160px;vertical-align:top">Name</td><td style="padding:8px 0;font-weight:600">${firstName} ${lastName}</td></tr>
              <tr><td style="padding:8px 0;color:#666;vertical-align:top">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#E85A00">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#666;vertical-align:top">Phone</td><td style="padding:8px 0">${phone || "—"}</td></tr>
              <tr><td style="padding:8px 0;color:#666;vertical-align:top">Enquiry type</td><td style="padding:8px 0">${inquiryType || "—"}</td></tr>
              <tr><td style="padding:8px 0;color:#666;vertical-align:top">Project type</td><td style="padding:8px 0">${projectType || "—"}</td></tr>
              <tr><td style="padding:8px 0;color:#666;vertical-align:top">Message</td><td style="padding:8px 0;white-space:pre-wrap">${message || "—"}</td></tr>
            </table>
            <div style="margin-top:24px;padding:12px 16px;background:#fff8f5;border-left:3px solid #E85A00;font-size:13px;color:#666">
              Reply directly to this email to respond to ${firstName}.
            </div>
          </div>
        `,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      return { statusCode: 422, body: JSON.stringify({ error: data.message || "send failed" }) };
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};
