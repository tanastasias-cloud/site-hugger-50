import { ru } from "./ru";
import { uk } from "./uk";
import type { TLang } from "./lang";

/** Alle Texte der RU/UK-Version. Deutsch bleibt direkt in den Routen unter src/routes. */
export const CONTENT: Record<TLang, typeof ru> = { ru, uk };
