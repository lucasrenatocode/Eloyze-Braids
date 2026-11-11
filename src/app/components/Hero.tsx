import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Eyebrow } from "@/app/components/Eyebrow";
import { images } from "@/app/data/content";
import { scrollTo } from "@/app/lib/scroll";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[760px] overflow-hidden bg-[#171416] pt-[78px] text-white">
      <div className="mx-auto grid min-h-[calc(100vh-78px)] max-w-[1440px] lg:grid-cols-[1.03fr_.97fr]">
        <div className="relative z-10 flex items-center px-5 py-20 lg:px-[max(2rem,calc((100vw-1240px)/2))] lg:py-28">
          <div className="max-w-[650px]">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
              <Eyebrow light>Tranças que contam histórias</Eyebrow>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(3.8rem,7vw,7.6rem)] leading-[0.86] tracking-[-0.055em]"
            >
              Sua beleza,
              <span className="block italic text-[#d8b7aa]">sua identidade,</span>
              suas tranças.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 max-w-[520px] text-base leading-7 text-white/62 md:text-lg"
            >
              Estilos pensados para valorizar sua expressão, com cuidado no processo e beleza em cada detalhe.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <button onClick={() => scrollTo("catalogo")} className="flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-1">
                Conheça nossos estilos <ArrowDownRight size={18} />
              </button>
              <button onClick={() => scrollTo("agendamento")} className="flex items-center justify-center gap-3 rounded-full border border-white/25 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-white hover:text-[#171416]">
                Agende seu horário
              </button>
            </motion.div>
          </div>
        </div>
        <div className="relative min-h-[560px] overflow-hidden lg:min-h-full">
          <ImageWithFallback src={images.hero} alt="Detalhes de tranças longas em modelo" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#171416]/55 lg:bg-gradient-to-r lg:from-[#171416] lg:via-transparent lg:to-transparent" />
          <div className="absolute bottom-7 right-7 max-w-[260px] border-l border-[#e4c8bc]/60 pl-4 text-xs leading-5 text-white/70">
            Beleza com identidade.<br />Referências para inspirar seu próximo estilo.
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 hidden h-24 w-[46%] bg-primary lg:block" />
      <div className="absolute bottom-0 left-0 hidden h-24 w-[46%] items-center px-[max(2rem,calc((100vw-1240px)/2))] text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground lg:flex">
        Explore o catálogo <span className="ml-auto text-3xl">↓</span>
      </div>
    </section>
  );
}
