"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const FAQ_COUNT = 10;

const FIRST_VISIT_STEPS = [
  "fv.step.0","fv.step.1","fv.step.2","fv.step.3","fv.step.4","fv.step.5",
];

export default function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);
  const [firstVisitOpen, setFirstVisitOpen] = useState(false);

  const faqs = Array.from({ length: FAQ_COUNT }, (_, i) => ({
    q: t(`faq.${i}.q`),
    a: t(`faq.${i}.a`),
  }));

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#faf8f4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#4a7c7c] text-xs tracking-[0.5em] uppercase mb-4 font-light">
            {t("faq.eyebrow")}
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-light text-[#2c3e50] leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {t("faq.h2.1")}
            <br />
            <span className="text-[#4a7c7c]">{t("faq.h2.2")}</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[#e8e0d0] rounded-sm overflow-hidden bg-white/60"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f5f0e8] transition-colors"
                aria-expanded={open === i}
              >
                <span
                  className="text-base font-light text-[#2c3e50] pr-4"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {faq.q}
                </span>
                <span className="shrink-0 text-teal">
                  {open === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-sm text-[#5a5a5a] font-light leading-relaxed border-t border-[#e8e0d0] pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* First Visit accordion */}
        <div className="mt-6 bg-[#4a7c7c]/8 border border-[#4a7c7c]/20 rounded-sm overflow-hidden">
          <button
            onClick={() => setFirstVisitOpen(!firstVisitOpen)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#4a7c7c]/10 transition-colors"
          >
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-teal font-light mb-0.5">{t("fv.eyebrow")}</p>
              <p className="text-lg font-light text-[#2c3e50]" style={{ fontFamily: "var(--font-cormorant)" }}>{t("fv.title")}</p>
            </div>
            <span className={`shrink-0 w-7 h-7 rounded-full border border-teal/30 flex items-center justify-center transition-all duration-300 ${firstVisitOpen ? "bg-teal rotate-45" : ""}`}>
              <span className={`text-lg leading-none ${firstVisitOpen ? "text-white" : "text-teal"}`}>+</span>
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-400 ${firstVisitOpen ? "max-h-200 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="px-6 pb-6 border-t border-[#4a7c7c]/10">
              <p className="text-sm text-[#5a5a5a] font-light mt-4 mb-5 leading-relaxed">{t("fv.intro")}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FIRST_VISIT_STEPS.map((key, i) => (
                  <div key={key} className="flex items-start gap-3">
                    <span className="text-xs text-teal/50 font-light shrink-0 mt-0.5 w-4">{String(i+1).padStart(2,"0")}</span>
                    <p className="text-sm text-[#4a4a4a] font-light leading-relaxed">{t(key)}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs text-[#8a8a8a] font-light">{t("fv.note")}</p>
            </div>
          </div>
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center p-8 bg-[#4a7c7c]/8 border border-[#4a7c7c]/20 rounded-sm">
          <p className="text-[#2c3e50] font-light mb-2">{t("faq.still.q")}</p>
          <p className="text-[#5a5a5a] text-sm font-light mb-4">{t("faq.still.a")}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+37120233733" className="text-[#4a7c7c] hover:text-[#2c5c5c] font-light transition-colors">
              +371 20 233 733
            </a>
            <span className="hidden sm:block text-[#c8d0d0]">·</span>
            <a href="mailto:floutings1@gmail.com" className="text-[#4a7c7c] hover:text-[#2c5c5c] font-light transition-colors">
              floutings1@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
