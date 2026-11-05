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
      <div className="footer-certification">
        <img
          src="/certuria-azav-badge.jpg"
          alt="CERTURIA AZAV Trägerzulassung"
          width={500}
          height={112}
        />
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-text">
          <div className="footer-disclaimer">
            Keine Gewährleistung auf Vermittlungserfolg. § 296 SGB III / § 45 SGB III.
          </div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} GetGrow Academy GmbH · Alle Rechte vorbehalten.
          </div>
        </div>
        <div className="footer-inclusive">
        {/* Progress-Pride-Flagge in gedämpften Farben, damit sie zur ruhigen Optik der Seite passt */}
        <svg
          className="pride-flag"
          viewBox="0 0 60 40"
          width="45"
          height="30"
          role="img"
          aria-label="Progress-Pride-Flagge"
        >
          <defs>
            <clipPath id="pride-flag-clip">
              <rect width="60" height="40" rx="4" />
            </clipPath>
          </defs>
          <g clipPath="url(#pride-flag-clip)">
            <rect y="0" width="60" height="6.7" fill="#d4736f" />
            <rect y="6.67" width="60" height="6.7" fill="#e0a064" />
            <rect y="13.33" width="60" height="6.7" fill="#e3cf7f" />
            <rect y="20" width="60" height="6.7" fill="#70ad85" />
            <rect y="26.67" width="60" height="6.7" fill="#6f98cb" />
            <rect y="33.33" width="60" height="6.7" fill="#9a7fbb" />
            <polygon points="0,0 30,20 0,40" fill="#25211f" />
            <polygon points="0,4 24,20 0,36" fill="#8b624b" />
            <polygon points="0,8 18,20 0,32" fill="#92bfd8" />
            <polygon points="0,12 12,20 0,28" fill="#e1a9bd" />
            <polygon points="0,16 6,20 0,24" fill="#efe9dd" />
          </g>
        </svg>
        <span>Ein sicherer und inklusiver Raum für alle – LGBTQIA+-freundlich</span>
        </div>
      </div>
    </footer>
  );
}
