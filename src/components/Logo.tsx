import Link from "next/link";

/**
 * Marcă aproximată după prototip (pătrat indigo cu „zâmbetul" bleu).
 * TODO: de înlocuit cu SVG-ul oficial primit de la client.
 */
export function LogoMark({
  size = 40,
  className = "",
  onIndigo = false,
}: {
  size?: number;
  className?: string;
  /** Pe fundal indigo marca este albă, cu zâmbetul bleu. */
  onIndigo?: boolean;
}) {
  const smileWidth = Math.round(size * 0.55);
  const smileHeight = smileWidth / 2;

  return (
    <span
      aria-hidden="true"
      className={`flex flex-none items-end justify-center ${className}`}
      style={{
        width: size,
        height: size,
        background: onIndigo ? "#fff" : "var(--color-indigo)",
        borderRadius: `${size * 0.25}px ${size * 0.25}px ${size * 0.5}px ${size * 0.5}px`,
        paddingBottom: size * 0.175,
      }}
    >
      <span
        className="block bg-bleu"
        style={{
          width: smileWidth,
          height: smileHeight,
          borderRadius: `0 0 ${smileHeight}px ${smileHeight}px`,
        }}
      />
    </span>
  );
}

export function Wordmark({
  onIndigo = false,
  compact = false,
}: {
  onIndigo?: boolean;
  /** Puțin mai mic sub 480px, ca header-ul să rămână pe un singur rând. */
  compact?: boolean;
}) {
  return (
    <span
      className="flex flex-col leading-none"
      style={{ color: onIndigo ? "#fff" : undefined }}
    >
      <span
        className={`font-display font-black tracking-[-0.01em] ${
          compact ? "text-xl min-[480px]:text-2xl" : "text-2xl"
        }`}
      >
        Drafta
      </span>
      <span
        className={`mt-[3px] tracking-[0.42em] ${
          compact ? "text-[9px] min-[480px]:text-[10px]" : "text-[10px]"
        }`}
      >
        dental
      </span>
    </span>
  );
}

export function Lockup({
  /** Pe orice pagină, marca duce acasă. „#top" ar fi doar o ancoră locală,
   *  inexistentă pe subpagini. */
  href = "/",
  onIndigo = false,
  compact = false,
}: {
  href?: string;
  onIndigo?: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label="Drafta dental, mergi la pagina de start"
      className="flex flex-none items-center gap-2 min-[480px]:gap-[11px]"
    >
      <span className="min-[480px]:hidden">
        <LogoMark onIndigo={onIndigo} size={compact ? 34 : 40} />
      </span>
      <span className="hidden min-[480px]:block">
        <LogoMark onIndigo={onIndigo} />
      </span>
      <Wordmark onIndigo={onIndigo} compact={compact} />
    </Link>
  );
}
