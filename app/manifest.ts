import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pendolo",
    short_name: "Pendolo",
    description: "Controle de ponto para pequenas equipes",
    start_url: "/ponto",
    display: "standalone",
    background_color: "#f4f8fc",
    theme_color: "#4f8fd6",
    lang: "pt-BR",
    icons: [
      {
        src: "/icons/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
