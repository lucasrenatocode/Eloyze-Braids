import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { brandImage } from "@/app/data/content";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#inicio" className="group flex items-center gap-3" aria-label="Eloyze Braids - início">
      <div className={`${compact ? "h-11 w-11" : "h-14 w-14"} overflow-hidden rounded-full border border-white/15 bg-primary`}>
        <ImageWithFallback
          src={brandImage}
          alt="Logotipo oficial Eloyze Braids"
          className="h-full w-full scale-[1.08] object-cover object-[50%_46%]"
        />
      </div>
      <div className="leading-none">
        <span className="block font-display text-[21px] tracking-[-0.04em] text-white">Eloyze Braids</span>
        <span className="mt-1 block text-[9px] uppercase tracking-[0.42em] text-[#d8b7aa]">Trancista</span>
      </div>
    </a>
  );
}
