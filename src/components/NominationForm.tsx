"use client";

import { FormEvent, useState } from "react";
import { contactEmail, createEmailDraft } from "@/lib/contact";
import { ArrowUpRight } from "./Icons";

export default function NominationForm() {
  const [draftUrl, setDraftUrl] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nomineeName = String(data.get("nomineeName") || "").trim();
    const office = String(data.get("office") || "").trim();
    const nominatorName = String(data.get("nominatorName") || "").trim();
    const nominatorEmail = String(data.get("nominatorEmail") || "").trim();
    const reason = String(data.get("reason") || "").trim();
    const draft = createEmailDraft(`Nomination Day — ${nomineeName} for ${office}`, [
      "NOMINATION DAY CANDIDATE NOMINATION",
      "",
      `Nominee: ${nomineeName}`,
      `Office or role: ${office}`,
      `Nominated by: ${nominatorName}`,
      `Nominator email: ${nominatorEmail}`,
      "",
      "Why this person would lead well:",
      reason,
    ]);
    setDraftUrl(draft);
    window.location.href = draft;
  }

  return (
    <form className="contact-form nomination-form" onSubmit={submit} onChange={() => setDraftUrl("")}>
      <div className="field-grid">
        <div className="field">
          <label htmlFor="nominee-name">Nominee’s name <span>*</span></label>
          <input id="nominee-name" name="nomineeName" required minLength={2} maxLength={160} />
        </div>
        <div className="field">
          <label htmlFor="nominee-office">Office or role <span>*</span></label>
          <input id="nominee-office" name="office" required maxLength={200} placeholder="e.g. City Council, Congress, President" />
        </div>
      </div>
      <div className="field-grid">
        <div className="field">
          <label htmlFor="nominator-name">Your name <span>*</span></label>
          <input id="nominator-name" name="nominatorName" autoComplete="name" required minLength={2} maxLength={160} />
        </div>
        <div className="field">
          <label htmlFor="nominator-email">Your email <span>*</span></label>
          <input id="nominator-email" name="nominatorEmail" type="email" autoComplete="email" required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="nomination-reason">Why would this person lead well? <span>*</span></label>
        <textarea id="nomination-reason" name="reason" rows={5} required minLength={40} maxLength={6000} placeholder="Tell us what you have seen in their character, judgment, and service." />
      </div>
      <div className="form-submit-row">
        <button className="button button-primary" type="submit">
          Prepare nomination email <ArrowUpRight width={18} height={18} />
        </button>
        <p className="inline-form-message" aria-live="polite">
          {draftUrl ? (
            <span>Your email app should be open. Send the draft to submit your nomination, or <a href={draftUrl}>open it again</a>.</span>
          ) : (
            <span>Opens a pre-addressed nomination email to {contactEmail}. Nothing is sent or stored until you select Send.</span>
          )}
        </p>
      </div>
    </form>
  );
}
