import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Floutings – Privātie Floutinga Seansi Rīgā",
  description:
    "Vienīgā Baltijā divvietīgā lielajā floutinga kabīne. Privāti seansi pārim vai individuāli. Pilnīga relaksācija, stresa mazināšana, miega uzlabošana. Rīga, Brīvības 199C.",
  keywords:
    "floutings, floating, spa, relaksācija, Rīga, sensory deprivation, sāls vanna, mediācija, pārim",
  openGraph: {
    title: "Floutings – Privātie Floutinga Seansi Rīgā",
    description:
      "Vienīgā Baltijā divvietīgā lielajā floutinga kabīne. Pilnīga relaksācija un atjaunošanās.",
    locale: "lv_LV",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lv" className="h-full">
      <head>
        {/* Preconnect for speed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Lora – display serif with full Latvian latin-ext coverage */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap&subset=latin,latin-ext"
          rel="stylesheet"
        />
        {/* Inter – gold-standard sans-serif with full Latvian latin-ext coverage */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap&subset=latin,latin-ext"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-[#faf8f4] text-[#2c3e50]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
