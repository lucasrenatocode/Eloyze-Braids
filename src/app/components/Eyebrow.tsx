import type { ReactNode } from "react";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={`mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] ${light ? "text-[#e4c8bc]" : "text-primary"}`}>
      <span className="h-px w-7 bg-current" />
      {children}
    </div>
  );
}
