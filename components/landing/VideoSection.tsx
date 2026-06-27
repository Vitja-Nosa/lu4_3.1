"use client";

import { useLanguage } from "@/lib/LanguageProvider";

export function VideoSection() {
  const { t } = useLanguage();

  return (
    <section className="section-pad" id="video">
      <div className="wrap center">
        <span className="eyebrow">{t.video.eyebrow}</span>
        <h2 className="h-sec">{t.video.title}</h2>
        <p className="sub-sec">{t.video.subtitle}</p>
      </div>
      <div className="wrap">
        <div className="video-panel">
          <div className="video-overlay">
            <button className="play-btn" aria-label={t.video.playAria}>
              <i className="ph-fill ph-play" />
            </button>
            <span className="vcap">
              <i className="ph ph-film-slate" /> {t.video.caption}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
