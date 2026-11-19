import { isTLang, type TLang } from "./lang";

/** Sprache aus dem Routen-Parameter. Ungültige Werte werden schon in $lang.tsx mit 404 abgelehnt. */
export const langOf = (param: string): TLang => (isTLang(param) ? param : "ru");
