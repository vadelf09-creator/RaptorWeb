"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "¿Necesito turno previo?",
    a: "Recomendamos reservar por WhatsApp para asegurarte el horario, aunque también atendemos sin turno según disponibilidad del día.",
  },
  {
    q: "¿Cuánto tarda el lavado?",
    a: "El lavado tradicional demora entre 45 y 60 minutos. El detallado entre 1 y 2 horas, y el premium puede tomar hasta 4 horas según el estado del vehículo.",
  },
  {
    q: "¿Qué incluye el Guante Blanco?",
    a: "Es nuestro servicio de detailing más completo: pulido de pintura, renovación de plásticos, descontaminación química de tapizados y tratamiento de vidrios. El presupuesto se arma según el estado y tamaño del vehículo.",
  },
  {
    q: "¿Aceptan efectivo y transferencia?",
    a: "Sí, aceptamos efectivo, transferencia bancaria y distintos medios de pago. Consultanos para más información.",
  },
  {
    q: "¿Trabajan con flotas de empresas?",
    a: "Sí, tenemos planes especiales para empresas con flotas: precios por volumen, retiro y entrega, y posibilidad de facturación. Contactanos para coordinar.",
  },
  {
    q: "¿Usan productos que no dañen la pintura?",
    a: "Absolutamente. Trabajamos con productos profesionales de alta gama formulados para proteger la pintura, el interior y todos los materiales del vehículo.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#0D3B4F]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-mono text-[#C8922A] text-[10px] tracking-[0.25em] uppercase mb-3">
            Preguntas Frecuentes
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-[#F5EFD8] tracking-[0.02em] leading-[0.9]">
            TENÉS DUDAS?
            <br />
            <span className="text-[#8AA8B5]">LAS RESOLVEMOS.</span>
          </h2>
        </div>

        <div className="space-y-2">
          {FAQS.map((f, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                open === i
                  ? "border-[rgba(200,146,42,0.4)] bg-[#111D24]"
                  : "border-[rgba(200,146,42,0.15)] bg-[#080E12]"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-body font-light text-[#F5EFD8] text-sm">
                  {f.q}
                </span>
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                    open === i
                      ? "bg-[#C8922A] text-[#080E12] rotate-45"
                      : "bg-[rgba(200,146,42,0.1)] text-[#C8922A]"
                  }`}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="font-body font-light text-[#8AA8B5] text-sm leading-relaxed">
                    {f.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
