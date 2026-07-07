import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { coaches, type Coach } from "@/data/coaches";

export const Route = createFileRoute("/coaches/$slug")({
  head: ({ params }) => {
    const c = coaches.find((x) => x.slug === params.slug);
    const title = c ? `${c.name} — GetGrow Academy Berlin` : "Coach — GetGrow Academy";
    const desc = c ? `${c.name} · ${c.role}` : "Coach-Profil";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  loader: ({ params }) => {
    const coach = coaches.find((c) => c.slug === params.slug);
    if (!coach) throw notFound();
    return { coach };
  },
  notFoundComponent: NotFoundCoach,
  errorComponent: ({ reset }) => (
    <SiteShell active="coaches">
      <section className="page-hero simple">
        <h1>Coach nicht gefunden</h1>
        <p className="page-hero-sub">
          <Link to="/coaches">← Zurück zur Übersicht</Link>{" "}
          <button onClick={reset} className="ghost" style={{ marginLeft: 12 }}>
            Erneut versuchen
          </button>
        </p>
      </section>
    </SiteShell>
  ),
  component: CoachProfilePage,
});

function initials(name: string) {
  return name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();
}

function NotFoundCoach() {
  return (
    <SiteShell active="coaches">
      <section className="page-hero simple">
        <div className="breadcrumb">
          <Link to="/">Start</Link> · <Link to="/coaches">Coaches</Link>
        </div>
        <h1>Coach nicht gefunden</h1>
        <p className="page-hero-sub">
          Dieses Profil existiert nicht. <Link to="/coaches">Alle Coaches ansehen →</Link>
        </p>
      </section>
    </SiteShell>
  );
}

function CoachProfilePage() {
  const { coach } = Route.useLoaderData() as { coach: Coach };

  return (
    <SiteShell active="coaches">
      <section className="page-hero simple">
        <div className="breadcrumb">
          <Link to="/">Start</Link> · <Link to="/coaches">Coaches</Link> · {coach.name}
        </div>
      </section>

      <section className="coaches-section">
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
            <div className="coach-contact-box">
              <div className="info-tag">Kontakt</div>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "#555", marginBottom: 16 }}>
                Möchtest du ein Erstgespräch mit {coach.name.split(" ")[0]} vereinbaren?
              </p>
              <Link to="/kontakt" className="btn-mint">
                Erstgespräch anfragen →
              </Link>
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

            <div style={{ paddingTop: 16 }}>
              <Link to="/coaches" className="coach-intro-link">
                ← Alle Coaches ansehen
              </Link>
            </div>
          </div>
        </article>
      </section>
    </SiteShell>
  );
}
