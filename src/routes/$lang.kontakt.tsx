import { createFileRoute } from "@tanstack/react-router";
import { i18nHead } from "@/i18n/head";
import { CONTENT } from "@/i18n";
import { langOf } from "@/i18n/route";
import { KontaktPage } from "@/i18n/pages/Kontakt";

export const Route = createFileRoute("/$lang/kontakt")({
  head: ({ params }) => {
    const lang = langOf(params.lang);
    return i18nHead(lang, "/kontakt", CONTENT[lang].kontakt.meta);
  },
  component: () => <KontaktPage lang={langOf(Route.useParams().lang)} />,
});
