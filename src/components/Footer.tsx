"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const FOOTER_LINK_KEYS = [
  { labelKey: "footer.link.about",        href: "#about" },
  { labelKey: "footer.link.benefits",     href: "#benefits" },
  { labelKey: "footer.link.services",     href: "#services" },
  { labelKey: "footer.link.romantic",     href: "#services" },
  { labelKey: "footer.link.gallery",      href: "#gallery" },
  { labelKey: "footer.link.testimonials", href: "#testimonials" },
  { labelKey: "footer.link.faq",          href: "#faq" },
  { labelKey: "footer.link.contact",      href: "#contact" },
  { labelKey: "footer.link.book",         href: "#booking" },
];

export default function Footer() {
  const { t } = useLanguage();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1a2e2e] text-[#c8d8d8]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <p
                className="text-3xl font-light text-white tracking-[0.15em] mb-1"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                FLOUTINGS
              </p>
              <p className="text-[9px] tracking-[0.4em] text-[#9bbfbf] font-light uppercase">
                Floating Universe
              </p>
            </div>
            <p className="text-sm font-light leading-relaxed text-[#9bbfbf] mb-6">
              {t("footer.tagline")}
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-[#4a7c7c]/40 rounded-full flex items-center justify-center text-[#9bbfbf] hover:bg-[#4a7c7c] hover:text-white hover:border-[#4a7c7c] transition-all"
                aria-label="Facebook">
                <span className="text-sm">f</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-[#4a7c7c]/40 rounded-full flex items-center justify-center text-[#9bbfbf] hover:bg-[#4a7c7c] hover:text-white hover:border-[#4a7c7c] transition-all"
                aria-label="YouTube">
                <span className="text-xs">▶</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase text-[#9bbfbf] font-light mb-6">
              {t("footer.nav.title")}
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINK_KEYS.map((link) => (
                <li key={link.labelKey}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm font-light text-[#c8d8d8] hover:text-white transition-colors text-left"
                  >
                    {t(link.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase text-[#9bbfbf] font-light mb-6">
              {t("footer.contact.title")}
            </h3>
            <div className="space-y-4">
              <a href="tel:+37120233733" className="flex items-start gap-3 group">
                <Phone size={14} className="text-[#4a7c7c] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-light group-hover:text-white transition-colors">+371 20 233 733</p>
                  <p className="text-xs text-[#7a9a9a] font-light">{t("footer.hours.call")}</p>
                </div>
              </a>
              <a href="mailto:floutings1@gmail.com?subject=Floutings%20rezervācija" className="flex items-start gap-3 group">
                <Mail size={14} className="text-[#4a7c7c] mt-0.5 shrink-0" />
                <p className="text-sm font-light group-hover:text-white transition-colors">floutings1@gmail.com</p>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-[#4a7c7c] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-light">Brīvības 199C, Rīga</p>
                  <p className="text-xs text-[#7a9a9a] font-light">Hotel Rija VEF, 1. stāvs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & CTA */}
          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase text-[#9bbfbf] font-light mb-6">
              {t("footer.hours.title")}
            </h3>
            <div className="space-y-2 mb-8">
              <div className="text-sm font-light text-[#9bbfbf]">{t("footer.hours.days")}</div>
              <div className="text-white text-xl font-light" style={{ fontFamily: "var(--font-cormorant)" }}>
                9:00 – 21:00
              </div>
              <p className="text-xs text-[#7a9a9a] font-light">{t("footer.hours.appt")}</p>
            </div>

            <button
              onClick={() => scrollTo("#booking")}
              className="w-full py-3 bg-[#4a7c7c] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#5a8c8c] transition-colors rounded-sm mb-3"
            >
              {t("footer.cta.book")}
            </button>
            <button
              onClick={() => scrollTo("#booking")}
              className="w-full py-3 border border-[#b8965a]/40 text-[#b8965a] text-xs tracking-[0.2em] uppercase hover:bg-[#b8965a]/10 transition-colors rounded-sm"
            >
              {t("footer.cta.gift")}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#4a7c7c]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#6a8a8a] font-light">
            © 2011–{new Date().getFullYear()} Floating Universe. {t("footer.copyright")}
          </p>
          <p className="text-xs text-[#6a8a8a] font-light">
            Rīga, Latvija · floutings1@gmail.com · +371 20 233 733
          </p>
        </div>
      </div>
    </footer>
  );
}
