import { createFileRoute } from "@tanstack/react-router";
import { i18nHead } from "@/i18n/head";
import { CONTENT } from "@/i18n";
import { langOf } from "@/i18n/route";
import { PrivatPage } from "@/i18n/pages/Privat";

export const Route = createFileRoute("/$lang/privatpersonen")({
  head: ({ params }) => {
    const lang = langOf(params.lang);
    return i18nHead(lang, "/privatpersonen", CONTENT[lang].privat.meta);
  },
  component: () => <PrivatPage lang={langOf(Route.useParams().lang)} />,
});
