"use client";

import { useEffect, useState } from "react";
import { Phone, Tag, CalendarCheck, ImageIcon, Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MobileCTA() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("");

  const tabs = [
    { icon: Info,          labelKey: "mobile.about",   href: "#about"    },
    { icon: Tag,           labelKey: "mobile.prices",  href: "#services" },
    { icon: CalendarCheck, labelKey: "mobile.book",    href: "#booking",  primary: true },
    { icon: ImageIcon,     labelKey: "mobile.gallery", href: "#gallery"  },
    { icon: Phone,         labelKey: "mobile.call",    href: "tel:+37120233733", tel: true },
  ];

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 120);
      const sections = ["#about", "#services", "#booking", "#gallery", "#contact"];
      for (const id of [...sections].reverse()) {
        const el = document.querySelector(id);
        if (el && window.scrollY >= (el as HTMLElement).offsetTop - 200) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleTab(tab: typeof tabs[0]) {
    if (tab.tel) return;
    setActive(tab.href);
    document.querySelector(tab.href)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav
      aria-label="Mobilā navigācija"
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-500 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-dark-teal/92 backdrop-blur-xl border-t border-teal/25 pb-safe">
        <div className="flex items-stretch">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = active === tab.href;
            const label = t(tab.labelKey);

            if (tab.tel) {
              return (
                <a
                  key={tab.labelKey}
                  href={tab.href}
                  aria-label={label}
                  className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-[#7a9aaa] hover:text-[#9bbfbf] transition-colors"
                >
                  <Icon size={18} strokeWidth={1.5} />
                  <span className="text-[9px] tracking-[0.15em] uppercase font-light">{label}</span>
                </a>
              );
            }

            if (tab.primary) {
              return (
                <button
                  key={tab.labelKey}
                  onClick={() => handleTab(tab)}
                  aria-label={label}
                  className="flex-1 flex flex-col items-center justify-center gap-1 py-3 relative group"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-14 bg-teal rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#5a8c8c] group-active:scale-95 transition-all">
                    <Icon size={20} strokeWidth={1.5} className="text-white" />
                  </div>
                  <span className="mt-7 text-[9px] tracking-[0.15em] uppercase font-light text-[#9bbfbf]">{label}</span>
                </button>
              );
            }

            return (
              <button
                key={tab.labelKey}
                onClick={() => handleTab(tab)}
                aria-label={label}
                className={`flex-1 flex flex-col items-center justify-center gap-1 py-3 transition-colors ${
                  isActive ? "text-[#9bbfbf]" : "text-[#7a9aaa] hover:text-[#9bbfbf]"
                }`}
              >
                <Icon size={18} strokeWidth={1.5} />
                {isActive && (
                  <span className="absolute top-0 w-6 h-0.5 bg-teal rounded-full" />
                )}
                <span className="text-[9px] tracking-[0.15em] uppercase font-light">{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
