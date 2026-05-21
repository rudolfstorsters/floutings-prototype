"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type Tab = "history" | "science" | "whofloats";

const SCIENCE_COUNT = 5;
const WF_COUNT = 10;

export default function FloatingInfo() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<Tab>("history");

  const tabs: { key: Tab; label: string }[] = [
    { key: "history",   label: t("info.tabs.history") },
    { key: "science",   label: t("info.tabs.science") },
    { key: "whofloats", label: t("info.tabs.whofloats") },
  ];

  return (
    <section id="floating-info" className="py-24 md:py-32 bg-[#faf8f4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-[#4a7c7c] text-xs tracking-[0.5em] uppercase mb-4 font-light">
            {t("info.eyebrow")}
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-light text-[#2c3e50] leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {t("info.tabs.history")}
            <span className="text-[#c8d0d0] mx-3 font-thin">|</span>
            {t("info.tabs.science")}
            <span className="text-[#c8d0d0] mx-3 font-thin">|</span>
            {t("info.tabs.whofloats")}
          </h2>
        </div>

        {/* Tab selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border border-[#e8e0d0] rounded-sm overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 text-sm font-light tracking-wide transition-colors duration-200 ${
                  activeTab === tab.key
                    ? "bg-[#4a7c7c] text-white"
                    : "text-[#4a7c7c] bg-white hover:bg-[#f5f0e8] border-r border-[#e8e0d0] last:border-r-0"
                }`}
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1rem" }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* History tab */}
        {activeTab === "history" && (
          <div className="max-w-3xl mx-auto">
            <p className="text-[#4a7c7c] text-xs tracking-[0.4em] uppercase mb-3 font-light">
              {t("info.history.eyebrow")}
            </p>
            <h3
              className="text-2xl sm:text-3xl font-light text-[#2c3e50] mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {t("info.history.title")}
            </h3>
            <div className="space-y-6">
              <p className="text-base font-light leading-relaxed text-[#4a4a4a]">
                {t("info.history.p1")}
              </p>
              <p className="text-base font-light leading-relaxed text-[#5a5a5a] pl-6 border-l-2 border-[#4a7c7c]/30 italic">
                {t("info.history.p2")}
              </p>
              <p className="text-base font-light leading-relaxed text-[#5a5a5a]">
                {t("info.history.p3")}
              </p>
            </div>
          </div>
        )}

        {/* Science tab */}
        {activeTab === "science" && (
          <div>
            <div className="max-w-3xl mx-auto mb-10">
              <p className="text-[#4a7c7c] text-xs tracking-[0.4em] uppercase mb-3 font-light">
                {t("info.science.eyebrow")}
              </p>
              <p className="text-base font-light leading-relaxed text-[#4a4a4a]">
                {t("info.science.intro")}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Array.from({ length: SCIENCE_COUNT }, (_, i) => (
                <div
                  key={i}
                  className="p-5 bg-white border border-[#e8e0d0] rounded-sm"
                >
                  <div className="text-[10px] tracking-[0.3em] text-[#4a7c7c]/50 font-light mb-2 uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4
                    className="text-lg font-light text-[#2c3e50] mb-3"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {t(`info.science.${i}.title`)}
                  </h4>
                  <p className="text-sm font-light leading-relaxed text-[#5a5a5a]">
                    {t(`info.science.${i}.text`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Who Floats tab */}
        {activeTab === "whofloats" && (
          <div>
            <div className="max-w-3xl mx-auto mb-10">
              <p className="text-[#4a7c7c] text-xs tracking-[0.4em] uppercase mb-3 font-light">
                {t("info.wf.eyebrow")}
              </p>
              <h3
                className="text-2xl sm:text-3xl font-light text-[#2c3e50]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {t("info.wf.title")}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Array.from({ length: WF_COUNT }, (_, i) => (
                <div
                  key={i}
                  className="p-5 bg-white border border-[#e8e0d0] rounded-sm"
                >
                  <div className="w-6 h-px bg-[#4a7c7c] mb-3" />
                  <h4
                    className="text-lg font-light text-[#2c3e50] mb-2"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {t(`info.wf.${i}.title`)}
                  </h4>
                  <p className="text-sm font-light leading-relaxed text-[#5a5a5a]">
                    {t(`info.wf.${i}.text`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
