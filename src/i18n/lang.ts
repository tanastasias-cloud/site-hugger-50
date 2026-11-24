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

/**
 * Статьи: у каждой своя адресная пара RU/UK (slug отличается по языкам, немецкой версии нет).
 * Адреса должны совпадать с `slug` / `hreflang_pair` в frontmatter файлов src/content/articles/*.md.
 */
export const ARTICLE_GROUPS: Array<Record<TLang, string>> = [
  { ru: "/ru/stati/kak-poluchit-vaucher-avgs", uk: "/uk/statti/yak-otrymaty-vaucher-avgs" },
];

/** Статья «Как получить ваучер AVGS» на нужном языке (ссылка внизу страниц /ru|uk/avgs-coaching). */
export const AVGS_ARTICLE: Record<TLang, string> = ARTICLE_GROUPS[0];

/** Если pathname — статья, вернуть её адреса по языкам (для переключателя языка), иначе null. */
export function articleLangPaths(pathname: string): Record<TLang, string> | null {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return ARTICLE_GROUPS.find((g) => g.ru === clean || g.uk === clean) ?? null;
}

export const HTML_LANG: Record<Lang, string> = { de: "de", ru: "ru", uk: "uk" };
export const OG_LOCALE: Record<TLang, string> = { ru: "ru_RU", uk: "uk_UA" };
