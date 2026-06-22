import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — GetGrow Academy Berlin" },
      {
        name: "description",
        content:
          "Buchen Sie ein kostenloses Erstgespräch. AVGS & §16k SGB II werden akzeptiert. Antwort innerhalb von 24 Stunden.",
      },
      { property: "og:title", content: "Kontakt — GetGrow Academy Berlin" },
      {
        property: "og:description",
        content:
          "Kostenloses Erstgespräch buchen — für Jobcenter-Klient:innen, Privatpersonen und Unternehmen. Berlin & online.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <SiteShell active="contact">
      <section className="page-hero simple">
        <div className="breadcrumb">
          <Link to="/">Startseite</Link> · Kontakt
        </div>
        <h1>
          Nehmen Sie <em>Kontakt</em> auf
        </h1>
        <p className="page-hero-sub">
          Buchen Sie ein kostenloses Erstgespräch, fragen Sie zu AVGS — oder schreiben Sie uns
          einfach, wo Sie gerade stehen. Wir melden uns innerhalb von 24 Stunden.
        </p>
      </section>

      <div className="contact-main">
        <div className="contact-info">
          <div>
            <div className="info-tag">Kontaktdaten</div>
            {[
              ["E-Mail", <a href="mailto:info@getgrow.academy">info@getgrow.academy</a>],
              ["Telefon", <a href="tel:+4915736651515">+49 157 3665 1515</a>],
              ["Website", "getgrow.academy"],
              ["Standort", "Berlin & Online"],
              ["Sprachen", "DE · EN · UA · RU"],
            ].map(([label, value], i) => (
              <div className="info-item" key={i}>
                <span className="info-label">{label}</span>
                <span className="info-value">{value}</span>
              </div>
            ))}
          </div>

          <div className="avgs-box">
            <div className="avgs-box-tag">Klient:innen mit Jobcenter-Bezug</div>
            <h3>Haben Sie einen AVGS-Gutschein?</h3>
            <p>
              Unser Coaching ist vollständig über AVGS und §16k SGB II finanzierbar. Wenn Sie
              bereits einen Gutschein haben — oder Unterstützung bei der Beantragung brauchen —
              vermerken Sie es einfach im Formular, wir kümmern uns um den Rest.
            </p>
          </div>

          <div>
            <div className="info-tag">Antwortzeiten</div>
            <div className="info-item">
              <span className="info-label">Mo–Fr</span>
              <span className="info-value">Innerhalb von 24 Stunden</span>
            </div>
            <div className="info-item">
              <span className="info-label">Wochenende</span>
              <span className="info-value">Antwort am Montag</span>
            </div>
          </div>
        </div>

        <div>
          <form className="form-card" onSubmit={onSubmit}>
            <div className="form-title">Kostenloses Erstgespräch</div>
            <div className="form-sub">
              Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden, um einen
              Termin für Ihr kostenloses Kennenlerngespräch zu vereinbaren.
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Vorname</label>
                <input name="first_name" type="text" className="form-input" placeholder="Anna" required />
              </div>
              <div className="form-group">
                <label className="form-label">Nachname</label>
                <input name="last_name" type="text" className="form-input" placeholder="Schmidt" required />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">E-Mail</label>
              <input name="email" type="email" className="form-input" placeholder="anna@example.com" required />
            </div>

            <div className="form-group">
              <label className="form-label">Telefon (optional)</label>
              <input name="phone" type="tel" className="form-input" placeholder="+49" />
            </div>

            <div className="form-group">
              <label className="form-label">Ich interessiere mich für</label>
              <select name="interest" className="form-select" defaultValue="">
                <option value="" disabled>
                  Bitte wählen...
                </option>
                <option>Job Coaching · AVGS</option>
                <option>Ganzheitliches Coaching · §16k SGB II</option>
                <option>Life & Business Coaching · Privat</option>
                <option>Coaching für Unternehmen</option>
                <option>Ich bin mir noch nicht sicher — bitte beraten Sie mich</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">AVGS / Jobcenter-Gutschein</label>
              <select name="avgs_status" className="form-select" defaultValue="Nein — aber ich möchte einen beantragen">
                <option>Nein — aber ich möchte einen beantragen</option>
                <option>Ja — ich habe bereits einen AVGS-Gutschein</option>
                <option>Ich habe einen §16k SGB II Gutschein</option>
                <option>Ich bin Privatkund:in</option>
                <option>Ich vertrete ein Unternehmen</option>
                <option>Unklar — bitte erklären Sie es mir</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Wo stehen Sie gerade?</label>
              <textarea
                name="message"
                className="form-textarea"
                placeholder="Erzählen Sie uns kurz: Wie lange sind Sie in Deutschland, was ist Ihr beruflicher Hintergrund und was möchten Sie verändern..."
              />
            </div>

            <div className="form-group">
              <label className="form-label">Bevorzugtes Format</label>
              <select name="format" className="form-select" defaultValue="Online">
                <option>Online</option>
                <option>Vor Ort (Berlin)</option>
                <option>Beides passt für mich</option>
              </select>
            </div>

            <div className="form-check">
              <input type="checkbox" id="privacy" required />
              <label htmlFor="privacy">
                Ich habe die <a href="#">Datenschutzerklärung</a> gelesen und stimme der
                Verarbeitung meiner personenbezogenen Daten gemäß DSGVO zu.
              </label>
            </div>

            <button type="submit" className="btn-submit" disabled={sent}>
              {sent ? "Vielen Dank — wir melden uns ✓" : "Anfrage senden →"}
            </button>

          </form>
        </div>
      </div>
    </SiteShell>
  );
}
