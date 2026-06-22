import { useState } from "react";
import { Link } from "@tanstack/react-router";

type ActiveKey = "home" | "avgs" | "16k" | "life" | "coaches" | "contact";

export function SiteHeader({ active }: { active?: ActiveKey }) {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"DE" | "EN">("EN");

  const jobActive = active === "avgs" || active === "16k" || active === "life";

  return (
    <>
      <header className="gg-header">
        <Link to="/" className="gg-logo">
          <div className="gg-logo-get">Get</div>
          <div className="gg-logo-div" />
          <div className="gg-logo-text">
            <span className="gg-logo-grow">Grow</span>
            <span className="gg-logo-acad">Academy · Berlin</span>
          </div>
        </Link>

        <nav className="gg-nav">
          <Link to="/" className={`gg-nav-link${active === "home" ? " active" : ""}`}>
            Home
          </Link>

          <div className="gg-dropdown">
            <div className={`gg-dropdown-trigger${jobActive ? " active" : ""}`}>
              Job Coaching <span className="arrow">▾</span>
            </div>
            <div className="gg-dropdown-menu">
              <Link
                to="/avgs-coaching"
                className={`gg-dropdown-item${active === "avgs" ? " active" : ""}`}
              >
                <span className="gg-di-label">Program 01 · AVGS</span>
                <span className="gg-di-title">Job Coaching</span>
              </Link>
              <Link
                to="/16k-coaching"
                className={`gg-dropdown-item${active === "16k" ? " active" : ""}`}
              >
                <span className="gg-di-label">Program 02 · §16k SGB II</span>
                <span className="gg-di-title">Holistic Coaching</span>
              </Link>
            </div>
          </div>

          <Link to="/coaches" className={`gg-nav-link${active === "coaches" ? " active" : ""}`}>
            Coaches
          </Link>
          <Link to="/kontakt" className={`gg-nav-link${active === "contact" ? " active" : ""}`}>
            Contact
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
            Book free call
          </Link>
        </div>

        <button
          className="gg-burger"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </header>

      <div className={`gg-mobile-menu${open ? " open" : ""}`}>
        <Link to="/" className="gg-mobile-link" onClick={() => setOpen(false)}>
          Home
        </Link>
        <div className="gg-mobile-link" style={{ color: "#3d6b55", fontWeight: 500 }}>
          Job Coaching
        </div>
        <Link to="/avgs-coaching" className="gg-mobile-sub" onClick={() => setOpen(false)}>
          <span className="sub-label">Program 01 · AVGS</span>
          Job Coaching
        </Link>
        <Link to="/16k-coaching" className="gg-mobile-sub" onClick={() => setOpen(false)}>
          <span className="sub-label">Program 02 · §16k SGB II</span>
          Holistic Coaching
        </Link>
        <Link to="/coaches" className="gg-mobile-link" onClick={() => setOpen(false)}>
          Coaches
        </Link>
        <Link to="/kontakt" className="gg-mobile-link" onClick={() => setOpen(false)}>
          Contact
        </Link>
        <Link to="/kontakt" className="gg-mobile-cta" onClick={() => setOpen(false)}>
          Book free call →
        </Link>
      </div>
    </>
  );
}
