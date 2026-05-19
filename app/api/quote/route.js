import { Resend } from "resend";

const TO = "trey@oneillscaffolding.com";

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, company, phone, email, projectType, location, timeline, scale, description, source } =
      await request.json();

    await resend.emails.send({
      from: "OSG Website <onboarding@resend.dev>",
      to: TO,
      reply_to: email,
      subject: `New quote request — ${name} (${projectType || "General"})`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1a1a1a">
          <div style="border-bottom:3px solid #E85A00;padding-bottom:12px;margin-bottom:24px">
            <h2 style="margin:0;font-size:20px">New Quote Request</h2>
            <p style="margin:4px 0 0;color:#666;font-size:13px">Submitted via oneillscaffolding.com.au</p>
          </div>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr><td style="padding:8px 0;color:#666;width:160px;vertical-align:top">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666;vertical-align:top">Company</td><td style="padding:8px 0">${company || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#666;vertical-align:top">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#E85A00">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666;vertical-align:top">Phone</td><td style="padding:8px 0">${phone || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#666;vertical-align:top">Project type</td><td style="padding:8px 0">${projectType || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#666;vertical-align:top">Location</td><td style="padding:8px 0">${location || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#666;vertical-align:top">Timeline</td><td style="padding:8px 0">${timeline || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#666;vertical-align:top">Scale</td><td style="padding:8px 0">${scale || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#666;vertical-align:top">How they found us</td><td style="padding:8px 0">${source || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#666;vertical-align:top">Description</td><td style="padding:8px 0;white-space:pre-wrap">${description || "—"}</td></tr>
          </table>
          <div style="margin-top:24px;padding:12px 16px;background:#fff8f5;border-left:3px solid #E85A00;font-size:13px;color:#666">
            Reply directly to this email to respond to ${name}.
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("quote email error", err);
    return Response.json({ error: "Failed to send" }, { status: 500 });
  }
}
