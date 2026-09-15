import Link from "next/link";
import { LogoMark } from "./Logo";
import { otherServices } from "@/content/site";
import { serviceCategories } from "@/content/services";

/** Cele patru domenii ale cabinetului, cu textele de pe pagina de start Wix. */
export function OtherServices() {
  return (
    <section id="domenii" className="section">
      <div className="shell">
        <div className="text-center">
          <h2 className="h2">{otherServices.title}</h2>
          <p className="prose-cap mx-auto mt-5 text-lg/[1.65] text-text-muted">
            {otherServices.sub}
          </p>
        </div>

        <div
          className="mt-13 grid gap-5"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          }}
        >
          {serviceCategories.map((c) => (
            <Link
              key={c.id}
              href={`/servicii#${c.id}`}
              className="rounded-[22px] border border-line p-7 text-indigo transition-colors duration-150 ease-out hover:bg-surface hover:text-indigo"
            >
              <LogoMark size={34} />
              <h3 className="h3 mt-5 text-[21px]">{c.name}</h3>
              <p className="mt-2.5 text-base/[1.55] text-text-muted">{c.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
