"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { useLanguage, type Lang } from "@/context/LanguageContext";

const NAV_KEYS = [
  { key: "nav.about",        href: "#about" },
  { key: "nav.benefits",     href: "#benefits" },
  { key: "nav.services",     href: "#services" },
  { key: "nav.gallery",      href: "#gallery" },
  { key: "nav.testimonials", href: "#testimonials" },
  { key: "nav.faq",          href: "#faq" },
  { key: "nav.contact",      href: "#contact" },
];

const LANGS: { code: Lang; label: string }[] = [
  { code: "lv", label: "LV" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#faf8f4]/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col leading-none group shrink-0"
          aria-label="Floutings – atgriezties uz sākumu"
        >
          <span
            className="text-2xl md:text-3xl font-light tracking-[0.15em] text-teal group-hover:text-[#2c5c5c] transition-colors"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            FLOUTINGS
          </span>
          <span className="text-[9px] tracking-[0.3em] text-warm mt-0.5 font-light">
            FLOATING UNIVERSE
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center" aria-label="Galvenā navigācija">
          {NAV_KEYS.map((link) => (
            <button
              key={link.key}
              onClick={() => scrollTo(link.href)}
              className="text-xs tracking-[0.2em] uppercase text-[#4a4a4a] hover:text-teal transition-colors font-light whitespace-nowrap"
            >
              {t(link.key)}
            </button>
          ))}
        </nav>

        {/* Desktop right: lang switcher + phone + CTA */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          {/* Language switcher */}
          <div className="flex items-center gap-px border border-[#e0dbd0] rounded-sm overflow-hidden">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2.5 py-1 text-[10px] tracking-[0.15em] font-light transition-colors ${
                  lang === l.code
                    ? "bg-teal text-white"
                    : scrolled
                    ? "text-[#4a4a4a] hover:bg-[#f0ebe0] hover:text-teal"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <a
            href="tel:+37120233733"
            className={`flex items-center gap-1.5 text-sm transition-colors ${
              scrolled ? "text-teal hover:text-[#2c5c5c]" : "text-white/80 hover:text-white"
            }`}
          >
            <Phone size={13} />
            <span className="tracking-wide text-xs">20 233 733</span>
          </a>

          <button
            onClick={() => scrollTo("#booking")}
            className="px-5 py-2.5 bg-teal text-white text-xs tracking-[0.2em] uppercase hover:bg-[#2c5c5c] transition-all duration-300 rounded-sm"
          >
            {t("nav.book")}
          </button>
        </div>

        {/* Mobile right: lang + phone */}
        <div className="lg:hidden flex items-center gap-3">
          <div className="flex items-center gap-px border border-white/20 rounded-sm overflow-hidden">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2 py-1 text-[9px] tracking-widest transition-colors ${
                  lang === l.code
                    ? "bg-teal text-white"
                    : scrolled
                    ? "text-[#4a4a4a] hover:text-teal"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <a
            href="tel:+37120233733"
            className={`flex items-center gap-1 text-sm transition-colors ${
              scrolled ? "text-teal" : "text-white/80"
            }`}
            aria-label="Zvanīt"
          >
            <Phone size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}
