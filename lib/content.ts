/**
 * Visual/structural data shared across all languages: icons, colors, order.
 * Only English text used to live here — now text lives in translations.ts,
 * matched to these by array index.
 */

export type StepMeta = {
  icon: string;
  iconBg: string;
  iconColor: string;
  number: number;
};

export const stepsMeta: StepMeta[] = [
  { icon: "ph-fill ph-camera", iconBg: "rgba(217,107,71,0.12)", iconColor: "#D96B47", number: 1 },
  { icon: "ph-fill ph-qr-code", iconBg: "rgba(232,168,124,0.18)", iconColor: "#A65C32", number: 2 },
  { icon: "ph-fill ph-hand-pointing", iconBg: "rgba(253,219,160,0.28)", iconColor: "#8A5A1E", number: 3 },
  { icon: "ph-fill ph-wallet", iconBg: "rgba(232,168,124,0.18)", iconColor: "#A65C32", number: 4 },
];

export type FeatureMeta = {
  icon: string;
  iconBg: string;
  iconColor: string;
};

export const featuresMeta: FeatureMeta[] = [
  { icon: "ph-fill ph-scan", iconBg: "rgba(253,219,160,0.28)", iconColor: "#8A5A1E" },
  { icon: "ph-fill ph-qr-code", iconBg: "rgba(232,168,124,0.18)", iconColor: "#A65C32" },
  { icon: "ph-fill ph-pizza", iconBg: "rgba(232,168,124,0.18)", iconColor: "#A65C32" },
  { icon: "ph-fill ph-globe-hemisphere-west", iconBg: "rgba(232,168,124,0.18)", iconColor: "#A65C32" },
];

export const oldWayIcon = "ph-fill ph-x-circle";
export const newWayIcon = "ph-fill ph-check-circle";
