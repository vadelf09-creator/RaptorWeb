export default function Brands() {
  return (
    <div className="bg-[#080E12] border-y border-[rgba(200,146,42,0.12)] py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
        <span className="font-mono text-[#4A6872] text-[10px] uppercase tracking-[0.25em] flex-shrink-0">
          Productos profesionales
        </span>
        <div className="flex items-center gap-8 sm:gap-12">
          {["TOXIC SHINE", "VONIXX"].map((brand) => (
            <span
              key={brand}
              className="font-display text-xl tracking-[0.15em] text-[#8AA8B5] opacity-60 hover:opacity-100 hover:text-[#C8922A] transition-all duration-300"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
