export const agencyData = {
  info: {
    name: "Apogeum Digital",
    whatsapp: "5585991461277",
    email: "contato@apogeumdigital.com.br",
    cnpj: "00.000.000/0001-00",
  },
  portfolio: [
    {
      key: "escolaNeuma",
      image: "https://api.microlink.io/?url=https://escolatianeuma.com.br&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://escolatianeuma.com.br",
    },
    {
      key: "qualOTom",
      image: "https://api.microlink.io/?url=https://qualotom.com.br&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://qualotom.com.br",
    },
    {
      key: "tarcilaCosta",
      image: "https://api.microlink.io/?url=https://tarcilacostapsi.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://tarcilacostapsi.vercel.app",
    },
    {
      key: "believeCalistenia",
      image: "https://api.microlink.io/?url=https://believecalistenia.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
      link: "https://believecalistenia.vercel.app",
    },
  ],
} as const;

export type PortfolioKey = (typeof agencyData.portfolio)[number]["key"];
export type DiferenciaisKey = "codigoProprio" | "velocidade" | "conversao";
export type ProcessoKey = "alinhamento" | "desenvolvimento" | "lancamento";
