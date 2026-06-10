import Image from "next/image";

const WA =
  "https://wa.me/543804889036?text=Hola%21%20Quiero%20reservar%20un%20turno";
const MAPS = "https://maps.app.goo.gl/eWmHSLqvZoxgg91s9";

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#domicilio", label: "A Domicilio" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-[#060A0E] border-t border-[rgba(200,146,42,0.15)] pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Raptor Car Wash"
                width={100}
                height={65}
                className="object-contain"
              />
            </div>
            <p className="font-body font-light text-[#8AA8B5] text-sm leading-relaxed mb-6">
              Lavadero &amp; Detailing profesional. Tu vehículo merece el mejor
              cuidado.
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[rgba(200,146,42,0.1)] border border-[rgba(200,146,42,0.25)] text-[#C8922A] hover:bg-[rgba(200,146,42,0.18)] font-body font-medium text-sm px-4 py-2.5 rounded-full transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.558 4.135 1.536 5.872L0 24l6.318-1.508A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.506-5.181-1.389l-.371-.22-3.75.895.908-3.657-.242-.381A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Escribinos por WhatsApp
            </a>
          </div>

          <div>
            <h4 className="font-mono font-medium text-[10px] text-[#8AA8B5] uppercase tracking-[0.25em] mb-5">
              Navegación
            </h4>
            <ul className="space-y-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-body font-light text-[#8AA8B5] hover:text-[#F5EFD8] text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-medium text-[10px] text-[#8AA8B5] uppercase tracking-[0.25em] mb-5">
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+543804889036"
                className="flex items-center gap-2.5 font-mono text-[#8AA8B5] hover:text-[#F5EFD8] text-xs tracking-[0.08em] transition-colors"
              >
                <svg
                  className="w-4 h-4 text-[#C8922A] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                3804 889036
              </a>
              <a
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 font-body font-light text-[#8AA8B5] hover:text-[#F5EFD8] text-sm transition-colors"
              >
                <svg
                  className="w-4 h-4 text-[#C8922A] flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(200,146,42,0.12)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[#2A4550] text-[10px] tracking-[0.1em]">
            © 2025 Raptor Carwash. Todos los derechos reservados.
          </p>
          <p className="font-mono text-[#1A3040] text-[10px] tracking-[0.1em]">
            La Rioja, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
