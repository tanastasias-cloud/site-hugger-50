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

function HomePage() {
  return (
    <SiteShell active="home">
      {/* MANIFEST HERO */}
      <section className="gg-manifesto">
        <div className="gg-manifesto-inner">
          <div>
            <div className="eyebrow">Coaching Academy · Berlin</div>
            <h1>
              Wachsen,<br />
              <em>wo</em> Sie<br />
              stehen.
            </h1>
          </div>
          <div>
            <div className="rule" />
            <p>GetGrow Academy begleitet Menschen, Teams und Organisationen in entscheidenden beruflichen Übergängen — mit Psychologie, Klarheit und einem konkreten Plan.</p>
            <p>Wir arbeiten mit Privatpersonen, mit Unternehmen und gemeinsam mit dem Jobcenter. In Berlin und online, auf Deutsch, Englisch, Ukrainisch und Russisch.</p>
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
        <span>DE · EN · UA · RU</span>
      </div>



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
            Unsere Arbeit folgt einem Prinzip: Coaching, das den Menschen
            ernst nimmt. Die Form passen wir an — privat, im Unternehmen
            oder im Rahmen einer geförderten Maßnahme.
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
              <li>AVGS-Job-Coaching</li>
              <li>§16k SGB II Ganzheitliches Coaching</li>
              <li>100 % gefördert · für Sie kostenfrei</li>
            </ul>
            <span className="door-cta">Programm ansehen</span>
          </Link>
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
              ist, in Deutschland neu anzufangen. Ich weiß, wie viel Kraft es
              kostet — und wie viel möglich wird, wenn man den richtigen
              Menschen an seiner Seite hat.
            </p>
            <p className="coach-intro-bio">
              Bei uns bekommen Sie kein Standard-Coaching und keine leeren
              Versprechen. Sie bekommen ein Team aus Coaches, die den deutschen
              Arbeitsmarkt kennen, Ihre Sprache sprechen und Ihre Situation
              verstehen — weil viele von uns diesen Weg selbst gegangen sind.
            </p>
            <p className="coach-intro-bio">
              Egal ob Sie beruflich neu ansetzen, sich selbstständig machen
              oder als Unternehmen mit uns arbeiten möchten: Wir hören zu, wir
              denken mit, und wir bringen Sie einen echten Schritt weiter."
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

      {/* METHOD + DIRECT HR NETWORK — for everyone, not only AVGS */}
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
            ["🧭", "Ganzheitliche Methodik", "Wir beginnen bei Ihnen — Ihrer Situation, Ihren Zielen, Ihrer Sprache. Erst dann bauen wir Strategie, Bewerbungsunterlagen und Interviewvorbereitung darauf auf."],
            ["🤝", "Direkte Kontakte zu Unternehmen & HR", "Wir arbeiten eng mit Arbeitgebern und Personalverantwortlichen. Viele Vakanzen erreichen uns, bevor sie öffentlich ausgeschrieben werden — und passende Profile werden persönlich weiterempfohlen."],
            ["🤖", "KI-gestützte, ATS-optimierte Bewerbung", "Wir arbeiten mit ChatGPT und Claude und erstellen Unterlagen, die durch Applicant Tracking Systems (ATS) kommen und beim Menschen auf der anderen Seite überzeugen."],
            ["🌍", "Coaching in Ihrer Sprache", "Deutsch, Englisch, Ukrainisch, Russisch — inklusive Kommunikation mit Behörden, Jobcenter und Arbeitgebern, wenn nötig."],
          ].map(([icon, title, text]) => (
            <div className="gg-method-card" key={title}>
              <div className="gg-method-icon">{icon}</div>
              <div className="gg-method-title">{title}</div>
              <p className="gg-method-text">{text}</p>
            </div>
          ))}
        </div>
        <div className="gg-method-note">
          Wie wir konkret mit Ihnen arbeiten — privat, über Ihr Unternehmen oder
          jobcenterfinanziert — besprechen wir im kostenlosen Erstgespräch.
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
