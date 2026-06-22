import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/coaches")({
  head: () => ({
    meta: [
      { title: "Coaches — GetGrow Academy Berlin" },
      {
        name: "description",
        content:
          "Meet our certified coaches — career coaching, applied psychology, and life & business coaching for international professionals in Berlin.",
      },
    ],
  }),
  component: CoachesPage,
});

function CoachesPage() {
  return (
    <SiteShell active="coaches">
      <section className="page-hero simple">
        <div className="breadcrumb">
          <Link to="/">Home</Link> · Coaches
        </div>
        <h1>
          Meet our <em>coaches</em>
        </h1>
        <p className="page-hero-sub">
          Certified professionals with first-hand migration experience — who understand not just
          the German job market, but what it truly takes to rebuild a professional life in a new
          country.
        </p>
      </section>

      <section className="coaches-section">
        <article className="coach-card">
          <div className="coach-photo-col">
            <div className="coach-photo-placeholder">Photo · Yuliia</div>
            <div className="coach-langs">
              <span className="lang-tag">🇺🇦 Ukrainian</span>
              <span className="lang-tag">🇷🇺 Russian</span>
              <span className="lang-tag">🇩🇪 German B2</span>
              <span className="lang-tag">🇬🇧 English C1</span>
            </div>
          </div>

          <div className="coach-content">
            <div>
              <div className="coach-name">Yuliia Zaienchyk</div>
              <div className="coach-role">
                Co-Founder · Career Coach · Applied Psychologist · Berlin since 2015
              </div>
            </div>

            <div className="coach-bio">
              <p>
                I've lived in Berlin since 2015 — which means I know exactly what it feels like
                to arrive in a new country with a full professional life behind you and have to
                start again. That personal experience is at the core of how I work with every
                client.
              </p>
              <p>
                I'm a certified career coach with a Master's degree in Applied Psychology and
                6 years of practice. I work at the intersection of psychology and coaching —
                because most career challenges aren't really about the CV. They're about fear,
                identity, and the beliefs people carry with them from a different life. I help
                people see that clearly — and move past it.
              </p>
              <p>
                Over the years I've built a wide professional network in Germany — companies, HR
                managers, educational institutions, and social organisations. That means I don't
                just give advice — I open real doors.
              </p>
            </div>

            <div className="coach-creds">
              <div className="creds-title">Education & Qualifications</div>
              {[
                ["Master's", "Applied Psychology", "Pedagogical University, Kyiv"],
                ["Bachelor's", "International Management", "International University of Finance, Kyiv"],
                ["Certificate", "Career Coaching — certified course", "Berlin"],
                [
                  "Experience",
                  "6 years coaching practice",
                  "incl. 2+ years at MigraVision — AVGS coaching, group programmes, team coordination",
                ],
              ].map(([type, text, sub]) => (
                <div className="cred-item" key={text}>
                  <div className="cred-type">{type}</div>
                  <div>
                    <div className="cred-text">{text}</div>
                    <div className="cred-sub">{sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="exp-title">Areas of expertise</div>
              <div className="exp-grid">
                {[
                  "Job search on the German market",
                  "CV & Bewerbung that open doors",
                  "Ausbildung & diploma recognition",
                  "Interview preparation & confidence",
                  "Crisis support & migration trauma",
                  "Identity, motivation & inner clarity",
                ].map((e) => (
                  <div className="exp-item" key={e}>
                    {e}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        <div className="coach-coming">
          <div className="coming-icon">👤</div>
          <div>
            <div className="coming-tag">Coming soon</div>
            <div className="coming-name">Anastasia Lunina</div>
            <p className="coming-text">
              Founder · Life & Business Coach · Berlin. Background in sales leadership, team
              building, and management. Specialises in private clients navigating career
              transitions, leadership growth, and business development in Germany.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div>
          <div className="cta-strip-tag">Ready to start?</div>
          <h2>Book a free intro call today.</h2>
        </div>
        <div className="cta-btns">
          <Link to="/kontakt" className="btn-mint">
            Book free call
          </Link>
          <Link to="/avgs-coaching" className="btn-outline-w">
            See our programs →
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
