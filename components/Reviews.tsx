import ScrollReveal from "@/components/ScrollReveal";

const REVIEWS = [
  {
    name: "Lucas Gómez",
    vehicle: "Toyota Corolla",
    rating: 5,
    text: "Increíble trabajo. Dejaron el auto como si fuera nuevo. El servicio premium vale cada peso, quedé asombrado con el resultado.",
    date: "Hace 2 semanas",
  },
  {
    name: "Valentina Torres",
    vehicle: "Ford Ranger",
    rating: 5,
    text: "Muy profesionales. La camioneta quedó impecable por dentro y por fuera. Ya es la tercera vez que vengo y siempre el mismo nivel.",
    date: "Hace 1 mes",
  },
  {
    name: "Martín Herrera",
    vehicle: "Honda CB500",
    rating: 5,
    text: "No esperaba que una moto pudiera quedar así de bien. Limpiaron hasta el motor. Muy recomendable.",
    date: "Hace 3 semanas",
  },
  {
    name: "Carolina Medina",
    vehicle: "Renault Kangoo",
    rating: 5,
    text: "Llevé la Kangoo de trabajo, que estaba bastante sucia, y quedó como nueva. Precio justo y excelente atención.",
    date: "Hace 2 meses",
  },
];

export default function Reviews() {
  return (
    <section id="resenas" className="py-24 bg-[#080E12]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="font-mono text-[#C8922A] text-[10px] tracking-[0.25em] uppercase mb-3">
                Reseñas
              </p>
              <h2 className="font-display text-5xl md:text-6xl text-[#F5EFD8] tracking-[0.02em] leading-[0.9]">
                LO QUE DICEN
                <br />
                <span className="text-[#8AA8B5]">NUESTROS CLIENTES.</span>
              </h2>
            </div>
            <div className="flex items-center gap-3 bg-[#111D24] border border-[rgba(200,146,42,0.2)] px-5 py-3 rounded-2xl self-start">
              <div className="text-[#C8922A] text-xl leading-none">★★★★★</div>
              <div>
                <div className="font-display text-2xl text-[#F5EFD8] leading-none">4.8</div>
                <div className="font-mono text-[#8AA8B5] text-[10px] tracking-[0.1em] uppercase">Google Reviews</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <ScrollReveal key={r.name} delay={i * 100}>
              <div className="bg-[#111D24] border border-[rgba(200,146,42,0.18)] hover:border-[rgba(200,146,42,0.35)] rounded-2xl p-6 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[rgba(200,146,42,0.12)] flex items-center justify-center font-display text-[#C8922A] text-lg">
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="font-body font-medium text-[#F5EFD8] text-sm">{r.name}</div>
                      <div className="font-mono text-[#8AA8B5] text-[10px] tracking-[0.08em]">{r.vehicle} · {r.date}</div>
                    </div>
                  </div>
                  <div className="text-[#C8922A] text-sm leading-none">{"★".repeat(r.rating)}</div>
                </div>
                <p className="font-body font-light text-[#8AA8B5] text-sm leading-relaxed">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
