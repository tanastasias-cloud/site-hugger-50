import { createFileRoute, notFound } from "@tanstack/react-router";
import { articleByPath } from "@/articles";
import { articleHead } from "@/seo-schema";
import { ArticlePage } from "@/i18n/pages/Article";

// /uk/statti/yak-otrymaty-vaucher-avgs — Text: src/content/articles/uk-yak-otrymaty-vaucher-avgs.md
const article = articleByPath("/uk/statti/yak-otrymaty-vaucher-avgs");

export const Route = createFileRoute("/$lang/statti/yak-otrymaty-vaucher-avgs")({
  // Nur unter /uk — /ru/statti/... gibt es nicht
  beforeLoad: ({ params }) => {
    if (params.lang !== article.lang) throw notFound();
  },
  head: () => articleHead(article),
  component: () => <ArticlePage article={article} />,
});
