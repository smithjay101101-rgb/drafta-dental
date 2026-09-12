import Image from "next/image";

/**
 * Slotul de imagine al paginii.
 *
 * Fără `src` randează haşura din prototip, cu textul cadrului necesar.
 * Cu `src` randează fotografia. Fotografiile de acum sunt STOCK, interimare
 * (vezi public/photos/CREDITE.md) — se înlocuiesc cu fotografii reale ale
 * cabinetului ştergând câmpul `image` din src/content/site.ts sau punând
 * fişierul propriu în locul celui din public/photos.
 */
export function ImagePlaceholder({
  caption,
  src,
  alt,
  priority = false,
  sizes = "100vw",
  className = "",
  style,
  aspect,
  radius,
}: {
  /** Ce fotografie trebuie pusă aici. */
  caption: string;
  src?: string;
  /** Obligatoriu când există `src`. */
  alt?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  /** ex. "21 / 9" */
  aspect?: string;
  /** ex. "28px" sau forma-zâmbet */
  radius?: string;
}) {
  const shared: React.CSSProperties = {
    aspectRatio: aspect,
    borderRadius: radius,
    maxWidth: "100%",
    ...style,
  };

  if (src) {
    return (
      <div
        className={`relative overflow-hidden bg-surface-2 ${className}`}
        style={shared}
      >
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center overflow-hidden ${className}`}
      style={{
        ...shared,
        background:
          "repeating-linear-gradient(135deg, #E4EAF2 0 14px, #EFF3F8 14px 28px)",
      }}
    >
      <span className="px-4 text-center font-mono text-[13px] text-text-label">
        {caption}
      </span>
    </div>
  );
}
