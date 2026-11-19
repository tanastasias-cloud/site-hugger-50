import { createFileRoute, notFound, useParams } from "@tanstack/react-router";
import { pageHead } from "@/seo-schema";
import { mergeHead } from "@/lib/merge-head";
import { coaches, type Coach } from "@/data/coaches";
import { CONTENT } from "@/i18n";
import { langOf } from "@/i18n/route";
import { CoachProfilePage, CoachNotFound } from "@/i18n/pages/CoachProfile";

export const Route = createFileRoute("/$lang/coaches/$slug")({
  head: ({ params }) => {
    const lang = langOf(params.lang);
    const c = coaches.find((x) => x.slug === params.slug);
    const ui = CONTENT[lang].coachProfileUi;
    const role = c ? CONTENT[lang].coachTexts[c.slug]?.role ?? c.role : "";
    const title = c ? `${c.name} — ${ui.descCoachProfile} | GetGrow Academy Berlin` : `${ui.descCoachProfile} | GetGrow Academy`;
    const desc = c ? `${c.name} · ${role}` : ui.descCoachProfile;
    return mergeHead(
      {
        meta: [
          { title },
          { name: "description", content: desc },
          { property: "og:title", content: title },
          { property: "og:description", content: desc },
        ],
      },
      c ? pageHead(`/coaches/${c.slug}`, lang) : {},
    );
  },
  loader: ({ params }) => {
    const coach = coaches.find((c) => c.slug === params.slug);
    if (!coach) throw notFound();
    return { coach };
  },
  notFoundComponent: () => {
    const { lang } = useParams({ strict: false }) as { lang?: string };
    return <CoachNotFound lang={langOf(lang ?? "ru")} />;
  },
  component: CoachRoute,
});

function CoachRoute() {
  const { coach } = Route.useLoaderData() as { coach: Coach };
  return <CoachProfilePage lang={langOf(Route.useParams().lang)} coach={coach} />;
}
