"use client";

import { useLanguage } from "@/lib/LanguageProvider";
import { featuresMeta } from "@/lib/content";

export function Features() {
  const { t } = useLanguage();

  return (
    <section className="section-pad" id="features">
      <div className="wrap center">
        <span className="eyebrow">{t.features.eyebrow}</span>
        <h2 className="h-sec">{t.features.title}</h2>
      </div>
      <div className="wrap">
        <div className="feat-grid">
          {featuresMeta.map((meta, i) => {
            const text = t.features.items[i];
            return (
              <div className="feat" key={text.title}>
                <div className="ic-bubble" style={{ background: meta.iconBg, color: meta.iconColor }}>
                  <i className={meta.icon} />
                </div>
                {text.pillTag ? (
                  <span className="pill-tag" style={{ background: meta.iconBg, color: meta.iconColor }}>
                    {text.pillTag}
                  </span>
                ) : null}
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
