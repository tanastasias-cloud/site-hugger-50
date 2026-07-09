import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import deCommon from "./locales/de/common.json";
import deHome from "./locales/de/home.json";
import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";
import ruCommon from "./locales/ru/common.json";
import ruHome from "./locales/ru/home.json";

export const SUPPORTED_LANGS = ["de", "en", "ru"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];
export const LANG_STORAGE_KEY = "gg-lang";

const resources = {
  de: { common: deCommon, home: deHome },
  en: { common: enCommon, home: enHome },
  ru: { common: ruCommon, home: ruHome },
};

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources,
    lng: "de", // deterministic for SSR — client applies stored/browser lang after hydration
    fallbackLng: "de",
    supportedLngs: SUPPORTED_LANGS,
    defaultNS: "common",
    ns: ["common", "home"],
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

function isLang(v: string | null | undefined): v is Lang {
  return !!v && (SUPPORTED_LANGS as readonly string[]).includes(v);
}

// Apply persisted / browser language after hydration to avoid SSR mismatch.
if (typeof window !== "undefined") {
  const applyHtmlLang = (lng: string) => {
    document.documentElement.lang = lng;
  };
  i18n.on("languageChanged", applyHtmlLang);

  const detect = (): Lang => {
    try {
      const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
      if (isLang(stored)) return stored;
    } catch {
      /* ignore */
    }
    const nav = window.navigator.language?.slice(0, 2).toLowerCase();
    if (isLang(nav)) return nav;
    return "de";
  };

  const target = detect();
  const apply = () => {
    if (i18n.language !== target) void i18n.changeLanguage(target);
    else applyHtmlLang(target);
  };
  // Defer past hydration
  if (typeof queueMicrotask === "function") {
    queueMicrotask(() => setTimeout(apply, 0));
  } else {
    setTimeout(apply, 0);
  }
}

export default i18n;
