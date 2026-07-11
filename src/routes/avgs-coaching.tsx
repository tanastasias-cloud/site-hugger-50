import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/avgs-coaching")({
  head: () => ({
    meta: [
      { title: "Job Coaching · AVGS — GetGrow Academy Berlin" },
      {
        name: "description",
        content:
          "Zertifiziertes Job Coaching, 100 % kostenlos mit AVGS · 56 Unterrichtseinheiten · hybrid, online oder in Präsenz in Berlin.",
      },
      { property: "og:title", content: "Job Coaching · AVGS — GetGrow Academy Berlin" },
      {
        property: "og:description",
        content:
          "Zertifiziertes Job Coaching, 100 % kostenlos mit AVGS · 56 Unterrichtseinheiten · hybrid, online oder in Präsenz.",
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
    "Gezielte Jobsuche & direkte HR-Kontakte",
    "Wir analysieren den aktuellen Markt, identifizieren passende Stellen für Ihr Profil und greifen dabei auf unser eigenes Netzwerk aus direkten Unternehmenskontakten und HR-Partnern zurück. Viele Stellen erreichen uns, bevor sie überhaupt öffentlich ausgeschrieben werden.",
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

const MODULE: Array<[string, string, string]> = [
  ["01", "Profiling & Standortanalyse · 7 UE", "Erfassung von Kompetenzen, Erfahrungen, Zielen. SWOT-Analyse und individueller Aktionsplan für den deutschen Arbeitsmarkt."],
  ["02", "Zielsetzung & Zeitmanagement · 6 UE", "Berufliche Ziele definieren, Arbeitsschritte planen, realistische Zeitachsen festlegen."],
  ["03", "Arbeitsmarkt & Berufsfeld-Analyse · 7 UE", "Der aktuelle Berliner und deutsche Arbeitsmarkt: Branchen, Berufsbilder, Anforderungen, Gehaltsniveaus."],
  ["04", "Selbstvermarktung & Selbstpräsentation · 6 UE", "Persönliche Positionierung, Körpersprache, Umgangsformen, professioneller Auftritt."],
  ["05", "Digitale Jobsuche & Netzwerkaufbau · 7 UE", "LinkedIn, XING und weitere Plattformen strategisch nutzen. Aufbau eines beruflichen Netzwerks in Deutschland."],
  ["06", "Vorstellungsgespräche & Mock-Interviews · 7 UE", "Typische Arbeitgeberfragen, Gehaltsverhandlung, souveräne Selbstpräsentation — trainiert bis es sitzt."],
  ["07", "KI-gestützte Bewerbung: ChatGPT & Claude · 10 UE", "Wir arbeiten mit modernen KI-Tools (ChatGPT, Claude) für Recherche, Anschreiben-Entwürfe und die Vorbereitung auf Interviews."],
  ["08", "ATS-optimierte Bewerbungsunterlagen · 6 UE", "Lebenslauf und Anschreiben, die durch Applicant Tracking Systems (ATS) kommen — Formatierung, Keywords, Struktur nach deutschem Standard."],
];

const FAQS: Array<[string, React.ReactNode]> = [
  [
    "Wie finden Sie passende Stellen für mich?",
    "Wir kombinieren klassische Jobsuche mit unserem eigenen Netzwerk aus direkten Unternehmens- und HR-Kontakten. Das bedeutet: neben öffentlichen Stellenanzeigen greifen wir auch auf Vakanzen zurück, die uns direkt zugespielt werden — und vermitteln Sie persönlich weiter, wenn Ihr Profil passt.",
  ],
  [
    "Was ist ein AVGS-Gutschein?",
    "Der AVGS (Aktivierungs- und Vermittlungsgutschein) ist ein Berechtigungsschein, den Sie von Ihrer Agentur für Arbeit oder Ihrem Jobcenter erhalten. Mit diesem Gutschein können Sie sich kostenlos einen zugelassenen Bildungsträger — wie uns — für Ihr Coaching aussuchen. Die Kosten übernimmt vollständig der Staat.",
  ],
  [
    "Wie lange dauert das Coaching?",
    "In der Regel rund 2 Monate, mit mindestens zwei Terminen pro Woche. Insgesamt umfasst das Programm 56 Unterrichtseinheiten. Die genaue Verteilung passen wir gemeinsam an Ihre Situation an.",
  ],
  [
    "Kann ich meinen Coach selbst wählen?",
    "Ja. Sie lernen Ihren Coach im kostenlosen Erstgespräch kennen. Passt es menschlich nicht, sprechen Sie uns an — wir finden gemeinsam eine passende Lösung.",
  ],
  [
    "In welchen Sprachen wird gecoacht?",
    "Deutsch ist die Hauptsprache. Zusätzlich coachen wir aktuell auf Ukrainisch, Russisch, Polnisch und Englisch — auch in der Kommunikation mit dem Jobcenter.",
  ],
  [
    "Helfen Sie mir, einen AVGS-Gutschein zu erhalten?",
    "Ja. Sprechen Sie zunächst mit Ihrer Ansprechperson im Jobcenter oder der Agentur für Arbeit und beantragen Sie einen AVGS für Job Coaching. Sobald Sie ihn haben, melden Sie sich bei uns — wir übernehmen den Rest und kümmern uns auch um die Formalitäten.",
  ],
  [
    "Bekomme ich ein Zertifikat?",
    "Ja. Nach erfolgreichem Abschluss erhalten Sie das Teilnehmerzertifikat der GetGrow Academy Berlin mit Angaben zu Inhalt, Dauer und Zielen des Coachings. Zwei verpflichtende Check-Gespräche (Check 1 und Check 2) begleiten den Fortschritt und sind Voraussetzung für das Zertifikat.",
  ],
  [
    "Nutzen Sie KI-Tools im Coaching?",
    "Ja — bewusst und angeleitet. Wir arbeiten unter anderem mit ChatGPT und Claude, um Bewerbungen ATS-optimiert zu erstellen, Anschreiben zu verfeinern und Sie gezielt auf Interviews vorzubereiten. So bekommen Sie sowohl das Handwerk als auch die aktuellen Werkzeuge des Arbeitsmarkts.",
  ],
  [
    "Wo findet das Coaching statt?",
    "Hybrid: online und in Präsenz in unseren Räumen im Mindspace, Krausenstraße 9/10, 10117 Berlin (Mitte). Sie wählen das Format, das zu Ihrem Alltag passt — oder kombinieren beide.",
  ],
  [
    "Was passiert, wenn ich abbreche oder die Maßnahme nicht zu mir passt?",
    "Sie können die Teilnahme jederzeit kostenfrei beenden. Innerhalb der ersten 14 Tage nach Vertragsabschluss haben Sie zudem ein generelles Rücktrittsrecht. Ihnen entstehen dadurch keine Nachteile.",
  ],
  [
    "Was, wenn ich keinen AVGS-Gutschein bekomme oder mein Fall nicht passt?",
    (
      <>
        Auch ohne Gutschein können wir Sie unterstützen — im privaten Rahmen.{" "}
        <Link to="/privatpersonen">Mehr für Privatpersonen →</Link>
      </>
    ),
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
            ["🌍", "Sprachen", "DE · EN · UA · RU · PL"],
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

      <section className="params-strip">
        <div className="params-strip-item">
          <div className="params-num">100 %</div>
          <div className="params-label">kostenlos mit AVGS</div>
        </div>
        <div className="params-strip-item">
          <div className="params-num">56</div>
          <div className="params-label">Unterrichtseinheiten</div>
        </div>
        <div className="params-strip-item">
          <div className="params-num">3</div>
          <div className="params-label">Formate · hybrid, online oder Präsenz</div>
        </div>
      </section>

      <section className="section forest">
        <div className="sh light">
          <div className="sh-tag">Unser Vorteil</div>
          <h2 className="sh-h2">
            Direkte Kontakte zu <em>Unternehmen & HR</em>
          </h2>
        </div>
        <p className="direct-lead">
          Anders als reine Bewerbungsberatungen arbeiten wir eng mit Arbeitgebern und
          Personalverantwortlichen zusammen. Das bedeutet für Sie: echte Stellen, direkte
          Vermittlungswege und oft eine Verbindung, die Sie allein über Jobbörsen nicht
          finden.
        </p>
        <div className="direct-grid">
          {[
            [
              "🔍",
              "Stellen, die noch nicht öffentlich sind",
              "Wir bekommen Vakanzen direkt von Unternehmen und HR-Partnern — mitunter bevor sie überhaupt online ausgeschrieben werden.",
            ],
            [
              "🤝",
              "Direkte Empfehlung statt anonyme Bewerbung",
              "Wenn Ihr Profil passt, vermitteln wir Sie persönlich weiter. Ihre Bewerbung landet nicht im digitalen Nirwana, sondern bei der richtigen Person.",
            ],
            [
              "⚡",
              "Passgenauer, schneller Match",
              "Weil wir die Unternehmen kennen, wissen wir, wen sie wirklich suchen — und was Sie konkret mitbringen müssen, um dort erfolgreich zu sein.",
            ],
          ].map(([icon, title, text]) => (
            <div className="direct-card" key={title}>
              <div className="direct-icon">{icon}</div>
              <div className="direct-title">{title}</div>
              <div className="direct-text">{text}</div>
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
              Standortanalyse bis zur Unterschrift Ihres Arbeitsvertrags. Das Programm dauert
              in der Regel rund 2 Monate, mit mindestens zwei Terminen pro Woche — individuell
              auf Ihre Bedürfnisse abgestimmt.
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

            <div className="highlight-box" style={{ marginTop: 32 }}>
              <div className="hl-tag">Was Sie am Ende erhalten</div>
              <p>
                Am Ende des Programms erhalten Sie ein Teilnahmezertifikat mit Angaben zu
                Inhalt, Dauer und Ziel des Coachings — auch bei vorzeitigem Abschluss.
              </p>
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
            </div>
            <div className="cta-box">
              <div className="cta-box-text">Wir helfen auch bei der Beantragung des Gutscheins.</div>
              <Link to="/kontakt">Kontakt aufnehmen →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section sage">
        <div className="sh">
          <div className="sh-tag">8 Module · 56 Unterrichtseinheiten</div>
          <h2 className="sh-h2">
            Inhalte <em>im Detail</em>
          </h2>
        </div>
        <p className="direct-lead" style={{ color: "#2a3a34" }}>
          Hybrid · online oder in Präsenz im Mindspace, Krausenstraße 9/10, 10117 Berlin.
          Zwei verpflichtende Check-Gespräche (Check 1 & Check 2) begleiten Ihren Fortschritt —
          Abschluss mit Teilnehmerzertifikat der GetGrow Academy Berlin.
        </p>
        <div className="modules-grid">
          {MODULE.map(([num, title, text]) => (
            <div className="module-card" key={num}>
              <div className="module-num">{num}</div>
              <div className="module-title">{title}</div>
              <div className="module-text">{text}</div>
            </div>
          ))}
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
            <details className="faq-item" key={q as string}>
              <summary className="faq-q">{q}</summary>
              <div className="faq-a">{a}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="section legal-disclaimer">
        <div className="legal-disclaimer-inner">
          <div className="legal-disclaimer-tag">Rechtlicher Hinweis</div>
          <h2 className="legal-disclaimer-title">
            Keine Garantie der Vermittlung oder Einstellung
          </h2>
          <p className="legal-disclaimer-text">
            GetGrow Academy Berlin unterstützt Sie bei der Vorbereitung auf den Arbeitsmarkt, der Optimierung Ihrer Bewerbungsunterlagen und der Herstellung von Kontakten zu Unternehmen und HR-Verantwortlichen. Wir geben jedoch <strong>keine verbindliche Zusage oder Garantie</strong>, dass Sie nach Abschluss des Coachings eine Stelle erhalten.
          </p>
          <p className="legal-disclaimer-text">
            Die Vermittlung in Arbeit oder Ausbildung ist von vielen Faktoren abhängig, unter anderem von Ihrem individuellen Profil, dem aktuellen Arbeitsmarkt, den Anforderungen der Arbeitgeber und Ihrer eigenen aktiven Mitarbeit. Dies entspricht den gesetzlichen Vorgaben nach <strong>§ 296 SGB III</strong> und <strong>§ 45 SGB III</strong>, die eine erfolgsunabhängige Vermittlungsleistung vorsehen.
          </p>
          <p className="legal-disclaimer-text">
            Unser Coaching zielt darauf ab, Ihre Chancen auf dem Arbeitsmarkt nachhaltig zu verbessern — eine erfolgreiche Anstellung kann jedoch nicht garantiert werden.
          </p>
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
