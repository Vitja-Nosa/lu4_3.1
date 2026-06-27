"use client";

import { FormEvent, useRef, useState } from "react";
import { useWaitlist } from "@/lib/useWaitlist";
import { useLanguage } from "@/lib/LanguageProvider";

export function SignupForm() {
  const { join } = useWaitlist();
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const fieldRef = useRef<HTMLLabelElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (honeypotRef.current?.value) return;
    const email = inputRef.current?.value.trim() ?? "";
    const result = await join(email);

    if (!result.ok) {
      fieldRef.current?.animate(
        [
          { transform: "translateX(0)" },
          { transform: "translateX(-6px)" },
          { transform: "translateX(6px)" },
          { transform: "translateX(0)" },
        ],
        { duration: 260 }
      );
      inputRef.current?.focus();
      return;
    }

    setMessage(
      result.alreadyJoined ? t.signup.alreadyJoined : t.signup.willEmail(email)
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="success-card show">
        <span className="ic">
          <i className="ph-fill ph-check" />
        </span>
        <div style={{ textAlign: "left" }}>
          <b>{t.signup.successTitle}</b>
          <small>{message}</small>
        </div>
      </div>
    );
  }

  return (
    <form className="signup-form d-flex flex-wrap gap-2" onSubmit={handleSubmit}>
      <input
        ref={honeypotRef}
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", width: 0, height: 0, opacity: 0, pointerEvents: "none" }}
      />
      <label className="field" ref={fieldRef}>
        <i className="ph ph-envelope-simple" />
        <input
          ref={inputRef}
          type="email"
          name="email"
          placeholder={t.signup.placeholder}
          required
          autoComplete="email"
        />
      </label>
      <button type="submit" className="btn btn-primary btn-lg">
        {t.signup.button}
      </button>
    </form>
  );
}
