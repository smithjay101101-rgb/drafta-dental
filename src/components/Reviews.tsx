import { Stars } from "./Stars";
import { reviews } from "@/content/site";

export function Reviews() {
  return (
    <section className="section bg-indigo text-white">
      <div className="shell">
        <div className="text-center">
          <Stars size={22} />
          <h2 className="h2 mt-4">{reviews.title}</h2>
        </div>

        <div
          className="mt-13 grid gap-[22px]"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
          }}
        >
          {reviews.items.map((review) => (
            <figure
              key={review.name}
              className="m-0 rounded-[22px] border border-white/22 p-[30px]"
            >
              <blockquote className="m-0 text-lg/[1.6]">
                „{review.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <span className="block font-semibold">{review.name}</span>
                <span className="block text-sm opacity-80">{review.meta}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
