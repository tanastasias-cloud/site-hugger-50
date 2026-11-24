import { Fragment, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { LLink } from "@/components/site/LLink";
import type { Article, Block } from "@/articles";
import type { TLang } from "../lang";
import { CONTENT } from "../index";
import { UI } from "../ui";

const INLINE = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;

/** **fett**, *kursiv*, [text](url) -> React. Interne Links (/...) per Router, externe in neuem Tab. */
function inline(text: string): ReactNode[] {
  return text.split(INLINE).map((part, i) => {
    if (!part) return null;
    if (part.startsWith("**")) return <strong key={i}>{inline(part.slice(2, -2))}</strong>;
    if (part.startsWith("*")) return <em key={i}>{part.slice(1, -1)}</em>;
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (m) {
      const [, label, href] = m;
      return href.startsWith("/") ? (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <Link key={i} to={href as any}>{label}</Link>
      ) : (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

function renderBlocks(blocks: Block[]): ReactNode[] {
  const out: ReactNode[] = [];
  let seenFirstP = false;
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    switch (b.t) {
      case "h1":
        break; // H1 steht im Hero
      case "h2":
        out.push(<h2 key={i}>{inline(b.text)}</h2>);
        break;
      case "hr":
        out.push(<hr key={i} />);
        break;
      case "ul":
        out.push(<ul key={i} className="article-bullets">{b.items.map((it, j) => <li key={j}>{inline(it)}</li>)}</ul>);
        break;
      case "ol":
        out.push(<ol key={i} className="article-steps">{b.items.map((it, j) => <li key={j}>{inline(it)}</li>)}</ol>);
        break;
      case "qa": {
        // zusammenhängende Frage-Antwort-Blöcke bilden die FAQ-Liste
        const group: Extract<Block, { t: "qa" }>[] = [b];
        while (blocks[i + 1]?.t === "qa") group.push(blocks[++i] as Extract<Block, { t: "qa" }>);
        out.push(
          <div className="article-faq" key={i}>
            {group.map((g, j) => (
              <div className="article-qa" key={j}>
                <h3>{inline(g.q)}</h3>
                <p>{inline(g.a)}</p>
              </div>
            ))}
          </div>,
        );
        break;
      }
      case "p": {
        const isMeta = /^\*[^*]+\*$/.test(b.text); // Zeile «Обновлено … Автор …»
        const isGo = /^\[[^\]]+\]\([^)]+\)$/.test(b.text); // Absatz nur aus einem Link -> Button
        const isCallout = !isMeta && !isGo && (!seenFirstP || /^\*\*[^*]+:\*\*/.test(b.text)); // «Коротко:», «Совет:»
        if (!isMeta && !isGo) seenFirstP = true;
        const after = blocks[i - 1]?.t === "hr";
        const cls = isMeta ? "article-meta" : isGo ? "article-go" : isCallout ? "article-callout" : after ? "article-source" : undefined;
        out.push(<p key={i} className={cls}>{inline(b.text)}</p>);
        break;
      }
    }
  }
  return out;
}

const CRUMBS: Record<TLang, { articles: string }> = {
  ru: { articles: "Статьи" },
  uk: { articles: "Статті" },
};
/** Kurzer Titel der Statt im Brotkrumenpfad (pro Adresse). */
const CRUMB_TITLE: Record<string, string> = {
  "/ru/stati/kak-poluchit-vaucher-avgs": "Как получить ваучер AVGS",
  "/uk/statti/yak-otrymaty-vaucher-avgs": "Як отримати ваучер AVGS",
};

export function ArticlePage({ article }: { article: Article }) {
  const lang = article.lang;
  const t = UI[lang].nav;
  const cta = CONTENT[lang].avgs.cta;
  return (
    <SiteShell active="avgs" lang={lang}>
      <div className="article-page">
        <section className="page-hero simple">
          <div className="breadcrumb">
            <LLink lang={lang} to="/">{t.home}</LLink>
            {" · "}
            {CRUMBS[lang].articles}
            {" · "}
            {CRUMB_TITLE[article.path] ?? article.h1}
          </div>
          <h1>{article.h1}</h1>
        </section>

        <section className="section white">
          <article className="article-body">{renderBlocks(article.blocks)}</article>
        </section>

        <section className="cta-strip">
          <div>
            <div className="cta-strip-tag">{cta.tag}</div>
            <h2>{cta.h2}</h2>
          </div>
          <div className="cta-btns">
            <LLink lang={lang} to="/kontakt" className="btn-mint">
              {cta.primary}
            </LLink>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
