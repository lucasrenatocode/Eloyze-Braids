import { ArrowRight, Instagram, Sparkles } from "lucide-react";
import { Logo } from "@/app/components/Logo";
import { CONTACT, instagramProfileUrl } from "@/app/config/contact";
import { scrollTo } from "@/app/lib/scroll";

export function Footer() {
  return (
    <footer className="bg-[#171416] px-5 pb-8 pt-20 text-white lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1.3fr_.7fr_.7fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-[360px] text-sm leading-7 text-white/50">
              Tranças, identidade e beleza em cada detalhe. Encontre seu estilo e inicie sua solicitação de agendamento.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d8b7aa]">Navegação</p>
            <div className="mt-5 space-y-3 text-sm text-white/60">
              <button onClick={() => scrollTo("sobre")} className="block hover:text-white">Sobre a marca</button>
              <button onClick={() => scrollTo("catalogo")} className="block hover:text-white">Catálogo de tranças</button>
              <button onClick={() => scrollTo("galeria")} className="block hover:text-white">Inspirações</button>
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d8b7aa]">Acompanhe</p>
            <a href={instagramProfileUrl} target="_blank" rel="noreferrer" className="mt-5 flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white">
              <Instagram size={18} /> @{CONTACT.instagramHandle}
            </a>
            <button onClick={() => scrollTo("agendamento")} className="mt-7 flex items-center gap-2 text-sm font-bold text-[#e4c8bc]">
              Agendar agora <ArrowRight size={16} />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-[11px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Eloyze Braids. Todos os direitos reservados.</p>
          <p className="flex items-center gap-2"><Sparkles size={12} /> Fotografias ilustrativas de inspiração.</p>
        </div>
      </div>
    </footer>
  );
}
