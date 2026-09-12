import { BookingForm } from "./BookingForm";
import { booking, practice } from "@/content/site";

export function Booking() {
  return (
    <section id="programare" className="section">
      <div className="shell">
        <div
          className="grid gap-12 rounded-[32px] bg-surface p-[clamp(32px,5vw,64px)]"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          <div>
            <h2 className="h2">{booking.title}</h2>
            <p className="prose-cap mt-6 text-lg/[1.65] text-text-muted">
              {booking.bodyBefore}
              <a href={practice.phoneHref} className="font-semibold">
                {practice.phone}
              </a>
              .
            </p>
          </div>

          <BookingForm />
        </div>
      </div>
    </section>
  );
}
