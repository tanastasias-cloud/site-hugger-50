import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GetGrow Academy Berlin · Career · Life · Business Coaching" },
      {
        name: "description",
        content:
          "Certified career, life and business coaching for international professionals in Berlin. AVGS & §16k SGB II accepted.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteShell active="home">
      {/* HERO */}
      <section className="gg-hero">
        <div className="gg-hero-left">
          <div className="gg-hero-tag">Career · Life · Business Coaching · Berlin & Online</div>
          <h1 className="gg-hero-h1">
            Your experience matters.
            <br />
            Let's make it work <em>here.</em>
          </h1>
          <span className="gg-hero-script">Grow.</span>
          <p className="gg-hero-text">
            You moved to a new country with skills, experience, and ambition. But the system is
            different, the language is hard, and no one seems to see what you bring. We do — and
            we help you build a career that reflects who you really are.
          </p>
          <div className="gg-hero-btns">
            <Link to="/kontakt" className="btn-p">
              Book free consultation
            </Link>
            <a href="#services" className="btn-s">
              See our programs
            </a>
          </div>
          <div className="gg-hero-proof">
            <div className="proof-item">
              <div className="proof-num">200+</div>
              <div className="proof-text">Clients coached</div>
            </div>
            <div className="proof-item">
              <div className="proof-num">AZAV</div>
              <div className="proof-text">Certified · AVGS</div>
            </div>
            <div className="proof-item">
              <div className="proof-num">4+</div>
              <div className="proof-text">Languages</div>
            </div>
          </div>
        </div>
        <div className="gg-hero-right">
          <div className="gg-hero-photo">
            <span>🖼</span>
            <span>Photo: Yuliia & Anastasia</span>
          </div>
          <div className="gg-hero-badge">
            <div className="badge-text">
              "I came to Germany with 15 years of experience. After coaching I finally knew how to
              make it count here."
            </div>
            <div className="badge-author">Maria S. · Career Coaching · Berlin</div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="gg-mission">
        <div className="mission-inner">
          <div className="mission-tag">Our mission</div>
          <h2 className="mission-h2">
            Moving to a new country shouldn't mean
            <br />
            starting your career <em>from zero.</em>
          </h2>
          <p className="mission-text">
            Too many skilled professionals arrive in Germany and spend years feeling invisible —
            overqualified for some roles, underqualified on paper for others, lost in a system no
            one explained. GetGrow Academy exists to change that. We help migrants turn their
            international experience into a real career path in Germany — with clarity,
            confidence, and a concrete plan.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="gg-services" id="services">
        <div className="sh">
          <div className="sh-tag">What we offer</div>
          <h2 className="sh-h2">
            Our programs. <em>Your path.</em>
          </h2>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-num">01</div>
            <div className="service-tag">Yuliia Zaienchyk · AVGS accepted</div>
            <div className="service-title">Job Coaching</div>
            <p className="service-text">
              From situation analysis to signing your contract. CV, cover letter, LinkedIn, job
              search strategy, interview preparation — step by step, with a certified coach.
            </p>
            <Link to="/avgs-coaching" className="service-link">
              Learn more
            </Link>
          </div>
          <div className="service-card">
            <div className="service-num">02</div>
            <div className="service-tag">Yuliia Zaienchyk · §16k SGB II</div>
            <div className="service-title">Holistic Coaching</div>
            <p className="service-text">
              When it's not just about the CV. Stress, housing, language barriers, debt,
              uncertainty — the §16k programme covers your whole situation. Fully funded by
              Jobcenter.
            </p>
            <Link to="/16k-coaching" className="service-link">
              Learn more
            </Link>
          </div>
          <div className="service-card">
            <div className="service-num">03</div>
            <div className="service-tag">Anastasia Lunina · Private clients</div>
            <div className="service-title">Life & Business Coaching</div>
            <p className="service-text">
              Building something new in Germany — a career, a business, or a life that finally
              feels like yours. Coaching focused on clarity, confidence, and real results.
            </p>
            <Link to="/kontakt" className="service-link">
              Book a call
            </Link>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="gg-outcomes">
        <div className="sh">
          <div className="sh-tag">What changes</div>
          <h2 className="sh-h2">
            What our clients <em>experience</em>
          </h2>
        </div>
        <div className="outcomes-grid">
          {[
            ["Clarity", "You understand exactly where you stand in the German job market — and where you can go. No more guessing."],
            ["Direction", "A concrete action plan: which roles to target, how to apply, how to present your international background as a strength."],
            ["Confidence", "You walk into interviews, meetings, and new situations knowing your value — regardless of your accent or passport."],
            ["Results", "A new job, a business launched, a life that feels stable and meaningful again. Outcomes you can measure."],
          ].map(([word, text]) => (
            <div className="outcome-item" key={word}>
              <div className="outcome-word">{word}</div>
              <p className="outcome-text">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COACH INTRO */}
      <section className="gg-coach-intro">
        <div className="coach-intro-grid">
          <div className="coach-intro-photo">
            <span>Photo · Yuliia</span>
          </div>
          <div>
            <div className="coach-intro-tag">Your coach</div>
            <div className="coach-intro-name">Yuliia Zaienchyk</div>
            <div className="coach-intro-role">
              Career Coach · Applied Psychologist · Berlin since 2015
            </div>
            <p className="coach-intro-bio">
              I'm a certified career coach with a Master's degree in Applied Psychology and 6
              years of practice. I work at the intersection of psychology and coaching — because
              most career challenges aren't really about the CV.
            </p>
            <p className="coach-intro-bio">
              I've been in Berlin since 2015. I know this system — and I know how to help you
              navigate it.
            </p>
            <div className="coach-intro-tags">
              <span>🇺🇦 Ukrainian</span>
              <span>🇷🇺 Russian</span>
              <span>🇩🇪 German B2</span>
              <span>🇬🇧 English C1</span>
            </div>
            <Link to="/coaches" className="coach-intro-link">
              Full profile & qualifications →
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="gg-testimonials">
        <div className="sh">
          <div className="sh-tag">Client stories</div>
          <h2 className="sh-h2">
            People who built a new <em>beginning</em>
          </h2>
        </div>
        <div className="testi-grid">
          <div className="tcard tcard-featured">
            <div className="tcard-stars">★★★★★</div>
            <div className="tcard-quote">"</div>
            <p className="tcard-text">
              Yuliia showed an incredible attention and genuine love for her work from the very
              first session. She created a safe and supportive atmosphere where I felt
              comfortable expressing my thoughts. She has the ability to bring a person back to
              themselves and start fresh when something isn't working.
            </p>
            <div className="tcard-author">
              <div className="tcard-av">👤</div>
              <div>
                <div className="tcard-name">Anastasia</div>
                <div className="tcard-role">Career Coaching · Berlin</div>
              </div>
            </div>
          </div>
          <div className="tcard tcard-regular">
            <div className="tcard-stars">★★★★★</div>
            <div className="tcard-quote">"</div>
            <p className="tcard-text">
              The terrible war drove me from my home into the unknown. But it was the coaching
              sessions with Yuliia that helped me find myself again — set new goals and actually
              pursue them. It's not easy to build a new life at my age, but the foundation has
              been laid.
            </p>
            <div className="tcard-author">
              <div className="tcard-av">👤</div>
              <div>
                <div className="tcard-name">Liudmyla</div>
                <div className="tcard-role">Career Coaching · Berlin</div>
              </div>
            </div>
          </div>
          <div className="tcard tcard-regular">
            <div className="tcard-stars">★★★★★</div>
            <div className="tcard-quote">"</div>
            <p className="tcard-text">
              Yuliia was always by my side — she helped me write letters to the employment
              office, called on my behalf when I couldn't yet speak the language. Thanks to her
              I found an apartment, helped my daughter through a difficult time, and finally
              felt supported in this country.
            </p>
            <div className="tcard-author">
              <div className="tcard-av">👤</div>
              <div>
                <div className="tcard-name">Olena</div>
                <div className="tcard-role">Career & Life Coaching · Berlin</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AVGS BANNER */}
      <section className="avgs-banner">
        <div>
          <div className="tag">For Jobcenter clients</div>
          <h3>
            Our coaching is available through AVGS — <em>100% funded</em> by the Jobcenter.
          </h3>
        </div>
        <Link to="/avgs-coaching" className="btn-p" style={{ whiteSpace: "nowrap" }}>
          Apply for AVGS →
        </Link>
      </section>
    </SiteShell>
  );
}
