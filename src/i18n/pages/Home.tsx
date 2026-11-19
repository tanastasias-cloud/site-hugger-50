import { SiteShell } from "@/components/site/SiteShell";
import { LLink } from "@/components/site/LLink";
import yuliiaPhoto from "@/assets/yuliia-zaienchyk.jpg";
import { CONTENT } from "../index";
import type { TLang } from "../lang";
import { Em } from "./shared";

export function HomePage({ lang }: { lang: TLang }) {
  const c = CONTENT[lang].home;
  return (
    <SiteShell active="home" lang={lang}>
      <div className="avgs-page">
        <section className="page-hero split">
          <div className="page-hero-left">
            <div className="breadcrumb">{c.hero.crumb}</div>
            <h1>
              <Em parts={c.hero.h1} />
            </h1>
            <p className="page-hero-text">{c.hero.text}</p>
            <div className="cta-btns" style={{ marginTop: 32 }}>
              <LLink lang={lang} to="/kontakt" className="btn-mint">
                {c.hero.primary}
              </LLink>
              <LLink
                lang={lang}
                to="/avgs-coaching"
                className="btn-outline-w"
                style={{ color: "var(--forest)", borderColor: "var(--forest)" }}
              >
                {c.hero.secondary}
              </LLink>
            </div>
          </div>
          <div className="page-hero-right">
            {c.hero.badges.map((b) => (
              <div className="hero-badge-item" key={b.label}>
                <div className="badge-icon">{b.icon}</div>
                <div>
                  <div className="badge-label">{b.label}</div>
                  <div className="badge-value">{b.value}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section sage founder-section">
          <div className="founder-inner">
            <img src={yuliiaPhoto} alt="Yuliia Zaienchyk" className="founder-photo" />
            <div className="founder-text">
              <div className="founder-tag">{c.founder.tag}</div>
              <h2 className="founder-name">
                Yuliia <em>Zaienchyk</em>
              </h2>
              <div className="founder-role">{c.founder.role}</div>
              <p className="founder-bio">{c.founder.bio}</p>
              <LLink lang={lang} to="/coaches/yuliia-zaienchyk" className="coach-intro-link">
                {c.founder.link}
              </LLink>
            </div>
          </div>
        </section>

        <section className="section forest spread">
          <div className="spread-top">
            <div className="sh light">
              <div className="sh-tag">{c.diff.tag}</div>
              <h2 className="sh-h2">
                <Em parts={c.diff.h2} />
              </h2>
            </div>
            <p className="direct-lead">{c.diff.lead}</p>
          </div>
          <div className="direct-grid four">
            {c.diff.cards.map((card) => (
              <div className="direct-card" key={card.title}>
                <div className="direct-icon">{card.icon}</div>
                <div className="direct-title">{card.title}</div>
                <div className="direct-text">{card.text}</div>
              </div>
            ))}
          </div>
          <p className="direct-footnote">{c.diff.footnote}</p>
        </section>

        <section className="section white" id="angebot">
          <div className="sh">
            <div className="sh-tag">{c.doors.tag}</div>
            <h2 className="sh-h2">
              <Em parts={c.doors.h2} />
            </h2>
          </div>
          <p className="direct-lead" style={{ color: "#2a3a34" }}>
            {c.doors.lead}
          </p>
          <div className="modules-grid">
            {c.doors.items.map((d) => (
              <LLink lang={lang} to={d.href} className="module-card door-link" key={d.num}>
                <div className="module-num">{d.num}</div>
                <div className="door-tag" style={{ marginBottom: 6 }}>{d.tag}</div>
                <div className="module-title">{d.title}</div>
                <div className="module-text">{d.text}</div>
                <ul className="door-list" style={{ marginTop: 16 }}>
                  {d.list.map((li) => <li key={li}>{li}</li>)}
                </ul>
                <span className="door-cta" style={{ marginTop: 20, display: "inline-block" }}>{c.doors.more}</span>
              </LLink>
            ))}
          </div>
        </section>

        <section className="section off">
          <div className="sh">
            <div className="sh-tag">{c.outcomes.tag}</div>
            <h2 className="sh-h2">
              <Em parts={c.outcomes.h2} />
            </h2>
          </div>
          <div className="modules-grid">
            {c.outcomes.items.map((o) => (
              <div className="module-card" key={o.word}>
                <div className="module-title outcome-script">{o.word}</div>
                <div className="module-text" style={{ marginTop: 12 }}>{o.text}</div>
              </div>
            ))}
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
      </div>
    </SiteShell>
  );
}
