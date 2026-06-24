const STORAGE_KEY = "payyo_waitlist";

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

function readEmails(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
}

function addEmail(email: string): { alreadyJoined: boolean } {
  const emails = readEmails();
  const alreadyJoined = emails.includes(email);
  if (!alreadyJoined) {
    emails.push(email);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(emails));
  }
  return { alreadyJoined };
}

export const waitlist = { isEmail, readEmails, addEmail };
