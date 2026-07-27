import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { locales, type Locale } from "@/i18n";

const BASE_URL = "https://apogeumdigital.com.br";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const meta = messages.metadata as { title: string; description: string };

  const title = meta.title;
  const description = meta.description;

  const alternatesLanguages: Record<string, string> = {};
  for (const loc of locales) {
    alternatesLanguages[loc] = `${BASE_URL}/${loc}`;
  }

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: alternatesLanguages,
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}`,
      siteName: "Apogeum Digital",
      locale: locale === "pt" ? "pt_BR" : locale === "en" ? "en_US" : locale === "es" ? "es_ES" : "fr_FR",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/og`,
          width: 1200,
          height: 630,
          alt: "Apogeum Digital",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/og`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Apogeum Digital",
    url: BASE_URL,
    email: "contato@apogeumdigital.com.br",
    telephone: "+55-85-99146-1277",
    description:
      "Sites institucionais de alta performance, codados do zero. Desenvolvimento web premium com foco em conversão e velocidade.",
    foundingDate: "2024",
    sameAs: [],
  };

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://api.microlink.io" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="bg-background text-foreground font-body antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
