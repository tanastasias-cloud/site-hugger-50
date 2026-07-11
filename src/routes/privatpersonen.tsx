import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/privatpersonen")({
  head: () => ({
    meta: [
      { title: "Coaching für Privatpersonen — GetGrow Academy Berlin" },
      {
        name: "description",
        content:
          "Career & Life Coaching für Privatpersonen in Berlin und online. Klarheit, Neuorientierung und konkrete Schritte — auf DE, EN, UA, RU.",
      },
    ],
  }),
  component: PrivatPage,
});

const TOPICS = [
  "Berufliche Neuorientierung",
  "Karriereentwicklung & nächste Stufe",
  "Werte, Stärken & Lebensziele",
  "Selbstführung und Resilienz",
  "Gründung & Selbstständigkeit",
  "Beziehungen & Lebensbalance",
  "Stress, Erschöpfung, Burnout-Prävention",
  "Ankommen in Deutschland",
];

function PrivatPage() {
  return (
    <SiteShell active="privat">
      <section className="page-hero split">
        <div className="page-hero-left">
          <div className="breadcrumb">
            <Link to="/">Start</Link> · Privatpersonen
          </div>
          <h1>
            Wachsen — <em>in Ihrem Tempo.</em>
          </h1>
          <p className="page-hero-text">
            Persönliches Coaching für Menschen, die an einem Wendepunkt stehen.
            Wir arbeiten ohne Schubladen, ohne Vorlagen, ohne Druck — mit
            Psychologie, Erfahrung und einem klaren Plan.
          </p>
        </div>
        <div className="page-hero-right">
          {[
            ["✦", "Format", "1:1 · online oder in Berlin"],
            ["✦", "Sprachen", "DE · EN · UA · RU · PL"],
            ["✦", "Dauer", "Einzelsitzung oder Paket (5–10 Termine)"],
            ["✦", "Investition", "Auf Anfrage · transparent"],
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
          <div className="sh-tag">Für Privatpersonen</div>
          <h2 className="sh-h2">
            Themen, mit denen Menschen <em>zu uns kommen</em>
          </h2>
        </div>
        <div className="two-col">
          <div className="intro-text">
            <p>
              Viele Lebensphasen lassen sich nicht „nebenbei" lösen. Ein
              Karrierewechsel, ein Umzug nach Deutschland, eine Gründung, eine
              Krise — solche Momente brauchen Raum, gute Fragen und einen
              Menschen, der zuhört und mitdenkt.
            </p>
            <p>
              Unser Coaching ist kein Ratschlag von außen. Es ist ein
              strukturierter Prozess, in dem Sie selbst Ihre Antworten finden —
              schneller, klarer und mit Begleitung.
            </p>

            <div className="highlight-box">
              <div className="hl-tag">Wie wir arbeiten</div>
              <p>
                Erstgespräch (kostenfrei) → gemeinsame Zielklärung → 5–10
                Sitzungen → konkrete Schritte zwischen den Terminen. Alles
                vertraulich, alles in Ihrem Tempo.
              </p>
            </div>

            <Link to="/kontakt" className="btn-dark">
              Kostenloses Erstgespräch →
            </Link>
          </div>

          <div>
            <div className="topics-header">Beispiele für Themen</div>
            <div className="topics-grid">
              {TOPICS.map((t) => (
                <div className="topic-item" key={t}>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="sh">
          <div className="sh-tag">Ohne Jobcenter</div>
          <h2 className="sh-h2">
            Auch ohne Jobcenter-Gutschein — <em>wir sind für Sie da</em>
          </h2>
        </div>
        <div className="intro-text" style={{ maxWidth: 780 }}>
          <p>
            Droht Ihnen eine Kündigung, möchten Sie sich beruflich neu orientieren oder haben
            (noch) keinen AVGS-Gutschein? Auch dann unterstützen wir Sie — im privaten Rahmen,
            unabhängig vom Jobcenter oder der Agentur für Arbeit.
          </p>
          <p style={{ fontSize: 13, color: "#888" }}>
            Diese Begleitung ist nicht über die AZAV-Zertifizierung gefördert. Format, Dauer und
            Honorar besprechen wir individuell im kostenlosen Erstgespräch.
          </p>
          <Link to="/kontakt" className="btn-dark">
            Kontakt aufnehmen →
          </Link>
        </div>
      </section>

      <section className="cta-strip">
        <div>
          <div className="cta-strip-tag">Bereit anzufangen?</div>
          <h2>Lassen Sie uns kennenlernen.</h2>
        </div>
        <div className="cta-btns">
          <Link to="/kontakt" className="btn-mint">
            Erstgespräch buchen
          </Link>
          <Link to="/unternehmen" className="btn-outline-w">
            Sie kommen aus einem Unternehmen? →
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
