import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { LLink } from "@/components/site/LLink";
import { articleUrl, type Article, type Block } from "@/articles";
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

function renderBlocks(blocks: Block[], card: ReactNode, share: (key: string) => ReactNode): ReactNode[] {
  const out: ReactNode[] = [];
  let seenFirstP = false;
  let cardPlaced = false;
  let shareTopPlaced = false;
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    switch (b.t) {
      case "h1":
        break; // H1 steht im Hero
      case "h2":
        out.push(<h2 key={i}>{inline(b.text)}</h2>);
        break;
      case "hr":
        // Karte der Autorin steht vor dem Quellenhinweis
        if (!cardPlaced) {
          out.push(share("share-bottom"), card);
          cardPlaced = true;
        }
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
        const isMeta = /^\*[^*]+\*$/.test(b.text); // Zeile «Обновлено … Автор …» — steht jetzt im Kopf der Seite
        if (isMeta) break;
        const isGo = /^\[[^\]]+\]\([^)]+\)$/.test(b.text); // Absatz nur aus einem Link -> Button
        const isCallout = !isMeta && !isGo && (!seenFirstP || /^\*\*[^*]+:\*\*/.test(b.text)); // «Коротко:», «Совет:»
        if (!isMeta && !isGo) seenFirstP = true;
        const after = blocks[i - 1]?.t === "hr";
        const cls = isGo ? "article-go" : isCallout ? "article-callout" : after ? "article-source" : undefined;
        out.push(<p key={i} className={cls}>{inline(b.text)}</p>);
        // «Поделиться» — сразу под блоком «Коротко» (первая выноска)
        if (cls === "article-callout" && !shareTopPlaced) {
          out.push(share("share-top"));
          shareTopPlaced = true;
        }
        break;
      }
    }
  }
  if (!cardPlaced) out.push(share("share-bottom"), card);
  return out;
}

const T: Record<
  TLang,
  {
    badge: string; articles: string; updated: string; cardRole: string; profile: string; crumb: Record<string, string>;
    share: string; copy: string; copied: string;
  }
> = {
  ru: {
    badge: "Статья · 5 минут чтения",
    articles: "Статьи",
    updated: "Обновлено",
    cardRole: "Основательница GetGrow Academy, психолог, джоб-коуч",
    profile: "Профиль коуча →",
    share: "Поделиться",
    copy: "Скопировать ссылку",
    copied: "Ссылка скопирована",
    crumb: { "/ru/stati/kak-poluchit-vaucher-avgs": "Как получить ваучер AVGS" },
  },
  uk: {
    badge: "Стаття · 5 хвилин читання",
    articles: "Статті",
    updated: "Оновлено",
    cardRole: "Засновниця GetGrow Academy, психологиня, джоб-коуч",
    profile: "Профіль коуча →",
    share: "Поділитися",
    copy: "Скопіювати посилання",
    copied: "Посилання скопійовано",
    crumb: { "/uk/statti/yak-otrymaty-vaucher-avgs": "Як отримати ваучер AVGS" },
  },
};

/** Кнопки «Поделиться»: WhatsApp, Telegram (обычные ссылки, без скриптов и трекеров) и «Скопировать ссылку». */
function ShareRow({ lang, url, title }: { lang: TLang; url: string; title: string }) {
  const x = T[lang];
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  const wa = `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`;
  const tg = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Fallback für ältere Browser / ohne HTTPS
      const ta = document.createElement("textarea");
      ta.value = url;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* nichts */
      }
      document.body.removeChild(ta);
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2500);
  }

  return (
    <div className="article-share">
      <span className="article-share-label">{x.share}</span>
      <a href={wa} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      <a href={tg} target="_blank" rel="noopener noreferrer">Telegram</a>
      <button type="button" onClick={copy}>{x.copy}</button>
      <span className="article-share-note" role="status" aria-live="polite">{copied ? x.copied : ""}</span>
    </div>
  );
}

/** Автор всех статей — основательница; профиль коуча на сайте. */
const AUTHOR_PROFILE = "/coaches/yuliia-zaienchyk";

/** 2026-11-23 -> «23 ноября 2026» / «23 листопада 2026» (без «г.» / «р.») */
function formatDate(iso: string, lang: TLang): string {
  const parts = new Intl.DateTimeFormat(lang, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).formatToParts(
    new Date(`${iso}T00:00:00Z`),
  );
  const pick = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return `${pick("day")} ${pick("month")} ${pick("year")}`;
}

/** H1 «… в Берлине — пошаговая инструкция» -> [«… в Берлине », «— пошаговая инструкция»] (Akzent wie «— на русском» auf /avgs-coaching) */
function splitH1(h1: string): [string, string] {
  const i = h1.lastIndexOf(" — ");
  return i < 0 ? [h1, ""] : [h1.slice(0, i + 1), h1.slice(i + 1)];
}

export function ArticlePage({ article }: { article: Article }) {
  const lang = article.lang;
  const t = UI[lang].nav;
  const x = T[lang];
  const cta = CONTENT[lang].avgs.cta;
  const [h1a, h1b] = splitH1(article.h1);
  const card = (
    <aside className="article-author" key="author-card">
      <div className="article-author-name">{article.authorName}</div>
      <div className="article-author-role">{x.cardRole}</div>
      <LLink lang={lang} to={AUTHOR_PROFILE} className="article-author-link">
        {x.profile}
      </LLink>
    </aside>
  );
  return (
    <SiteShell active="avgs" lang={lang}>
      <div className="article-page">
        <section className="page-hero simple">
          <div className="breadcrumb">
            <LLink lang={lang} to="/">{t.home}</LLink>
            {" · "}
            {x.articles}
            {" · "}
            {x.crumb[article.path] ?? article.h1}
          </div>
          <div className="article-kicker-row">
            <span className="hero-kicker">{x.badge}</span>
          </div>
          <h1>
            {h1a}
            {h1b && <em>{h1b}</em>}
          </h1>
          <p className="article-byline">
            <span className="article-byline-name">{article.authorName}</span>
            {" · "}
            {article.authorRole}
            {" · "}
            {x.updated} {formatDate(article.updated, lang)}
          </p>
        </section>

        <section className="section white">
          <article className="article-body">{renderBlocks(article.blocks, card, (key) => (
              <ShareRow key={key} lang={lang} url={articleUrl(article)} title={article.h1} />
            ))}</article>
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
