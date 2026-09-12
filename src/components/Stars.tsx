/** Cinci stele pline, în bleu. Înlocuiește glifa ★ din prototip. */
export function Stars({
  size = 19,
  label = "5 din 5 stele",
}: {
  size?: number;
  label?: string;
}) {
  return (
    <span
      role="img"
      aria-label={label}
      className="inline-flex items-center"
      style={{ gap: size * 0.11 }}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="text-bleu"
        >
          <path d="M12 2.6l2.89 5.86 6.47.94-4.68 4.56 1.1 6.44L12 17.36l-5.78 3.04 1.1-6.44L2.64 9.4l6.47-.94L12 2.6z" />
        </svg>
      ))}
    </span>
  );
}
