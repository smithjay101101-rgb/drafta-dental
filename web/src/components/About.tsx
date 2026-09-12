import { ImagePlaceholder } from "./ImagePlaceholder";
import { about } from "@/content/site";

export function About() {
  return (
    <section id="despre" className="section">
      <div
        className="shell grid items-center gap-14"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        }}
      >
        <div>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="h2 mt-5">{about.title}</h2>
          <p className="prose-cap mt-6 text-lg/[1.65] text-text-muted">
            {about.body}
          </p>

          <ul className="mt-8 flex list-none flex-col gap-3.5 p-0">
            {about.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[9px] block size-2 flex-none rounded-full bg-bleu"
                />
                <span className="text-[17px]/[1.6]">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <ImagePlaceholder
          caption={about.imageCaption}
          src={about.image}
          alt={about.imageAlt}
          sizes="(max-width: 900px) 100vw, 45vw"
          aspect="1 / 1"
          radius="28px 28px 200px 200px"
        />
      </div>
    </section>
  );
}
