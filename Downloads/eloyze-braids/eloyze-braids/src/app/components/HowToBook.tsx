import { ArrowRight } from "lucide-react";
import { Reveal } from "@/app/components/Reveal";
import { getChannelCopy } from "@/app/config/contact";
import { getSteps } from "@/app/data/content";
import { scrollTo } from "@/app/lib/scroll";

export function HowToBook() {
  const steps = getSteps(getChannelCopy().name);

  return (
    <section className="bg-primary px-5 py-24 text-white lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white/70">
              <span className="h-px w-7 bg-current" /> Como agendar
            </div>
            <h2 className="max-w-[670px] font-display text-[clamp(3.2rem,5vw,5rem)] leading-[0.92] tracking-[-0.05em]">
              Simples, direto e no seu tempo.
            </h2>
          </div>
          <button onClick={() => scrollTo("agendamento")} className="flex w-fit items-center gap-3 rounded-full bg-[#171416] px-7 py-4 text-sm font-bold transition-transform hover:-translate-y-1">
            Solicitar agendamento <ArrowRight size={17} />
          </button>
        </Reveal>
        <div className="grid border-t border-white/25 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, text], index) => (
            <Reveal key={number} delay={index * 0.07} className="border-b border-white/25 py-8 md:px-6 md:first:pl-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
              <span className="font-display text-5xl italic text-white/35">{number}</span>
              <h3 className="mt-8 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
