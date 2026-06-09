import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apogeum Digital | Sua Marca no Topo",
  description:
    "Sites institucionais de alta performance, codados do zero. Desenvolvimento web premium com foco em conversão e velocidade.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Apogeum Digital | Sua Marca no Topo",
    description:
      "Sites institucionais de alta performance, codados do zero com foco em conversão.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
