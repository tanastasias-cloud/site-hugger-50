import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { coaches, coachPlaceholders, team, type Coach } from "@/data/coaches";

export const Route = createFileRoute("/coaches")({
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
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function CoachCard({ coach }: { coach: Coach }) {
  return (
    <article className="coach-card">
      <div className="coach-photo-col">
        {coach.photo ? (
          <object
            data={coach.photo}
            type="image/jpeg"
            aria-label={coach.name}
            className="coach-photo"
          >
            <div className="coach-photo-fallback">{initials(coach.name)}</div>
          </object>
        ) : (
          <div className="coach-photo-placeholder">{initials(coach.name)}</div>
        )}
        <div className="coach-langs">
          {coach.languages.map((l) => (
            <span className="lang-tag" key={l.label}>
              {l.flag} {l.label}
            </span>
          ))}
        </div>
      </div>

      <div className="coach-content">
        <div>
          <div className="coach-name">{coach.name}</div>
          <div className="coach-role">{coach.role}</div>
        </div>

        <div className="coach-bio">
          {coach.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="coach-creds">
          <div className="creds-title">Ausbildung & Qualifikationen</div>
          {coach.credentials.map((c) => (
            <div className="cred-item" key={c.text}>
              <div className="cred-type">{c.type}</div>
              <div>
                <div className="cred-text">{c.text}</div>
                <div className="cred-sub">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="exp-title">Schwerpunkte</div>
          <div className="exp-grid">
            {coach.expertise.map((e) => (
              <div className="exp-item" key={e}>
                {e}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function PlaceholderCoachCard({ coach }: { coach: Coach }) {
  return (
    <article className="placeholder-coach-card">
      <div className="placeholder-photo">{initials(coach.name)}</div>
      <div className="placeholder-content">
        <div className="placeholder-tag">Bald verfügbar</div>
        <div className="placeholder-name">{coach.name}</div>
        <p className="placeholder-text">Details zu diesem Coach folgen in Kürze.</p>
      </div>
    </article>
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
          Zertifizierte Coaches mit eigener Migrationserfahrung — die nicht nur den deutschen
          Arbeitsmarkt verstehen, sondern auch, was es wirklich braucht, sich beruflich in einem
          neuen Land neu aufzustellen.
        </p>
      </section>

      <section className="coaches-section">
        {coaches.map((c) => (
          <CoachCard key={c.slug} coach={c} />
        ))}

        <div className="coaches-placeholder-grid" aria-label="Weitere Coaches folgen">
          {coachPlaceholders.map((c) => (
            <PlaceholderCoachCard key={c.slug} coach={c} />
          ))}
        </div>

        {team.length > 0 && (
          <div className="team-section">
            <div className="team-heading">Hinter den Kulissen</div>
            <div className="team-grid">
              {team.map((m) => (
                <div className="team-card" key={m.slug}>
                  <div className="team-avatar">{initials(m.name)}</div>
                  <div>
                    <div className="team-name">{m.name}</div>
                    <div className="team-role">{m.role}</div>
                    <p className="team-bio">{m.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="coach-join">
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
