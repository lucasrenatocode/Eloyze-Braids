import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "@/app/components/Logo";
import { scrollTo } from "@/app/lib/scroll";

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Sobre", "sobre"],
    ["Estilos", "catalogo"],
    ["Inspirações", "galeria"],
    ["Agendamento", "agendamento"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#171416]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-[1240px] items-center justify-between px-5 lg:px-8">
        <Logo compact />
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-xs font-medium uppercase tracking-[0.14em] text-white/65 transition-colors hover:text-white"
            >
              {label}
            </button>
          ))}
        </nav>
        <button
          onClick={() => scrollTo("agendamento")}
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground transition-transform hover:-translate-y-0.5 lg:flex"
        >
          Solicitar horário <ArrowRight size={15} />
        </button>
        <button
          className="rounded-full border border-white/15 p-2.5 text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[#171416] px-5 pb-6 pt-3 lg:hidden">
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => {
                setOpen(false);
                scrollTo(id);
              }}
              className="block w-full border-b border-white/10 py-4 text-left font-display text-2xl text-white"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
