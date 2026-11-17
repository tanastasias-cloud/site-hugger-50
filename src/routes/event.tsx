import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

// The event (opening of GetGrow Academy, 15 Nov 2026) is over. The old landing page is kept in
// archive/event-2026-11-15 (not published). This page only catches old links to /event.
export const Route = createFileRoute("/event")({
  head: () => ({
    meta: [
      { title: "Мероприятие окончено — GetGrow Academy Berlin" },
      {
        name: "description",
        content: "Открытие GetGrow Academy состоялось 15 ноября в Берлине. Спасибо, что были с нами.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: EventEndedPage,
});

function EventEndedPage() {
  return (
    <SiteShell>
      <section className="page-hero simple" style={{ minHeight: "calc(100vh - 260px)" }}>
        <div className="breadcrumb">
          <Link to="/">Startseite</Link> · Event
        </div>
        <h1>Мероприятие окончено</h1>
        <p className="page-hero-sub">
          Открытие GetGrow Academy состоялось 15 ноября в Берлине. Спасибо всем, кто пришёл!
        </p>
        <p className="page-hero-sub" style={{ marginTop: 12 }}>
          Die Veranstaltung ist beendet. Vielen Dank an alle, die dabei waren.
        </p>
        <div className="cta-btns" style={{ marginTop: 32 }}>
          <Link to="/" className="btn-mint">
            На главную
          </Link>
          <Link
            to="/kontakt"
            className="btn-outline-w"
            style={{ color: "var(--forest)", borderColor: "var(--forest)" }}
          >
            Связаться с нами →
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
