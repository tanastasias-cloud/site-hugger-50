import { SiteShell } from "@/components/site/SiteShell";
import { LLink } from "@/components/site/LLink";
import { CONTENT } from "../index";
import { UI } from "../ui";
import type { TLang } from "../lang";
import { Em } from "./shared";

export function UnternehmenPage({ lang }: { lang: TLang }) {
  const c = CONTENT[lang].unternehmen;
  const [h1a = "", h1b = ""] = c.hero.h1;
  return (
    <SiteShell active="unternehmen" lang={lang}>
      <section className="page-hero split">
        <div className="page-hero-left">
          <div className="breadcrumb">
            <LLink lang={lang} to="/">{UI[lang].nav.home}</LLink> · {c.hero.crumb}
          </div>
          <h1>
            {h1a}
            <br />
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

      <section className="section sage">
        <div className="sh">
          <div className="sh-tag">{c.formats.tag}</div>
          <h2 className="sh-h2">
            <Em parts={c.formats.h2} />
          </h2>
        </div>
        <div className="topics-grid" style={{ maxWidth: 1320, margin: "0 auto" }}>
          {c.formats.items.map((f) => (
            <div className="topic-item wide" key={f.title}>
              <strong style={{ display: "block", marginBottom: 8, color: "var(--forest)" }}>{f.title}</strong>
              <span style={{ color: "#555", fontWeight: 300 }}>{f.text}</span>
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
          <a href="mailto:info@getgrow.academy" className="btn-outline-w">
            info@getgrow.academy →
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
