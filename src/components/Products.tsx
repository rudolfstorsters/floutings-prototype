"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const PRODUCTS = [
  {
    id: "premium",
    numKey: "01",
    titleKey: "products.premium.title",
    tagKey: "products.premium.tag",
    shortKey: "products.premium.short",
    details: [
      { labelKey: "products.what",   textKey: "products.premium.what" },
      { labelKey: "products.use",    textKey: "products.premium.use" },
      { labelKey: "products.dose",   textKey: "products.premium.dose" },
      { labelKey: "products.sizes",  textKey: "products.premium.sizes" },
    ],
  },
  {
    id: "purified",
    numKey: "02",
    titleKey: "products.purified.title",
    tagKey: "products.purified.tag",
    shortKey: "products.purified.short",
    details: [
      { labelKey: "products.what",   textKey: "products.purified.what" },
      { labelKey: "products.use",    textKey: "products.purified.use" },
      { labelKey: "products.dose",   textKey: "products.purified.dose" },
      { labelKey: "products.sizes",  textKey: "products.purified.sizes" },
    ],
  },
  {
    id: "cosmetics",
    numKey: "03",
    titleKey: "products.cosmetics.title",
    tagKey: "products.cosmetics.tag",
    shortKey: "products.cosmetics.short",
    details: [
      { labelKey: "products.what",   textKey: "products.cosmetics.what" },
      { labelKey: "products.use",    textKey: "products.cosmetics.use" },
      { labelKey: "products.effect", textKey: "products.cosmetics.effect" },
    ],
  },
];

export default function Products() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="products" className="py-24 md:py-32 bg-[#faf8f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#4a7c7c] text-xs tracking-[0.5em] uppercase mb-4 font-light">
            {t("products.eyebrow")}
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-light text-[#2c3e50] leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {t("products.h2.1")}<br />
            <span className="text-[#4a7c7c]">{t("products.h2.2")}</span>
          </h2>
          <p className="mt-4 text-[#6a6a6a] font-light max-w-xl mx-auto">
            {t("products.subtitle")}
          </p>
        </div>

        {/* Product cards */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {PRODUCTS.map((p) => {
            const isOpen = open === p.id;
            return (
              <div
                key={p.id}
                className="bg-white/70 border border-[#e8e0d0] rounded-sm overflow-hidden transition-shadow duration-300 hover:shadow-md"
              >
                {/* Card header — always visible */}
                <button
                  onClick={() => setOpen(isOpen ? null : p.id)}
                  className="w-full flex items-center gap-6 p-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs font-light text-teal/40 shrink-0 w-6">
                    {p.numKey}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3
                        className="text-xl font-light text-[#2c3e50] group-hover:text-teal transition-colors"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        {t(p.titleKey)}
                      </h3>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-teal bg-teal/8 border border-teal/20 px-2 py-0.5 rounded-full font-light">
                        {t(p.tagKey)}
                      </span>
                    </div>
                    <p className="text-sm text-[#6a6a6a] font-light">{t(p.shortKey)}</p>
                  </div>
                  {/* Expand icon */}
                  <div className={`shrink-0 w-7 h-7 rounded-full border border-[#e0d8c8] flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-teal border-teal rotate-45" : "group-hover:border-teal"}`}>
                    <span className={`text-lg leading-none transition-colors ${isOpen ? "text-white" : "text-[#6a6a6a]"}`}>+</span>
                  </div>
                </button>

                {/* Expanded details */}
                <div className={`overflow-hidden transition-all duration-400 ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-6 pb-8 pt-2 border-t border-[#f0e8d8]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                      {p.details.map((d) => (
                        <div key={d.labelKey}>
                          <p className="text-[10px] tracking-[0.3em] uppercase text-teal/60 font-light mb-1">
                            {t(d.labelKey)}
                          </p>
                          <p className="text-sm text-[#4a4a4a] font-light leading-relaxed">
                            {t(d.textKey)}
                          </p>
                        </div>
                      ))}
                    </div>
                    {/* Order CTA */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#f0e8d8]">
                      <p className="text-xs text-[#8a8a8a] font-light self-center">{t("products.order.label")}</p>
                      <a
                        href="tel:+37120233733"
                        className="px-6 py-2.5 bg-teal text-white text-xs tracking-[0.2em] uppercase rounded-sm hover:bg-[#2c5c5c] transition-colors text-center"
                      >
                        {t("products.order.call")}
                      </a>
                      <a
                        href="mailto:floutings1@gmail.com?subject=Produktu%20pasūtījums"
                        className="px-6 py-2.5 border border-teal text-teal text-xs tracking-[0.2em] uppercase rounded-sm hover:bg-teal/8 transition-colors text-center"
                      >
                        {t("products.order.email")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
