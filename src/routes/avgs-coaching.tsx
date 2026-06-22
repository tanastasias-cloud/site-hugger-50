import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/avgs-coaching")({
  head: () => ({
    meta: [
      { title: "Job Coaching · AVGS — GetGrow Academy Berlin" },
      {
        name: "description",
        content:
          "Zertifiziertes Job Coaching, vollständig gefördert durch AVGS / Jobcenter. Von der Standortanalyse bis zur Vertragsunterschrift — Schritt für Schritt.",
      },
      { property: "og:title", content: "Job Coaching · AVGS — GetGrow Academy Berlin" },
      {
        property: "og:description",
        content:
          "Zertifiziertes Job Coaching, vollständig gefördert durch AVGS / Jobcenter. Mehrsprachig in Berlin und online.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AvgsPage,
});

const STEPS: Array<[string, string]> = [
  [
    "Standortanalyse & Strategie",
    "Wir erfassen Ihre Kompetenzen und Ziele und entwickeln einen klaren Aktionsplan für den deutschen Arbeitsmarkt. Wo Sie stehen, wohin Sie gehen können und wie Sie dorthin kommen.",
  ],
  [
    "Bewerbungsunterlagen",
    "Lebenslauf und Anschreiben, zugeschnitten auf deutsche Arbeitgeber. LinkedIn- und XING-Profile, die wahrgenommen werden. Wir wissen, was hier funktioniert — und was nicht.",
  ],
  [
    "Gezielte Jobsuche",
    "Wir analysieren den aktuellen Markt, identifizieren passende Stellen für Ihr Profil und entwickeln gemeinsam eine praktische, wirksame Suchstrategie.",
  ],
  [
    "Vorbereitung auf Vorstellungsgespräche",
    "Probegespräche, typische Arbeitgeberfragen, souveräne Selbstpräsentation — so lange geübt, bis es sich natürlich anfühlt. In Ihrer Sprache.",
  ],
  [
    "Laufende Coach-Begleitung",
    "Regelmäßige Einzelgespräche, ehrliches Feedback und volle Unterstützung über den gesamten Prozess hinweg — bis zur Vertragsunterschrift.",
  ],
];

const FAQS: Array<[string, string]> = [
  [
    "Was ist ein AVGS-Gutschein?",
    "Der AVGS (Aktivierungs- und Vermittlungsgutschein) ist ein Förderinstrument des Jobcenters oder der Agentur für Arbeit. Er übernimmt die gesamten Kosten für ein individuelles Coaching — für Sie ist es kostenfrei.",
  ],
  [
    "Wie lange dauert das Coaching?",
    "Die Dauer richtet sich nach Ihren Zielen und den Angaben auf Ihrem AVGS-Gutschein. Die Termine finden mindestens zweimal pro Woche statt.",
  ],
  [
    "Kann ich meinen Coach selbst wählen?",
    "Ja. Sie haben Anspruch auf ein kostenloses 30-minütiges Kennenlerngespräch, bevor Sie sich entscheiden. Wenn die Chemie nicht stimmt, finden wir eine bessere Begleitung für Sie.",
  ],
  [
    "In welchen Sprachen wird gecoacht?",
    "Deutsch ist die Hauptsprache. Ukrainisch, Russisch und Englisch sind als zusätzliche Optionen verfügbar — für die Coaching-Termine und für die Kommunikation mit dem Jobcenter.",
  ],
  [
    "Helfen Sie mir, einen AVGS-Gutschein zu erhalten?",
    "Ja — wir unterstützen Sie bei der Korrespondenz und können bei Bedarf an einem Beratungsgespräch mit Ihrer Jobcenter-Ansprechperson teilnehmen. Melden Sie sich, wir begleiten Sie durch den Prozess.",
  ],
];

function AvgsPage() {
  return (
    <SiteShell active="avgs">
      <section className="page-hero split">
        <div className="page-hero-left">
          <div className="breadcrumb">
            <Link to="/">Startseite</Link> · Job Coaching · AVGS
          </div>
          <h1>
            Job Coaching <em>· AVGS</em>
          </h1>
          <p className="page-hero-text">
            Vom ersten Gespräch bis zur Unterschrift des Arbeitsvertrags — zertifiziertes
            Coaching, vollständig durch das Jobcenter finanziert.
          </p>
        </div>
        <div className="page-hero-right">
          {[
            ["✓", "Kosten", "100 % kostenfrei · gefördert vom Jobcenter"],
            ["📋", "Zertifizierung", "AZAV-zertifiziert · AVGS akzeptiert"],
            ["🌍", "Sprachen", "DE · EN · UA · RU"],
            ["📍", "Format", "Online & vor Ort · Berlin"],
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

      <section className="section white">
        <div className="sh">
          <div className="sh-tag">Programm 01 · AVGS</div>
          <h2 className="sh-h2">
            Job Coaching — <em>Schritt für Schritt</em>
          </h2>
        </div>
        <div className="two-col">
          <div>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: "#666", marginBottom: 36 }}>
              Unsere zertifizierten Coaches begleiten Sie auf jedem Schritt — von der
              Standortanalyse bis zur Unterschrift Ihres Arbeitsvertrags. Wir kennen das deutsche
              System und zeigen Ihnen genau, wie Sie sich darin bewegen.
            </p>
            <div className="steps">
              {STEPS.map(([title, text], i) => (
                <div className="step-item" key={title}>
                  <div className="step-num-circle">{i + 1}</div>
                  <div>
                    <div className="step-title">{title}</div>
                    <p className="step-text">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="avgs-right">
            <div className="avgs-info-box">
              <div className="box-tag">So erhalten Sie Ihren AVGS-Gutschein</div>
              <p>
                Wenden Sie sich an Ihre Ansprechperson im Jobcenter oder bei der Agentur für
                Arbeit und beantragen Sie einen AVGS-Gutschein für Job Coaching. Sobald Sie ihn
                haben, melden Sie sich bei uns — wir organisieren das kostenlose Erstgespräch und
                kümmern uns um die Formalitäten. Auch bei der Antragstellung unterstützen wir Sie.
              </p>
              <div className="avgs-free-badge">
                <div className="free-title">Die Teilnahme ist vollständig kostenfrei.</div>
                <div className="free-sub">Alle Kosten werden vom Staat übernommen.</div>
              </div>
            </div>
            <div className="eligibility-box">
              <div className="elig-tag">Wer teilnehmen kann</div>
              <div className="elig-item">Arbeitslos gemeldet, Bezug von Bürgergeld oder Arbeitslosengeld</div>
              <div className="elig-item">Eingliederungsvereinbarung mit dem Jobcenter unterschrieben</div>
              <div className="elig-item">Beratungsgespräch mit der Jobcenter-Ansprechperson stattgefunden</div>
              <div className="elig-item">Beschäftigung gefährdet (Kündigung erhalten oder absehbar)</div>
            </div>
            <div className="cta-box">
              <div className="cta-box-text">Wir helfen auch bei der Beantragung des Gutscheins.</div>
              <Link to="/kontakt">Kontakt aufnehmen →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section off">
        <div className="sh">
          <div className="sh-tag">Fragen</div>
          <h2 className="sh-h2">
            Häufig <em>gestellt</em>
          </h2>
        </div>
        <div className="faq-list">
          {FAQS.map(([q, a]) => (
            <details className="faq-item" key={q}>
              <summary className="faq-q">{q}</summary>
              <div className="faq-a">{a}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="cta-strip">
        <div>
          <div className="cta-strip-tag">Bereit anzufangen?</div>
          <h2>Buchen Sie heute Ihr kostenloses Erstgespräch.</h2>
        </div>
        <div className="cta-btns">
          <Link to="/kontakt" className="btn-mint">
            Kostenloses Gespräch buchen
          </Link>
          <Link to="/16k-coaching" className="btn-outline-w">
            Auch §16k im Blick? →
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
