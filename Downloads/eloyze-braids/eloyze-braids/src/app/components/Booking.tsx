import { useState, type FormEvent } from "react";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Eyebrow } from "@/app/components/Eyebrow";
import { Reveal } from "@/app/components/Reveal";
import { useContact } from "@/app/components/ContactProvider";
import { getChannelCopy } from "@/app/config/contact";
import { catalogModels } from "@/app/data/content";

type SendState = "idle" | "sent" | "copyFailed";

export function Booking() {
  const [state, setState] = useState<SendState>("idle");
  const { openWithMessage } = useContact();
  const channel = getChannelCopy();

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Olá, Eloyze Braids! Gostaria de solicitar um agendamento.",
      "",
      `Nome: ${data.get("name")}`,
      `Estilo: ${data.get("style")}`,
      `Data pretendida: ${data.get("date")}`,
      `Horário de preferência: ${data.get("time")}`,
      `Observações: ${data.get("notes") || "Sem observações"}`,
      "",
      "Aguardo o retorno para consultar disponibilidade, valor e condições.",
    ].join("\n");
    const copied = await openWithMessage(message);
    setState(copied ? "sent" : "copyFailed");
  }

  const fieldClass = "mt-2 w-full rounded-xl border border-[#6b1f28]/15 bg-white px-4 py-3.5 text-sm text-[#251c1e] outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10";

  return (
    <section id="agendamento" className="bg-[#f3ece4] px-5 py-24 text-[#251c1e] lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
        <Reveal>
          <Eyebrow>Agendamento</Eyebrow>
          <h2 className="font-display text-[clamp(3.4rem,5vw,5.6rem)] leading-[0.92] tracking-[-0.05em]">
            Vamos conversar sobre suas tranças?
          </h2>
          <p className="mt-7 max-w-[430px] text-base leading-7 text-[#6e5f60]">
            Preencha os campos ao lado para montar sua mensagem. A solicitação será enviada pelo {channel.name} e estará sujeita à confirmação.
          </p>
          <div className="mt-10 flex items-start gap-4 border-t border-[#6b1f28]/15 pt-7">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
              <MessageCircle size={18} />
            </div>
            <div>
              <p className="text-sm font-bold">Atendimento via {channel.name}</p>
              <p className="mt-1 text-xs leading-5 text-[#6e5f60]">{channel.directNote}</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} className="rounded-[1.5rem] bg-white p-6 shadow-[0_24px_80px_rgba(70,30,35,0.08)] md:p-9">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-xs font-bold uppercase tracking-[0.1em] text-[#5e4e50] md:col-span-2">
                Nome da cliente
                <input name="name" required placeholder="Como podemos te chamar?" className={fieldClass} />
              </label>
              <label className="text-xs font-bold uppercase tracking-[0.1em] text-[#5e4e50] md:col-span-2">
                Estilo desejado
                <select id="style" name="style" required defaultValue="" className={fieldClass}>
                  <option value="" disabled>Selecione uma opção</option>
                  {catalogModels.map((item) => <option key={item.name}>{item.name}</option>)}
                  <option>Outro estilo / ainda não decidi</option>
                </select>
              </label>
              <label className="text-xs font-bold uppercase tracking-[0.1em] text-[#5e4e50]">
                Data pretendida
                <input name="date" required type="date" className={fieldClass} />
              </label>
              <label className="text-xs font-bold uppercase tracking-[0.1em] text-[#5e4e50]">
                Horário de preferência
                <input name="time" required type="time" className={fieldClass} />
              </label>
              <label className="text-xs font-bold uppercase tracking-[0.1em] text-[#5e4e50] md:col-span-2">
                Observações
                <textarea name="notes" rows={4} placeholder="Conte sobre comprimento, cor, referência ou alguma dúvida." className={`${fieldClass} resize-none`} />
              </label>
            </div>
            <button type="submit" className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#571821]">
              Enviar solicitação pelo {channel.name} <ArrowRight size={17} />
            </button>
            {state === "sent" && (
              <p className="mt-4 flex items-center justify-center gap-2 text-xs text-primary">
                <Check size={14} /> {channel.sentNotice}
              </p>
            )}
            {state === "copyFailed" && (
              <p className="mt-4 flex items-center justify-center gap-2 text-xs text-primary">
                {channel.copyFailedNotice}
              </p>
            )}
            <p className="mt-4 text-center text-[11px] leading-5 text-[#88777a]">
              O envio não confirma automaticamente o horário. Aguarde o retorno da profissional.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
