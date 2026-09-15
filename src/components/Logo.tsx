import type { CSSProperties } from "react";

/**
 * Marca Drafta dental: contur cu colțuri rotunjite sus și semicerc jos, cu
 * „zâmbetul" bleu în interior. Geometria e construită analitic (raze derivate
 * din latura mărcii), nu trasată, deci curbele rămân exacte la orice mărime.
 *
 * Marca e pătrată, 154 x 154. `size` este latura.
 */
const OUTER =
  "M38.5,0H115.5 A38.5,38.5 0 0 1 154,38.5 V77 A77,77 0 0 1 0,77 V38.5 A38.5,38.5 0 0 1 38.5,0Z";
const SMILE = "M34.65,84.7A42.35,42.35 0 0 0 119.3,84.7Z";

export function LogoMark({
  size = 40,
  className = "",
  onIndigo = false,
  style,
}: {
  size?: number;
  className?: string;
  /** Pe fundal indigo conturul este alb, zâmbetul rămâne bleu. */
  onIndigo?: boolean;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 154 154"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      shapeRendering="geometricPrecision"
      className={`flex-none ${className}`}
      style={style}
    >
      <path d={OUTER} fill={onIndigo ? "#fff" : "var(--color-indigo)"} />
      <path d={SMILE} fill="var(--color-bleu)" />
    </svg>
  );
}
