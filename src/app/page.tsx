import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Diferenciais } from "@/components/diferenciais";
import { Processo } from "@/components/processo";
import { CtaFooter } from "@/components/cta-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Processo />
        <CtaFooter />
      </main>
      <WhatsAppButton />
    </>
  );
}
