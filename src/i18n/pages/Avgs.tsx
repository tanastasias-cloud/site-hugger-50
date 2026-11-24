import { SiteShell } from "@/components/site/SiteShell";
import { LLink } from "@/components/site/LLink";
import { Link } from "@tanstack/react-router";
import { CONTENT } from "../index";
import { AVGS_ARTICLE, type TLang } from "../lang";
import { Em, RichText } from "./shared";

export function AvgsPage({ lang }: { lang: TLang }) {
  const c = CONTENT[lang].avgs;
  const [h1a = "", h1b = ""] = c.hero.h1;
  return (
    <SiteShell active="avgs" lang={lang}>
      <div className="avgs-page">
        <section className="page-hero split">
          <div className="page-hero-left">
            <div className="breadcrumb">
              <LLink lang={lang} to="/">{c.hero.crumbHome}</LLink>
              {c.hero.crumbRest}
            </div>
            <div className="hero-kicker">{c.hero.kicker}</div>
            <h1>
              {h1a}
              <em>{h1b}</em>
            </h1>
            <p className="page-hero-text">{c.hero.text}</p>
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

        <section className="params-strip">
          {c.params.map((p) => (
            <div className="params-strip-item" key={p.num}>
              <div className="params-num">{p.num}</div>
              <div className="params-label">{p.label}</div>
            </div>
          ))}
        </section>

        <section className="section forest">
          <div className="sh light">
            <div className="sh-tag">{c.advantage.tag}</div>
            <h2 className="sh-h2">
              <Em parts={c.advantage.h2} />
            </h2>
          </div>
          <p className="direct-lead">{c.advantage.lead}</p>
          <div className="direct-grid">
            {c.advantage.cards.map((card) => (
              <div className="direct-card" key={card.title}>
                <div className="direct-icon">{card.icon}</div>
                <div className="direct-title">{card.title}</div>
                <div className="direct-text">{card.text}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section white">
          <div className="sh">
            <div className="sh-tag">{c.program.tag}</div>
            <h2 className="sh-h2">
              <Em parts={c.program.h2} />
            </h2>
          </div>
          <div className="two-col">
            <div>
              <p className="step-intro">{c.program.intro}</p>
              <div className="steps">
                {c.program.steps.map((s, i) => (
                  <div className="step-item" key={s.title}>
                    <div className="step-num-circle">{i + 1}</div>
                    <div>
                      <div className="step-title">{s.title}</div>
                      <p className="step-text">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="highlight-box" style={{ marginTop: 32 }}>
                <div className="hl-tag">{c.program.endBox.tag}</div>
                <p className="hl-text">{c.program.endBox.text}</p>
              </div>
            </div>

            <div className="avgs-right">
              <div className="avgs-info-box">
                <div className="box-tag">{c.program.infoBox.tag}</div>
                <p>{c.program.infoBox.text}</p>
                <div className="avgs-free-badge">
                  <div className="free-title">{c.program.infoBox.freeTitle}</div>
                  <div className="free-sub">{c.program.infoBox.freeSub}</div>
                </div>
              </div>
              <div className="eligibility-box">
                <div className="elig-tag">{c.program.eligibility.tag}</div>
                {c.program.eligibility.items.map((it) => (
                  <div className="elig-item" key={it}>{it}</div>
                ))}
              </div>
              <div className="cta-box">
                <div className="cta-box-text">{c.program.ctaBox.text}</div>
                <LLink lang={lang} to="/kontakt">{c.program.ctaBox.link}</LLink>
              </div>
            </div>
          </div>
        </section>

        <section className="section sage">
          <div className="sh">
            <div className="sh-tag">{c.modules.tag}</div>
            <h2 className="sh-h2">
              <Em parts={c.modules.h2} />
            </h2>
          </div>
          <p className="direct-lead" style={{ color: "#2a3a34" }}>{c.modules.lead}</p>
          <div className="modules-grid">
            {c.modules.items.map((m) => (
              <div className="module-card" key={m.num}>
                <div className="module-num">{m.num}</div>
                <div className="module-title">{m.title}</div>
                <div className="module-text">{m.text}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section off">
          <div className="sh">
            <div className="sh-tag">{c.faq.tag}</div>
            <h2 className="sh-h2">
              <Em parts={c.faq.h2} />
            </h2>
          </div>
          <div className="faq-list">
            {c.faq.items.map((f, i) => (
              <details className="faq-item" key={f.q}>
                <summary className="faq-q">{f.q}</summary>
                <div className="faq-a">
                  {f.a}
                  {i === c.faq.items.length - 1 && (
                    <>
                      {" "}
                      <LLink lang={lang} to="/privatpersonen">{c.faq.lastLink}</LLink>
                    </>
                  )}
                </div>
              </details>
            ))}
          </div>
          <p className="article-link">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <Link to={AVGS_ARTICLE[lang] as any}>{c.faq.articleLink} →</Link>
          </p>
        </section>

        <section className="section legal-disclaimer">
          <div className="legal-disclaimer-inner">
            <div className="legal-disclaimer-tag">{c.legal.tag}</div>
            <h2 className="legal-disclaimer-title">{c.legal.title}</h2>
            <p className="legal-disclaimer-text"><RichText parts={c.legal.p1} /></p>
            <p className="legal-disclaimer-text"><RichText parts={c.legal.p2} /></p>
            <p className="legal-disclaimer-text">{c.legal.p3}</p>
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
            <LLink lang={lang} to="/16k-coaching" className="btn-outline-w">
              {c.cta.secondary}
            </LLink>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
