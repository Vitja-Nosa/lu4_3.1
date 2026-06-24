"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

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
          <b>Payyo</b>
        </a>
        <a className="btn btn-primary btn-sm" href="#join">
          Join waitlist
        </a>
      </div>
    </nav>
  );
}
