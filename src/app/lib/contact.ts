import { CONTACT } from "@/app/config/contact";

/** Link para iniciar a conversa no canal ativo. */
export function getContactUrl(message: string): string {
  if (CONTACT.channel === "whatsapp") {
    return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
  // O Instagram abre a conversa com o perfil, mas não aceita texto pré-preenchido.
  return `https://ig.me/m/${CONTACT.instagramHandle}`;
}

/** No Instagram a mensagem precisa ser copiada para a pessoa colar na conversa. */
export function needsCopy(): boolean {
  return CONTACT.channel === "instagram";
}

/**
 * Copia o texto para a área de transferência.
 * Deve ser chamada de forma síncrona dentro do clique, antes de qualquer `await`.
 */
export function copyText(text: string): Promise<boolean> {
  const fallback = () => {
    try {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(area);
      return ok;
    } catch {
      return false;
    }
  };

  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text).then(
      () => true,
      () => fallback(),
    );
  }
  return Promise.resolve(fallback());
}
