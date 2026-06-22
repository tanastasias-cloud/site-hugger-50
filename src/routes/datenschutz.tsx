import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz — GetGrow Academy Berlin" },
      {
        name: "description",
        content:
          "Datenschutzerklärung der GetGrow Academy GmbH. Informationen zur Verarbeitung personenbezogener Daten.",
      },
      { property: "og:title", content: "Datenschutz — GetGrow Academy Berlin" },
      {
        property: "og:description",
        content:
          "Datenschutzerklärung der GetGrow Academy GmbH. Informationen zur Verarbeitung personenbezogener Daten.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <SiteShell active="impressum">
      <section className="page-hero simple">
        <div className="breadcrumb">
          <Link to="/">Startseite</Link> · Datenschutz
        </div>
        <h1>
          <em>Datenschutz</em>
        </h1>
        <p className="page-hero-sub">
          Hinweise zum Umgang mit personenbezogenen Daten.
        </p>
      </section>

      <section className="section white">
        <div className="impressum-content">
          <div className="impressum-block">
            <div className="info-tag">Hinweis</div>
            <p className="impressum-text">
              Diese Datenschutzerklärung wird vor dem Livegang der Website mit den
              projektspezifischen Details vervollständigt — unter anderem mit Angaben zu
              verwendeten Dienstleibern, Cookies, Speicherdauer und Ihren Betroffenenrechten.
            </p>
            <p className="impressum-text">
              Bei Fragen zum Datenschutz erreichen Sie uns unter:
            </p>
            <p className="impressum-text">
              GetGrow Academy GmbH
              <br />
              ZAIENCHYK YULIIA
              <br />
              Krausenstraße 9/10, 10117 Berlin
              <br />
              <a href="mailto:info@getgrow.academy">info@getgrow.academy</a>
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
