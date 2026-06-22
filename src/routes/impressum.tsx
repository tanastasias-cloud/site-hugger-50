import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — GetGrow Academy Berlin" },
      {
        name: "description",
        content:
          "Impressum der GetGrow Academy GmbH, Berlin. Angaben nach § 5 TMG und § 55 RStV.",
      },
      { property: "og:title", content: "Impressum — GetGrow Academy Berlin" },
      {
        property: "og:description",
        content:
          "Impressum der GetGrow Academy GmbH, Berlin. Angaben nach § 5 TMG und § 55 RStV.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <SiteShell active="impressum">
      <section className="page-hero simple">
        <div className="breadcrumb">
          <Link to="/">Startseite</Link> · Impressum
        </div>
        <h1>
          <em>Impressum</em>
        </h1>
        <p className="page-hero-sub">
          Angaben gemäß § 5 TMG und § 55 Abs. 2 RStV.
        </p>
      </section>

      <section className="section white">
        <div className="impressum-content">
          <div className="impressum-block">
            <div className="info-tag">Anbieter</div>
            <div className="impressum-item">
              <span className="info-label">Firma</span>
              <span className="info-value">GetGrow Academy GmbH</span>
            </div>
            <div className="impressum-item">
              <span className="info-label">Adresse</span>
              <span className="info-value">
                Krausenstraße 9/10
                <br />
                10117 Berlin
                <br />
                Deutschland
              </span>
            </div>
            <div className="impressum-item">
              <span className="info-label">E-Mail</span>
              <span className="info-value">
                <a href="mailto:info@getgrow.academy">info@getgrow.academy</a>
              </span>
            </div>
            <div className="impressum-item">
              <span className="info-label">Telefon</span>
              <span className="info-value">
                <a href="tel:+4915736651515">+49 157 3665 1515</a>
              </span>
            </div>
          </div>

          <div className="impressum-block">
            <div className="info-tag">Vertretung</div>
            <div className="impressum-item">
              <span className="info-label">Geschäftsführer</span>
              <span className="info-value">ZAIENCHYK YULIIA</span>
            </div>
            <div className="impressum-item">
              <span className="info-label">Handelsregister</span>
              <span className="info-value">
                In Registrierung — Angaben werden nach Eintragung ergänzt.
              </span>
            </div>
            <div className="impressum-item">
              <span className="info-label">USt-IdNr.</span>
              <span className="info-value">
                Wird nach Erteilung durch das Finanzamt ergänzt.
              </span>
            </div>
          </div>

          <div className="impressum-block">
            <div className="info-tag">Inhaltlich verantwortlich</div>
            <p className="impressum-text">
              ZAIENCHYK YULIIA
              <br />
              GetGrow Academy GmbH
              <br />
              Krausenstraße 9/10, 10117 Berlin
            </p>
          </div>

          <div className="impressum-block">
            <div className="info-tag">Haftung für Inhalte</div>
            <p className="impressum-text">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          <div className="impressum-block">
            <div className="info-tag">Haftung für Links</div>
            <p className="impressum-text">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
              Betreiber der Seiten verantwortlich.
            </p>
          </div>

          <div className="impressum-block">
            <div className="info-tag">Streitschlichtung</div>
            <p className="impressum-text">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ec.europa.eu/consumers/odr
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder
              verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>

          <div className="impressum-block">
            <div className="info-tag">Bildnachweise</div>
            <p className="impressum-text">
              Alle Bilder, Markenzeichen und Textinhalte sind Eigentum der GetGrow Academy GmbH,
              soweit nicht anders gekennzeichnet.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
