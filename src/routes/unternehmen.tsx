import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/unternehmen")({
  head: () => ({
    meta: [
      { title: "Coaching für Unternehmen — GetGrow Academy Berlin" },
      {
        name: "description",
        content:
          "Führungskräfte-Coaching, Team-Workshops und Onboarding-Programme für internationale Talente. Maßgeschneidert für Berliner Unternehmen.",
      },
    ],
  }),
  component: UnternehmenPage,
});

const FORMATS = [
  ["Executive Coaching", "1:1-Begleitung für Führungskräfte in Übergangs- oder Wachstumsphasen."],
  ["Team-Workshops", "Halb- oder Ganztags-Formate: Kommunikation, Zusammenarbeit, Change."],
  ["Onboarding Programme", "Strukturierte Begleitung internationaler Mitarbeitender — fachlich, kulturell, persönlich."],
  ["Diversity & Inclusion", "Praxisorientierte Begleitung für inklusive Teams und faire Prozesse."],
  ["Karriere-Sprechstunden", "Wiederkehrende interne Termine als Benefit für Ihr Team."],
  ["Outplacement", "Faire, professionelle Begleitung in Trennungs- und Veränderungssituationen."],
];

function UnternehmenPage() {
  return (
    <SiteShell active="unternehmen">
      <section className="page-hero split">
        <div className="page-hero-left">
          <div className="breadcrumb">
            <Link to="/">Start</Link> · Unternehmen
          </div>
          <h1>
            Menschen entwickeln,<br />
            <em>damit Teams wachsen.</em>
          </h1>
          <p className="page-hero-text">
            Wir arbeiten mit Berliner Unternehmen, die ihre Mitarbeitenden
            ernst nehmen — besonders dort, wo internationale Teams, Wachstum
            und Veränderung aufeinandertreffen.
          </p>
        </div>
        <div className="page-hero-right">
          {[
            ["✦", "Formate", "Coaching · Workshops · Programme"],
            ["✦", "Sprachen", "DE · EN · UA · RU · PL"],
            ["✦", "Orte", "Vor Ort in Berlin · hybrid · remote"],
            ["✦", "Abrechnung", "Rechnung · USt-pflichtig"],
          ].map(([icon, label, value]) => (
            <div className="hero-badge-item" key={label}>
              <div className="badge-icon">{icon}</div>
              <div>
                <div className="badge-label">{label}</div>
                <div className="badge-value">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section sage">
        <div className="sh">
          <div className="sh-tag">Für Unternehmen</div>
          <h2 className="sh-h2">
            Unsere Formate für <em>Ihr Team</em>
          </h2>
        </div>

        <div className="topics-grid" style={{ maxWidth: 1320, margin: "0 auto" }}>
          {FORMATS.map(([title, desc]) => (
            <div className="topic-item wide" key={title}>
              <strong style={{ display: "block", marginBottom: 8, color: "var(--forest)" }}>
                {title}
              </strong>
              <span style={{ color: "#555", fontWeight: 300 }}>{desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-strip">
        <div>
          <div className="cta-strip-tag">Sprechen wir konkret</div>
          <h2>Angebot für Ihr Unternehmen anfordern.</h2>
        </div>
        <div className="cta-btns">
          <Link to="/kontakt" className="btn-mint">
            Angebot anfragen
          </Link>
          <a href="mailto:info@getgrow.academy" className="btn-outline-w">
            info@getgrow.academy →
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
