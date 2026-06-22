import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";



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
  const [open, setOpen] = useState(false);
  const [jcOpen, setJcOpen] = useState(false);
  const [mobileJcOpen, setMobileJcOpen] = useState(false);
  const [lang, setLang] = useState<"DE" | "EN">("DE");
  const jcRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      <header className="gg-header">
        <Link to="/" className="gg-logo" aria-label="GetGrow Academy Berlin">
          <div className="gg-logo-text">
            <span className="gg-logo-get">Get</span>
            <span className="gg-logo-grow">GROW</span>
            <span className="gg-logo-acad">Academy · Berlin</span>
          </div>
        </Link>

        <nav className="gg-nav">
          <Link to="/" className={`gg-nav-link${active === "home" ? " active" : ""}`}>
            Start
          </Link>
          <Link
            to="/privatpersonen"
            className={`gg-nav-link${active === "privat" ? " active" : ""}`}
          >
            Privatpersonen
          </Link>
          <Link
            to="/unternehmen"
            className={`gg-nav-link${active === "unternehmen" ? " active" : ""}`}
          >
            Unternehmen
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
              Mit Jobcenter <span className="arrow">▾</span>
            </button>
            <div className="gg-dropdown-menu" role="menu">
              <Link
                to="/avgs-coaching"
                className={`gg-dropdown-item${active === "avgs" ? " active" : ""}`}
                role="menuitem"
                onClick={() => setJcOpen(false)}
              >
                <span className="gg-di-label">Programm 01 · AVGS</span>
                <span className="gg-di-title">Job Coaching</span>
              </Link>
              <Link
                to="/16k-coaching"
                className={`gg-dropdown-item${active === "16k" ? " active" : ""}`}
                role="menuitem"
                onClick={() => setJcOpen(false)}
              >
                <span className="gg-di-label">Programm 02 · §16k SGB II</span>
                <span className="gg-di-title">Ganzheitliches Coaching</span>
              </Link>
            </div>
          </div>

          <Link to="/coaches" className={`gg-nav-link${active === "coaches" ? " active" : ""}`}>
            Coaches
          </Link>
          <Link to="/referenzen" className={`gg-nav-link${active === "referenzen" ? " active" : ""}`}>
            Referenzen
          </Link>

        </nav>

        <div className="gg-right">
          <div className="gg-lang">
            <button className={lang === "DE" ? "active" : ""} onClick={() => setLang("DE")}>
              DE
            </button>
            <button className={lang === "EN" ? "active" : ""} onClick={() => setLang("EN")}>
              EN
            </button>
          </div>
          <Link to="/kontakt" className="gg-cta">
            Erstgespräch
          </Link>
        </div>

        <button className="gg-burger" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          <span /><span /><span />
        </button>
      </header>

      <div className={`gg-mobile-menu${open ? " open" : ""}`}>
        <Link to="/" className="gg-mobile-link" onClick={() => setOpen(false)}>Start</Link>
        <Link to="/privatpersonen" className="gg-mobile-link" onClick={() => setOpen(false)}>Privatpersonen</Link>
        <Link to="/unternehmen" className="gg-mobile-link" onClick={() => setOpen(false)}>Unternehmen</Link>
        <button
          type="button"
          className="gg-mobile-link gg-mobile-parent"
          style={{ color: "#3d6b55", fontWeight: 500 }}
          onClick={() => setMobileJcOpen((v) => !v)}
          aria-expanded={mobileJcOpen}
        >
          Mit Jobcenter <span className="arrow" style={{ transform: mobileJcOpen ? "rotate(180deg)" : undefined }}>▾</span>
        </button>
        {mobileJcOpen && (
          <>
            <Link to="/avgs-coaching" className="gg-mobile-sub" onClick={() => setOpen(false)}>
              <span className="sub-label">Programm 01 · AVGS</span>
              Job Coaching
            </Link>
            <Link to="/16k-coaching" className="gg-mobile-sub" onClick={() => setOpen(false)}>
              <span className="sub-label">Programm 02 · §16k SGB II</span>
              Ganzheitliches Coaching
            </Link>
          </>
        )}
        <Link to="/coaches" className="gg-mobile-link" onClick={() => setOpen(false)}>Coaches</Link>
        <Link to="/referenzen" className="gg-mobile-link" onClick={() => setOpen(false)}>Referenzen</Link>

        <Link to="/kontakt" className="gg-mobile-cta" onClick={() => setOpen(false)}>
          Erstgespräch buchen →
        </Link>
      </div>
    </>
  );
}
