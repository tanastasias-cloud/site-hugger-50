import { SiteShell } from "@/components/site/SiteShell";
import { LLink } from "@/components/site/LLink";
import { CONTENT } from "../index";
import { UI } from "../ui";
import type { TLang } from "../lang";
import { Em } from "./shared";

export function PrivatPage({ lang }: { lang: TLang }) {
  const c = CONTENT[lang].privat;
  return (
    <SiteShell active="privat" lang={lang}>
      <section className="page-hero split">
        <div className="page-hero-left">
          <div className="breadcrumb">
            <LLink lang={lang} to="/">{UI[lang].nav.home}</LLink> · {c.hero.crumb}
          </div>
          <h1>
            <Em parts={c.hero.h1} />
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

      <section className="section sage">
        <div className="sh">
          <div className="sh-tag">{c.topics.tag}</div>
          <h2 className="sh-h2">
            <Em parts={c.topics.h2} />
          </h2>
        </div>
        <div className="two-col">
          <div className="intro-text">
            <p>{c.topics.p1}</p>
            <p>{c.topics.p2}</p>
            <div className="highlight-box">
              <div className="hl-tag">{c.topics.howTag}</div>
              <p>{c.topics.howText}</p>
            </div>
            <LLink lang={lang} to="/kontakt" className="btn-dark">
              {c.topics.button}
            </LLink>
          </div>
          <div>
            <div className="topics-header">{c.topics.header}</div>
            <div className="topics-grid">
              {c.topics.list.map((t) => (
                <div className="topic-item" key={t}>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="sh">
          <div className="sh-tag">{c.without.tag}</div>
          <h2 className="sh-h2">
            <Em parts={c.without.h2} />
          </h2>
        </div>
        <div className="intro-text" style={{ maxWidth: 780 }}>
          <p>{c.without.p1}</p>
          <p style={{ fontSize: 13, color: "#888" }}>{c.without.note}</p>
          <LLink lang={lang} to="/kontakt" className="btn-dark">
            {c.without.button}
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
          <LLink lang={lang} to="/unternehmen" className="btn-outline-w">
            {c.cta.secondary}
          </LLink>
        </div>
      </section>
    </SiteShell>
  );
}
