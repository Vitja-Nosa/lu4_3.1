"use client";

import { useLanguage } from "@/lib/LanguageProvider";
import { oldWayIcon, newWayIcon } from "@/lib/content";

function ComparisonList({ icon, items }: { icon: string; items: string[] }) {
  return (
    <ul>
      {items.map((text) => (
        <li key={text}>
          <i className={icon} />
          {text}
        </li>
      ))}
    </ul>
  );
}

export function WhyPayo() {
  const { t } = useLanguage();

  return (
    <section className="section-pad" id="why">
      <div className="wrap center">
        <span className="eyebrow">{t.whyPayo.eyebrow}</span>
        <h2 className="h-sec">{t.whyPayo.title}</h2>
        <p className="sub-sec">{t.whyPayo.subtitle}</p>
      </div>
      <div className="wrap">
        <div className="ba-grid">
          <div className="ba old">
            <span className="tag">
              <i className="ph ph-clock-countdown" /> {t.whyPayo.oldWayTag}
            </span>
            <ComparisonList icon={oldWayIcon} items={t.whyPayo.oldWayItems} />
          </div>
          <div className="ba new">
            <span className="tag">
              <i className="ph-fill ph-check-circle" /> {t.whyPayo.newWayTag}
            </span>
            <ComparisonList icon={newWayIcon} items={t.whyPayo.newWayItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
