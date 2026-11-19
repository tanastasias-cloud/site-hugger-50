import { createFileRoute } from "@tanstack/react-router";
import { homeHead } from "@/seo-schema";
import { mergeHead } from "@/lib/merge-head";
import { CONTENT } from "@/i18n";
import { langOf } from "@/i18n/route";
import { HomePage } from "@/i18n/pages/Home";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const lang = langOf(params.lang);
    const m = CONTENT[lang].home.meta;
    return mergeHead(
      {
        meta: [
          { title: m.title },
          { name: "description", content: m.description },
          { property: "og:title", content: m.ogTitle },
          { property: "og:description", content: m.ogDescription },
        ],
      },
      homeHead(lang),
    );
  },
  component: () => <HomePage lang={langOf(Route.useParams().lang)} />,
});
