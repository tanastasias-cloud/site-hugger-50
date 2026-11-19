import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { LLink } from "@/components/site/LLink";
import { CONTENT } from "../index";
import { UI } from "../ui";
import type { TLang } from "../lang";
import { Em } from "./shared";

export function KontaktPage({ lang }: { lang: TLang }) {
  const c = CONTENT[lang].kontakt;
  const f = c.form;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: data.get("first_name"),
          last_name: data.get("last_name"),
          email: data.get("email"),
          phone: data.get("phone"),
          interest: data.get("interest"),
          avgs_status: data.get("avgs_status"),
          message: data.get("message"),
          format: data.get("format"),
          // zeigt in der Datenbank/E-Mail, auf welcher Sprachversion das Formular ausgefüllt wurde
          source: `kontakt-form-${lang}`,
        }),
      });
      if (!res.ok) throw new Error(`Request failed (status ${res.status})`);
      setStatus("sent");
      form.reset();
    } catch (error) {
      console.error("contact form submit error", error);
      setStatus("error");
    }
  }

  const infoRows: Array<[string, React.ReactNode]> = [
    [c.info.email, <a href="mailto:info@getgrow.academy">info@getgrow.academy</a>],
    [c.info.phone, <a href="tel:+4915736651515">+49 157 3665 1515</a>],
    [c.info.website, "getgrow.academy"],
    [c.info.place, c.info.placeValue],
    [c.info.languages, "DE · EN · UA · RU · PL"],
  ];

  return (
    <SiteShell active="contact" lang={lang}>
      <section className="page-hero simple">
        <div className="breadcrumb">
          <LLink lang={lang} to="/">{UI[lang].nav.home}</LLink> · {c.hero.crumb}
        </div>
        <h1>
          <Em parts={c.hero.h1} />
        </h1>
        <p className="page-hero-sub">{c.hero.sub}</p>
      </section>

      <div className="contact-main">
        <div className="contact-info">
          <div>
            <div className="info-tag">{c.info.tag}</div>
            {infoRows.map(([label, value], i) => (
              <div className="info-item" key={i}>
                <span className="info-label">{label}</span>
                <span className="info-value">{value}</span>
              </div>
            ))}
          </div>

          <div className="avgs-box">
            <div className="avgs-box-tag">{c.avgsBox.tag}</div>
            <h3>{c.avgsBox.h3}</h3>
            <p>{c.avgsBox.text}</p>
          </div>

          <div>
            <div className="info-tag">{c.response.tag}</div>
            <div className="info-item">
              <span className="info-label">{c.response.weekdays}</span>
              <span className="info-value">{c.response.weekdaysValue}</span>
            </div>
            <div className="info-item">
              <span className="info-label">{c.response.weekend}</span>
              <span className="info-value">{c.response.weekendValue}</span>
            </div>
          </div>
        </div>

        <div>
          {status === "sent" ? (
            <div className="form-card form-success">
              <div className="form-success-icon">{c.success.icon}</div>
              <div className="form-title">{c.success.title}</div>
              <p className="form-sub">{c.success.text}</p>
            </div>
          ) : (
            <form className="form-card" onSubmit={onSubmit}>
              <div className="form-title">{f.title}</div>
              <div className="form-sub">{f.sub}</div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">{f.firstName}</label>
                  <input name="first_name" type="text" className="form-input" placeholder={f.firstNamePh} required />
                </div>
                <div className="form-group">
                  <label className="form-label">{f.lastName}</label>
                  <input name="last_name" type="text" className="form-input" placeholder={f.lastNamePh} required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">{f.email}</label>
                <input name="email" type="email" className="form-input" placeholder="anna@example.com" required />
              </div>

              <div className="form-group">
                <label className="form-label">{f.phone}</label>
                <input name="phone" type="tel" className="form-input" placeholder="+49" />
              </div>

              <div className="form-group">
                <label className="form-label">{f.interest}</label>
                <select name="interest" className="form-select" defaultValue="">
                  <option value="" disabled>{f.choose}</option>
                  {f.interestOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">{f.avgs}</label>
                <select name="avgs_status" className="form-select" defaultValue={f.avgsDefault}>
                  {f.avgsOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">{f.message}</label>
                <textarea name="message" className="form-textarea" placeholder={f.messagePh} />
              </div>

              <div className="form-group">
                <label className="form-label">{f.format}</label>
                <select name="format" className="form-select" defaultValue={f.formatDefault}>
                  {f.formatOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>

              <div className="form-check">
                <input type="checkbox" id="privacy" required />
                <label htmlFor="privacy">
                  {f.privacyBefore}
                  <Link to="/datenschutz">{f.privacyLink}</Link>
                  {f.privacyAfter}
                </label>
              </div>

              <button type="submit" className="btn-submit" disabled={status === "sending"}>
                {status === "sending" ? f.sending : f.submit}
              </button>

              {status === "error" && (
                <p className="form-error" role="alert">
                  {f.errorBefore}
                  <a href="mailto:info@getgrow.academy">info@getgrow.academy</a>
                  {f.errorAfter}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </SiteShell>
  );
}
