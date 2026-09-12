import { NextResponse } from "next/server";
import { validateBooking, type BookingInput } from "@/lib/validation";

/**
 * Primește cererile de programare.
 *
 * TODO înainte de lansare: cererea trebuie să ajungă undeva — e-mail către
 * cabinet, CRM sau baza de datelor de programări — plus protecție anti-spam
 * (rate limit / captcha). Acum doar validează și confirmă.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const data = body as Partial<BookingInput>;
  const input: BookingInput = {
    nume: typeof data.nume === "string" ? data.nume : "",
    telefon: typeof data.telefon === "string" ? data.telefon : "",
    mesaj: typeof data.mesaj === "string" ? data.mesaj : "",
    acord: data.acord === true,
  };

  const errors = validateBooking(input);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // Nu logăm datele pacientului: sunt date cu caracter personal.
  console.info("[programare] cerere validă primită");

  return NextResponse.json({ ok: true });
}
