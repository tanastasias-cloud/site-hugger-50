import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Contact — GetGrow Academy Berlin" },
      {
        name: "description",
        content:
          "Book a free consultation. AVGS & §16k SGB II accepted. We respond within 24 hours.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <SiteShell active="contact">
      <section className="page-hero simple">
        <div className="breadcrumb">
          <Link to="/">Home</Link> · Contact
        </div>
        <h1>
          Get in <em>touch</em>
        </h1>
        <p className="page-hero-sub">
          Book a free consultation, ask about AVGS, or simply tell us where you are — we'll get
          back to you within 24 hours.
        </p>
      </section>

      <div className="contact-main">
        <div className="contact-info">
          <div>
            <div className="info-tag">Contact details</div>
            {[
              ["Email", <a href="mailto:info@getgrow.academy">info@getgrow.academy</a>],
              ["Phone", <a href="tel:+4915736651515">+49 157 3665 1515</a>],
              ["Website", "getgrow.academy"],
              ["Location", "Berlin & Online"],
              ["Languages", "DE · EN · UA · RU"],
            ].map(([label, value], i) => (
              <div className="info-item" key={i}>
                <span className="info-label">{label}</span>
                <span className="info-value">{value}</span>
              </div>
            ))}
          </div>

          <div className="avgs-box">
            <div className="avgs-box-tag">Jobcenter clients</div>
            <h3>Have an AVGS voucher?</h3>
            <p>
              Our coaching is fully funded through AVGS and §16k SGB II. If you already have a
              voucher — or need help getting one — just mention it in the form and we'll take
              care of the rest.
            </p>
          </div>

          <div>
            <div className="info-tag">Response time</div>
            <div className="info-item">
              <span className="info-label">Mon–Fri</span>
              <span className="info-value">Within 24 hours</span>
            </div>
            <div className="info-item">
              <span className="info-label">Weekend</span>
              <span className="info-value">Reply on Monday</span>
            </div>
          </div>
        </div>

        <div>
          <form className="form-card" onSubmit={onSubmit}>
            <div className="form-title">Free consultation</div>
            <div className="form-sub">
              Fill in the form and we'll be in touch within 24 hours to arrange a free intro
              call.
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">First name</label>
                <input type="text" className="form-input" placeholder="Jane" required />
              </div>
              <div className="form-group">
                <label className="form-label">Last name</label>
                <input type="text" className="form-input" placeholder="Smith" required />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" placeholder="jane@example.com" required />
            </div>

            <div className="form-group">
              <label className="form-label">Phone (optional)</label>
              <input type="tel" className="form-input" placeholder="+49" />
            </div>

            <div className="form-group">
              <label className="form-label">I'm interested in</label>
              <select className="form-select" defaultValue="">
                <option value="" disabled>
                  Please select...
                </option>
                <option>Job Coaching · AVGS</option>
                <option>Holistic Coaching · §16k SGB II</option>
                <option>Life & Business Coaching · Private</option>
                <option>Not sure — please advise me</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">AVGS / Jobcenter voucher</label>
              <select className="form-select" defaultValue="No — but I'd like to apply for one">
                <option>No — but I'd like to apply for one</option>
                <option>Yes — I already have an AVGS voucher</option>
                <option>I have a §16k SGB II voucher</option>
                <option>I'm a private client</option>
                <option>Not sure — please explain</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Where are you now?</label>
              <textarea
                className="form-textarea"
                placeholder="Tell us briefly: how long have you been in Germany, what's your professional background, and what you'd like to change..."
              />
            </div>

            <div className="form-group">
              <label className="form-label">Preferred format</label>
              <select className="form-select" defaultValue="Online">
                <option>Online</option>
                <option>In person (Berlin)</option>
                <option>Either works for me</option>
              </select>
            </div>

            <div className="form-check">
              <input type="checkbox" id="privacy" required />
              <label htmlFor="privacy">
                I have read the <a href="#">Privacy Policy</a> and consent to the processing of
                my personal data in accordance with GDPR.
              </label>
            </div>

            <button type="submit" className="btn-submit">
              {sent ? "Thank you — we'll be in touch ✓" : "Send enquiry →"}
            </button>
          </form>
        </div>
      </div>
    </SiteShell>
  );
}
