import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/seo-schema";
import { mergeHead } from "@/lib/merge-head";
import { SiteShell } from "@/components/site/SiteShell";
import { reviews, GOOGLE_REVIEWS_URL } from "@/data/reviews";

export const Route = createFileRoute("/referenzen")({
  head: () => mergeHead({
    meta: [
      { title: "Referenzen — GetGrow Academy Berlin" },
      {
        name: "description",
        content:
          "Echte Stimmen von Klient:innen: Karriere-Coaching mit Yulia und der GetGrow Academy Berlin — Erfahrungen, Erfolge, Empfehlungen.",
      },
      { property: "og:title", content: "Referenzen — GetGrow Academy Berlin" },
      {
        property: "og:description",
        content: "Was unsere Klient:innen über das Coaching mit Yulia sagen.",
      },
    ],
  }, pageHead("/referenzen")),
  component: ReferenzenPage,
});

function Stars() {
  return (
    <div className="ref-stars" aria-label="5 von 5 Sternen">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

function ReferenzenPage() {
  return (
    <SiteShell>
      <section className="page-hero simple">
        <div className="breadcrumb">
          <Link to="/">Start</Link> · Referenzen
        </div>
        <h1>
          Stimmen unserer <em>Klient:innen</em>
        </h1>
        <p className="page-hero-sub">
          Echte Erfahrungen von Menschen, die mit Yulia und der GetGrow Academy
          ihren Weg in Deutschland gefunden haben — vom ersten Schritt in den
          Arbeitsmarkt bis zum Job, der wirklich passt.
        </p>
      </section>

      <section className="ref-summary">
        <div className="ref-summary-inner">
          <div className="ref-rating">
            <div className="ref-rating-score">5,0</div>
            <Stars />
            <div className="ref-rating-source">
              Bewertungen auf{" "}
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
                Google Maps
              </a>
            </div>
          </div>
          <div className="ref-summary-text">
            <div className="ref-tag">Vertrauen, das wächst</div>
            <p>
              Viele unserer Klient:innen kommen über persönliche Empfehlungen.
              Die folgenden Stimmen stammen von echten Personen, die mit uns
              gearbeitet haben — veröffentlicht auf Google Maps.
            </p>
          </div>
        </div>
      </section>

      <section className="ref-list">
        {reviews.map((r) => (
          <article className="ref-card" key={r.name}>
            <div className="ref-card-head">
              <div className="ref-avatar">{r.initials}</div>
              <div>
                <div className="ref-name">{r.name}</div>
                <div className="ref-meta">
                  <Stars />
                  <span className="ref-date">· {r.date}</span>
                  <span className="ref-lang">· {r.lang}</span>
                </div>
              </div>
            </div>
            <p className="ref-text">{r.text}</p>
          </article>
        ))}

        <div className="ref-more">
          <p>Alle Bewertungen findest du auf Google Maps.</p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mint"
          >
            Auf Google ansehen →
          </a>
        </div>
      </section>

      <section className="cta-strip">
        <div>
          <div className="cta-strip-tag">Dein Weg beginnt hier</div>
          <h2>Buche dein kostenloses Erstgespräch.</h2>
        </div>
        <div className="cta-btns">
          <Link to="/kontakt" className="btn-mint">
            Erstgespräch buchen
          </Link>
          <Link to="/coaches" className="btn-outline-w">
            Coaches kennenlernen →
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
