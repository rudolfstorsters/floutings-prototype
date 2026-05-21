"use client";

import { useLanguage } from "@/context/LanguageContext";

const WHO_KEYS = [
  { num: "01", titleKey: "individual.who.0.title", descKey: "individual.who.0.desc" },
  { num: "02", titleKey: "individual.who.1.title", descKey: "individual.who.1.desc" },
  { num: "03", titleKey: "individual.who.2.title", descKey: "individual.who.2.desc" },
  { num: "04", titleKey: "individual.who.3.title", descKey: "individual.who.3.desc" },
  { num: "05", titleKey: "individual.who.4.title", descKey: "individual.who.4.desc" },
  { num: "06", titleKey: "individual.who.5.title", descKey: "individual.who.5.desc" },
];

const STATS = [
  { valueKey: "individual.stat.duration", labelKey: "individual.stat.duration.label" },
  { valueKey: "individual.stat.temp",     labelKey: "individual.stat.temp.label" },
  { valueKey: "individual.stat.salt",     labelKey: "individual.stat.salt.label" },
];

export default function Individual() {
  const { t } = useLanguage();

  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="individual" className="py-24 md:py-32 bg-[#faf8f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Visual */}
          <div className="order-2 lg:order-1 relative">
            <div className="bg-linear-to-br from-[#e8f0f0] to-[#d0e4e4] rounded-sm p-10 aspect-square flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div
                  className="absolute inset-0"
                  style={{ background: "radial-gradient(ellipse 100% 60% at 50% 80%, rgba(74,124,124,0.5) 0%, transparent 70%)" }}
                />
              </div>

              {/* Floating text */}
              <div className="relative z-10 text-center" style={{ animation: "float 5s ease-in-out infinite" }}>
                {/* Wave lines */}
                <div className="flex gap-1 justify-center mb-6">
                  {[40, 60, 80, 60, 40].map((h, i) => (
                    <div
                      key={i}
                      className="w-1 bg-teal/40 rounded-full"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
                <div
                  className="text-3xl font-light text-deep mb-2"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {t("individual.visual.title")}
                </div>
                <div className="text-teal text-sm font-light">
                  {t("individual.visual.price")}
                </div>
              </div>

              {/* Stats */}
              <div className="absolute bottom-6 left-0 right-0 px-8">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {STATS.map((stat) => (
                    <div key={stat.labelKey} className="bg-white/50 rounded-sm p-2">
                      <div
                        className="text-lg font-light text-deep"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        {t(stat.valueKey)}
                      </div>
                      <div className="text-[9px] tracking-[0.2em] uppercase text-[#6a6a6a] font-light">
                        {t(stat.labelKey)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-teal text-xs tracking-[0.5em] uppercase mb-6 font-light">
              {t("individual.eyebrow")}
            </p>
            <h2
              className="text-4xl sm:text-5xl font-light text-deep leading-tight mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {t("individual.h2.1")}
              <br />
              <span className="text-teal">{t("individual.h2.2")}</span>
            </h2>
            <p className="text-[#4a4a4a] font-light leading-relaxed mb-6">
              {t("individual.p1")}
            </p>
            <p className="text-[#5a5a5a] font-light leading-relaxed mb-8">
              {t("individual.p2")}
            </p>

            <h3
              className="text-xl font-light text-deep mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {t("individual.who.title")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {WHO_KEYS.map((item) => (
                <div key={item.num} className="flex gap-3 p-4 bg-sand rounded-sm">
                  <span className="text-xs font-light text-teal/50 shrink-0 mt-0.5 w-5">
                    {item.num}
                  </span>
                  <div>
                    <div className="font-light text-deep text-sm">{t(item.titleKey)}</div>
                    <div className="text-xs text-[#6a6a6a] font-light mt-0.5 leading-relaxed">
                      {t(item.descKey)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToBooking}
              className="px-10 py-4 bg-teal text-white text-sm tracking-[0.25em] uppercase hover:bg-[#2c5c5c] transition-all duration-300 rounded-sm"
            >
              {t("individual.cta")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
