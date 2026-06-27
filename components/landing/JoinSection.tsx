"use client";

import { SignupForm } from "./SignupForm";
import { SurveyLink } from "./SurveyLink";
import { useLanguage } from "@/lib/LanguageProvider";

export function JoinSection() {
  const { t } = useLanguage();

  return (
    <section className="section-pad" id="join">
      <div className="wrap">
        <div className="cta-band" style={{ textAlign: "center" }}>
          <span className="eyebrow">{t.join.eyebrow}</span>
          <h2 className="h-sec center" style={{ marginTop: 16 }}>
            {t.join.title}
          </h2>
          <p className="sub-sec center" style={{ marginBottom: 28 }}>
            {t.join.subtitle}
          </p>

          <SignupForm />

          <div style={{ marginTop: 36, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.18)" }}>
            <p className="sub-sec center" style={{ marginBottom: 16, fontSize: 15 }}>
              {t.survey.title} {t.survey.subtitle}
            </p>
            <SurveyLink />
          </div>
        </div>
      </div>
    </section>
  );
}
