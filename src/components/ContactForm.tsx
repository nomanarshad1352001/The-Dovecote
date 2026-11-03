"use client";

import { FormEvent, useState } from "react";
import { contactEmail, createEmailDraft } from "@/lib/contact";
import { ArrowUpRight } from "./Icons";

type ContactFormProps = { defaultInterest?: string };

const interestLabels: Record<string, string> = {
  consulting: "Consulting project",
  partnership: "Partnership",
  media: "Media request",
  research: "Research",
  general: "General inquiry",
};

export default function ContactForm({ defaultInterest = "consulting" }: ContactFormProps) {
  const [draftUrl, setDraftUrl] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const organization = String(data.get("organization") || "").trim();
    const interest = String(data.get("interest") || "general");
    const message = String(data.get("message") || "").trim();
    const draft = createEmailDraft(`${interestLabels[interest] || "General inquiry"} — ${name}`, [
      `Name: ${name}`,
      `Email: ${email}`,
      organization ? `Organization: ${organization}` : undefined,
      `Inquiry: ${interestLabels[interest] || interest}`,
      "",
      message,
    ]);
    setDraftUrl(draft);
    window.location.href = draft;
  }

  return (
    <form className="contact-form" onSubmit={submit} onChange={() => setDraftUrl("")}>
      <div className="field-grid">
        <div className="field">
          <label htmlFor="contact-name">Your name <span>*</span></label>
          <input id="contact-name" name="name" autoComplete="name" required minLength={2} maxLength={160} />
        </div>
        <div className="field">
          <label htmlFor="contact-email">Email address <span>*</span></label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>
      <div className="field-grid">
        <div className="field">
          <label htmlFor="contact-organization">Organization <small>Optional</small></label>
          <input id="contact-organization" name="organization" autoComplete="organization" maxLength={200} />
        </div>
        <div className="field">
          <label htmlFor="contact-interest">I’m interested in <span>*</span></label>
          <select id="contact-interest" name="interest" defaultValue={defaultInterest} required>
            <option value="consulting">A consulting project</option>
            <option value="partnership">A partnership</option>
            <option value="media">A media request</option>
            <option value="research">The research</option>
            <option value="general">Something else</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="contact-message">How can we help? <span>*</span></label>
        <textarea id="contact-message" name="message" rows={5} required minLength={20} maxLength={5000} placeholder="A project, a question, an idea — start wherever you are." />
      </div>
      <div className="form-submit-row">
        <button className="button button-primary" type="submit">
          Open email draft <ArrowUpRight width={18} height={18} />
        </button>
        <p className="inline-form-message" aria-live="polite">
          {draftUrl ? (
            <span>Your email app should be open. Send the draft to deliver your message, or <a href={draftUrl}>open it again</a>.</span>
          ) : (
            <span>Your message opens in your email app, addressed to {contactEmail}. Nothing is sent or stored until you select Send.</span>
          )}
        </p>
      </div>
    </form>
  );
}
