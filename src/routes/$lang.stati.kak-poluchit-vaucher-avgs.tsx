import { createFileRoute, notFound } from "@tanstack/react-router";
import { articleByPath } from "@/articles";
import { articleHead } from "@/seo-schema";
import { ArticlePage } from "@/i18n/pages/Article";

// /ru/stati/kak-poluchit-vaucher-avgs — Text: src/content/articles/ru-kak-poluchit-vaucher-avgs.md
const article = articleByPath("/ru/stati/kak-poluchit-vaucher-avgs");

export const Route = createFileRoute("/$lang/stati/kak-poluchit-vaucher-avgs")({
  // Nur unter /ru — /uk/stati/... gibt es nicht (Ukrainisch: /uk/statti/...)
  beforeLoad: ({ params }) => {
    if (params.lang !== article.lang) throw notFound();
  },
  head: () => articleHead(article),
  component: () => <ArticlePage article={article} />,
});
