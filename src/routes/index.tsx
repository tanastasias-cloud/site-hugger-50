import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import yuliiaAsset from "@/assets/yuliia-zaienchyk.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GetGrow Academy Berlin · Coaching für Karriere, Leben und Unternehmen" },
      {
        name: "description",
        content:
          "Zertifiziertes Coaching in Berlin — für Privatpersonen, Unternehmen und Jobcenter-Kund:innen. AVGS & §16k SGB II anerkannt. DE · EN · UA · RU.",
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

const METHOD_ICONS: Record<string, React.ReactNode> = {
  compass: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <polygon points="15.5 8.5 10.5 10.5 8.5 15.5 13.5 13.5 15.5 8.5" fill="currentColor" fillOpacity="0.15" />
    </svg>
  ),
  network: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="5" cy="6" r="2.2" /><circle cx="19" cy="6" r="2.2" /><circle cx="12" cy="18" r="2.2" />
      <path d="M7 7l4 9M17 7l-4 9M7 6h10" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="M8 10v4M12 10v4M16 10v4M4 12h-1M21 12h-1M8 6V4M16 6V4" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3.5 3 14 0 18M12 3c-3 3.5-3 14 0 18" />
    </svg>
  ),
};

function HomePage() {
  return (
    <SiteShell active="home">
      {/* HERO */}
      <section className="gg-manifesto">
        <div className="gg-manifesto-inner">
          <div>
            <div className="eyebrow">Coaching Academy · Berlin</div>
            <h1>
              Wachsen,<br />
              <em>wo</em> Sie<br />
              stehen.
            </h1>
            <p className="hero-kicker">
              Karriere-Coaching, Bewerbungstraining und Jobvermittlung —
              mit <strong>direkten Kontakten zu Unternehmen und HR</strong>
              &nbsp;in Berlin und deutschlandweit.
            </p>
          </div>
          <div>
            <div className="rule" />
            <p>Wir begleiten Menschen, Teams und Organisationen in entscheidenden beruflichen Übergängen — mit Psychologie, Klarheit und einem konkreten Plan.</p>
            <p>Privat · über Ihr Unternehmen · oder mit AVGS/§16k gefördert vom Jobcenter. In Berlin und online, auf Deutsch, Englisch, Ukrainisch und Russisch.</p>
            <div className="cta-row">
              <Link to="/kontakt" className="primary">
                Kostenloses Erstgespräch
              </Link>
              <a href="#angebot" className="ghost">
                Unser Angebot ansehen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="gg-trust">
        <span>AZAV-zertifizierter Träger</span>
        <span>AVGS · §16k SGB II anerkannt</span>
        <span><strong>200+</strong> begleitete Klient:innen</span>
        <span>Direkte HR-Kontakte</span>
        <span>DE · EN · UA · RU</span>
      </div>

      {/* METHOD + DIRECT HR NETWORK — moved up: this is the differentiator */}
      <section className="gg-method">
        <div className="sh">
          <div className="sh-tag">Unsere Methodik · für alle Klient:innen</div>
          <h2 className="sh-h2">
            Was uns <em>anders</em> macht
          </h2>
        </div>
        <p className="gg-method-lede">
          Ob privat, über Ihr Unternehmen oder mit AVGS-Gutschein — unser Ansatz bleibt
          derselbe: psychologisch fundiertes Coaching, moderne Werkzeuge und ein echtes
          Netzwerk in den deutschen Arbeitsmarkt.
        </p>
        <div className="gg-method-grid">
          {[
            ["compass", "Ganzheitliche Methodik", "Wir starten bei Ihnen — Situation, Ziele, Sprache. Erst dann bauen wir Strategie, Bewerbungsunterlagen und Interviewvorbereitung darauf auf."],
            ["network", "Direkte Kontakte zu Unternehmen & HR", "Wir arbeiten eng mit Arbeitgebern und Personalverantwortlichen. Viele Vakanzen erreichen uns, bevor sie öffentlich ausgeschrieben werden — passende Profile empfehlen wir persönlich weiter."],
            ["ai", "KI-gestützt & ATS-optimiert", "Wir arbeiten mit ChatGPT und Claude und erstellen Unterlagen, die durch Applicant Tracking Systems (ATS) kommen — und beim Menschen dahinter überzeugen."],
            ["globe", "Coaching in Ihrer Sprache", "Deutsch, Englisch, Ukrainisch, Russisch — inklusive Kommunikation mit Behörden, Jobcenter und Arbeitgebern, wenn nötig."],
          ].map(([iconKey, title, text]) => (
            <div className="gg-method-card" key={title}>
              <div className="gg-method-icon">{METHOD_ICONS[iconKey]}</div>
              <div className="gg-method-title">{title}</div>
              <p className="gg-method-text">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* THREE DOORS */}
      <section className="gg-doors" id="angebot">
        <div className="gg-doors-head">
          <div>
            <div className="eyebrow">Drei Wege zu uns</div>
            <h2>
              Wofür sind Sie <em>hier?</em>
            </h2>
          </div>
          <p className="lede">
            Dieselbe Methodik, drei Rahmen: privat, im Unternehmen oder im
            Rahmen einer geförderten Maßnahme.
          </p>
        </div>

        <div className="gg-doors-grid">
          <Link to="/privatpersonen" className="door">
            <div className="door-num">01</div>
            <div className="door-tag">Für Privatpersonen</div>
            <div className="door-title">Karriere · Leben · Neuorientierung</div>
            <p className="door-text">
              Wenn Sie an einem Wendepunkt stehen — beruflich, persönlich
              oder beim Neuanfang in Deutschland. Wir arbeiten mit Ihrer
              ganzen Situation, nicht nur mit dem Lebenslauf.
            </p>
            <ul className="door-list">
              <li>Career & Life Coaching</li>
              <li>Selbstführung und Klarheit</li>
              <li>Neuorientierung & Reintegration</li>
            </ul>
            <span className="door-cta">Mehr erfahren</span>
          </Link>

          <Link to="/unternehmen" className="door">
            <div className="door-num">02</div>
            <div className="door-tag">Für Unternehmen</div>
            <div className="door-title">Teams · Führung · Integration</div>
            <p className="door-text">
              Coaching und Workshops für Organisationen, die mit
              internationalen Mitarbeitenden, Veränderungen und
              Führungsfragen arbeiten. Maßgeschneidert für Ihr Team.
            </p>
            <ul className="door-list">
              <li>Führungskräfte-Coaching</li>
              <li>Onboarding internationaler Talente</li>
              <li>Team-Workshops & Change-Begleitung</li>
            </ul>
            <span className="door-cta">Angebot anfragen</span>
          </Link>

          <Link to="/avgs-coaching" className="door">
            <div className="door-num">03</div>
            <div className="door-tag">Mit Jobcenter</div>
            <div className="door-title">AVGS · §16k SGB II</div>
            <p className="door-text">
              Vollständig vom Jobcenter finanziertes Coaching für
              Bürgergeld-Empfänger:innen. Vom Bewerbungstraining bis zur
              ganzheitlichen Stabilisierung Ihrer Lebenssituation.
            </p>
            <ul className="door-list">
              <li>AVGS-Job-Coaching · 56 UE</li>
              <li>§16k SGB II Ganzheitliches Coaching</li>
              <li>100 % gefördert · für Sie kostenfrei</li>
            </ul>
            <span className="door-cta">Programm ansehen</span>
          </Link>
        </div>
      </section>

      {/* FOUNDER MESSAGE */}
      <section className="gg-coach-intro">
        <div className="coach-intro-grid">
          <img
            src={yuliiaAsset.url}
            alt="Yuliia Zaienchyk"
            className="coach-intro-photo"
          />
          <div>
            <div className="coach-intro-tag">Gründerin · GetGrow Academy</div>
            <div className="coach-intro-name">Yuliia Zaienchyk</div>
            <div className="coach-intro-role">
              Mitgründerin · Psychologin · Job-Coach · Berlin seit 2015
            </div>
            <p className="coach-intro-bio">
              „Ich habe GetGrow Academy gegründet, weil ich selbst weiß, wie es
              ist, in Deutschland neu anzufangen. Bei uns bekommen Sie kein
              Standard-Coaching und keine leeren Versprechen — sondern ein Team,
              das den deutschen Arbeitsmarkt kennt, Ihre Sprache spricht und
              Ihre Situation versteht."
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

      {/* OUTCOMES */}
      <section className="gg-outcomes">
        <div className="sh">
          <div className="sh-tag">Was sich verändert</div>
          <h2 className="sh-h2">
            Vier Worte, die unsere Klient:innen <em>nennen</em>
          </h2>
        </div>
        <div className="outcomes-grid">
          {[
            ["Klarheit", "Sie wissen, wo Sie stehen — und wohin Sie wollen. Kein Rätselraten mehr."],
            ["Richtung", "Ein konkreter Plan: welche Rollen, welcher Markt, welcher nächste Schritt."],
            ["Selbstvertrauen", "Sie kennen Ihren Wert — unabhängig von Sprache, Pass oder Vorgeschichte."],
            ["Ergebnisse", "Ein neuer Job, ein gegründetes Unternehmen, ein Leben, das wieder trägt."],
          ].map(([word, text]) => (
            <div className="outcome-item" key={word}>
              <div className="outcome-word">{word}</div>
              <p className="outcome-text">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AVGS BANNER */}
      <section className="avgs-banner">
        <div>
          <div className="tag">Für Jobcenter-Kund:innen</div>
          <h3>
            Unser Coaching ist über AVGS — <em>zu 100 % gefördert</em> durch
            das Jobcenter.
          </h3>
        </div>
        <Link to="/avgs-coaching" className="btn-p" style={{ whiteSpace: "nowrap" }}>
          AVGS anfragen →
        </Link>
      </section>
    </SiteShell>
  );
}
