import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import { getChannelCopy } from "@/app/config/contact";
import { copyText, getContactUrl, needsCopy } from "@/app/lib/contact";

type ContactApi = {
  /** Link do canal ativo para uma mensagem. */
  hrefFor: (message: string) => string;
  /** Clique em um link (<a>) do catálogo: copia a mensagem quando o canal exige e avisa. */
  onLinkClick: (message: string) => void;
  /** Envio do formulário: copia (se preciso), abre o canal e devolve o resultado da cópia. */
  openWithMessage: (message: string) => Promise<boolean>;
};

const ContactContext = createContext<ContactApi | null>(null);

export function useContact() {
  const ctx = useContext(ContactContext);
  if (!ctx) throw new Error("useContact deve ser usado dentro de <ContactProvider>");
  return ctx;
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const [notice, setNotice] = useState<string | null>(null);
  const timer = useRef<number | undefined>(undefined);

  const showNotice = useCallback((text: string) => {
    setNotice(text);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setNotice(null), 6000);
  }, []);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const onLinkClick = useCallback(
    (message: string) => {
      if (!needsCopy()) return;
      const copy = getChannelCopy();
      void copyText(message).then((ok) => showNotice(ok ? copy.toast : copy.copyFailedNotice));
    },
    [showNotice],
  );

  const openWithMessage = useCallback(async (message: string) => {
    // A cópia e a abertura da janela precisam acontecer dentro do clique (antes do await).
    const copied = needsCopy() ? copyText(message) : Promise.resolve(true);
    window.open(getContactUrl(message), "_blank", "noopener,noreferrer");
    return copied;
  }, []);

  return (
    <ContactContext.Provider value={{ hrefFor: getContactUrl, onLinkClick, openWithMessage }}>
      {children}
      <AnimatePresence>
        {notice && (
          <motion.div
            key="contact-notice"
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-1/2 z-[60] flex max-w-[calc(100vw-2.5rem)] -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-[#171416] px-5 py-3 text-xs text-white shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
          >
            <Check size={14} className="shrink-0 text-[#e4c8bc]" /> {notice}
          </motion.div>
        )}
      </AnimatePresence>
    </ContactContext.Provider>
  );
}
