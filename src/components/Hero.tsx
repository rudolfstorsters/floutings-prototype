"use client";

import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Fixed particle positions — computed once at module load (same on server & client).
// Using a simple LCG pseudo-random seeded sequence so values are deterministic.
function seededRand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0x100000000;
  };
}

const rand = seededRand(42);
const PARTICLES = Array.from({ length: 20 }, () => ({
  left: rand() * 100,
  top: rand() * 100,
  duration: 2 + rand() * 4,
  delay: rand() * 4,
}));

export default function Hero() {
  const { t } = useLanguage();

  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Galvenā sadaļa"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-[#1a2e2e] via-[#2c4444] to-[#1a2e2e]" />

      {/* Subtle animated water ripple */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 50%, rgba(74,124,124,0.4) 0%, transparent 70%)`,
          }}
        />
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#4a7c7c]/30 rounded-full"
            style={{
              width: `${400 + i * 300}px`,
              height: `${200 + i * 150}px`,
              animation: `pulse ${4 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Particles/stars – deterministic values to avoid SSR/client mismatch */}
      <div className="absolute inset-0 overflow-hidden">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animation: `pulse ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p className="text-[#9bbfbf] text-xs tracking-[0.5em] uppercase mb-8 font-light">
          {t("hero.eyebrow")}
        </p>

        {/* Main headline */}
        <h1
          className="text-white font-light leading-[1.1] mb-6"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            {t("hero.h1.1")}
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#9bbfbf]">
            {t("hero.h1.2")}
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            {t("hero.h1.3")}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-[#c8d8d8] text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10 mt-6">
          {t("hero.subtitle")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToBooking}
            className="w-full sm:w-auto px-10 py-4 bg-[#4a7c7c] text-white text-sm tracking-[0.25em] uppercase hover:bg-[#5a8c8c] transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            {t("hero.cta1")}
          </button>
          <button
            onClick={scrollToAbout}
            className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white text-sm tracking-[0.25em] uppercase hover:bg-white/10 transition-all duration-300 rounded-sm"
          >
            {t("hero.cta2")}
          </button>
        </div>

        {/* Trust badges */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-[#9bbfbf]">
          {[
            { value: "2011",      labelKey: "hero.badge.founded" },
            { value: "1×",        labelKey: "hero.badge.only.sub" },
            { value: "500+",      labelKey: "hero.badge.clients" },
            { value: "9–21",      labelKey: "hero.badge.hours" },
          ].map((badge) => (
            <div key={badge.labelKey} className="text-center">
              <div
                className="text-2xl text-white font-light"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {badge.value}
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase mt-1 opacity-70">
                {t(badge.labelKey)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors"
        aria-label="Ritināt uz leju"
        style={{ animation: "bounce 2s infinite" }}
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
