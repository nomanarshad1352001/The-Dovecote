"use client";

import { FormEvent, useState } from "react";
import { contactEmail, createEmailDraft } from "@/lib/contact";
import { ArrowRight, CheckIcon } from "./Icons";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [draftUrl, setDraftUrl] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const draft = createEmailDraft("Subscribe to Dovecote Institute updates", [
      "Please add me to the Dovecote Institute mailing list.",
      "",
      `Email: ${email.trim()}`,
    ]);
    setDraftUrl(draft);
    window.location.href = draft;
  }

  return (
    <form className="newsletter-form" onSubmit={submit}>
      <label htmlFor="newsletter-email">Email address</label>
      <div className="newsletter-input-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@organization.org"
          value={email}
          onChange={(event) => { setEmail(event.target.value); setDraftUrl(""); }}
          required
        />
        <button type="submit" aria-label="Prepare a subscription email">
          <ArrowRight width={22} height={22} />
        </button>
      </div>
      <p className="form-note" aria-live="polite">
        {draftUrl ? <CheckIcon width={16} height={16} /> : null}
        {draftUrl ? (
          <span>Your email app should be open. Send the draft to complete your request, or <a href={draftUrl}>open it again</a>.</span>
        ) : (
          <span>Opens a pre-addressed email to {contactEmail}. No information is stored on this site.</span>
        )}
      </p>
    </form>
  );
}
