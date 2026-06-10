const FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Productos Premium",
    desc: "Trabajamos exclusivamente con Toxic Shine y Vonixx, marcas profesionales que protegen cada detalle de la pintura y el interior.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Atención al Detalle",
    desc: "Cada rincón recibe el mismo cuidado meticuloso. Nada pasa por alto en nuestro proceso.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Rápido y Eficiente",
    desc: "Resultados impecables sin hacerte esperar. Respetamos tu tiempo tanto como tu vehículo.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Garantía de Satisfacción",
    desc: "Tu conformidad es nuestra prioridad. Si no quedás 100% conforme, lo solucionamos.",
  },
];

import ScrollReveal from "@/components/ScrollReveal";

export default function Features() {
  return (
    <section className="py-24 bg-[#0D3B4F]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="font-mono text-[#C8922A] text-[10px] tracking-[0.25em] uppercase mb-3">
                ¿Por qué elegirnos?
              </p>
              <h2 className="font-display text-5xl md:text-6xl text-[#F5EFD8] tracking-[0.02em] leading-[0.9]">
                CALIDAD QUE
                <br />
                <span className="text-[#C8922A]">SE NOTA.</span>
              </h2>
            </div>
            <p className="font-body font-light text-[#8AA8B5] text-sm max-w-xs leading-relaxed">
              Más de 4 años de experiencia nos respaldan. Cada vehículo que
              entra, sale transformado.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 100}>
              <div className="group bg-[#080E12] border border-[rgba(200,146,42,0.18)] hover:border-[rgba(200,146,42,0.4)] rounded-2xl p-6 transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-xl bg-[rgba(200,146,42,0.1)] group-hover:bg-[rgba(200,146,42,0.18)] flex items-center justify-center text-[#C8922A] mb-5 transition-colors">
                  {f.icon}
                </div>
                <h3 className="font-display text-lg text-[#F5EFD8] tracking-[0.04em] mb-2">
                  {f.title}
                </h3>
                <p className="font-body font-light text-[#8AA8B5] text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
