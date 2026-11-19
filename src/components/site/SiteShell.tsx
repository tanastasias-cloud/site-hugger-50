import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import type { Lang } from "@/i18n/lang";

type ActiveKey =
  | "home"
  | "privat"
  | "unternehmen"
  | "jobcenter"
  | "avgs"
  | "16k"
  | "coaches"
  | "referenzen"
  | "impressum"
  | "contact";

export function SiteShell({
  active,
  lang = "de",
  children,
}: {
  active?: ActiveKey;
  lang?: Lang;
  children: ReactNode;
}) {
  return (
    <div className="gg-body">
      <SiteHeader active={active} lang={lang} />
      <main>{children}</main>
      <SiteFooter lang={lang} />
    </div>
  );
}
