import { ImagePlaceholder } from "./ImagePlaceholder";
import { hero, practice } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="pt-24 pb-0 text-center">
      <div className="mx-auto max-w-[1000px] px-6">
        <h1 className="h1">
          {hero.titleBefore}
          <em className="text-bleu-text">{hero.titleAccent}</em>
          {hero.titleAfter}
        </h1>

        <p className="prose-cap mx-auto mt-7 text-xl/[1.6] text-text-muted">
          {hero.sub}
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3.5">
          <a
            href="#programare"
            className="pill pill-primary px-[34px] py-[17px] text-[17px]"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href={practice.phoneHref}
            className="pill pill-outline px-[30px] py-4 text-[17px]"
          >
            Sună: {practice.phone}
          </a>
        </div>

      </div>

      <div className="shell mt-16">
        <ImagePlaceholder
          caption={hero.imageCaption}
          src={hero.image}
          alt={hero.imageAlt}
          priority
          sizes="(max-width: 1320px) 100vw, 1320px"
          objectPosition="center 38%"
          aspect="21 / 9"
          radius="28px"
        />
      </div>
    </section>
  );
}
