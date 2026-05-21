"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type Pkg = {
  durationKey: string;
  visitsKey: string;
  price: string;
  oldPrice?: string;
  noteKey: string;
  highlight: boolean;
};

const individualPackages: Pkg[] = [
  { durationKey: "services.pkg.1h", visitsKey: "services.pkg.1v",  price: "39 €",  oldPrice: "50 €",  noteKey: "services.pkg.note.1v1h",  highlight: false },
  { durationKey: "services.pkg.1h", visitsKey: "services.pkg.2v",  price: "85 €",                     noteKey: "services.pkg.note.sub",    highlight: true  },
  { durationKey: "services.pkg.1h", visitsKey: "services.pkg.4v",  price: "150 €",                    noteKey: "services.pkg.note.sub1y",  highlight: false },
  { durationKey: "services.pkg.1h", visitsKey: "services.pkg.10v", price: "350 €",                    noteKey: "services.pkg.note.famsub", highlight: false },
  { durationKey: "services.pkg.2h", visitsKey: "services.pkg.1v",  price: "55 €",  oldPrice: "70 €",  noteKey: "services.pkg.note.2v1h",  highlight: false },
];

const twoPersonPackages: Pkg[] = [
  { durationKey: "services.pkg.1h", visitsKey: "services.pkg.1v",  price: "70 €",  noteKey: "services.pkg.note.1v1h",  highlight: false },
  { durationKey: "services.pkg.1h", visitsKey: "services.pkg.2v",  price: "120 €", noteKey: "services.pkg.note.sub",    highlight: true  },
  { durationKey: "services.pkg.1h", visitsKey: "services.pkg.4v",  price: "210 €", noteKey: "services.pkg.note.sub1y",  highlight: false },
  { durationKey: "services.pkg.1h", visitsKey: "services.pkg.10v", price: "500 €", noteKey: "services.pkg.note.bigsub", highlight: false },
  { durationKey: "services.pkg.2h", visitsKey: "services.pkg.1v",  price: "89 €",  oldPrice: "100 €", noteKey: "services.pkg.note.2v1h", highlight: false },
];

const SUB_TERM_KEYS = [
  "services.sub.terms.0",
  "services.sub.terms.1",
  "services.sub.terms.2",
  "services.sub.terms.3",
];

function PriceCard({ pkg, t }: { pkg: Pkg; t: (k: string) => string }) {
  return (
    <div
      className={`relative p-6 rounded-sm transition-all duration-300 hover:shadow-lg ${
        pkg.highlight
          ? "bg-[#4a7c7c] text-white shadow-md"
          : "bg-white/70 border border-[#e8e0d0] hover:border-[#4a7c7c]/30"
      }`}
    >
      {pkg.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#b8965a] text-white text-[10px] tracking-[0.2em] uppercase px-4 py-1 rounded-full whitespace-nowrap">
          {t("services.popular")}
        </div>
      )}
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className={`text-sm font-light ${pkg.highlight ? "text-white/80" : "text-[#6a6a6a]"}`}>
            {t(pkg.durationKey)}
          </p>
          <p className={`text-base font-light mt-0.5 ${pkg.highlight ? "text-white" : "text-[#2c3e50]"}`}>
            {t(pkg.visitsKey)}
          </p>
        </div>
        <div className="text-right">
          {pkg.oldPrice && (
            <p
              className={`text-sm font-light ${pkg.highlight ? "text-white/40" : "text-[#b0a090]"}`}
              style={{ textDecoration: "line-through" }}
            >
              {pkg.oldPrice}
            </p>
          )}
          <p
            className={`text-2xl font-light ${pkg.highlight ? "text-white" : "text-[#4a7c7c]"}`}
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {pkg.price}
          </p>
        </div>
      </div>
      <p className={`text-xs font-light ${pkg.highlight ? "text-white/70" : "text-[#8a8a8a]"}`}>
        {t(pkg.noteKey)}
      </p>
    </div>
  );
}

function SectionHeader({ titleKey, subtitleKey, accent, t }: { titleKey: string; subtitleKey: string; accent: "gold" | "teal"; t: (k: string) => string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div>
        <h3
          className="text-2xl md:text-3xl font-light text-[#2c3e50]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {t(titleKey)}
        </h3>
        <p className="text-sm text-[#6a6a6a] font-light mt-1">{t(subtitleKey)}</p>
      </div>
      <div className="ml-auto hidden sm:flex flex-col items-center gap-1">
        <div className={`w-px h-8 ${accent === "gold" ? "bg-gold/60" : "bg-teal/40"}`} />
        <div className={`w-2 h-2 rounded-full ${accent === "gold" ? "bg-gold/40" : "bg-teal/30"}`} />
      </div>
    </div>
  );
}

export default function Services() {
  const { t } = useLanguage();
  const [termsOpen, setTermsOpen] = useState(false);

  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const includeKeys = Array.from({ length: 8 }, (_, i) => `services.include.${i}`);

  return (
    <section id="services" className="py-24 md:py-32 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#4a7c7c] text-xs tracking-[0.5em] uppercase mb-4 font-light">
            {t("services.eyebrow")}
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-light text-[#2c3e50] leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {t("services.h2.1")}<br />
            <span className="text-[#4a7c7c]">{t("services.h2.2")}</span>
          </h2>
          <p className="mt-4 text-[#5a5a5a] font-light">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Individual */}
        <div className="mb-16">
          <SectionHeader titleKey="services.individual.title" subtitleKey="services.individual.subtitle" accent="teal" t={t} />
          <p className="text-sm text-[#5a5a5a] font-light mb-6 bg-white/50 border border-[#e8e0d0] rounded-sm p-4 max-w-2xl">
            {t("services.cabin.note")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {individualPackages.map((pkg, i) => <PriceCard key={i} pkg={pkg} t={t} />)}
          </div>
        </div>

        {/* Two persons */}
        <div className="mb-12">
          <SectionHeader titleKey="services.twopersons.title" subtitleKey="services.twopersons.subtitle" accent="teal" t={t} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {twoPersonPackages.map((pkg, i) => <PriceCard key={i} pkg={pkg} t={t} />)}
          </div>
        </div>

        {/* Includes */}
        <div className="bg-white/60 border border-[#e8e0d0] rounded-sm p-8 mb-4">
          <h4
            className="text-xl font-light text-[#2c3e50] mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {t("services.includes.title")}
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {includeKeys.map((key) => (
              <div key={key} className="flex items-start gap-2">
                <span className="text-[#4a7c7c] text-sm mt-0.5 shrink-0">✓</span>
                <span className="text-sm text-[#5a5a5a] font-light">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription terms accordion */}
        <div className="bg-white/60 border border-[#e8e0d0] rounded-sm mb-8 overflow-hidden">
          <button
            onClick={() => setTermsOpen(!termsOpen)}
            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#f5f0e8] transition-colors"
          >
            <p className="text-sm font-light text-[#2c3e50]">{t("services.sub.terms.title")}</p>
            <span className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 text-sm leading-none ${termsOpen ? "bg-teal border-teal rotate-45 text-white" : "border-[#e0d8c8] text-[#6a6a6a]"}`}>
              +
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${termsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="px-6 pb-6 border-t border-[#f0e8d8]">
              <ul className="mt-4 space-y-3">
                {SUB_TERM_KEYS.map((key, i) => (
                  <li key={key} className="flex items-start gap-3">
                    <span className="text-xs text-teal/50 font-light shrink-0 mt-0.5 w-4">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-sm text-[#4a4a4a] font-light leading-relaxed">{t(key)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="text-xs text-[#8a8a8a] font-light text-center mb-8">
          {t("services.note")}
        </p>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToBooking}
            className="px-12 py-4 bg-[#4a7c7c] text-white text-sm tracking-[0.25em] uppercase hover:bg-[#2c5c5c] transition-all duration-300 rounded-sm shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            {t("services.cta")}
          </button>
          <p className="mt-3 text-xs text-[#8a8a8a] font-light">
            {t("services.cta.call")}{" "}
            <a href="tel:+37120233733" className="text-[#4a7c7c] hover:underline">+371 20 233 733</a>
          </p>
        </div>
      </div>
    </section>
  );
}
