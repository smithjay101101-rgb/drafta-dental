"use client";

import { useId, useRef, useState } from "react";
import { booking } from "@/content/site";
import { validateBooking, type FieldErrors } from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "min-h-12 w-full rounded-xl border-[1.5px] border-line-input bg-white px-3.5 py-[13px] text-base text-indigo placeholder:text-text-label focus:border-indigo focus:outline-2 focus:outline-offset-2 focus:outline-indigo";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p
      id={id}
      role="alert"
      className="mt-1.5 flex items-start gap-1.5 text-sm text-danger"
    >
      <svg
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="mt-0.5 flex-none"
      >
        <path d="M12 2L1 21h22L12 2zm0 6a1 1 0 011 1v5a1 1 0 11-2 0V9a1 1 0 011-1zm0 9.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
      </svg>
      <span>{message}</span>
    </p>
  );
}

/** Centrează câmpul înainte de focus, ca header-ul lipit să nu-i acopere eticheta. */
function focusField(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ block: "center", behavior: reduced ? "auto" : "smooth" });
  el.focus({ preventScroll: true });
}

export function BookingForm() {
  const [values, setValues] = useState({
    nume: "",
    telefon: "",
    mesaj: "",
    acord: false,
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<Status>("idle");
  const successRef = useRef<HTMLParagraphElement>(null);
  const ids = useId();

  const fieldId = (name: string) => `${ids}-${name}`;
  const errorId = (name: string) => `${ids}-${name}-error`;

  /** Validare la blur; după o încercare de trimitere, și la fiecare tastă. */
  const revalidate = (next: typeof values, only?: string) => {
    const all = validateBooking(next);
    setErrors((prev) => {
      if (!only) return all;
      return { ...prev, [only]: all[only as keyof FieldErrors] };
    });
  };

  const update = (name: keyof typeof values, value: string | boolean) => {
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name] || status === "error") revalidate(next, name);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validateBooking(values);
    setErrors(found);
    setTouched({ nume: true, telefon: true, mesaj: true, acord: true });

    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      focusField(fieldId(first));
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/programare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("request failed");
      setStatus("success");
      requestAnimationFrame(() => successRef.current?.focus({ preventScroll: true }));
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-3xl bg-white p-[30px]">
        <p
          ref={successRef}
          tabIndex={-1}
          role="status"
          className="font-display text-xl font-extrabold"
        >
          {booking.success}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl bg-white p-[30px]"
    >
      <div className="flex flex-col gap-4">
        <div>
          <label
            htmlFor={fieldId("nume")}
            className="mb-1.5 block text-sm font-semibold"
          >
            Nume
          </label>
          <input
            id={fieldId("nume")}
            name="nume"
            type="text"
            autoComplete="name"
            placeholder="Maria Ionescu"
            value={values.nume}
            onChange={(e) => update("nume", e.target.value)}
            onBlur={() => {
              setTouched((t) => ({ ...t, nume: true }));
              revalidate(values, "nume");
            }}
            aria-invalid={errors.nume ? true : undefined}
            aria-describedby={errors.nume ? errorId("nume") : undefined}
            className={inputClass}
          />
          <FieldError id={errorId("nume")} message={errors.nume} />
        </div>

        <div>
          <label
            htmlFor={fieldId("telefon")}
            className="mb-1.5 block text-sm font-semibold"
          >
            Telefon
          </label>
          <input
            id={fieldId("telefon")}
            name="telefon"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="07xx xxx xxx"
            value={values.telefon}
            onChange={(e) => update("telefon", e.target.value)}
            onBlur={() => {
              setTouched((t) => ({ ...t, telefon: true }));
              revalidate(values, "telefon");
            }}
            aria-invalid={errors.telefon ? true : undefined}
            aria-describedby={errors.telefon ? errorId("telefon") : undefined}
            className={inputClass}
          />
          <FieldError id={errorId("telefon")} message={errors.telefon} />
        </div>

        <div>
          <label
            htmlFor={fieldId("mesaj")}
            className="mb-1.5 block text-sm font-semibold"
          >
            Ce te deranjează?
          </label>
          <textarea
            id={fieldId("mesaj")}
            name="mesaj"
            rows={3}
            placeholder="Ex. durere la un molar de jos, de trei zile"
            value={values.mesaj}
            onChange={(e) => update("mesaj", e.target.value)}
            onBlur={() => {
              setTouched((t) => ({ ...t, mesaj: true }));
              revalidate(values, "mesaj");
            }}
            aria-invalid={errors.mesaj ? true : undefined}
            aria-describedby={errors.mesaj ? errorId("mesaj") : undefined}
            className={`${inputClass} resize-y`}
          />
          <FieldError id={errorId("mesaj")} message={errors.mesaj} />
        </div>

        <div>
          <div className="flex items-start gap-2.5">
            <input
              id={fieldId("acord")}
              name="acord"
              type="checkbox"
              checked={values.acord}
              onChange={(e) => update("acord", e.target.checked)}
              onBlur={() => {
                setTouched((t) => ({ ...t, acord: true }));
                revalidate(values, "acord");
              }}
              aria-invalid={errors.acord ? true : undefined}
              aria-describedby={errors.acord ? errorId("acord") : undefined}
              className="mt-0.5 size-[18px] flex-none accent-[var(--color-indigo)]"
            />
            <label
              htmlFor={fieldId("acord")}
              className="text-sm/[1.5] text-text-label"
            >
              Sunt de acord să fiu contactat(ă) în legătură cu programarea.
            </label>
          </div>
          <FieldError id={errorId("acord")} message={errors.acord} />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="pill pill-primary min-h-[52px] w-full text-[17px] disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-spin"
              >
                <path d="M12 3a9 9 0 100 18 9 9 0 000-18" opacity="0.3" />
                <path d="M12 3a9 9 0 019 9" />
              </svg>
              Se trimite…
            </>
          ) : (
            booking.submit
          )}
        </button>

        {status === "error" && (
          <p role="alert" className="text-sm text-danger">
            {booking.error}
          </p>
        )}

        <p className="text-[13px]/[1.5] text-text-label">{booking.gdpr}</p>
      </div>
    </form>
  );
}
