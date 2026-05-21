"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function GiftCard() {
  const { t } = useLanguage();

  return (
    <section id="giftcard" className="py-24 md:py-32 bg-[#2c3e50] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Visual */}
          <div className="relative flex items-center justify-center order-2 lg:order-1">
            {/* Outer glow */}
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(184,150,90,0.10) 0%, transparent 70%)" }}
            />
            {/* Gift card mockup */}
            <div className="relative w-full max-w-sm">
              {/* Card shadow / depth */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-gold/10 rounded-sm border border-gold/20" />
              {/* Main card */}
              <div className="relative bg-linear-to-br from-[#2a3a30] to-[#1a2e2e] border border-gold/40 rounded-sm p-10 text-center">
                {/* Top line */}
                <div className="flex items-center gap-3 mb-8 justify-center">
                  <div className="h-px flex-1 bg-gold/30" />
                  <span className="text-gold text-[9px] tracking-[0.4em] uppercase font-light">{t("giftcard.card.label")}</span>
                  <div className="h-px flex-1 bg-gold/30" />
                </div>

                <p
                  className="text-4xl font-light text-white mb-2"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  FLOUTINGS
                </p>
                <p className="text-[9px] tracking-[0.4em] text-gold/70 font-light uppercase mb-8">
                  Floating Universe
                </p>

                <div className="border border-gold/20 rounded-sm py-4 px-6 mb-8 bg-black/10">
                  <p className="text-xs text-gold/60 tracking-[0.3em] uppercase font-light mb-1">{t("giftcard.card.value")}</p>
                  <p
                    className="text-3xl font-light text-gold"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    50 – 100 €
                  </p>
                </div>

                <p className="text-[#9bbfbf] text-xs font-light">{t("giftcard.card.valid")}</p>

                {/* Bottom line */}
                <div className="flex items-center gap-3 mt-8 justify-center">
                  <div className="h-px flex-1 bg-gold/30" />
                  <div className="w-1 h-1 rounded-full bg-gold/40" />
                  <div className="h-px flex-1 bg-gold/30" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-gold text-xs tracking-[0.5em] uppercase mb-6 font-light">
              {t("giftcard.eyebrow")}
            </p>
            <h2
              className="text-4xl sm:text-5xl font-light text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {t("giftcard.h2.1")}<br />
              <span className="text-gold">{t("giftcard.h2.2")}</span>
            </h2>
            <p className="text-[#c8d8d8] font-light leading-relaxed mb-4">
              {t("giftcard.p1")}
            </p>
            <p className="text-[#9bbfbf] font-light leading-relaxed mb-8">
              {t("giftcard.p2")}
            </p>

            {/* Details */}
            <div className="space-y-3 mb-10">
              {["giftcard.detail.0","giftcard.detail.1","giftcard.detail.2","giftcard.detail.3"].map((key) => (
                <div key={key} className="flex items-center gap-4">
                  <span className="w-4 h-px bg-gold shrink-0" />
                  <span className="text-[#c8d8d8] font-light text-sm">{t(key)}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+37120233733"
                className="px-8 py-4 bg-gold text-white text-sm tracking-[0.25em] uppercase hover:bg-[#a07840] transition-all duration-300 rounded-sm text-center"
              >
                {t("giftcard.cta.call")}
              </a>
              <a
                href="mailto:floutings1@gmail.com?subject=Dāvanu%20karte"
                className="px-8 py-4 border border-gold/40 text-gold text-sm tracking-[0.25em] uppercase hover:bg-gold/10 transition-all duration-300 rounded-sm text-center"
              >
                {t("giftcard.cta.email")}
              </a>
            </div>
            <p className="mt-4 text-[#6a8a8a] text-xs font-light">{t("giftcard.biletes")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
