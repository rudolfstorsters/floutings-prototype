"use client";

import { useLanguage } from "@/context/LanguageContext";

const FEATURE_KEYS = [
  "romantic.feat.0",
  "romantic.feat.1",
  "romantic.feat.2",
  "romantic.feat.3",
  "romantic.feat.4",
];

export default function Romantic() {
  const { t } = useLanguage();

  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 bg-dark-teal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <div>
            <p className="text-[#9bbfbf] text-xs tracking-[0.5em] uppercase mb-6 font-light">
              {t("romantic.eyebrow")}
            </p>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {t("romantic.h2.1")}
              <br />
              <span className="text-[#9bbfbf]">{t("romantic.h2.2")}</span>
              <br />
              {t("romantic.h2.3")}
            </h2>
            <p className="text-[#c8d8d8] font-light leading-relaxed text-base mb-6">
              {t("romantic.p1")}
            </p>
            <p className="text-[#9bbfbf] font-light leading-relaxed text-base mb-8">
              {t("romantic.p2")}
            </p>

            <div className="space-y-3 mb-10">
              {FEATURE_KEYS.map((key) => (
                <div key={key} className="flex items-center gap-4">
                  <span className="w-4 h-px bg-gold shrink-0" />
                  <span className="text-[#c8d8d8] font-light text-sm">{t(key)}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <button
                onClick={scrollToBooking}
                className="px-8 py-4 bg-gold text-white text-sm tracking-[0.25em] uppercase hover:bg-[#a07840] transition-all duration-300 rounded-sm"
              >
                {t("romantic.cta")}
              </button>
              <div className="flex items-center gap-2 text-[#9bbfbf]">
                <span
                  className="text-3xl font-light"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {t("romantic.price")}
                </span>
                <span className="text-sm font-light opacity-70">{t("romantic.per")}</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-linear-to-br from-[#2c4444] to-dark-teal rounded-sm overflow-hidden aspect-4/5 flex flex-col items-center justify-center p-12 border border-teal/20">
              {/* Warm glow */}
              <div
                className="absolute inset-0"
                style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(184,150,90,0.08) 0%, transparent 70%)" }}
              />

              {/* Candle group */}
              <div className="flex gap-8 mb-10 items-end">
                {[{ h: 56, w: 6 }, { h: 72, w: 8 }, { h: 56, w: 6 }].map((c, i) => (
                  <div key={i} className="flex flex-col items-center">
                    {/* Flame */}
                    <div
                      className="rounded-full bg-linear-to-t from-gold to-[#f5c842] opacity-90 mb-1"
                      style={{
                        width: `${c.w}px`,
                        height: "18px",
                        animation: `pulse ${1.5 + i * 0.4}s ease-in-out infinite`,
                        boxShadow: "0 0 16px rgba(184,150,90,0.7)",
                      }}
                    />
                    {/* Body */}
                    <div
                      className="bg-linear-to-b from-[#f5ebe0] to-[#e0cbb0] rounded-b-sm"
                      style={{ width: `${c.w}px`, height: `${c.h}px` }}
                    />
                  </div>
                ))}
              </div>

              {/* Text */}
              <div className="text-center relative z-10">
                <p
                  className="text-5xl font-light text-white mb-4 opacity-60"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  ∞
                </p>
                <h3
                  className="text-2xl font-light text-white mb-3 whitespace-pre-line"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {t("romantic.visual.title")}
                </h3>
                <p className="text-[#9bbfbf] text-sm font-light whitespace-pre-line">
                  {t("romantic.visual.sub")}
                </p>
              </div>

              {/* Water ripples */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 overflow-hidden opacity-20">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="absolute border border-teal/40 rounded-full"
                    style={{
                      width: `${120 + i * 80}%`,
                      height: `${120 + i * 80}%`,
                      bottom: "-50%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      animationDelay: `${i * 0.8}s`,
                    }}
                  />
                ))}
              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-gold/20 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase px-3 py-2 rounded-sm">
                {t("romantic.badge")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
