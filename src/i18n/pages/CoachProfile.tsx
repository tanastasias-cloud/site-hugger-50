import { SiteShell } from "@/components/site/SiteShell";
import { LLink } from "@/components/site/LLink";
import type { Coach } from "@/data/coaches";
import { CONTENT } from "../index";
import type { TLang } from "../lang";
import { initials } from "./shared";

export function CoachProfilePage({ lang, coach }: { lang: TLang; coach: Coach }) {
  const c = CONTENT[lang];
  const ui = c.coachProfileUi;
  const tx = c.coachTexts[coach.slug];
  const role = tx?.role ?? coach.role;
  const bio = tx?.bio ?? coach.bio;
  const expertise = tx?.expertise ?? coach.expertise;

  return (
    <SiteShell active="coaches" lang={lang}>
      <section className="page-hero simple">
        <div className="breadcrumb">
          <LLink lang={lang} to="/">{ui.home}</LLink> · <LLink lang={lang} to="/coaches">{ui.coaches}</LLink> · {coach.name}
        </div>
      </section>

      <section className="coaches-section">
        <article className="coach-card">
          <div className="coach-photo-col">
            {coach.photo ? (
              <object data={coach.photo} type="image/jpeg" aria-label={coach.name} className="coach-photo">
                <div className="coach-photo-fallback">{initials(coach.name)}</div>
              </object>
            ) : (
              <div className="coach-photo-placeholder">{initials(coach.name)}</div>
            )}
            <div className="coach-langs">
              {coach.languages.map((l) => (
                <span className="lang-tag" key={l.label}>
                  {l.flag} {ui.languages[l.label] ?? l.label}
                </span>
              ))}
            </div>
            <div className="coach-contact-box">
              <div className="info-tag">{ui.contact}</div>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "#555", marginBottom: 16 }}>
                {ui.askBefore}
                {coach.name.split(" ")[0]}
                {ui.askAfter}
              </p>
              <LLink lang={lang} to="/kontakt" className="btn-mint">
                {ui.button}
              </LLink>
            </div>
          </div>

          <div className="coach-content">
            <div>
              <div className="coach-name">{coach.name}</div>
              <div className="coach-role">{role}</div>
            </div>

            <div className="coach-bio">
              {bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="coach-creds">
              <div className="creds-title">{ui.creds}</div>
              {coach.credentials.map((cr, i) => {
                const t = tx?.credentials[i];
                return (
                  <div className="cred-item" key={i}>
                    <div className="cred-type">{ui.credType[cr.type] ?? cr.type}</div>
                    <div>
                      <div className="cred-text">{t?.text ?? cr.text}</div>
                      <div className="cred-sub">{t ? t.sub : cr.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <div className="exp-title">{ui.expertise}</div>
              <div className="exp-grid">
                {expertise.map((e) => (
                  <div className="exp-item" key={e}>{e}</div>
                ))}
              </div>
            </div>

            <div style={{ paddingTop: 16 }}>
              <LLink lang={lang} to="/coaches" className="coach-intro-link">
                {ui.all}
              </LLink>
            </div>
          </div>
        </article>
      </section>
    </SiteShell>
  );
}

export function CoachNotFound({ lang }: { lang: TLang }) {
  const ui = CONTENT[lang].coachProfileUi;
  return (
    <SiteShell active="coaches" lang={lang}>
      <section className="page-hero simple">
        <div className="breadcrumb">
          <LLink lang={lang} to="/">{ui.home}</LLink> · <LLink lang={lang} to="/coaches">{ui.coaches}</LLink>
        </div>
        <h1>{ui.notFoundTitle}</h1>
        <p className="page-hero-sub">
          {ui.notFoundText} <LLink lang={lang} to="/coaches">{ui.notFoundLink}</LLink>
        </p>
      </section>
    </SiteShell>
  );
}
