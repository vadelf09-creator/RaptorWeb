"use client";

import { useState } from "react";

const WA_BASE =
  "https://wa.me/543804889036?text=Hola%21%20Quiero%20reservar%3A%20";

type Service = {
  name: string;
  price: number | null;
  priceLabel?: string;
  includes: string[];
  featured?: boolean;
};

type Tab = {
  id: string;
  label: string;
  emoji: string;
  services: Service[];
};

const TABS: Tab[] = [
  {
    id: "autos",
    label: "Autos",
    emoji: "🚗",
    services: [
      {
        name: "Lavado Tradicional",
        price: 15000,
        includes: [
          "Hidrolavado exterior",
          "Aspirado básico interior",
          "Acondicionado de cubiertas",
          "Limpieza de vidrios",
        ],
      },
      {
        name: "Lavado Detallado",
        price: 20000,
        includes: [
          "Hidrolavado exterior profundo",
          "Detallado interior completo",
          "Acondicionado de plásticos",
          "Encerado",
          "Limpieza de vidrios",
          "Acondicionado de cubiertas",
        ],
      },
      {
        name: "Servicio Premium",
        price: 60000,
        includes: [
          "Todo lo del lavado detallado",
          "Descontaminación de carrocería",
          "Limpieza profunda de butacas",
        ],
        featured: true,
      },
      {
        name: "Lavado de Motor",
        price: null,
        priceLabel: "A presupuestar",
        includes: ["Limpieza profunda del motor", "Desengrasado completo"],
      },
      {
        name: "Guante Blanco",
        price: null,
        priceLabel: "A presupuestar",
        includes: [
          "Detailing completo personalizado",
          "Tratamiento integral del vehículo",
        ],
      },
    ],
  },
  {
    id: "camionetas",
    label: "Camionetas",
    emoji: "🚙",
    services: [
      {
        name: "Lavado Tradicional",
        price: 20000,
        includes: [
          "Hidrolavado exterior",
          "Aspirado básico interior",
          "Acondicionado de cubiertas",
          "Limpieza de vidrios",
        ],
      },
      {
        name: "Lavado Detallado",
        price: 30000,
        includes: [
          "Hidrolavado exterior profundo",
          "Detallado interior completo",
          "Acondicionado de plásticos",
          "Encerado",
          "Limpieza de vidrios",
          "Acondicionado de cubiertas",
        ],
      },
      {
        name: "Servicio Premium",
        price: 80000,
        includes: [
          "Todo lo del lavado detallado",
          "Descontaminación de carrocería",
          "Limpieza profunda de butacas",
        ],
        featured: true,
      },
    ],
  },
  {
    id: "motos",
    label: "Motos",
    emoji: "🏍️",
    services: [
      {
        name: "Lavado Tradicional",
        price: 6000,
        includes: [
          "Hidrolavado completo",
          "Limpieza de llantas",
          "Acondicionado de cubiertas",
        ],
      },
      {
        name: "Lavado Detallado",
        price: 9000,
        includes: [
          "Hidrolavado completo",
          "Desengrase de motor y transmisión",
          "Limpieza de llantas",
          "Acondicionado de cubiertas",
          "Encerado",
          "Acondicionado de plásticos",
        ],
        featured: true,
      },
    ],
  },
  {
    id: "utilitarios",
    label: "Utilitarios",
    emoji: "🚐",
    services: [
      {
        name: "Lavado Tradicional",
        price: 20000,
        includes: [
          "Hidrolavado exterior",
          "Aspirado básico interior",
          "Acondicionado de cubiertas",
          "Limpieza de vidrios",
        ],
      },
      {
        name: "Lavado Detallado",
        price: 30000,
        includes: [
          "Hidrolavado exterior profundo",
          "Detallado interior completo",
          "Acondicionado de plásticos",
          "Encerado",
          "Limpieza de vidrios",
          "Acondicionado de cubiertas",
        ],
      },
      {
        name: "Servicio Premium",
        price: 40000,
        includes: [
          "Todo lo del lavado detallado",
          "Descontaminación de carrocería",
          "Limpieza profunda de butacas",
        ],
        featured: true,
      },
      {
        name: "Lavado de Motor",
        price: null,
        priceLabel: "A presupuestar",
        includes: ["Limpieza profunda del motor", "Desengrasado completo"],
      },
      {
        name: "Guante Blanco",
        price: null,
        priceLabel: "A presupuestar",
        includes: [
          "Detailing completo personalizado",
          "Tratamiento integral del vehículo",
        ],
      },
    ],
  },
];

const fmt = (n: number) =>
  "$" + n.toLocaleString("es-AR", { maximumFractionDigits: 0 });

export default function Services() {
  const [active, setActive] = useState("autos");
  const tab = TABS.find((t) => t.id === active)!;

  return (
    <section id="servicios" className="py-24 bg-[#080E12]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-mono text-[#C8922A] text-[10px] tracking-[0.25em] uppercase mb-3">
            Servicios y Precios
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-[#F5EFD8] tracking-[0.02em] leading-[0.9]">
            ELEGÍ TU VEHÍCULO,
            <br />
            <span className="text-[#8AA8B5]">NOSOTROS HACEMOS EL RESTO.</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-[11px] tracking-[0.1em] uppercase transition-all duration-200 ${
                active === t.id
                  ? "bg-[#C8922A] text-[#080E12] shadow-[0_0_20px_rgba(200,146,42,0.25)]"
                  : "bg-[#111D24] border border-[rgba(200,146,42,0.2)] text-[#8AA8B5] hover:text-[#F5EFD8] hover:border-[rgba(200,146,42,0.4)]"
              }`}
            >
              <span className="text-base">{t.emoji}</span>
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {tab.services.map((s) => (
            <div
              key={s.name}
              className={`relative flex flex-col bg-[#111D24] rounded-2xl p-6 border transition-all duration-300 hover:border-[rgba(200,146,42,0.4)] ${
                s.featured
                  ? "border-[rgba(200,146,42,0.38)] shadow-[0_0_30px_rgba(200,146,42,0.06)]"
                  : "border-[rgba(200,146,42,0.18)]"
              }`}
            >
              {s.featured && (
                <div className="absolute -top-3 left-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] bg-[#C8922A] text-[#080E12] px-3 py-1 rounded-full">
                    Más solicitado
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3 className="font-display text-xl text-[#F5EFD8] tracking-[0.04em] mb-1">
                  {s.name}
                </h3>
                <div className="font-mono text-2xl text-[#C8922A]">
                  {s.price !== null ? (
                    fmt(s.price)
                  ) : (
                    <span className="font-mono text-base text-[#8AA8B5]">
                      {s.priceLabel}
                    </span>
                  )}
                </div>
              </div>

              <ul className="flex-1 space-y-2.5 mb-6">
                {s.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 font-body font-light text-sm text-[#8AA8B5]"
                  >
                    <svg
                      className="w-4 h-4 text-[#C8922A] flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={`${WA_BASE}${encodeURIComponent(s.name + " para " + tab.label)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl font-body font-medium text-sm text-center transition-all duration-200 ${
                  s.featured
                    ? "bg-[#C8922A] hover:bg-[#B8821E] text-[#080E12]"
                    : "bg-[#0D3B4F] hover:bg-[#1A4F68] border border-[rgba(200,146,42,0.2)] hover:border-[rgba(200,146,42,0.4)] text-[#F5EFD8]"
                }`}
              >
                Reservar este servicio
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
