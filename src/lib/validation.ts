export type BookingInput = {
  nume: string;
  telefon: string;
  mesaj: string;
  /** Consimțământ GDPR explicit — obligatoriu. */
  acord: boolean;
};

export type FieldErrors = Partial<Record<keyof BookingInput, string>>;

/**
 * Telefon românesc: mobil (07xx xxx xxx) sau fix (0xy ...), cu sau fără
 * prefix +40 / 0040, spații, puncte sau cratime între grupuri.
 */
const PHONE_RE = /^(?:\+?40|0040|0)(?:7\d{8}|[23]\d{8})$/;

export function normalisePhone(value: string) {
  return value.replace(/[\s.\-()]/g, "");
}

export function validateBooking(input: BookingInput): FieldErrors {
  const errors: FieldErrors = {};

  if (input.nume.trim().length < 2) {
    errors.nume = "Scrie-ți numele (minimum 2 caractere).";
  }

  const phone = normalisePhone(input.telefon);
  if (phone.length === 0) {
    errors.telefon = "Avem nevoie de un număr de telefon ca să te sunăm.";
  } else if (!PHONE_RE.test(phone)) {
    errors.telefon = "Numărul nu pare valid. Exemplu: 0721 000 128.";
  }

  if (input.mesaj.length > 1000) {
    errors.mesaj = "Mesajul este prea lung (maximum 1000 de caractere).";
  }

  if (!input.acord) {
    errors.acord = "Avem nevoie de acordul tău ca să te contactăm.";
  }

  return errors;
}
