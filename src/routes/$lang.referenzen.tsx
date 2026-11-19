import { createFileRoute } from "@tanstack/react-router";
import { i18nHead } from "@/i18n/head";
import { CONTENT } from "@/i18n";
import { langOf } from "@/i18n/route";
import { ReferenzenPage } from "@/i18n/pages/Referenzen";

export const Route = createFileRoute("/$lang/referenzen")({
  head: ({ params }) => {
    const lang = langOf(params.lang);
    return i18nHead(lang, "/referenzen", CONTENT[lang].referenzen.meta);
  },
  component: () => <ReferenzenPage lang={langOf(Route.useParams().lang)} />,
});
