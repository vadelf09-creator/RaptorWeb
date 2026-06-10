import { Marquee } from "@/components/ui/marquee";

const ITEMS = [
  "TOXIC SHINE",
  "VONIXX",
  "DETAILING PROFESIONAL",
  "LAVADO A MANO",
  "TOXIC SHINE",
  "VONIXX",
  "GUANTE BLANCO",
  "SERVICIO PREMIUM",
];

export default function BrandsMarquee() {
  return (
    <div className="bg-[#080E12] border-y border-[rgba(200,146,42,0.12)] py-4 overflow-hidden">
      <Marquee className="[--duration:30s] [--gap:3rem]" pauseOnHover>
        {ITEMS.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="font-display text-lg tracking-[0.18em] text-[#8AA8B5]/50">
              {item}
            </span>
            <span className="text-[#C8922A]/40 text-xs">✦</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
