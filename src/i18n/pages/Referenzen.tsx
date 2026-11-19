import { SiteShell } from "@/components/site/SiteShell";
import { LLink } from "@/components/site/LLink";
import { reviews, GOOGLE_REVIEWS_URL } from "@/data/reviews";
import { CONTENT } from "../index";
import { UI } from "../ui";
import type { TLang } from "../lang";
import { Em } from "./shared";

export function ReferenzenPage({ lang }: { lang: TLang }) {
  const c = CONTENT[lang].referenzen;
  return (
    <SiteShell lang={lang}>
      <section className="page-hero simple">
        <div className="breadcrumb">
          <LLink lang={lang} to="/">{UI[lang].nav.home}</LLink> · {c.hero.crumb}
        </div>
        <h1>
          <Em parts={c.hero.h1} />
        </h1>
        <p className="page-hero-sub">{c.hero.sub}</p>
      </section>

      <section className="ref-summary">
        <div className="ref-summary-inner">
          <div className="ref-rating">
            <div className="ref-rating-score">5,0</div>
            <div className="ref-stars" aria-label={c.stars}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <div className="ref-rating-source">
              {c.ratingSource}{" "}
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
                Google Maps
              </a>
            </div>
          </div>
          <div className="ref-summary-text">
            <div className="ref-tag">{c.summaryTag}</div>
            <p>{c.summaryText}</p>
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
                  <div className="ref-stars" aria-label={c.stars}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="ref-date">· {c.dates[r.date] ?? r.date}</span>
                  <span className="ref-lang">· {r.lang}</span>
                </div>
              </div>
            </div>
            {/* Originaltext der Kundin / des Kunden — wird nicht übersetzt */}
            <p className="ref-text">{r.text}</p>
          </article>
        ))}

        <div className="ref-more">
          <p>{c.more}</p>
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="btn-mint">
            {c.moreButton}
          </a>
        </div>
      </section>

      <section className="cta-strip">
        <div>
          <div className="cta-strip-tag">{c.cta.tag}</div>
          <h2>{c.cta.h2}</h2>
        </div>
        <div className="cta-btns">
          <LLink lang={lang} to="/kontakt" className="btn-mint">
            {c.cta.primary}
          </LLink>
          <LLink lang={lang} to="/coaches" className="btn-outline-w">
            {c.cta.secondary}
          </LLink>
        </div>
      </section>
    </SiteShell>
  );
}
