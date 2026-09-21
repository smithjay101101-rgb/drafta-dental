import { CopyPhone } from "./CopyPhone";
import { booking, practice } from "@/content/site";

/**
 * Blocul de contact. Nu mai există formular: mesajul pleacă direct pe
 * WhatsApp, cu textul deja scris, sau se sună numărul.
 *
 * Link-ul „click to chat" cere numărul în format internațional, doar cifre
 * (fără +, spații sau zerouri de prefix), iar mesajul codat pentru URL.
 * Butonul de WhatsApp rămâne indigo, culoarea mărcii; verdele WhatsApp ar
 * intra peste paleta cabinetului.
 */
export function Booking() {
  const waHref = `https://wa.me/${practice.whatsapp}?text=${encodeURIComponent(
    booking.whatsappMessage,
  )}`;

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
              {booking.body}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-3">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="pill pill-primary px-7 py-[15px] text-base"
              >
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.15h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.41a8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.89 2.38 1.01 2.54c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
                </svg>
                {booking.whatsapp}
              </a>

              <a
                href={practice.phoneHref}
                className="pill pill-outline px-7 py-[15px] text-base"
              >
                {booking.call}
              </a>
            </div>

            <div>
              <p className="label-meta">{booking.numberLabel}</p>
              <div className="mt-2.5">
                <CopyPhone
                  phone={practice.phone}
                  copyLabel={booking.copy}
                  copiedLabel={booking.copied}
                />
              </div>
            </div>

            <p className="text-[15px]/[1.6] text-text-muted">
              {booking.hoursLabel} {practice.hours}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
