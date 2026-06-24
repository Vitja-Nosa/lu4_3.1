"use client";

import { SignupForm } from "./SignupForm";
import { avatars } from "@/data/landing-content";
import { useWaitlist } from "@/lib/useWaitlist";

export function Hero() {
  const { count } = useWaitlist();

  return (
    <header className="hero section-pad" id="top">
      <div className="wrap">
        <span className="eyebrow">
          In Development · launching soon
        </span>
        <h1>
          Split the bill. <span className="hl">Skip <br />the headache.</span>
        </h1>
        <p className="lede">
          Every time you go out with friends, someone fronts the bill. Then comes the group chat: who had what? Payyo cuts that out. Scan the receipt, everyone taps what they had, and you're done.
        </p>

        <SignupForm />

        {/* <p className="form-note">
          <span className="avatars">
            {avatars.map((avatar) => (
              <span key={avatar.initials} style={{ background: avatar.bg, color: avatar.color }}>
                {avatar.initials}
              </span>
            ))}
          </span>
          Join <b style={{ color: "var(--text-primary)" }}>{count.toLocaleString()}</b>{" "}
          people already waiting
        </p> */}
      </div>
    </header>
  );
}
