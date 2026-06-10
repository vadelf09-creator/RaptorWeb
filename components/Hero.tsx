import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";

const WA =
  "https://wa.me/543804889036?text=Hola%21%20Quiero%20reservar%20un%20turno";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#080E12]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(200,146,42,0.04) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(200,146,42,0.04) 60px)",
        }}
      />
      <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-[55%] w-[600px] h-[600px] rounded-full bg-[#0D3B4F] opacity-50 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-[55%] w-[280px] h-[280px] rounded-full bg-[#C8922A] opacity-[0.06] blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 right-[8%] -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-[#0D3B4F] opacity-40 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-[#C8922A]/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 items-center">

          {/* Left */}
          <div>
            <BlurFade delay={0.1} direction="up">
              <div className="inline-flex items-center gap-2.5 border border-[rgba(200,146,42,0.25)] bg-[rgba(200,146,42,0.05)] px-4 py-2 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8922A] animate-pulse" />
                <span className="font-mono text-[#C8922A] text-[11px] tracking-[0.2em] uppercase">
                  Lavadero &amp; Detailing Profesional
                </span>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} direction="up">
              <h1 className="font-display text-[72px] sm:text-[100px] md:text-[126px] lg:text-[148px] leading-[0.88] tracking-[0.02em] text-[#F5EFD8] mb-6">
                TU VEHÍCULO
                <br />
                <span className="text-[#C8922A]">IMPECABLE.</span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.35} direction="up">
              <div className="flex items-start gap-4 mb-10">
                <div className="w-10 h-px bg-[#C8922A] mt-3 flex-shrink-0 opacity-60" />
                <p className="font-body font-light text-[#8AA8B5] text-base md:text-lg leading-relaxed max-w-md">
                  Lavado profesional con productos de primera calidad. Resultados
                  que hablan por sí solos.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.5} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#C8922A] hover:bg-[#B8821E] text-[#080E12] font-body font-medium text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.02] shadow-[0_0_40px_rgba(200,146,42,0.2)]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.558 4.135 1.536 5.872L0 24l6.318-1.508A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.506-5.181-1.389l-.371-.22-3.75.895.908-3.657-.242-.381A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  Reservar por WhatsApp
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center gap-2 border border-[rgba(200,146,42,0.25)] hover:border-[rgba(200,146,42,0.5)] text-[#8AA8B5] hover:text-[#F5EFD8] font-body font-light text-base px-8 py-4 rounded-full transition-all duration-200"
                >
                  Ver servicios
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </BlurFade>

            <BlurFade delay={0.65} direction="up">
              <div className="flex flex-wrap gap-x-10 gap-y-4 pt-6 border-t border-[rgba(200,146,42,0.15)]">
                <div>
                  <div className="font-display text-3xl text-[#F5EFD8] leading-none flex items-baseline gap-0.5">
                    +<NumberTicker value={100} delay={0.8} className="font-display text-3xl text-[#F5EFD8]" />
                  </div>
                  <div className="font-mono text-[#8AA8B5] text-[10px] mt-1 tracking-[0.12em] uppercase">Clientes satisfechos</div>
                </div>
                <div>
                  <div className="font-display text-3xl text-[#F5EFD8] leading-none flex items-baseline gap-0.5">
                    <NumberTicker value={4.8} decimalPlaces={1} delay={0.9} className="font-display text-3xl text-[#F5EFD8]" />★
                  </div>
                  <div className="font-mono text-[#8AA8B5] text-[10px] mt-1 tracking-[0.12em] uppercase">Calificación Google</div>
                </div>
                <div>
                  <div className="font-display text-3xl text-[#F5EFD8] leading-none flex items-baseline gap-0.5">
                    <NumberTicker value={4} delay={1.0} className="font-display text-3xl text-[#F5EFD8]" /> años
                  </div>
                  <div className="font-mono text-[#8AA8B5] text-[10px] mt-1 tracking-[0.12em] uppercase">De experiencia</div>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Right — logo decorativo */}
          <BlurFade delay={0.4} direction="left" className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-[-20px] rounded-full border border-[rgba(200,146,42,0.08)]" />
              <div className="absolute inset-[-60px] rounded-full border border-[rgba(200,146,42,0.04)]" />
              <Image
                src="/logo.png"
                alt="Raptor Car Wash"
                width={420}
                height={274}
                className="object-contain opacity-90 drop-shadow-[0_0_60px_rgba(200,146,42,0.18)]"
                priority
              />
            </div>
          </BlurFade>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080E12] to-transparent pointer-events-none" />
    </section>
  );
}
