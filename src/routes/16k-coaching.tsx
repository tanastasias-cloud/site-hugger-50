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
  "Schuldenberatung & Finanzkompetenz",
  "Zeitmanagement & Selbstorganisation",
  "Stressresilienz & Selbstreflexion",
  "Überwindung psychischer Hürden",
  "Körperliche & mentale Stabilisierung",
  "Umgang mit Frustration & Aggression",
  "Business-Etikette & professionelles Auftreten",
  "Berufliche Ziele & berufliche Orientierung",
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
            ["🌍", "Sprachen", "DE · EN · UA · RU"],
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
                Beziehende von Bürgergeld, denen das Jobcenter einen §16k SGB II Gutschein
                ausgestellt hat.
              </p>
            </div>

            <div className="how-start-tag">So starten Sie</div>
            <p className="how-start-text">
              Wenden Sie sich an Ihre Jobcenter-Ansprechperson und beantragen Sie einen §16k SGB
              II Gutschein. Melden Sie sich anschließend bei uns — wir vereinbaren Ihr
              kostenloses Erstgespräch und kümmern uns um alles Weitere.
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
