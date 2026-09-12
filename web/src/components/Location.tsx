import { ImagePlaceholder } from "./ImagePlaceholder";
import { location, practice } from "@/content/site";

export function Location() {
  return (
    <section id="locatie" className="section">
      <div
        className="shell grid items-center gap-14"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        }}
      >
        {/* TODO: hartă încorporată + o fotografie a intrării. */}
        <ImagePlaceholder
          caption={location.imageCaption}
          src={location.image}
          alt={location.imageAlt}
          sizes="(max-width: 900px) 100vw, 45vw"
          aspect="4 / 3"
          radius="28px"
        />

        <div>
          <p className="eyebrow">{location.eyebrow}</p>
          <h2 className="h2 mt-5">{location.title}</h2>
          <p className="prose-cap mt-6 text-lg/[1.65] text-text-muted">
            {location.body}
          </p>

          <dl className="mt-9 flex flex-col gap-6">
            <div>
              <dt className="label-meta">Adresă</dt>
              <dd className="mt-2 ml-0 text-[17px]/[1.6]">
                {practice.address.street}, {practice.address.locality}
              </dd>
            </div>
            <div>
              <dt className="label-meta">Program</dt>
              <dd className="mt-2 ml-0 text-[17px]/[1.6]">{practice.hours}</dd>
            </div>
          </dl>

          <a
            href="#programare"
            className="pill pill-primary mt-9 px-7 py-[15px] text-base"
          >
            {location.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
