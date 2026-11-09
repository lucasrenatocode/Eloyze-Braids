import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Eyebrow } from "@/app/components/Eyebrow";
import { Reveal } from "@/app/components/Reveal";
import { images } from "@/app/data/content";

export function Gallery() {
  const gallery = [
    [images.galleryOne, "Tranças longas com acabamento definido", "md:col-span-2 md:row-span-2"],
    [images.galleryFour, "Detalhes do processo de trançado", ""],
    [images.galleryTwo, "Referência de tranças com movimento", ""],
    [images.galleryThree, "Tranças vistas em detalhe", "md:col-span-2"],
  ];

  return (
    <section id="galeria" className="bg-[#171416] px-5 py-24 text-white lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <Eyebrow light>Galeria de inspirações</Eyebrow>
            <h2 className="font-display text-[clamp(3.2rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]">
              Detalhes para <em className="text-[#d8b7aa]">salvar</em> e inspirar.
            </h2>
          </div>
          <p className="max-w-[460px] text-sm leading-7 text-white/55 lg:justify-self-end">
            Uma curadoria de referências visuais. As fotografias são inspirações de estilo e não representam trabalhos autorais da profissional.
          </p>
        </Reveal>
        <div className="grid auto-rows-[300px] gap-4 md:grid-cols-4">
          {gallery.map(([src, alt, classes], index) => (
            <Reveal key={src} delay={index * 0.06} className={`group overflow-hidden rounded-[1.1rem] bg-white/5 ${classes}`}>
              <ImageWithFallback src={src} alt={alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
