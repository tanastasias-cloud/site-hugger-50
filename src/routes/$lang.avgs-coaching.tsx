import { createFileRoute } from "@tanstack/react-router";
import { avgsHead } from "@/seo-schema";
import { mergeHead } from "@/lib/merge-head";
import { CONTENT } from "@/i18n";
import { langOf } from "@/i18n/route";
import { AvgsPage } from "@/i18n/pages/Avgs";

export const Route = createFileRoute("/$lang/avgs-coaching")({
  head: ({ params }) => {
    const lang = langOf(params.lang);
    const m = CONTENT[lang].avgs.meta;
    return mergeHead(
      {
        meta: [
          { title: m.title },
          { name: "description", content: m.description },
          { property: "og:title", content: m.ogTitle },
          { property: "og:description", content: m.ogDescription },
          { property: "og:type", content: "website" },
        ],
      },
      avgsHead(lang),
    );
  },
  component: () => <AvgsPage lang={langOf(Route.useParams().lang)} />,
});
