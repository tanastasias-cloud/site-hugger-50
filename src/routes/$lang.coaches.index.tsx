import { createFileRoute } from "@tanstack/react-router";
import { i18nHead } from "@/i18n/head";
import { CONTENT } from "@/i18n";
import { langOf } from "@/i18n/route";
import { CoachesPage } from "@/i18n/pages/Coaches";

export const Route = createFileRoute("/$lang/coaches/")({
  head: ({ params }) => {
    const lang = langOf(params.lang);
    return i18nHead(lang, "/coaches", CONTENT[lang].coachesPage.meta);
  },
  component: () => <CoachesPage lang={langOf(Route.useParams().lang)} />,
});
