import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import deCommon from "./locales/de/common.json";
import deHome from "./locales/de/home.json";
import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";
import ruCommon from "./locales/ru/common.json";
import ruHome from "./locales/ru/home.json";

export const SUPPORTED_LANGS = ["de", "en", "ru"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

const resources = {
  de: { common: deCommon, home: deHome },
  en: { common: enCommon, home: enHome },
  ru: { common: ruCommon, home: ruHome },
};

if (!i18n.isInitialized) {
  void i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: "de",
      supportedLngs: SUPPORTED_LANGS,
      defaultNS: "common",
      ns: ["common", "home"],
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "navigator"],
        lookupLocalStorage: "gg-lang",
        caches: ["localStorage"],
      },
      react: { useSuspense: false },
    });
}

// Keep <html lang> in sync
if (typeof window !== "undefined") {
  const applyLang = (lng: string) => {
    document.documentElement.lang = lng;
  };
  applyLang(i18n.language || "de");
  i18n.on("languageChanged", applyLang);
}

export default i18n;
