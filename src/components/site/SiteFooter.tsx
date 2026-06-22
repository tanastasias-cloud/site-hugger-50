export function SiteFooter() {
  return (
    <footer className="gg-footer">
      <div className="footer-logo">
        <div className="get">Get</div>
        <div className="div" />
        <div>
          <div className="grow">Grow</div>
          <div className="acad">Academy · Berlin</div>
        </div>
      </div>
      <div className="footer-contacts">
        <div className="footer-c">
          <div className="label">Email</div>
          <div className="value">
            <a href="mailto:info@getgrow.academy">info@getgrow.academy</a>
          </div>
        </div>
        <div className="footer-c">
          <div className="label">Phone</div>
          <div className="value">+49 157 3665 1515</div>
        </div>
        <div className="footer-c">
          <div className="label">Website</div>
          <div className="value">getgrow.academy</div>
        </div>
      </div>
      <div className="footer-legal">
        <a href="#">Impressum</a>
        <a href="#">Datenschutz</a>
      </div>
    </footer>
  );
}
