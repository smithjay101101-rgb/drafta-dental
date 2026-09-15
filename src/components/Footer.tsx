import Link from "next/link";
import { Lockup } from "./Lockup";
import { footer, practice } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line pt-14 pb-10">
      <div className="shell">
        <div
          className="grid gap-10"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          <div>
            <Lockup variant="footer" />
            <address className="mt-5 text-[15px]/[1.7] text-text-muted not-italic">
              {practice.address.street}
              <br />
              {practice.address.locality}
            </address>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.label} aria-label={column.label}>
              <p className="label-meta m-0">{column.label}</p>
              <ul className="nav-list mt-2 flex list-none flex-col p-0">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] transition-colors duration-150 ease-out hover:text-bleu-text"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <p className="label-meta m-0">Contact</p>
            <ul className="nav-list mt-2 flex list-none flex-col p-0">
              <li>
                <a href={practice.phoneHref} className="text-[15px]">
                  {practice.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${practice.email}`} className="text-[15px]">
                  {practice.email}
                </a>
              </li>
              <li>
                <Link href="/#programare" className="text-[15px]">
                  Programare online
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 text-sm text-text-label">
          <p className="m-0">{footer.copyright}</p>
          <p className="m-0 flex gap-5">
            {footer.legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-text-label">
                {link.label}
              </Link>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
