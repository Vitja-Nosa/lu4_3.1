"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { useLanguage } from "@/lib/LanguageProvider";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap">
        <a className="brand" href="#top">
          <Logo />
          <b>Payo</b>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            type="button"
            className="lang-switch"
            onClick={() => setLocale(locale === "en" ? "nl" : "en")}
            aria-label="Switch language"
          >
            <i className="ph ph-globe" />
            {locale === "en" ? "NL" : "EN"}
          </button>
          <a className="btn btn-primary btn-sm" href="#join">
            {t.nav.join}
          </a>
        </div>
      </div>
    </nav>
  );
}
