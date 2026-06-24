export type Step = {
  icon: string;
  iconBg: string;
  iconColor: string;
  number: number;
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    icon: "ph-fill ph-camera",
    iconBg: "rgba(217,107,71,0.12)",
    iconColor: "#D96B47",
    number: 1,
    title: "Snap the receipt",
    description:
      "AI reads every line, dishes, drinks, tax and tip in about a second.",
  },
  {
    icon: "ph-fill ph-qr-code",
    iconBg: "rgba(232,168,124,0.18)",
    iconColor: "#A65C32",
    number: 2,
    title: "Join the table",
    description:
      "Friends join instantly via Bluetooth, QR code, or a shared link.",
  },
  {
    icon: "ph-fill ph-hand-pointing",
    iconBg: "rgba(253,219,160,0.28)",
    iconColor: "#8A5A1E",
    number: 3,
    title: "Pick what you had",
    description:
      "Tap your items. Shared a bottle? Split it across the table in one tap.",
  },
  {
    icon: "ph-fill ph-wallet",
    iconBg: "rgba(232,168,124,0.18)",
    iconColor: "#A65C32",
    number: 4,
    title: "Pay your share",
    description: "One tap settles everything. Everyone's square before you leave the table.",
  },
];

export type ComparisonItem = {
  icon?: string;
  text: string;
};

export const oldWayItems: ComparisonItem[] = [
  { icon: "ph-fill ph-x-circle", text: "One person fronts the whole bill and hopes for the best." },
  { icon: "ph-fill ph-x-circle", text: "Screenshots, group chats, and mental math at the table." },
  { icon: "ph-fill ph-x-circle", text: 'Chasing friends for weeks "did you ever send that?"' },
  { icon: "ph-fill ph-x-circle", text: "Splitting evenly even though you only had one drink." },
];

export const newWayItems: ComparisonItem[] = [
  { icon: "ph-fill ph-check-circle", text: "Everyone pays their exact share, instantly." },
  { icon: "ph-fill ph-check-circle", text: "AI itemises the receipt. no typing, no guessing." },
  { icon: "ph-fill ph-check-circle", text: "Settled at the table, before you've grabbed your coat." },
  { icon: "ph-fill ph-check-circle", text: "Pay for exactly what you ordered. Fair, every time." },
];

export type Feature = {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  pillTag?: string;
};

export const features: Feature[] = [
  {
    icon: "ph-fill ph-scan",
    iconBg: "rgba(217,107,71,0.12)",
    iconColor: "#D96B47",
    title: "AI receipt scanning",
    description:
      'Snap once and every item is captured. No manual entry, no "who had the fries?"',
  },
  {
    icon: "ph-fill ph-bluetooth",
    iconBg: "rgba(232,168,124,0.18)",
    iconColor: "#A65C32",
    title: "Instant table joining",
    description: "Bluetooth or QR pulls everyone in instantly. No switching to WhatsApp.",
  },
  {
    icon: "ph-fill ph-trophy",
    iconBg: "rgba(253,219,160,0.28)",
    iconColor: "#8A5A1E",
    title: "Leaderboard & spin-the-wheel",
    description: 'Track who always pays last. Or spin the wheel, the “winner” gets their share covered.',
    pillTag: "For the group chat",
  },
  {
    icon: "ph-fill ph-globe-hemisphere-west",
    iconBg: "rgba(232,168,124,0.18)",
    iconColor: "#A65C32",
    title: "Built for everywhere",
    description: "Using Payo abroad? If receipts are in a different language, Payo translates them into your preferred language.",
  },
];

export const avatars = [
  { initials: "SM", bg: "#D96B47", color: "#fff" },
  { initials: "LP", bg: "#E8A87C", color: "#3D2414" },
  { initials: "MC", bg: "#FDDBA0", color: "#3D2414" },
  { initials: "+", bg: "#FFF2E8", color: "#C49078" },
];

export const waitlistBaseCount = 2431;
