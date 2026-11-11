/**
 * Canal de contato do site.
 *
 * Hoje a cliente atende só pelo Instagram. Quando ela tiver WhatsApp:
 *   1. troque `channel` para "whatsapp";
 *   2. preencha `whatsappNumber` com DDI + DDD + número, só dígitos (ex.: "5581999999999").
 * Todos os textos, links e o comportamento do formulário acompanham essa troca.
 */
export type ContactChannel = "instagram" | "whatsapp";

export const CONTACT = {
  channel: "instagram" as ContactChannel,
  instagramHandle: "eloyzebraids",
  whatsappNumber: "55NUMERO",
};

export const instagramProfileUrl = `https://instagram.com/${CONTACT.instagramHandle}`;

/** Textos que dependem do canal ativo. */
export function getChannelCopy(channel: ContactChannel = CONTACT.channel) {
  if (channel === "whatsapp") {
    return {
      name: "WhatsApp",
      directNote: "O número poderá ser configurado antes da publicação.",
      sentNotice: "Mensagem preparada. Confira a nova janela do WhatsApp.",
      copyFailedNotice: "",
      toast: "",
    };
  }

  return {
    name: "Instagram",
    directNote: `Responderemos pelas mensagens diretas do perfil @${CONTACT.instagramHandle}.`,
    sentNotice: "Mensagem copiada. Cole na conversa do Instagram que acabou de abrir.",
    copyFailedNotice:
      "Não foi possível copiar a mensagem. Conte na conversa do Instagram o estilo, a data e o horário desejados.",
    toast: "Mensagem copiada. Cole na conversa do Instagram.",
  };
}
