"use client";

import { useLanguage } from "@/context/LanguageContext";

const CARDS = [
  { num: "01", titleKey: "about.card1.title", descKey: "about.card1.desc" },
  { num: "02", titleKey: "about.card2.title", descKey: "about.card2.desc" },
  { num: "03", titleKey: "about.card3.title", descKey: "about.card3.desc" },
  { num: "04", titleKey: "about.card4.title", descKey: "about.card4.desc" },
  { num: "05", titleKey: "about.card5.title", descKey: "about.card5.desc" },
  { num: "06", titleKey: "about.card6.title", descKey: "about.card6.desc" },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 bg-[#faf8f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#4a7c7c] text-xs tracking-[0.5em] uppercase mb-4 font-light">
            {t("about.eyebrow")}
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-light text-[#2c3e50] leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {t("about.h2.1")}<br />
            <span className="text-[#4a7c7c]">{t("about.h2.2")}</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <div className="space-y-6">
            <p className="text-lg font-light leading-relaxed text-[#4a4a4a]">
              {t("about.p1")}
            </p>
            <p className="text-base font-light leading-relaxed text-[#5a5a5a]">
              {t("about.p2")}
            </p>
            <p className="text-base font-light leading-relaxed text-[#5a5a5a]">
              {t("about.p3")}
            </p>

            {/* Video embed */}
            <div className="rounded-sm overflow-hidden shadow-lg mt-8 aspect-video">
              <iframe
                src="https://www.youtube.com/embed/cYWuD6f5Up8"
                title="Floutings – kas tas ir"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CARDS.map((item) => (
              <div
                key={item.num}
                className="p-6 bg-white/60 border border-[#e8e0d0] rounded-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="text-xs tracking-[0.3em] text-teal/50 font-light mb-3">{item.num}</div>
                <h3
                  className="text-lg font-light text-[#2c3e50] mb-2"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {t(item.titleKey)}
                </h3>
                <p className="text-sm text-[#6a6a6a] font-light leading-relaxed">
                  {t(item.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* NASA note */}
        <div className="mt-16 p-8 bg-[#4a7c7c]/8 border-l-2 border-[#4a7c7c] rounded-sm">
          <p className="text-[#2c3e50] font-light leading-relaxed text-base">
            <span className="font-medium text-[#4a7c7c]">{t("about.nasa.bold")}</span>{" "}
            {t("about.nasa.text")}
          </p>
        </div>
      </div>
    </section>
  );
}
