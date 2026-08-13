import { Resend } from "resend";

export type EnquiryLead = {
  name: string;
  email: string;
  company: string;
  role: string;
  phone: string;
  country: string;
  interest: string;
  details: string;
  submittedAt: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendEnquiryEmail(lead: EnquiryLead) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false as const, reason: "missing-config" as const };

  const resend = new Resend(apiKey);
  const to = process.env.ENQUIRY_TO_EMAIL || "hr@nexusinn.com.au";
  const from = process.env.RESEND_FROM_EMAIL || "Nexusinn Website <enquiries@nexusinn.com.au>";

  const safe = Object.fromEntries(
    Object.entries(lead).map(([key, value]) => [key, escapeHtml(value)])
  ) as EnquiryLead;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: lead.email,
    subject: `New Nexusinn enquiry: ${lead.interest} — ${lead.company}`,
    html: `<div style="font-family:Arial,Helvetica,sans-serif;max-width:680px;color:#122033"><h2>New Nexusinn website enquiry</h2><p><strong>Name:</strong> ${safe.name}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Company:</strong> ${safe.company}</p><p><strong>Role:</strong> ${safe.role || "Not provided"}</p><p><strong>Phone:</strong> ${safe.phone || "Not provided"}</p><p><strong>Country / region:</strong> ${safe.country || "Not provided"}</p><p><strong>Service interest:</strong> ${safe.interest}</p><p><strong>Submitted:</strong> ${safe.submittedAt}</p><h3>Business problem / initiative</h3><p style="white-space:pre-wrap">${safe.details}</p><p style="color:#627087;font-size:13px">Reply to this message to respond directly to ${safe.email}.</p></div>`,
    text: `New Nexusinn website enquiry\n\nName: ${lead.name}\nEmail: ${lead.email}\nCompany: ${lead.company}\nRole: ${lead.role || "Not provided"}\nPhone: ${lead.phone || "Not provided"}\nCountry / region: ${lead.country || "Not provided"}\nService interest: ${lead.interest}\nSubmitted: ${lead.submittedAt}\n\nBusiness problem / initiative:\n${lead.details}`,
    tags: [{ name: "source", value: "nexusinn-website" }],
  });

  return error ? { ok: false as const, reason: "delivery-failed" as const } : { ok: true as const };
}
