import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/16k-coaching")({
  head: () => ({
    meta: [
      { title: "Holistic Coaching · §16k SGB II — GetGrow Academy Berlin" },
      {
        name: "description",
        content:
          "Individual §16k SGB II coaching covering your whole life situation — completely free, funded by Jobcenter.",
      },
    ],
  }),
  component: SixteenKPage,
});

const TOPICS = [
  "SWOT analysis & strengths",
  "Overcoming uncertainty & lack of goals",
  "Stabilisation of life situation",
  "Housing search support",
  "Debt support & financial literacy",
  "Time management & self-organisation",
  "Stress resilience & self-reflection",
  "Overcoming psychological barriers",
  "Physical & mental stabilisation",
  "Working with frustration & aggression",
  "Business etiquette & professional image",
  "Career goals & professional orientation",
];

function SixteenKPage() {
  return (
    <SiteShell active="16k">
      <section className="page-hero split">
        <div className="page-hero-left">
          <div className="breadcrumb">
            <Link to="/">Home</Link> · Job Coaching · §16k SGB II
          </div>
          <h1>
            Holistic Coaching <em>· §16k SGB II</em>
          </h1>
          <p className="page-hero-text">
            Individual support that covers not just your job search — but your whole life
            situation. Completely free, funded by Jobcenter.
          </p>
        </div>
        <div className="page-hero-right">
          {[
            ["✓", "Cost", "100% free · funded by Jobcenter"],
            ["📋", "Programme", "§16k SGB II · Bürgergeld recipients"],
            ["🌍", "Languages", "DE · EN · UA · RU"],
            ["🤝", "Approach", "Holistic · Psychology + Coaching"],
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

      <section className="section sage">
        <div className="sh">
          <div className="sh-tag">Program 02 · §16k SGB II</div>
          <h2 className="sh-h2">
            Holistic Coaching — <em>the whole picture</em>
          </h2>
        </div>
        <div className="two-col">
          <div className="intro-text">
            <p>
              Sometimes on the path to employment it's not just the lack of a CV or experience
              that gets in the way. It can be stress, debt, health issues, a language barrier —
              or simply not knowing where to begin.
            </p>
            <p>
              The §16k SGB II programme was created for exactly these situations. This is
              individual support that covers not just your job search, but your life situation
              as a whole.
            </p>

            <div className="highlight-box">
              <div className="hl-tag">Completely free</div>
              <p>
                Fully funded by your Jobcenter. No costs for you at any stage of the programme.
              </p>
            </div>

            <div className="highlight-box">
              <div className="hl-tag">Who it's for</div>
              <p>
                Recipients of Bürgergeld to whom the Jobcenter has issued a §16k SGB II voucher.
              </p>
            </div>

            <div className="how-start-tag">How to start</div>
            <p className="how-start-text">
              Contact your Jobcenter advisor and request a §16k SGB II voucher. Then get in touch
              with us — we'll book your free first consultation and handle the rest.
            </p>
            <Link to="/kontakt" className="btn-dark">
              Request free consultation →
            </Link>
          </div>

          <div>
            <div className="topics-header">What we work on</div>
            <div className="topics-grid">
              {TOPICS.map((t) => (
                <div className="topic-item" key={t}>
                  {t}
                </div>
              ))}
              <div className="topic-item wide">
                Family & relationship management · Social skills & workplace etiquette
              </div>
              <div className="topic-item wide">
                Other individual obstacles on the path to employment
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div>
          <div className="cta-strip-tag">Ready to start?</div>
          <h2>Book your free first consultation.</h2>
        </div>
        <div className="cta-btns">
          <Link to="/kontakt" className="btn-mint">
            Request §16k consultation
          </Link>
          <Link to="/avgs-coaching" className="btn-outline-w">
            Looking for AVGS? →
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
