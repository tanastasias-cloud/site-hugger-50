import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import yuliiaPhoto from "@/assets/yuliia-zaienchyk.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GetGrow Academy Berlin · Coaching für Karriere, Leben und Unternehmen" },
      {
        name: "description",
        content:
          "Zertifiziertes Coaching in Berlin — für Privatpersonen, Unternehmen und Jobcenter-Kund:innen. AVGS & §16k SGB II anerkannt. DE · EN · UA · RU · PL.",
      },
      { property: "og:title", content: "GetGrow Academy Berlin" },
      {
        property: "og:description",
        content:
          "Coaching für Privatpersonen, Unternehmen und Jobcenter-Kund:innen. AZAV-zertifiziert.",
      },
    ],
  }),
  component: HomePage,
});

const DIFFERENTIATORS: Array<[string, string, string]> = [
  [
    "🧭",
    "Ganzheitliche Methodik",
    "Wir beginnen bei Ihnen — Ihrer Situation, Ihren Zielen, Ihrer Sprache. Erst dann bauen wir Strategie, Bewerbungsunterlagen und Interviewvorbereitung darauf auf.",
  ],
  [
    "🤝",
    "Direkte Kontakte zu Unternehmen & HR",
    "Wir arbeiten eng mit Arbeitgebern und Personalverantwortlichen. Viele Vakanzen erreichen uns, bevor sie öffentlich ausgeschrieben werden — und passende Profile werden persönlich weiterempfohlen.",
  ],
  [
    "🤖",
    "KI-gestützte, ATS-optimierte Bewerbung",
    "Wir arbeiten mit ChatGPT und Claude und erstellen Unterlagen, die durch Applicant Tracking Systems (ATS) kommen und beim Menschen auf der anderen Seite überzeugen.",
  ],
  [
    "🌍",
    "Coaching in Ihrer Sprache",
    "Deutsch, Englisch, Ukrainisch, Russisch, Polnisch — inklusive Kommunikation mit Behörden, Jobcenter und Arbeitgebern, wenn nötig.",
  ],
];

const DOORS: Array<[string, string, string, string, string[], string]> = [
  [
    "01",
    "Für Privatpersonen",
    "Karriere · Leben · Neuorientierung",
    "Wenn Sie an einem Wendepunkt stehen — beruflich, persönlich oder beim Neuanfang in Deutschland. Wir arbeiten mit Ihrer ganzen Situation, nicht nur mit dem Lebenslauf.",
    ["Career & Life Coaching", "Selbstführung und Klarheit", "Neuorientierung & Reintegration"],
    "/privatpersonen",
  ],
  [
    "02",
    "Für Unternehmen",
    "Teams · Führung · Integration",
    "Coaching und Workshops für Organisationen, die mit internationalen Mitarbeitenden, Veränderungen und Führungsfragen arbeiten. Maßgeschneidert für Ihr Team.",
    ["Führungskräfte-Coaching", "Onboarding internationaler Talente", "Team-Workshops & Change-Begleitung"],
    "/unternehmen",
  ],
  [
    "03",
    "Mit Jobcenter · AVGS · §16k SGB II",
    "100 % gefördert · für Sie kostenfrei",
    "Über den AVGS oder §16k SGB II zu 100 % durch das Jobcenter oder die Agentur für Arbeit förderbares Coaching — vom Bewerbungstraining bis zur ganzheitlichen Stabilisierung Ihrer Lebenssituation.",
    ["AVGS Job Coaching · 56 UE", "§16k SGB II Ganzheitliches Coaching", "AZAV-zertifiziert · anerkannt"],
    "/avgs-coaching",
  ],
];

const OUTCOMES: Array<[string, string]> = [
  ["Klarheit", "Sie wissen, wo Sie stehen — und wohin Sie wollen. Kein Rätselraten mehr."],
  ["Richtung", "Ein konkreter Plan: welche Rollen, welcher Markt, welcher nächste Schritt."],
  ["Selbstvertrauen", "Sie kennen Ihren Wert — unabhängig von Sprache, Pass oder Vorgeschichte."],
  ["Ergebnisse", "Ein neuer Job, ein gegründetes Unternehmen, ein Leben, das wieder trägt."],
];

function HomePage() {
  return (
    <SiteShell active="home">
      <div className="avgs-page">
        {/* HERO SPLIT */}
        <section className="page-hero split">
          <div className="page-hero-left">
            <div className="breadcrumb">Coaching Academy · Berlin</div>
            <h1>
              Wachsen, <em>wo</em> Sie stehen.
            </h1>
            <p className="page-hero-text">
              Karriere-Coaching, Bewerbungstraining und Jobvermittlung —
              ergebnisorientiert und individuell auf Ihre Situation zugeschnitten.
              Privat, über Ihr Unternehmen oder mit AVGS/§16k gefördert vom
              Jobcenter oder der Agentur für Arbeit.
            </p>
            <div className="cta-btns" style={{ marginTop: 32 }}>
              <Link to="/kontakt" className="btn-mint">
                Kostenloses Erstgespräch
              </Link>
              <Link to="/avgs-coaching" className="btn-outline-w" style={{ color: "var(--forest)", borderColor: "var(--forest)" }}>
                AVGS-Programm ansehen →
              </Link>
            </div>
          </div>
          <div className="page-hero-right">
            {[
              ["✓", "Zertifizierung", "AZAV-zertifiziert · AVGS & §16k anerkannt"],
              ["👥", "Erfahrung", "200+ begleitete Klient:innen"],
              ["🌍", "Sprachen", "DE · EN · UA · RU · PL"],
              ["📍", "Standort", "Berlin Mitte · online & vor Ort"],
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

        {/* FOUNDER — sage, compact, immediately after hero */}
        <section className="section sage founder-section">
          <div className="founder-inner">
            <img
              src={yuliiaPhoto}
              alt="Yuliia Zaienchyk"
              className="founder-photo"
            />
            <div className="founder-text">
              <div className="founder-tag">Gründerin · GetGrow Academy</div>
              <h2 className="founder-name">
                Yuliia <em>Zaienchyk</em>
              </h2>
              <div className="founder-role">Psychologin · Job-Coach · Berlin seit 2015</div>
              <p className="founder-bio">
                „Ich habe GetGrow Academy gegründet, weil ich selbst weiß, wie es ist, in
                Deutschland neu anzufangen. Bei uns bekommen Sie kein Standard-Coaching und
                keine leeren Versprechen — sondern ein Team, das den deutschen Arbeitsmarkt
                kennt, Ihre Sprache spricht und Ihre Situation versteht."
              </p>
              <Link
                to="/coaches/$slug"
                params={{ slug: "yuliia-zaienchyk" }}
                className="coach-intro-link"
              >
                Mehr über Yuliia →
              </Link>
            </div>
          </div>
        </section>

        {/* DIFFERENTIATORS — forest */}
        <section className="section forest spread">
          <div className="spread-top">
            <div className="sh light">
              <div className="sh-tag">Unsere Methodik · für alle Klient:innen</div>
              <h2 className="sh-h2">
                Was uns <em>anders</em> macht
              </h2>
            </div>
            <p className="direct-lead">
              Ob privat, über Ihr Unternehmen oder mit AVGS-Gutschein — unser Ansatz bleibt
              derselbe: psychologisch fundiertes Coaching, moderne Werkzeuge und ein echtes
              Netzwerk in den deutschen Arbeitsmarkt.
            </p>
          </div>
          <div className="direct-grid four">
            {DIFFERENTIATORS.map(([icon, title, text]) => (
              <div className="direct-card" key={title}>
                <div className="direct-icon">{icon}</div>
                <div className="direct-title">{title}</div>
                <div className="direct-text">{text}</div>
              </div>
            ))}
          </div>
          <p className="direct-footnote">
            Wie wir konkret mit Ihnen arbeiten — privat, über Ihr Unternehmen oder
            jobcenterfinanziert — besprechen wir im kostenlosen Erstgespräch.
          </p>
        </section>

        {/* THREE DOORS — white, module-style grid */}
        <section className="section white" id="angebot">
          <div className="sh">
            <div className="sh-tag">Drei Wege zu uns</div>
            <h2 className="sh-h2">
              Wofür sind Sie <em>hier?</em>
            </h2>
          </div>
          <p className="direct-lead" style={{ color: "#2a3a34" }}>
            Dieselbe Methodik, drei Rahmen: privat, im Unternehmen oder im Rahmen einer
            geförderten Maßnahme.
          </p>
          <div className="modules-grid">
            {DOORS.map(([num, tag, title, text, list, href]) => (
              <Link to={href} className="module-card door-link" key={num}>
                <div className="module-num">{num}</div>
                <div className="door-tag" style={{ marginBottom: 6 }}>{tag}</div>
                <div className="module-title">{title}</div>
                <div className="module-text">{text}</div>
                <ul className="door-list" style={{ marginTop: 16 }}>
                  {list.map((li) => <li key={li}>{li}</li>)}
                </ul>
                <span className="door-cta" style={{ marginTop: 20, display: "inline-block" }}>Mehr erfahren →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* OUTCOMES — off */}
        <section className="section off">
          <div className="sh">
            <div className="sh-tag">Was sich verändert</div>
            <h2 className="sh-h2">
              Vier Worte, die unsere Klient:innen <em>nennen</em>
            </h2>
          </div>
          <div className="modules-grid">
            {OUTCOMES.map(([word, text]) => (
              <div className="module-card" key={word}>
                <div className="module-title" style={{ fontFamily: "'Allura', cursive", fontSize: 40, color: "var(--green)", lineHeight: 1 }}>
                  {word}
                </div>
                <div className="module-text" style={{ marginTop: 12 }}>{text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA STRIP */}
        <section className="cta-strip">
          <div>
            <div className="cta-strip-tag">Bereit anzufangen?</div>
            <h2>Buchen Sie heute Ihr kostenloses Erstgespräch.</h2>
          </div>
          <div className="cta-btns">
            <Link to="/kontakt" className="btn-mint">
              Kostenloses Gespräch buchen
            </Link>
            <Link to="/avgs-coaching" className="btn-outline-w">
              AVGS-Programm ansehen →
            </Link>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
