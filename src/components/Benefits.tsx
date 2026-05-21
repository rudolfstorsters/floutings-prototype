"use client";

import { useLanguage } from "@/context/LanguageContext";

const BENEFIT_COLORS = ["#4a7c7c","#6a8c7a","#5a7c8a","#7a6c8a","#8a7c5a","#6a8c6a","#5a8a8a","#7a8c5a"];

export default function Benefits() {
  const { t } = useLanguage();

  const benefits = Array.from({ length: 8 }, (_, i) => ({
    number: String(i + 1).padStart(2, "0"),
    title: t(`benefits.${i}.title`),
    desc:  t(`benefits.${i}.desc`),
    color: BENEFIT_COLORS[i],
  }));

  return (
    <section id="benefits" className="py-24 md:py-32 bg-[#2c3e50]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#9bbfbf] text-xs tracking-[0.5em] uppercase mb-4 font-light">
            {t("benefits.eyebrow")}
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {t("benefits.h2.1")}<br />
            <span className="text-[#9bbfbf]">{t("benefits.h2.2")}</span>
          </h2>
          <p className="mt-6 text-[#c8d8d8] font-light max-w-2xl mx-auto leading-relaxed">
            {t("benefits.intro")}
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-sm overflow-hidden">
          {benefits.map((b) => (
            <div
              key={b.number}
              className="bg-[#1e2e3a] p-8 hover:bg-[#243444] transition-colors duration-300 group cursor-default"
            >
              <div
                className="text-sm font-light mb-4 opacity-60"
                style={{ color: b.color }}
              >
                {b.number}
              </div>
              <h3
                className="text-xl font-light text-white mb-3 leading-tight group-hover:text-[#9bbfbf] transition-colors"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {b.title}
              </h3>
              <p className="text-sm text-[#8a9aaa] font-light leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <blockquote className="mt-16 text-center">
          <p
            className="text-2xl md:text-3xl text-white font-light italic leading-relaxed"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {t("benefits.quote")}
          </p>
          <cite className="block mt-4 text-[#9bbfbf] text-xs tracking-[0.3em] uppercase font-light not-italic">
            {t("benefits.quote.source")}
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
