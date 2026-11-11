import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Eyebrow } from "@/app/components/Eyebrow";
import { Reveal } from "@/app/components/Reveal";
import { images } from "@/app/data/content";

export function About() {
  return (
    <section id="sobre" className="bg-[#f3ece4] px-5 py-24 text-[#251c1e] lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-[1180px] items-center gap-14 lg:grid-cols-[.82fr_1.18fr] lg:gap-24">
        <Reveal className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-t-[10rem] bg-[#d8c8bc]">
            <ImageWithFallback src={images.about} alt="Mãos trabalhando em detalhes de uma trança" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-4 flex h-28 w-28 items-center justify-center rounded-full bg-primary p-5 text-center text-[10px] font-bold uppercase leading-4 tracking-[0.13em] text-white lg:-right-8">
            Cuidado em cada detalhe
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <Eyebrow>Sobre a marca</Eyebrow>
          <h2 className="max-w-[720px] font-display text-[clamp(3rem,5vw,5.5rem)] leading-[0.96] tracking-[-0.045em]">
            Tranças como forma de <em className="text-primary">expressão.</em>
          </h2>
          <div className="mt-8 grid gap-6 border-t border-[#6b1f28]/20 pt-8 md:grid-cols-2">
            <p className="text-[17px] leading-8 text-[#3d3032]">
              A Eloyze Braids nasce do cuidado com cada escolha: do estilo ao acabamento, da referência ao resultado desejado.
            </p>
            <p className="text-sm leading-7 text-[#6e5f60]">
              Uma marca dedicada a valorizar a beleza e a identidade de cada cliente por meio das tranças. Explore possibilidades, encontre inspiração e conte como você imagina seu próximo visual.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
