"use client";

import { SignupForm } from "./SignupForm";
import { useLanguage } from "@/lib/LanguageProvider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <header className="hero section-pad" id="top">
      <div className="wrap">
        <span className="eyebrow">{t.hero.eyebrow}</span>
        <h1>
          {t.hero.titleLine1}{" "}
          <span className="hl" dangerouslySetInnerHTML={{ __html: t.hero.titleHighlight }} />
        </h1>
        <p className="lede">{t.hero.lede}</p>

        <SignupForm />
      </div>
    </header>
  );
}
