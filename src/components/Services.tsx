import { ImagePlaceholder } from "./ImagePlaceholder";
import { services } from "@/content/site";

export function Services() {
  return (
    <section id="servicii" className="section bg-surface">
      <div className="shell">
        <div className="text-center">
          <h2 className="h2">{services.title}</h2>
          <p className="prose-cap mx-auto mt-5 text-lg/[1.65] text-text-muted">
            {services.sub}
          </p>
        </div>

        <div
          className="mt-13 grid gap-5"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
          }}
        >
          {services.items.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[22px] bg-white transition-colors duration-150 ease-out hover:bg-indigo hover:text-white"
            >
              <ImagePlaceholder
                caption={item.imageCaption}
                src={item.image}
                alt={item.imageAlt}
                sizes="(max-width: 640px) 100vw, (max-width: 1320px) 45vw, 320px"
                aspect="16 / 11"
              />
              <div className="px-[26px] pt-6 pb-7">
                <h3 className="h3 text-[22px]">{item.title}</h3>
                <p className="mt-2.5 text-base/[1.55] text-text-muted group-hover:text-white">
                  {item.body}
                </p>
              </div>
            </article>
          ))}

          <article className="flex flex-col rounded-[22px] bg-indigo p-8 text-white">
            <h3 className="h3 text-[22px]">{services.cta.title}</h3>
            <p className="mt-3 text-base/[1.55]">{services.cta.body}</p>
            <a
              href="#programare"
              className="pill pill-white mt-auto self-start px-6 py-[13px] text-[15px]"
            >
              {services.cta.label}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
