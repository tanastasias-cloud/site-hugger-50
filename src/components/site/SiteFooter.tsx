import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export function SiteFooter() {
  const { t } = useTranslation("common");
  return (
    <footer className="gg-footer">
      <div className="footer-logo" aria-label="GetGrow Academy Berlin">
        <div className="get">Get</div>
        <div className="div" />
        <div>
          <div className="grow">GROW</div>
          <div className="acad">Academy · Berlin</div>
        </div>
      </div>
      <div className="footer-contacts">
        <div className="footer-c">
          <div className="label">{t("footer.email")}</div>
          <div className="value">
            <a href="mailto:info@getgrow.academy">info@getgrow.academy</a>
          </div>
        </div>
        <div className="footer-c">
          <div className="label">{t("footer.phone")}</div>
          <div className="value">
            <a href="tel:+4915736651515">+49 157 3665 1515</a>
          </div>
        </div>
        <div className="footer-c">
          <div className="label">{t("footer.website")}</div>
          <div className="value">getgrow.academy</div>
        </div>
      </div>
      <div className="footer-legal">
        <Link to="/impressum">{t("footer.impressum")}</Link>
        <Link to="/datenschutz">{t("footer.datenschutz")}</Link>
      </div>
    </footer>
  );
}
