import { Logo } from "./Logo";

const socials = [
  { label: "Instagram", icon: "ph-fill ph-instagram-logo" },
  { label: "TikTok", icon: "ph-fill ph-tiktok-logo" },
  // { label: "X", icon: "ph-fill ph-x-logo" },
];

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-brand">
          <Logo size={30} />
          <b>Payyo</b>
        </div>
        <div className="socials">
          {socials.map((social) => (
            <a key={social.label} href="#" aria-label={social.label}>
              <i className={social.icon} />
            </a>
          ))}
        </div>
        <span className="foot-note">© 2026 Payo · Split the bill. Skip the headache.</span>
      </div>
    </footer>
  );
}
