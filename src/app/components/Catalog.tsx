import { ArrowRight, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Eyebrow } from "@/app/components/Eyebrow";
import { Reveal } from "@/app/components/Reveal";
import { useContact } from "@/app/components/ContactProvider";
import { getChannelCopy } from "@/app/config/contact";
import { catalogModels } from "@/app/data/content";

export function Catalog() {
  const { hrefFor, onLinkClick } = useContact();
  const channel = getChannelCopy();

  return (
    <section id="catalogo" className="bg-background px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Eyebrow>Catálogo de tranças</Eyebrow>
            <h2 className="max-w-[760px] font-display text-[clamp(3.3rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]">
              Escolha o estilo que fala por você.
            </h2>
          </div>
          <p className="max-w-[360px] text-sm leading-7 text-muted-foreground">
            Conheça os modelos disponíveis e fale diretamente com a profissional para consultar valores e horários.
          </p>
        </Reveal>
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-2">
          {catalogModels.map((item, index) => (
            <Reveal key={item.name} delay={(index % 2) * 0.08}>
              <article className="group">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.25rem] bg-muted">
                  <ImageWithFallback src={item.image} alt={`Referência visual de ${item.name}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171416]/80 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-[#171416]/70 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    {item.category}
                  </span>
                  <h3 className="absolute bottom-6 left-6 right-6 font-display text-4xl tracking-[-0.035em] text-white md:text-5xl">
                    {item.name}
                  </h3>
                </div>
                <div className="px-1 pt-5">
                  <a
                    href={hrefFor(item.message)}
                    onClick={() => onLinkClick(item.message)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-between rounded-full bg-primary px-6 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#571821] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label={`Agendar ${item.name} pelo ${channel.name}`}
                  >
                    <span className="flex items-center gap-3"><MessageCircle size={18} /> Agendar pelo {channel.name}</span>
                    <ArrowRight size={17} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
