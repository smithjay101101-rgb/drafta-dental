import { LogoMark } from "./Logo";
import { otherServices } from "@/content/site";

export function OtherServices() {
  return (
    <section id="alte-servicii" className="section">
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
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {otherServices.items.map((item) => (
            <article
              key={item.title}
              className="rounded-[22px] border border-line p-7 transition-colors duration-150 ease-out hover:bg-surface"
            >
              <LogoMark size={34} />
              <h3 className="h3 mt-5 text-[21px]">{item.title}</h3>
              <p className="mt-2.5 text-base/[1.55] text-text-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
