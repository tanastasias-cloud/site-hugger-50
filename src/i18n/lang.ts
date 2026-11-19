// Sprachen der Website. Deutsch liegt auf den bestehenden Adressen, RU/UK unter /ru und /uk.
export type Lang = "de" | "ru" | "uk";
export type TLang = "ru" | "uk";

export const SITE = "https://getgrow.academy";
export const TLANGS: TLang[] = ["ru", "uk"];

export function isTLang(x: unknown): x is TLang {
  return x === "ru" || x === "uk";
}

/** Sprache aus dem URL-Pfad: /ru/... -> ru, /uk/... -> uk, sonst de. */
export function langFromPathname(pathname: string): Lang {
  const seg = pathname.split("/")[1];
  return isTLang(seg) ? seg : "de";
}

/** Pfad ohne Sprachpräfix: /ru/avgs-coaching -> /avgs-coaching, /ru -> /. */
export function basePath(pathname: string): string {
  const m = pathname.match(/^\/(ru|uk)(\/.*)?$/);
  const rest = m ? m[2] ?? "/" : pathname;
  const clean = rest.length > 1 ? rest.replace(/\/+$/, "") : rest;
  return clean || "/";
}

/** Adresse einer Seite in einer Sprache. Startseite: /ru statt /ru/. */
export function localizedPath(lang: Lang, base: string): string {
  if (lang === "de") return base;
  return base === "/" ? `/${lang}` : `/${lang}${base}`;
}

const TRANSLATED = [
  "/",
  "/privatpersonen",
  "/unternehmen",
  "/avgs-coaching",
  "/16k-coaching",
  "/coaches",
  "/referenzen",
  "/kontakt",
];

/** Gibt es von dieser Seite (ohne Sprachpräfix) eine RU/UK-Version? */
export function hasTranslation(base: string): boolean {
  return TRANSLATED.includes(base) || /^\/coaches\/[^/]+$/.test(base);
}

export const HTML_LANG: Record<Lang, string> = { de: "de", ru: "ru", uk: "uk" };
export const OG_LOCALE: Record<TLang, string> = { ru: "ru_RU", uk: "uk_UA" };
