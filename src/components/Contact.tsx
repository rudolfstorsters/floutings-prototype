"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  const contactItems = [
    { icon: Phone,  labelKey: "contact.phone.label", value: "+371 20 233 733",          href: "tel:+37120233733",                                                                                                                                     descKey: "contact.phone.desc" },
    { icon: Mail,   labelKey: "contact.email.label", value: "floutings1@gmail.com",      href: "mailto:floutings1@gmail.com?subject=Floutings%20rezervācija&body=Sveiki%2C%0A%0AVēlos%20rezervēt%20flouting%20seansu.%0A%0APateicos!", descKey: "contact.email.desc" },
    { icon: MapPin, labelKey: "contact.addr.label",  value: "Brīvības 199C, Rīga",       href: "https://maps.google.com/?q=Hotel+Rija+VEF+Brivibas+199C+Riga",                                                                                        descKey: "contact.addr.desc" },
    { icon: Clock,  labelKey: "contact.hours.label", value: t("contact.hours.value"),    href: null,                                                                                                                                                    descKey: "contact.hours.desc" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#4a7c7c] text-xs tracking-[0.5em] uppercase mb-4 font-light">
            {t("contact.eyebrow")}
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-light text-[#2c3e50] leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {t("contact.h2.1")}
            <br />
            <span className="text-[#4a7c7c]">{t("contact.h2.2")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex gap-5 p-6 bg-white/70 border border-[#e8e0d0] rounded-sm hover:shadow-md transition-all duration-300 group">
                  <div className="shrink-0 w-10 h-10 bg-[#4a7c7c]/10 rounded-full flex items-center justify-center group-hover:bg-[#4a7c7c] transition-colors duration-300">
                    <Icon size={16} className="text-[#4a7c7c] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-[#8a8a8a] font-light mb-1">
                      {t(item.labelKey)}
                    </p>
                    <p className="font-light text-[#2c3e50] text-base">{item.value}</p>
                    <p className="text-xs text-[#6a6a6a] font-light mt-0.5">{t(item.descKey)}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.labelKey}
                  href={item.href}
                  target={item.href.startsWith("https://maps") ? "_blank" : undefined}
                  rel={item.href.startsWith("https://maps") ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={item.labelKey}>{content}</div>
              );
            })}

            {/* Map */}
            <div className="rounded-sm overflow-hidden border border-[#e8e0d0] h-48 bg-[#e8e0d0] relative">
              <iframe
                src="https://maps.google.com/maps?q=Hotel+Rija+VEF+Brivibas+199C+Riga&output=embed&z=15"
                className="w-full h-full"
                title="Floutings atrašanās vieta"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-[#8a8a8a] tracking-[0.2em] uppercase font-light">
                {t("contact.social")}
              </span>
              <div className="flex gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-[#e8e0d0] rounded-full flex items-center justify-center text-[#4a7c7c] hover:bg-[#4a7c7c] hover:text-white hover:border-[#4a7c7c] transition-all" aria-label="Facebook">
                  <span className="text-sm font-light">f</span>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-[#e8e0d0] rounded-full flex items-center justify-center text-[#4a7c7c] hover:bg-[#4a7c7c] hover:text-white hover:border-[#4a7c7c] transition-all" aria-label="YouTube">
                  <span className="text-sm font-light">▶</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick contact panel */}
          <div className="bg-[#2c3e50] rounded-sm p-10 flex flex-col justify-between">
            <div>
              <h3
                className="text-3xl md:text-4xl font-light text-white mb-4"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {t("contact.findus.title")}
              </h3>
              <p className="text-[#c8d8d8] font-light leading-relaxed mb-8">
                {t("contact.findus.text")}
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { boldKey: "contact.dir.transit", textKey: "contact.dir.transit.detail" },
                  { boldKey: "contact.dir.car",     textKey: "contact.dir.car.detail" },
                  { boldKey: "contact.dir.entrance",textKey: "contact.dir.entrance.detail" },
                ].map((dir) => (
                  <div key={dir.boldKey} className="flex items-start gap-3">
                    <span className="text-[#9bbfbf] text-sm mt-0.5">→</span>
                    <p className="text-[#c8d8d8] font-light text-sm">
                      <strong className="text-white">{t(dir.boldKey)}</strong>{" "}
                      {t(dir.textKey)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+37120233733"
                className="block w-full py-4 bg-[#4a7c7c] text-white text-sm tracking-[0.25em] uppercase text-center hover:bg-[#5a8c8c] transition-colors rounded-sm"
              >
                {t("contact.cta.call")}
              </a>
              <a
                href="mailto:floutings1@gmail.com?subject=Floutings%20rezervācija&body=Sveiki%2C%0A%0AVēlos%20rezervēt%20flouting%20seansu.%0A%0APateicos!"
                className="block w-full py-4 border border-white/20 text-white text-sm tracking-[0.25em] uppercase text-center hover:bg-white/10 transition-colors rounded-sm"
              >
                {t("contact.cta.email")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
