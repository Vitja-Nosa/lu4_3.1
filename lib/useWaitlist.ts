"use client";

import { useCallback, useEffect, useState } from "react";
import { waitlist } from "./waitlist";
import { supabase } from "./supabaseClient";
import { waitlistBaseCount } from "@/data/landing-content";

export function useWaitlist() {
  const [count, setCount] = useState(waitlistBaseCount);

  const refreshCount = useCallback(async () => {
    const { count: rowCount } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });
    setCount(waitlistBaseCount + (rowCount ?? 0));
  }, []);

  useEffect(() => {
    refreshCount();
  }, [refreshCount]);

  const join = useCallback(
    async (email: string) => {
      if (!waitlist.isEmail(email)) return { ok: false as const };
      const { alreadyJoined } = await waitlist.addEmail(email);
      refreshCount();
      return { ok: true as const, alreadyJoined };
    },
    [refreshCount]
  );

  return { count, join };
}
