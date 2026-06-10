"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const WA =
  "https://wa.me/543804889036?text=Hola%21%20Quiero%20reservar%20un%20turno";

const NAV = [
  { href: "#servicios", label: "Servicios" },
  { href: "#domicilio", label: "A Domicilio" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#faq", label: "FAQ" },
  { href: "#empresas", label: "Empresas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080E12]/92 backdrop-blur-xl border-b border-[rgba(200,146,42,0.2)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-[64px] flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Raptor Car Wash"
            width={80}
            height={52}
            className="object-contain h-[52px] w-auto"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-mono text-[11px] font-medium text-[#8AA8B5] hover:text-[#F5EFD8] tracking-[0.12em] uppercase transition-colors"
            >
              {n.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 bg-[#C8922A] hover:bg-[#B8821E] text-[#080E12] font-body font-medium text-[13px] px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-[1.03]"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.558 4.135 1.536 5.872L0 24l6.318-1.508A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.506-5.181-1.389l-.371-.22-3.75.895.908-3.657-.242-.381A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Reservar turno
          </a>

          <button
            className="lg:hidden p-2 text-[#8AA8B5] hover:text-[#F5EFD8] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-[rgba(200,146,42,0.2)] bg-[#080E12]/98 backdrop-blur-xl px-6 py-5">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="flex items-center py-3 font-mono text-[#8AA8B5] hover:text-[#F5EFD8] text-xs tracking-[0.15em] uppercase border-b border-[rgba(200,146,42,0.12)] transition-colors"
            >
              {n.label}
            </a>
          ))}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex justify-center bg-[#C8922A] text-[#080E12] font-body font-medium text-sm py-3.5 rounded-xl"
          >
            Reservar turno →
          </a>
        </div>
      )}
    </header>
  );
}
