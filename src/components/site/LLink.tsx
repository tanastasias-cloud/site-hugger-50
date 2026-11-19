import type { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { localizedPath, type Lang } from "@/i18n/lang";

/** Interner Link, der die aktuelle Sprache beibehält: <LLink lang="ru" to="/kontakt"> -> /ru/kontakt */
export function LLink({
  lang,
  to,
  className,
  style,
  onClick,
  children,
  ...rest
}: {
  lang: Lang;
  to: string;
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children: ReactNode;
  role?: string;
}) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={localizedPath(lang, to) as any}
      className={className}
      style={style}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Link>
  );
}
