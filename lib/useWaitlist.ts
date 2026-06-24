"use client";

import { useCallback, useEffect, useState } from "react";
import { waitlist } from "./waitlist";
import { waitlistBaseCount } from "@/data/landing-content";

export function useWaitlist() {
  const [count, setCount] = useState(waitlistBaseCount);

  useEffect(() => {
    setCount(waitlistBaseCount + waitlist.readEmails().length);
  }, []);

  const join = useCallback((email: string) => {
    if (!waitlist.isEmail(email)) return { ok: false as const };
    const { alreadyJoined } = waitlist.addEmail(email);
    setCount(waitlistBaseCount + waitlist.readEmails().length);
    return { ok: true as const, alreadyJoined };
  }, []);

  return { count, join };
}
