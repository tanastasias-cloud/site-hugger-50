import { createFileRoute } from "@tanstack/react-router";
import { i18nHead } from "@/i18n/head";
import { CONTENT } from "@/i18n";
import { langOf } from "@/i18n/route";
import { UnternehmenPage } from "@/i18n/pages/Unternehmen";

export const Route = createFileRoute("/$lang/unternehmen")({
  head: ({ params }) => {
    const lang = langOf(params.lang);
    return i18nHead(lang, "/unternehmen", CONTENT[lang].unternehmen.meta);
  },
  component: () => <UnternehmenPage lang={langOf(Route.useParams().lang)} />,
});
