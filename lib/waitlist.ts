import { supabase } from "./supabaseClient";

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

async function addEmail(email: string): Promise<{ alreadyJoined: boolean }> {
  const { error } = await supabase.from("waitlist").insert({ email });
  if (error) {
    if (error.code === "23505") return { alreadyJoined: true };
    throw error;
  }
  return { alreadyJoined: false };
}

export const waitlist = { isEmail, addEmail };
