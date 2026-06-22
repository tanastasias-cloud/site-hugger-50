import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

type ActiveKey = "home" | "avgs" | "16k" | "life" | "coaches" | "contact";

export function SiteShell({
  active,
  children,
}: {
  active?: ActiveKey;
  children: ReactNode;
}) {
  return (
    <div className="gg-body">
      <SiteHeader active={active} />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
