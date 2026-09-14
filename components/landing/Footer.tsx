"use client";

import { Logo } from "./Logo";
import { useLanguage } from "@/lib/LanguageProvider";

const socials = [
  { label: "Instagram", icon: "ph-fill ph-instagram-logo" },
  { label: "TikTok", icon: "ph-fill ph-tiktok-logo" },
  // { label: "X", icon: "ph-fill ph-x-logo" },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="wrap">
        <div className="foot-brand">
          <Logo size={30} />
          <b>Payo</b>
        </div>
        <div className="socials">
          {socials.map((social) => (
            <a key={social.label} href="#" aria-label={social.label}>
              <i className={social.icon} />
            </a>
          ))}
        </div>
        <span className="foot-note">{t.footer.note}</span>
      </div>
    </footer>
  );
}
