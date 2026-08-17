import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { content, type Lang } from "@/i18n/content";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof content)["ru"] };

const LangContext = createContext<Ctx>({ lang: "ru", setLang: () => {}, t: content.ru });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang");
    if (saved === "en" || saved === "ru") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    if (window.location.pathname === "/") document.title = content[lang].meta.title;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: content[lang] }}>{children}</LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
