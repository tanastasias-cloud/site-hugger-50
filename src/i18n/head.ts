import { pageHead } from "@/seo-schema";
import { mergeHead } from "@/lib/merge-head";
import type { TLang } from "./lang";

/** head() einer RU/UK-Seite: eigener title/description + canonical, hreflang, og:url, og:locale. */
export function i18nHead(
  lang: TLang,
  basePath: string,
  m: { title: string; description: string; ogTitle?: string; ogDescription?: string },
  extra?: ReturnType<typeof pageHead> & { scripts?: Array<Record<string, unknown>> },
) {
  return mergeHead(
    {
      meta: [
        { title: m.title },
        { name: "description", content: m.description },
        { property: "og:title", content: m.ogTitle ?? m.title },
        { property: "og:description", content: m.ogDescription ?? m.description },
        { property: "og:type", content: "website" },
      ],
    },
    extra ?? pageHead(basePath, lang),
  );
}
