import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/16k-coaching")({
  head: () => ({
    meta: [
      { title: "Ganzheitliches Coaching · §16k SGB II — GetGrow Academy Berlin" },
      {
        name: "description",
        content:
          "Individuelles §16k SGB II Coaching für Ihre gesamte Lebenssituation — vollständig kostenfrei, gefördert durch das Jobcenter.",
      },
      { property: "og:title", content: "Ganzheitliches Coaching · §16k SGB II — GetGrow Academy Berlin" },
      {
        property: "og:description",
        content:
          "Individuelle Begleitung, die nicht nur die Jobsuche, sondern Ihre gesamte Lebenssituation berücksichtigt. Kostenfrei durch das Jobcenter.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SixteenKPage,
});

const TOPICS = [
  "SWOT-Analyse & Stärken",
  "Umgang mit Unsicherheit & fehlenden Zielen",
  "Stabilisierung der Lebenssituation",
  "Unterstützung bei der Wohnungssuche",
  "Begleitung bei Schulden- und Finanzfragen — Vermittlung an Fachstellen",
  "Zeitmanagement & Selbstorganisation",
  "Stressresilienz & Selbstreflexion",
  "Überwindung psychischer Hürden",
  "Körperliche & mentale Stabilisierung",
  "Umgang mit Frustration & Aggression",
  "Aufsuchende Betreuung — Begleitung im gewohnten Umfeld",
];

const FAQS: Array<[string, string]> = [
  [
    "Was unterscheidet dieses Programm vom klassischen Bewerbungscoaching?",
    "Beim Bewerbungscoaching geht es um konkrete Bewerbungsunterlagen und Vorstellungsgespräche. Das ganzheitliche Coaching setzt einen Schritt davor an: Wir arbeiten gemeinsam an dem, was Ihnen aktuell im Weg steht — sei es Stress, gesundheitliche Themen, Schulden oder fehlende Tagesstruktur —, damit Sie überhaupt wieder Kraft und Klarheit für den nächsten Schritt finden.",
  ],
  [
    "Muss ich über alles sprechen, was mich belastet?",
    "Nein. Sie entscheiden, worüber Sie sprechen möchten und in welchem Tempo. Vertrauen entsteht mit der Zeit — es gibt keinen Druck.",
  ],
  [
    "Was passiert, wenn ich nicht teilnehmen möchte oder abbreche?",
    "Die Teilnahme ist komplett freiwillig. Eine Ablehnung oder ein Abbruch hat keinerlei negative Auswirkungen auf Ihre Leistungen.",
  ],
  [
    "Bleibt mein Coach während des gesamten Programms gleich?",
    "Ja. Sie arbeiten durchgehend mit derselben Begleitperson zusammen, damit eine vertrauensvolle Zusammenarbeit entstehen kann.",
  ],
];

function SixteenKPage() {
  return (
    <SiteShell active="16k">
      <section className="page-hero split">
        <div className="page-hero-left">
          <div className="breadcrumb">
            <Link to="/">Startseite</Link> · Job Coaching · §16k SGB II
          </div>
          <h1>
            Ganzheitliches Coaching <em>· §16k SGB II</em>
          </h1>
          <p className="page-hero-text">
            Individuelle Begleitung, die nicht nur die Jobsuche umfasst — sondern Ihre gesamte
            Lebenssituation. Vollständig kostenfrei, gefördert durch das Jobcenter.
          </p>
        </div>
        <div className="page-hero-right">
          {[
            ["✓", "Kosten", "100 % kostenfrei · gefördert vom Jobcenter"],
            ["📋", "Programm", "§16k SGB II · für Bürgergeld-Beziehende"],
            ["🌍", "Sprachen", "DE · EN · UA · RU · PL"],
            ["🤝", "Ansatz", "Ganzheitlich · Psychologie + Coaching"],
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

      <section className="params-strip">
        <div className="params-strip-item">
          <div className="params-num">100 %</div>
          <div className="params-label">kostenfrei · gefördert vom Jobcenter</div>
        </div>
        <div className="params-strip-item">
          <div className="params-num">1:1</div>
          <div className="params-label">Persönliche Begleitung in Präsenz</div>
        </div>
        <div className="params-strip-item">
          <div className="params-num">↻</div>
          <div className="params-label">Dieselbe Begleitperson während des gesamten Programms</div>
        </div>
      </section>

      <section className="section sage">
        <div className="sh">
          <div className="sh-tag">Programm 02 · §16k SGB II</div>
          <h2 className="sh-h2">
            Ganzheitliches Coaching — <em>das ganze Bild</em>
          </h2>
        </div>
        <div className="two-col">
          <div className="intro-text">
            <p>
              Auf dem Weg in die Beschäftigung steht manchmal nicht nur ein fehlender Lebenslauf
              oder mangelnde Erfahrung im Weg. Es können Stress, Schulden, gesundheitliche
              Themen, eine Sprachbarriere sein — oder schlicht das Gefühl, nicht zu wissen, wo
              man anfangen soll.
            </p>
            <p>
              Das Programm §16k SGB II wurde genau für diese Situationen geschaffen. Es ist eine
              individuelle Begleitung, die nicht nur die Jobsuche, sondern Ihre Lebenssituation
              als Ganzes umfasst.
            </p>

            <div className="highlight-box">
              <div className="hl-tag">Vollständig kostenfrei</div>
              <p>
                Die Kosten werden vollständig von Ihrem Jobcenter übernommen. Für Sie entstehen
                in keiner Phase des Programms Ausgaben.
              </p>
            </div>

            <div className="highlight-box">
              <div className="hl-tag">Für wen es ist</div>
              <p>
                Wenn Stress, Schulden, gesundheitliche Themen, eine Sprachbarriere oder einfach
                das Gefühl, nicht zu wissen, wo man anfangen soll, Ihnen gerade im Weg stehen —
                dann ist dieses Programm für Sie gedacht. Voraussetzung: Bezug von Bürgergeld
                und ein §16k SGB II Gutschein vom Jobcenter.
              </p>
            </div>

            <div className="highlight-box">
              <div className="hl-tag">Format · persönlich vor Ort</div>
              <p>
                Die Begleitung findet grundsätzlich persönlich vor Ort statt — denn Vertrauen
                entsteht im direkten Gespräch. Nur in kurzfristigen, dringenden Ausnahmefällen
                ist auch ein digitaler Kontakt möglich.
              </p>
            </div>

            <div className="highlight-box">
              <div className="hl-tag">Eine Begleitperson — durchgehend</div>
              <p>
                Sie arbeiten während des gesamten Programms mit derselben Begleitperson zusammen
                — Sie müssen Ihre Geschichte nicht immer wieder neu erzählen.
              </p>
            </div>

            <div className="highlight-box">
              <div className="hl-tag">Freiwillig</div>
              <p>
                Die Teilnahme ist freiwillig. Wenn Sie das Programm ablehnen oder vorzeitig
                beenden möchten, entstehen Ihnen dadurch keine Nachteile.
              </p>
            </div>

            <div className="highlight-box">
              <div className="hl-tag">Aufsuchende Betreuung</div>
              <p>
                Auf Wunsch: Begleitung auch in Ihrem gewohnten Umfeld — zu Hause oder dort, wo
                Sie sich sicher fühlen, mit Ihrem Einverständnis.
              </p>
            </div>

            <div className="how-start-tag">So starten Sie</div>
            <p className="how-start-text">
              Wenden Sie sich an Ihre Jobcenter-Ansprechperson und beantragen Sie einen §16k SGB
              II Gutschein. Melden Sie sich anschließend bei uns — wir vereinbaren Ihr
              kostenloses Erstgespräch und kümmern uns um alles Weitere. Die Dauer wird
              individuell mit Ihnen und dem Jobcenter festgelegt — je nach Bedarf für mehrere
              Monate.
            </p>
            <Link to="/kontakt" className="btn-dark">
              Kostenloses Gespräch anfragen →
            </Link>
          </div>

          <div>
            <div className="topics-header">Woran wir arbeiten</div>
            <div className="topics-grid">
              {TOPICS.map((t) => (
                <div className="topic-item" key={t}>
                  {t}
                </div>
              ))}
              <div className="topic-item wide">
                Familie & Beziehungsgestaltung · Soziale Kompetenzen & Verhalten am Arbeitsplatz
              </div>
              <div className="topic-item wide">
                Weitere individuelle Hürden auf dem Weg in die Beschäftigung
              </div>
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
          <h2>Buchen Sie Ihr kostenloses Erstgespräch.</h2>
        </div>
        <div className="cta-btns">
          <Link to="/kontakt" className="btn-mint">
            §16k Beratung anfragen
          </Link>
          <Link to="/avgs-coaching" className="btn-outline-w">
            Suchen Sie AVGS? →
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
