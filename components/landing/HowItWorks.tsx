"use client";

import { useLanguage } from "@/lib/LanguageProvider";
import { stepsMeta } from "@/lib/content";

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="section-pad" id="how">
      <div className="wrap center">
        <span className="eyebrow">{t.howItWorks.eyebrow}</span>
        <h2 className="h-sec">{t.howItWorks.title}</h2>
        <p className="sub-sec">{t.howItWorks.subtitle}</p>
      </div>
      <div className="wrap">
        <div className="steps-grid">
          {stepsMeta.map((meta, i) => {
            const text = t.howItWorks.steps[i];
            return (
              <div className="step" key={meta.number}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div className="ic-bubble" style={{ background: meta.iconBg, color: meta.iconColor }}>
                    <i className={meta.icon} />
                  </div>
                  <span className="num">{meta.number}</span>
                </div>
                <h3>{text.title}</h3>
                <p>{text.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
