import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { coaches, coachPlaceholders, type Coach } from "@/data/coaches";

export const Route = createFileRoute("/coaches/")({
  head: () => ({
    meta: [
      { title: "Coaches — GetGrow Academy Berlin" },
      {
        name: "description",
        content:
          "Lerne unser Team kennen — zertifizierte Coaches mit eigener Migrationserfahrung, die den deutschen Arbeitsmarkt und den Weg zurück ins Berufsleben verstehen.",
      },
    ],
  }),
  component: CoachesPage,
});

function initials(name: string) {
  return name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();
}

function CoachMiniCard({ coach }: { coach: Coach }) {
  return (
    <Link
      to="/coaches/$slug"
      params={{ slug: coach.slug }}
      className={`coach-mini ${coach.isFounder ? "coach-mini-founder" : ""}`}
    >
      <div className="coach-mini-photo-wrap">
        {coach.photo ? (
          <object
            data={coach.photo}
            type="image/jpeg"
            aria-label={coach.name}
            className="coach-mini-photo"
          >
            <div className="coach-mini-fallback">{initials(coach.name)}</div>
          </object>
        ) : (
          <div className="coach-mini-fallback">{initials(coach.name)}</div>
        )}
      </div>
      <div className="coach-mini-body">
        {coach.isFounder && (
          <div className="coach-mini-founder-badge">Gründerin</div>
        )}
        <div className="coach-mini-name">{coach.name}</div>
        <div className="coach-mini-role">{coach.role}</div>
        <div className="coach-mini-langs">
          {coach.languages.map((l) => (
            <span key={l.label} title={l.label}>{l.flag}</span>
          ))}
        </div>
        <span className="coach-mini-cta">Profil ansehen →</span>
      </div>
    </Link>
  );
}

function PlaceholderMiniCard({ coach }: { coach: Coach }) {
  return (
    <div className="coach-mini coach-mini-placeholder">
      <div className="coach-mini-photo-wrap">
        <div className="coach-mini-fallback">{initials(coach.name)}</div>
      </div>
      <div className="coach-mini-body">
        <div className="placeholder-tag">Bald verfügbar</div>
        <div className="coach-mini-name">{coach.name}</div>
        <p className="placeholder-text">Details folgen in Kürze.</p>
      </div>
    </div>
  );
}

function CoachesPage() {
  return (
    <SiteShell active="coaches">
      <section className="page-hero simple">
        <div className="breadcrumb">
          <Link to="/">Start</Link> · Coaches
        </div>
        <h1>
          Unser <em>Team</em>
        </h1>
        <p className="page-hero-sub">
          Zertifizierte Coaches mit eigener Migrationserfahrung — die den deutschen Arbeitsmarkt
          verstehen und wissen, was es wirklich braucht, sich beruflich in einem neuen Land neu
          aufzustellen.
        </p>
        <div className="coaches-stats">
          <div className="coaches-stat"><strong>{coaches.length}</strong><span>Zertifizierte Coaches</span></div>
          <div className="coaches-stat"><strong>3 000+</strong><span>Coaching-Stunden</span></div>
          <div className="coaches-stat"><strong>5</strong><span>Arbeitssprachen</span></div>
          <div className="coaches-stat"><strong>AVGS</strong><span>anerkannter Träger</span></div>
        </div>
      </section>

      <section className="coaches-section">
        <div className="coach-group">
          <div className="coach-group-head">
            <div className="coach-group-tag">Coaching-Team</div>
            <h2>Unser erfahrenes Coaching-Team</h2>
          </div>
          <div className="coach-grid">
            {coaches.map((c) => (
              <CoachMiniCard key={c.slug} coach={c} />
            ))}
            {coachPlaceholders.map((c) => (
              <PlaceholderMiniCard key={c.slug} coach={c} />
            ))}
          </div>
        </div>

        <div className="coach-join" style={{ marginTop: 80 }}>
          <div className="join-tag">Coach werden</div>
          <h3>Du bist Coach und möchtest mit uns arbeiten?</h3>
          <p>
            Wir bauen ein Netzwerk aus zertifizierten Coaches auf, die Privatpersonen, Unternehmen
            und Jobcenter-Klient:innen in Deutschland begleiten. Wenn du Erfahrung im Karriere-,
            Life- oder Business-Coaching hast, freuen wir uns über deine Nachricht.
          </p>
          <Link to="/kontakt" className="btn-mint">
            Bewirb dich als Coach →
          </Link>
        </div>
      </section>

      <section className="cta-strip">
        <div>
          <div className="cta-strip-tag">Bereit anzufangen?</div>
          <h2>Buche heute dein kostenloses Erstgespräch.</h2>
        </div>
        <div className="cta-btns">
          <Link to="/kontakt" className="btn-mint">
            Erstgespräch buchen
          </Link>
          <Link to="/avgs-coaching" className="btn-outline-w">
            Programme ansehen →
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
