import { SiteShell } from "@/components/site/SiteShell";
import { LLink } from "@/components/site/LLink";
import { coaches, type Coach } from "@/data/coaches";
import { CONTENT } from "../index";
import { UI } from "../ui";
import type { TLang } from "../lang";
import { Em, initials } from "./shared";

function MiniCard({ coach, lang }: { coach: Coach; lang: TLang }) {
  const c = CONTENT[lang];
  const tx = c.coachTexts[coach.slug];
  return (
    <LLink
      lang={lang}
      to={`/coaches/${coach.slug}`}
      className={`coach-mini ${coach.isFounder ? "coach-mini-founder" : ""}`}
    >
      <div className="coach-mini-photo-wrap">
        {coach.photo ? (
          <object data={coach.photo} type="image/jpeg" aria-label={coach.name} className="coach-mini-photo">
            <div className="coach-mini-fallback">{initials(coach.name)}</div>
          </object>
        ) : (
          <div className="coach-mini-fallback">{initials(coach.name)}</div>
        )}
      </div>
      <div className="coach-mini-body">
        {coach.isFounder && <div className="coach-mini-founder-badge">{c.coachesPage.group.founder}</div>}
        <div className="coach-mini-name">{coach.name}</div>
        <div className="coach-mini-role">{tx?.role ?? coach.role}</div>
        <div className="coach-mini-langs">
          {coach.languages.map((l) => (
            <span key={l.label} title={c.coachProfileUi.languages[l.label] ?? l.label}>{l.flag}</span>
          ))}
        </div>
        <span className="coach-mini-cta">{c.coachesPage.group.profile}</span>
      </div>
    </LLink>
  );
}

export function CoachesPage({ lang }: { lang: TLang }) {
  const c = CONTENT[lang].coachesPage;
  const [s1 = "", s2 = "", s3 = "", s4 = ""] = c.hero.stats;
  return (
    <SiteShell active="coaches" lang={lang}>
      <section className="page-hero simple">
        <div className="breadcrumb">
          <LLink lang={lang} to="/">{UI[lang].nav.home}</LLink> · {c.hero.crumb}
        </div>
        <h1>
          <Em parts={c.hero.h1} />
        </h1>
        <p className="page-hero-sub">{c.hero.sub}</p>
        <div className="coaches-stats">
          <div className="coaches-stat"><strong>{coaches.length}</strong><span>{s1}</span></div>
          <div className="coaches-stat"><strong>3 000+</strong><span>{s2}</span></div>
          <div className="coaches-stat"><strong>5</strong><span>{s3}</span></div>
          <div className="coaches-stat"><strong>AVGS</strong><span>{s4}</span></div>
        </div>
      </section>

      <section className="coaches-section">
        <div className="coach-group">
          <div className="coach-group-head">
            <div className="coach-group-tag">{c.group.tag}</div>
            <h2>{c.group.h2}</h2>
          </div>
          <div className="coach-grid">
            {coaches.map((coach) => (
              <MiniCard key={coach.slug} coach={coach} lang={lang} />
            ))}
          </div>
        </div>

        <div className="coach-join" style={{ marginTop: 80 }}>
          <div className="join-tag">{c.join.tag}</div>
          <h3>{c.join.h3}</h3>
          <p>{c.join.text}</p>
          <LLink lang={lang} to="/kontakt" className="btn-mint">
            {c.join.button}
          </LLink>
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
          <LLink lang={lang} to="/avgs-coaching" className="btn-outline-w">
            {c.cta.secondary}
          </LLink>
        </div>
      </section>
    </SiteShell>
  );
}
