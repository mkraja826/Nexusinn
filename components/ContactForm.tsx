"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const interests = [
  "GCC Strategy & Setup",
  "Build-Operate-Transfer",
  "Hybrid Captive / Joint Venture",
  "AI Strategy & Readiness",
  "ML Engineering",
  "Intelligent Automation",
  "Generative AI",
  "Responsible AI & Governance",
  "Claims Automation",
  "Underwriting AI",
  "InsurTech Platforms",
  "Insurance Compliance / RegTech",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to submit enquiry.");
      setStatus("success");
      setMessage(result.message || "Your enquiry has been received.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit enquiry.");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid">
        <label>Full name<input name="name" autoComplete="name" required minLength={2} maxLength={100} /></label>
        <label>Work email<input name="email" type="email" autoComplete="email" required maxLength={160} /></label>
        <label>Company<input name="company" autoComplete="organization" required minLength={2} maxLength={140} /></label>
        <label>Role / title<input name="role" autoComplete="organization-title" maxLength={120} /></label>
        <label>Phone <span>(optional)</span><input name="phone" type="tel" autoComplete="tel" maxLength={40} /></label>
        <label>Country / region<input name="country" autoComplete="country-name" maxLength={100} /></label>
        <label className="form-full">What can we help with?
          <select name="interest" required defaultValue=""><option value="" disabled>Select an area</option>{interests.map((item) => <option key={item}>{item}</option>)}</select>
        </label>
        <label className="form-full">Tell us about the business problem or initiative
          <textarea name="details" required minLength={20} maxLength={3000} rows={7} placeholder="Current situation, desired outcome, timeline, constraints, or capabilities you are evaluating." />
        </label>
        <label className="consent form-full"><input name="consent" type="checkbox" value="yes" required /><span>I agree that Nexusinn may use the information I provide to respond to this business enquiry. Do not include confidential, regulated, or sensitive personal information in this form.</span></label>
        <div className="honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      </div>
      <button className="btn btn-primary form-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? <><Loader2 className="spin" size={16}/> Sending…</> : <>Submit enquiry <ArrowRight size={16}/></>}</button>
      {message && <p className={`form-status ${status}`} aria-live="polite">{status === "success" && <CheckCircle2 size={18}/>} {message}</p>}
    </form>
  );
}
