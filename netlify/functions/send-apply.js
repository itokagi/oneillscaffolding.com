exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: "RESEND_API_KEY not set" }) };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const { name, email, phone, role, experience, coverLetter } = body;
    const hrwl = Array.isArray(body.hrwl) ? body.hrwl : body.hrwl ? [body.hrwl] : [];

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "OSG Careers <onboarding@resend.dev>",
        to: "trey@oneillscaffolding.com.au",
        reply_to: email,
        subject: `New application — ${name} for ${role || "General position"}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1a1a1a">
            <div style="border-bottom:3px solid #E85A00;padding-bottom:12px;margin-bottom:24px">
              <h2 style="margin:0;font-size:20px">New Job Application</h2>
              <p style="margin:4px 0 0;color:#666;font-size:13px">Submitted via oneillscaffolding.com.au/careers/apply</p>
            </div>
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:8px 0;color:#666;width:160px;vertical-align:top">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#666;vertical-align:top">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#E85A00">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#666;vertical-align:top">Phone</td><td style="padding:8px 0">${phone || "—"}</td></tr>
              <tr><td style="padding:8px 0;color:#666;vertical-align:top">Position</td><td style="padding:8px 0">${role || "—"}</td></tr>
              <tr><td style="padding:8px 0;color:#666;vertical-align:top">Experience</td><td style="padding:8px 0">${experience || "—"}</td></tr>
              <tr><td style="padding:8px 0;color:#666;vertical-align:top">HRWL licences</td><td style="padding:8px 0">${hrwl.length > 0 ? hrwl.join(", ").toUpperCase() : "None listed"}</td></tr>
              <tr><td style="padding:8px 0;color:#666;vertical-align:top">Cover letter</td><td style="padding:8px 0;white-space:pre-wrap">${coverLetter || "—"}</td></tr>
            </table>
            <div style="margin-top:24px;padding:12px 16px;background:#fff8f5;border-left:3px solid #E85A00;font-size:13px;color:#666">
              Reply directly to this email to respond to ${name}.
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
