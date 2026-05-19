import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = "trey@oneillscaffolding.com";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") ?? "";
    const email = formData.get("email") ?? "";
    const phone = formData.get("phone") ?? "";
    const role = formData.get("role") ?? "";
    const experience = formData.get("experience") ?? "";
    const hrwl = formData.getAll("hrwl");
    const coverLetter = formData.get("coverLetter") ?? "";
    const cvFile = formData.get("cv");

    const attachments = [];
    if (cvFile && cvFile.size > 0) {
      const buffer = await cvFile.arrayBuffer();
      attachments.push({
        filename: cvFile.name,
        content: Buffer.from(buffer).toString("base64"),
      });
    }

    await resend.emails.send({
      from: "OSG Careers <onboarding@resend.dev>",
      to: TO,
      reply_to: email,
      subject: `New application — ${name} for ${role || "General position"}`,
      attachments,
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
            <tr><td style="padding:8px 0;color:#666;vertical-align:top">CV attached</td><td style="padding:8px 0">${attachments.length > 0 ? `✓ ${cvFile.name}` : "No file uploaded"}</td></tr>
          </table>
          <div style="margin-top:24px;padding:12px 16px;background:#fff8f5;border-left:3px solid #E85A00;font-size:13px;color:#666">
            Reply directly to this email to respond to ${name}.
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("apply email error", err);
    return Response.json({ error: "Failed to send" }, { status: 500 });
  }
}
