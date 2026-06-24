"use client";

import { FormEvent, useRef, useState } from "react";
import { useWaitlist } from "@/lib/useWaitlist";

export function SignupForm() {
  const { join } = useWaitlist();
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const fieldRef = useRef<HTMLLabelElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = inputRef.current?.value.trim() ?? "";
    const result = join(email);

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
      result.alreadyJoined
        ? "You’re already on the list. We’ve got you."
        : `We'll email ${email} the moment Payo lands.`
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
          <b>You&rsquo;re on the list!</b>
          <small>{message}</small>
        </div>
      </div>
    );
  }

  return (
    <form className="signup-form d-flex flex-wrap gap-2" onSubmit={handleSubmit}>
      <label className="field" ref={fieldRef}>
        <i className="ph ph-envelope-simple" />
        <input
          ref={inputRef}
          type="email"
          name="email"
          placeholder="you@email.com"
          required
          autoComplete="email"
        />
      </label>
      <button type="submit" className="btn btn-primary btn-lg">
        Stay up to date
      </button>
    </form>
  );
}
