export function Logo({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" fill="none" aria-hidden>
      <rect width="34" height="34" rx="10" fill="#D96B47" />
      <path
        d="M10 24V10h7.2c3.1 0 5.3 2 5.3 4.9 0 2.9-2.2 4.9-5.3 4.9h-4v4.2H10Zm3.2-7h3.7c1.4 0 2.4-.8 2.4-2.1s-1-2.1-2.4-2.1h-3.7v4.2Z"
        fill="#fff"
      />
    </svg>
  );
}
