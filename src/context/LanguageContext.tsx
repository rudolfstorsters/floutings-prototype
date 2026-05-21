"use client";

import { createContext, useContext, useState } from "react";
import { translations } from "@/lib/translations";

export type Lang = "lv" | "en" | "ru";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const Ctx = createContext<LangCtx>({
  lang: "lv",
  setLang: () => {},
  t: (k) => k,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("lv");
  const t = (key: string): string =>
    translations[key]?.[lang] ?? translations[key]?.lv ?? key;
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export const useLanguage = () => useContext(Ctx);
