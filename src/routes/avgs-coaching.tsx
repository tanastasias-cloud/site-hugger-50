import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/avgs-coaching")({
  head: () => ({
    meta: [
      { title: "Job Coaching · AVGS — GetGrow Academy Berlin" },
      {
        name: "description",
        content:
          "Certified Job Coaching funded by AVGS / Jobcenter. From situation analysis to signing your contract — step by step.",
      },
    ],
  }),
  component: AvgsPage,
});

const STEPS: Array<[string, string]> = [
  ["Professional analysis & strategy", "We identify your competencies, goals, and develop a clear action plan for the German labour market. Where you are, where you can go, and how to get there."],
  ["Application documents", "CV and cover letter tailored for German employers. LinkedIn and XING profiles that get noticed. We know what works here — and what doesn't."],
  ["Targeted job search", "We analyse the current market, identify suitable positions for your profile, and build a practical, effective search strategy together."],
  ["Interview preparation", "Mock interviews, typical employer questions, confident self-presentation — practised until it feels natural. In your language."],
  ["Ongoing coach support", "Regular individual sessions, honest feedback, and full support throughout the entire process — until you sign the contract."],
];

const FAQS: Array<[string, string]> = [
  ["What is an AVGS voucher?", "An AVGS (Aktivierungs- und Vermittlungsgutschein) is a funding voucher issued by the Jobcenter or Agentur für Arbeit. It covers the full cost of individual coaching — you pay nothing."],
  ["How long does the coaching last?", "The duration depends on your goals and what's stated on the AVGS voucher. Sessions must take place at least twice per week."],
  ["Can I choose my coach?", "Yes. You're entitled to a free 30-minute intro session before committing. If the fit isn't right, we'll find a better match."],
  ["In which languages do you coach?", "German is the primary language. Ukrainian, Russian, and English are available as additional options — for both sessions and communication with the Jobcenter."],
  ["Can you help me get the AVGS voucher?", "Yes — we help with correspondence and if needed, can join a consultation call with your Jobcenter advisor. Get in touch and we'll guide you through the process."],
];

function AvgsPage() {
  return (
    <SiteShell active="avgs">
      <section className="page-hero split">
        <div className="page-hero-left">
          <div className="breadcrumb">
            <Link to="/">Home</Link> · Job Coaching · AVGS
          </div>
          <h1>
            Job Coaching <em>· AVGS</em>
          </h1>
          <p className="page-hero-text">
            From your first session to signing your employment contract — certified coaching,
            fully funded by the Jobcenter.
          </p>
        </div>
        <div className="page-hero-right">
          {[
            ["✓", "Cost", "100% free · funded by Jobcenter"],
            ["📋", "Certification", "AZAV certified · AVGS accepted"],
            ["🌍", "Languages", "DE · EN · UA · RU"],
            ["📍", "Format", "Online & in person · Berlin"],
          ].map(([icon, label, value]) => (
            <div className="hero-badge-item" key={label}>
              <div className="badge-icon">{icon}</div>
              <div>
                <div className="badge-label">{label}</div>
                <div className="badge-value">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section white">
        <div className="sh">
          <div className="sh-tag">Program 01 · AVGS</div>
          <h2 className="sh-h2">
            Job Coaching — <em>step by step</em>
          </h2>
        </div>
        <div className="two-col">
          <div>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: "#666", marginBottom: 36 }}>
              Our certified coaches accompany you at every step — from situation analysis to
              signing your employment contract. We know how the German system works, and we show
              you exactly how to navigate it.
            </p>
            <div className="steps">
              {STEPS.map(([title, text], i) => (
                <div className="step-item" key={title}>
                  <div className="step-num-circle">{i + 1}</div>
                  <div>
                    <div className="step-title">{title}</div>
                    <p className="step-text">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="avgs-right">
            <div className="avgs-info-box">
              <div className="box-tag">How to get your AVGS voucher</div>
              <p>
                Contact your advisor at the Jobcenter or Agentur für Arbeit and request an AVGS
                voucher for Job Coaching. Once you have it, get in touch — we'll organise a free
                intro session and handle all the paperwork. We can also help you with the
                voucher application itself.
              </p>
              <div className="avgs-free-badge">
                <div className="free-title">Participation is completely free.</div>
                <div className="free-sub">All costs are covered by the state.</div>
              </div>
            </div>
            <div className="eligibility-box">
              <div className="elig-tag">Who can apply</div>
              <div className="elig-item">Registered as unemployed, receiving Bürgergeld or Arbeitslosengeld</div>
              <div className="elig-item">Eingliederungsvereinbarung signed with your Jobcenter</div>
              <div className="elig-item">Had a consultation with your Jobcenter advisor</div>
              <div className="elig-item">Employment at risk (Kündigung received or expected)</div>
            </div>
            <div className="cta-box">
              <div className="cta-box-text">We also help with the voucher application.</div>
              <Link to="/kontakt">Get in touch →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section off">
        <div className="sh">
          <div className="sh-tag">Questions</div>
          <h2 className="sh-h2">
            Frequently <em>asked</em>
          </h2>
        </div>
        <div className="faq-list">
          {FAQS.map(([q, a]) => (
            <details className="faq-item" key={q}>
              <summary className="faq-q">{q}</summary>
              <div className="faq-a">{a}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="cta-strip">
        <div>
          <div className="cta-strip-tag">Ready to start?</div>
          <h2>Book your free consultation today.</h2>
        </div>
        <div className="cta-btns">
          <Link to="/kontakt" className="btn-mint">
            Book free call
          </Link>
          <Link to="/16k-coaching" className="btn-outline-w">
            Also looking at §16k? →
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
