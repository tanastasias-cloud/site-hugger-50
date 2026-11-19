import { createFileRoute } from "@tanstack/react-router";
import { i18nHead } from "@/i18n/head";
import { CONTENT } from "@/i18n";
import { langOf } from "@/i18n/route";
import { K16Page } from "@/i18n/pages/K16";

export const Route = createFileRoute("/$lang/16k-coaching")({
  head: ({ params }) => {
    const lang = langOf(params.lang);
    return i18nHead(lang, "/16k-coaching", CONTENT[lang].k16.meta);
  },
  component: () => <K16Page lang={langOf(Route.useParams().lang)} />,
});
