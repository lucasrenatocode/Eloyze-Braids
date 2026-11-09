import brandImage from "@/imports/Logo-Eloyze.jpeg";
import nagoCabecaToda from "@/imports/nago-cabeca-toda.jpeg";
import nagoTiara from "@/imports/nago-tiara.jpeg";
import nagoTopo from "@/imports/nago-topo.jpeg";
import nagoLateral from "@/imports/nago-lateral.jpeg";
import boxeadora from "@/imports/boxeadora.jpeg";
import boxBraids from "@/imports/Box_Braids.jpeg";
import fulani from "@/imports/Fulani.jpeg";
import bohoBraids from "@/imports/Boho-Braids.jpeg";

export { brandImage };

export const images = {
  hero: "https://images.unsplash.com/photo-1636302925868-52075f44d810?auto=format&fit=crop&w=1400&q=88",
  about: "https://images.unsplash.com/photo-1757866333225-49bb21c56584?auto=format&fit=crop&w=1000&q=86",
  galleryOne: "https://images.unsplash.com/photo-1658497730270-b5f4fef00ae1?auto=format&fit=crop&w=900&q=84",
  galleryTwo: "https://images.unsplash.com/photo-1612459284970-e8f027596582?auto=format&fit=crop&w=900&q=84",
  galleryThree: "https://images.unsplash.com/photo-1576637261202-b84dc506ca20?auto=format&fit=crop&w=900&q=84",
  galleryFour: "https://images.unsplash.com/photo-1757866332840-230be07b786e?auto=format&fit=crop&w=900&q=84",
};

export type CatalogModel = {
  name: string;
  image: string;
  category: string;
  message: string;
};

export const catalogModels: CatalogModel[] = [
  {
    name: "Nagô Lateral",
    image: nagoLateral,
    category: "Modelo Nagô",
    message: "Olá! Tenho interesse em fazer uma Nagô Lateral. Gostaria de consultar os valores e horários disponíveis.",
  },
  {
    name: "Nagô Topo",
    image: nagoTopo,
    category: "Modelo Nagô",
    message: "Olá! Tenho interesse em fazer uma Nagô Topo. Gostaria de consultar os valores e horários disponíveis.",
  },
  {
    name: "Nagô Tiara",
    image: nagoTiara,
    category: "Modelo Nagô",
    message: "Olá! Tenho interesse em fazer uma Nagô Tiara. Gostaria de consultar os valores e horários disponíveis.",
  },
  {
    name: "Nagô Cabeça Toda",
    image: nagoCabecaToda,
    category: "Modelo Nagô",
    message: "Olá! Tenho interesse em fazer uma Nagô Cabeça Toda. Gostaria de consultar os valores e horários disponíveis.",
  },
  {
    name: "Boxeadora",
    image: boxeadora,
    category: "Modelo de trança",
    message: "Olá! Tenho interesse em fazer uma trança Boxeadora. Gostaria de consultar os valores e horários disponíveis.",
  },
  {
    name: "Box Braids",
    image: boxBraids,
    category: "Modelo de trança",
    message: "Olá! Tenho interesse em fazer Box Braids. Gostaria de consultar os valores e horários disponíveis.",
  },
  {
    name: "Fulani",
    image: fulani,
    category: "Modelo de trança",
    message: "Olá! Tenho interesse em fazer tranças Fulani. Gostaria de consultar os valores e horários disponíveis.",
  },
  {
    name: "Boho Braids",
    image: bohoBraids,
    category: "Modelo de trança",
    message: "Olá! Tenho interesse em fazer Boho Braids. Gostaria de consultar os valores e horários disponíveis.",
  },
];

export function getSteps(channelName: string): [string, string, string][] {
  return [
    ["01", "Escolha seu estilo", "Explore o catálogo e selecione a referência que mais combina com você."],
    ["02", "Entre em contato", `Envie sua solicitação pelo formulário ou diretamente pelo ${channelName}.`],
    ["03", "Consulte os detalhes", "Confirme disponibilidade, valor, materiais e condições do atendimento."],
    ["04", "Confirme seu horário", "Após o retorno da profissional, finalize a combinação do agendamento."],
  ];
}
