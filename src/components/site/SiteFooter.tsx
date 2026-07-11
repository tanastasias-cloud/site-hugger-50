import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="gg-footer">
      <div className="footer-logo" aria-label="GetGrow Academy Berlin">
        <div className="get">Get</div>
        <div className="div" />
        <div className="grow-stack">
          <div className="grow">GROW</div>
          <div className="acad">Academy · Berlin</div>
        </div>
      </div>
      <div className="footer-contacts">
        <div className="footer-c">
          <div className="label">E-Mail</div>
          <div className="value">
            <a href="mailto:info@getgrow.academy">info@getgrow.academy</a>
          </div>
        </div>
        <div className="footer-c">
          <div className="label">Telefon</div>
          <div className="value">
            <a href="tel:+4915736651515">+49 157 3665 1515</a>
          </div>
        </div>
        <div className="footer-c">
          <div className="label">Website</div>
          <div className="value">getgrow.academy</div>
        </div>
      </div>
      <div className="footer-legal">
        <Link to="/impressum">Impressum</Link>
        <Link to="/datenschutz">Datenschutz</Link>
      </div>
      <div className="footer-disclaimer">
        Keine Gewährleistung auf Vermittlungserfolg. § 296 SGB III / § 45 SGB III.
      </div>
    </footer>
  );
}
