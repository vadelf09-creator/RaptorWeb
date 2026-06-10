import ScrollReveal from "@/components/ScrollReveal";

const WA =
  "https://wa.me/543804889036?text=Hola%21%20Me%20interesa%20el%20servicio%20para%20flota%20de%20veh%C3%ADculos";

const BENEFITS = [
  "Precios especiales por volumen",
  "Retiro y entrega en tu empresa",
  "Facturación disponible",
  "Atención prioritaria y programada",
  "Servicio adaptado a tus necesidades",
];

export default function Business() {
  return (
    <section id="empresas" className="py-24 bg-[#080E12]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-[#111D24] border border-[rgba(200,146,42,0.2)] rounded-3xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0D3B4F] opacity-60 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#C8922A] opacity-[0.04] rounded-full blur-[60px] pointer-events-none" />

          <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto]">
            <div className="p-10 lg:p-14">
              <div className="inline-flex items-center gap-2 bg-[rgba(200,146,42,0.1)] border border-[rgba(200,146,42,0.25)] px-3.5 py-1.5 rounded-full mb-6">
                <span className="font-mono text-[#C8922A] text-[10px] uppercase tracking-[0.2em]">
                  Para Empresas
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl text-[#F5EFD8] tracking-[0.02em] leading-[0.9] mb-5">
                ¿TENÉS UNA FLOTA
                <br />
                DE VEHÍCULOS?
              </h2>

              <p className="font-body font-light text-[#8AA8B5] text-base leading-relaxed mb-8 max-w-lg">
                Diseñamos planes a medida para empresas, transportistas y
                distribuidores. Mantené tu flota en perfecto estado con un
                servicio confiable y profesional.
              </p>

              <ul className="space-y-3 mb-10">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[rgba(200,146,42,0.12)] flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-[#C8922A]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-body font-light text-sm text-[#F5EFD8]">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#C8922A] hover:bg-[#B8821E] text-[#080E12] font-body font-medium px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.02]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.558 4.135 1.536 5.872L0 24l6.318-1.508A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.506-5.181-1.389l-.371-.22-3.75.895.908-3.657-.242-.381A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Consultanos ahora
              </a>
            </div>

            <div className="hidden lg:flex items-center justify-center bg-[#0D3B4F]/40 border-l border-[rgba(200,146,42,0.15)] p-14 w-72">
              <div className="text-center">
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {["🚗", "🚙", "🏍️", "🚐", "🚚", "🚕"].map((e, i) => (
                    <div
                      key={i}
                      className="w-16 h-16 bg-[#080E12] border border-[rgba(200,146,42,0.15)] rounded-xl flex items-center justify-center text-2xl hover:border-[rgba(200,146,42,0.4)] transition-colors"
                    >
                      {e}
                    </div>
                  ))}
                </div>
                <p className="font-mono text-[#8AA8B5] text-[10px] tracking-[0.15em] uppercase">
                  Todo tipo de vehículo
                </p>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
