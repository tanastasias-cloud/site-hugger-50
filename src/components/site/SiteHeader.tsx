import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import logoAsset from "@/assets/logo.png.asset.json";
import { SUPPORTED_LANGS, LANG_STORAGE_KEY, type Lang } from "@/i18n";


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


export function SiteHeader({ active }: { active?: ActiveKey }) {
  const { t, i18n } = useTranslation("common");
  const [open, setOpen] = useState(false);
  const [jcOpen, setJcOpen] = useState(false);
  const [mobileJcOpen, setMobileJcOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const jcRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  const currentLang = (i18n.language?.slice(0, 2) as Lang) || "de";
  const jcActive = active === "jobcenter" || active === "avgs" || active === "16k";

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (jcRef.current && !jcRef.current.contains(e.target as Node)) {
        setJcOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const changeLang = (lng: Lang) => {
    void i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  return (
    <>
      <header className="gg-header">
        <Link to="/" className="gg-logo" aria-label="GetGrow Academy Berlin">
          <img
            src={logoAsset.url}
            alt="GetGrow Academy Berlin"
            className="gg-logo-img"
            width="180"
            height="60"
            loading="eager"
          />
        </Link>

        <nav className="gg-nav">
          <Link to="/" className={`gg-nav-link${active === "home" ? " active" : ""}`}>
            {t("nav.start")}
          </Link>
          <Link
            to="/privatpersonen"
            className={`gg-nav-link${active === "privat" ? " active" : ""}`}
          >
            {t("nav.privat")}
          </Link>
          <Link
            to="/unternehmen"
            className={`gg-nav-link${active === "unternehmen" ? " active" : ""}`}
          >
            {t("nav.unternehmen")}
          </Link>

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
              {t("nav.jobcenter")} <span className="arrow">▾</span>
            </button>
            <div className="gg-dropdown-menu" role="menu">
              <Link
                to="/avgs-coaching"
                className={`gg-dropdown-item${active === "avgs" ? " active" : ""}`}
                role="menuitem"
                onClick={() => setJcOpen(false)}
              >
                <span className="gg-di-label">{t("nav.avgs_label")}</span>
                <span className="gg-di-title">{t("nav.avgs_title")}</span>
              </Link>
              <Link
                to="/16k-coaching"
                className={`gg-dropdown-item${active === "16k" ? " active" : ""}`}
                role="menuitem"
                onClick={() => setJcOpen(false)}
              >
                <span className="gg-di-label">{t("nav.k16_label")}</span>
                <span className="gg-di-title">{t("nav.k16_title")}</span>
              </Link>
            </div>
          </div>

          <Link to="/coaches" className={`gg-nav-link${active === "coaches" ? " active" : ""}`}>
            {t("nav.coaches")}
          </Link>
          <Link to="/referenzen" className={`gg-nav-link${active === "referenzen" ? " active" : ""}`}>
            {t("nav.referenzen")}
          </Link>

        </nav>

        <div className="gg-right">
          <div ref={langRef} className={`gg-lang gg-lang-dd${langOpen ? " open" : ""}`}>
            <button
              type="button"
              className="gg-lang-trigger"
              aria-haspopup="true"
              aria-expanded={langOpen}
              aria-label={t("lang.switch_aria")}
              onClick={() => setLangOpen((v) => !v)}
            >
              {t(`lang.${currentLang}`)} <span className="arrow">▾</span>
            </button>
            <div className="gg-lang-menu" role="menu">
              {SUPPORTED_LANGS.map((lng) => (
                <button
                  key={lng}
                  type="button"
                  role="menuitem"
                  className={`gg-lang-item${currentLang === lng ? " active" : ""}`}
                  onClick={() => changeLang(lng)}
                >
                  {t(`lang.${lng}`)}
                </button>
              ))}
            </div>
          </div>
          <Link to="/kontakt" className="gg-cta">
            {t("nav.contact_cta")}
          </Link>
        </div>

        <button className="gg-burger" aria-label={t("nav.menu")} onClick={() => setOpen((v) => !v)}>
          <span /><span /><span />
        </button>
      </header>

      <div className={`gg-mobile-menu${open ? " open" : ""}`}>
        <Link to="/" className="gg-mobile-link" onClick={() => setOpen(false)}>{t("nav.start")}</Link>
        <Link to="/privatpersonen" className="gg-mobile-link" onClick={() => setOpen(false)}>{t("nav.privat")}</Link>
        <Link to="/unternehmen" className="gg-mobile-link" onClick={() => setOpen(false)}>{t("nav.unternehmen")}</Link>
        <button
          type="button"
          className="gg-mobile-link gg-mobile-parent"
          style={{ color: "#3d6b55", fontWeight: 500 }}
          onClick={() => setMobileJcOpen((v) => !v)}
          aria-expanded={mobileJcOpen}
        >
          {t("nav.jobcenter")} <span className="arrow" style={{ transform: mobileJcOpen ? "rotate(180deg)" : undefined }}>▾</span>
        </button>
        {mobileJcOpen && (
          <>
            <Link to="/avgs-coaching" className="gg-mobile-sub" onClick={() => setOpen(false)}>
              <span className="sub-label">{t("nav.avgs_label")}</span>
              {t("nav.avgs_title")}
            </Link>
            <Link to="/16k-coaching" className="gg-mobile-sub" onClick={() => setOpen(false)}>
              <span className="sub-label">{t("nav.k16_label")}</span>
              {t("nav.k16_title")}
            </Link>
          </>
        )}
        <Link to="/coaches" className="gg-mobile-link" onClick={() => setOpen(false)}>{t("nav.coaches")}</Link>
        <Link to="/referenzen" className="gg-mobile-link" onClick={() => setOpen(false)}>{t("nav.referenzen")}</Link>

        <div className="gg-mobile-lang">
          {SUPPORTED_LANGS.map((lng) => (
            <button
              key={lng}
              type="button"
              className={`gg-mobile-lang-item${currentLang === lng ? " active" : ""}`}
              onClick={() => changeLang(lng)}
            >
              {t(`lang.${lng}`)}
            </button>
          ))}
        </div>

        <Link to="/kontakt" className="gg-mobile-cta" onClick={() => setOpen(false)}>
          {t("nav.book_cta")}
        </Link>
      </div>
    </>
  );
}
