import Link from "next/link";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { priceLabel, type Service } from "@/content/services";

/**
 * Card de serviciu: fotografie, categorie, nume, o frază și prețul minim.
 * Tot cardul e link către pagina serviciului.
 *
 * `layout` decide unde stă fotografia, ca rândurile din grilă să rămână pline:
 *   stack   — fotografia deasupra (implicit)
 *   row     — fotografia în stânga de la 640px în sus (carduri late, singure
 *             pe rând)
 *   row-mid — în stânga doar între 640 și 1024px, cât cardul ocupă două
 *             coloane; de la 1024px revine deasupra
 *   row-xl  — în stânga doar de la 1280px, când cardul ocupă două coloane
 */
type Layout = "stack" | "row" | "row-mid" | "row-xl";

const rootLayout: Record<Layout, string> = {
  stack: "flex-col",
  row: "flex-col sm:flex-row",
  "row-mid": "flex-col sm:flex-row lg:flex-col",
  "row-xl": "flex-col xl:flex-row",
};

const mediaLayout: Record<Layout, string> = {
  stack: "aspect-[16/11]",
  row: "aspect-[16/11] sm:aspect-auto sm:min-h-[240px] sm:w-[44%] sm:flex-none",
  "row-mid":
    "aspect-[16/11] sm:aspect-auto sm:min-h-[240px] sm:w-[44%] sm:flex-none lg:aspect-[16/11] lg:min-h-0 lg:w-auto",
  "row-xl": "aspect-[16/11] xl:aspect-auto xl:min-h-[240px] xl:w-[44%] xl:flex-none",
};

const bodyLayout: Record<Layout, string> = {
  stack: "",
  row: "sm:justify-center sm:py-8",
  "row-mid": "sm:justify-center sm:py-8 lg:justify-start lg:pt-6 lg:pb-7",
  "row-xl": "xl:justify-center xl:py-8",
};

export function ServiceCard({
  service: s,
  bordered = false,
  layout = "stack",
  className = "",
}: {
  service: Service;
  /** Pe fundal alb cardul are nevoie de contur. */
  bordered?: boolean;
  layout?: Layout;
  className?: string;
}) {
  return (
    <Link
      href={`/servicii/${s.slug}`}
      className={`group flex overflow-hidden rounded-[22px] bg-white text-indigo transition-colors duration-150 ease-out hover:bg-indigo hover:text-white ${
        rootLayout[layout]
      } ${bordered ? "border border-line" : ""} ${className}`}
    >
      <ImagePlaceholder
        caption={`foto: ${s.title}`}
        src={s.image}
        alt={s.imageAlt}
        sizes="(max-width: 640px) 100vw, (max-width: 1320px) 45vw, 420px"
        className={mediaLayout[layout]}
      />
      <div
        className={`flex flex-1 flex-col px-[26px] pt-6 pb-7 ${bodyLayout[layout]}`}
      >
        <p className="label-meta group-hover:text-white">{s.category}</p>
        <h3 className="h3 mt-2 text-[22px]">{s.title}</h3>
        <p className="mt-2.5 text-base/[1.55] text-text-muted group-hover:text-white">
          {s.short}
        </p>
        <p
          className={`pt-5 font-display text-[19px] font-extrabold ${
            layout === "stack" ? "mt-auto" : layout === "row-xl" ? "mt-auto xl:mt-0" : ""
          }`}
        >
          {priceLabel(s)}
        </p>
      </div>
    </Link>
  );
}
