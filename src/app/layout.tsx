import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apogeum Digital | Sua Marca no Topo",
  description:
    "Sites institucionais de alta performance, codados do zero. Desenvolvimento web premium com foco em conversão e velocidade.",
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
