import { SiteShell } from "@/components/site/SiteShell";
import { LLink } from "@/components/site/LLink";
import { CONTENT } from "../index";
import type { TLang } from "../lang";
import { Em } from "./shared";

export function K16Page({ lang }: { lang: TLang }) {
  const c = CONTENT[lang].k16;
  const [h1a = "", h1b = ""] = c.hero.h1;
  return (
    <SiteShell active="16k" lang={lang}>
      <section className="page-hero split">
        <div className="page-hero-left">
          <div className="breadcrumb">
            <LLink lang={lang} to="/">{c.hero.crumbHome}</LLink>
            {c.hero.crumbRest}
          </div>
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

      <section className="section sage">
        <div className="sh">
          <div className="sh-tag">{c.main.tag}</div>
          <h2 className="sh-h2">
            <Em parts={c.main.h2} />
          </h2>
        </div>
        <div className="two-col">
          <div className="intro-text">
            <p>{c.main.p1}</p>
            <p>{c.main.p2}</p>
            {c.main.boxes.map((b) => (
              <div className="highlight-box" key={b.tag}>
                <div className="hl-tag">{b.tag}</div>
                <p>{b.text}</p>
              </div>
            ))}
            <div className="how-start-tag">{c.main.howTag}</div>
            <p className="how-start-text">{c.main.howText}</p>
            <LLink lang={lang} to="/kontakt" className="btn-dark">
              {c.main.button}
            </LLink>
          </div>
          <div>
            <div className="topics-header">{c.main.topicsHeader}</div>
            <div className="topics-grid">
              {c.main.topics.map((t) => (
                <div className="topic-item" key={t}>{t}</div>
              ))}
              {c.main.topicsWide.map((t) => (
                <div className="topic-item wide" key={t}>{t}</div>
              ))}
            </div>
          </div>
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
          {c.faq.items.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary className="faq-q">{f.q}</summary>
              <div className="faq-a">{f.a}</div>
            </details>
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
    </SiteShell>
  );
}
