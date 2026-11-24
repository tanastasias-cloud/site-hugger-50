import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { LLink } from "./LLink";
import { UI } from "@/i18n/ui";
import { articleLangPaths, basePath, hasTranslation, localizedPath, type Lang } from "@/i18n/lang";

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

const SWITCH: Array<{ lang: Lang; label: string }> = [
  { lang: "de", label: "DE" },
  { lang: "ru", label: "RU" },
  { lang: "uk", label: "UA" },
];

export function SiteHeader({ active, lang = "de" }: { active?: ActiveKey; lang?: Lang }) {
  const [open, setOpen] = useState(false);
  const [jcOpen, setJcOpen] = useState(false);
  const [mobileJcOpen, setMobileJcOpen] = useState(false);
  const jcRef = useRef<HTMLDivElement>(null);
  const t = UI[lang].nav;

  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const base = basePath(pathname);
  // Статьи есть только на RU/UK (адреса разные) — переключатель ведёт RU ↔ UA, без DE
  const article = articleLangPaths(pathname);
  const switchItems = article
    ? SWITCH.filter((s) => s.lang !== "de").map((s) => ({ ...s, to: article[s.lang as "ru" | "uk"] }))
    : hasTranslation(base)
      ? SWITCH.map((s) => ({ ...s, to: localizedPath(s.lang, base) }))
      : [];
  const showSwitcher = switchItems.length > 0;

  const jcActive = active === "jobcenter" || active === "avgs" || active === "16k";

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (jcRef.current && !jcRef.current.contains(e.target as Node)) {
        setJcOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="gg-header">
        <LLink lang={lang} to="/" className="gg-logo" aria-label="GetGrow Academy Berlin">
          <div className="get">Get</div>
          <div className="div" />
          <div className="grow-stack">
            <div className="grow">GROW</div>
            <div className="acad">Academy · Berlin</div>
          </div>
        </LLink>

        <nav className="gg-nav">
          <LLink lang={lang} to="/" className={`gg-nav-link${active === "home" ? " active" : ""}`}>
            {t.home}
          </LLink>
          <LLink
            lang={lang}
            to="/privatpersonen"
            className={`gg-nav-link${active === "privat" ? " active" : ""}`}
          >
            {t.privat}
          </LLink>
          <LLink
            lang={lang}
            to="/unternehmen"
            className={`gg-nav-link${active === "unternehmen" ? " active" : ""}`}
          >
            {t.unternehmen}
          </LLink>

          <div
            ref={jcRef}
            className={`gg-dropdown${jcOpen ? " open" : ""}`}
          >
            <button
              type="button"
              className={`gg-dropdown-trigger${jcActive ? " active" : ""}`}
              aria-expanded={jcOpen}
              aria-haspopup="true"
              onClick={() => setJcOpen((v) => !v)}
            >
              {t.jobcenter} <span className="arrow">▾</span>
            </button>
            <div className="gg-dropdown-menu" role="menu">
              <LLink
                lang={lang}
                to="/avgs-coaching"
                className={`gg-dropdown-item${active === "avgs" ? " active" : ""}`}
                role="menuitem"
                onClick={() => setJcOpen(false)}
              >
                <span className="gg-di-label">{t.avgsLabel}</span>
                <span className="gg-di-title">{t.avgsTitle}</span>
              </LLink>
              <LLink
                lang={lang}
                to="/16k-coaching"
                className={`gg-dropdown-item${active === "16k" ? " active" : ""}`}
                role="menuitem"
                onClick={() => setJcOpen(false)}
              >
                <span className="gg-di-label">{t.k16Label}</span>
                <span className="gg-di-title">{t.k16Title}</span>
              </LLink>
            </div>
          </div>

          <LLink lang={lang} to="/coaches" className={`gg-nav-link${active === "coaches" ? " active" : ""}`}>
            {t.coaches}
          </LLink>
          <LLink lang={lang} to="/referenzen" className={`gg-nav-link${active === "referenzen" ? " active" : ""}`}>
            {t.referenzen}
          </LLink>
        </nav>

        <div className="gg-right">
          {showSwitcher && (
            <div className="gg-lang-switch" role="group" aria-label={UI[lang].switcherLabel}>
              {switchItems.map((s) => (
                <Link
                  key={s.lang}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  to={s.to as any}
                  hrefLang={s.lang}
                  lang={s.lang}
                  className={s.lang === lang ? "active" : undefined}
                  aria-current={s.lang === lang ? "true" : undefined}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}
          <LLink lang={lang} to="/kontakt" className="gg-cta">
            {t.cta}
          </LLink>
        </div>

        <button className="gg-burger" aria-label={t.menu} onClick={() => setOpen((v) => !v)}>
          <span /><span /><span />
        </button>
      </header>

      <div className={`gg-mobile-menu${open ? " open" : ""}`}>
        <LLink lang={lang} to="/" className="gg-mobile-link" onClick={closeMenu}>{t.home}</LLink>
        <LLink lang={lang} to="/privatpersonen" className="gg-mobile-link" onClick={closeMenu}>{t.privat}</LLink>
        <LLink lang={lang} to="/unternehmen" className="gg-mobile-link" onClick={closeMenu}>{t.unternehmen}</LLink>
        <button
          type="button"
          className="gg-mobile-link gg-mobile-parent"
          style={{ color: "#3d6b55", fontWeight: 500 }}
          onClick={() => setMobileJcOpen((v) => !v)}
          aria-expanded={mobileJcOpen}
        >
          {t.jobcenter} <span className="arrow" style={{ transform: mobileJcOpen ? "rotate(180deg)" : undefined }}>▾</span>
        </button>
        {mobileJcOpen && (
          <>
            <LLink lang={lang} to="/avgs-coaching" className="gg-mobile-sub" onClick={closeMenu}>
              <span className="sub-label">{t.avgsLabel}</span>
              {t.avgsTitle}
            </LLink>
            <LLink lang={lang} to="/16k-coaching" className="gg-mobile-sub" onClick={closeMenu}>
              <span className="sub-label">{t.k16Label}</span>
              {t.k16Title}
            </LLink>
          </>
        )}
        <LLink lang={lang} to="/coaches" className="gg-mobile-link" onClick={closeMenu}>{t.coaches}</LLink>
        <LLink lang={lang} to="/referenzen" className="gg-mobile-link" onClick={closeMenu}>{t.referenzen}</LLink>

        <LLink lang={lang} to="/kontakt" className="gg-mobile-cta" onClick={closeMenu}>
          {t.ctaMobile}
        </LLink>

        {showSwitcher && (
          <div className="gg-mobile-lang-row" role="group" aria-label={UI[lang].switcherLabel}>
            {switchItems.map((s) => (
              <Link
                key={s.lang}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                to={s.to as any}
                hrefLang={s.lang}
                lang={s.lang}
                className={s.lang === lang ? "active" : undefined}
                aria-current={s.lang === lang ? "true" : undefined}
                onClick={closeMenu}
              >
                {s.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
