// Статьи сайта: markdown-файлы в src/content/articles/*.md (frontmatter + текст).
// Текст рендерится из markdown как есть; FAQ для JSON-LD берётся из тех же блоков, что и видимая страница.
import { isTLang, SITE, type TLang } from "@/i18n/lang";
import ruAvgsVoucher from "@/content/articles/ru-kak-poluchit-vaucher-avgs.md?raw";
import ukAvgsVoucher from "@/content/articles/uk-yak-otrymaty-vaucher-avgs.md?raw";

export type Block =
  | { t: "h1" | "h2"; text: string }
  | { t: "p"; text: string }
  | { t: "ul" | "ol"; items: string[] }
  | { t: "hr" }
  | { t: "qa"; q: string; a: string };

export type Article = {
  lang: TLang;
  /** Путь страницы, например /ru/stati/kak-poluchit-vaucher-avgs */
  path: string;
  /** Путь версии на другом языке (hreflang) */
  pairPath: string;
  pairLang: TLang;
  title: string;
  description: string;
  h1: string;
  /** Как в frontmatter: «Имя, должность» */
  author: string;
  /** Только имя автора (до первой запятой) */
  authorName: string;
  /** Роль автора — вторая часть frontmatter-поля author (например «основательница GetGrow Academy») */
  authorRole: string;
  /** Дата обновления, YYYY-MM-DD */
  updated: string;
  blocks: Block[];
};

function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const m = raw.replace(/\r\n/g, "\n").match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) throw new Error("article: frontmatter not found");
  const meta: Record<string, string> = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return { meta, body: m[2] };
}

function parseBlocks(body: string): Block[] {
  const blocks: Block[] = [];
  for (const chunk of body.split(/\n{2,}/)) {
    const lines = chunk.split("\n").filter((l) => l.trim() !== "");
    if (lines.length === 0) continue;
    const first = lines[0];
    if (/^# /.test(first)) blocks.push({ t: "h1", text: first.slice(2).trim() });
    else if (/^## /.test(first)) blocks.push({ t: "h2", text: first.slice(3).trim() });
    else if (/^---+$/.test(first.trim())) blocks.push({ t: "hr" });
    else if (lines.every((l) => /^- /.test(l))) blocks.push({ t: "ul", items: lines.map((l) => l.slice(2).trim()) });
    else if (lines.every((l) => /^\d+\. /.test(l)))
      blocks.push({ t: "ol", items: lines.map((l) => l.replace(/^\d+\. /, "").trim()) });
    else {
      const q = first.match(/^\*\*([^*]+)\*\*$/);
      if (q && lines.length > 1) blocks.push({ t: "qa", q: q[1].trim(), a: lines.slice(1).join(" ").trim() });
      else blocks.push({ t: "p", text: lines.join(" ").trim() });
    }
  }
  return blocks;
}

function build(raw: string): Article {
  const { meta, body } = parseFrontmatter(raw);
  if (!isTLang(meta.lang)) throw new Error(`article: bad lang ${meta.lang}`);
  const pairLang = meta.hreflang_pair?.split("/")[1];
  if (!isTLang(pairLang)) throw new Error(`article: bad hreflang_pair ${meta.hreflang_pair}`);
  return {
    lang: meta.lang,
    path: meta.slug,
    pairPath: meta.hreflang_pair,
    pairLang,
    title: meta.title,
    description: meta.description,
    h1: meta.h1,
    author: meta.author,
    authorName: meta.author.split(",")[0].trim(),
    authorRole: (meta.author.split(",")[1] ?? "").trim(),
    updated: meta.updated,
    blocks: parseBlocks(body),
  };
}

export const ARTICLES: Article[] = [build(ruAvgsVoucher), build(ukAvgsVoucher)];

export function articleByPath(path: string): Article {
  const a = ARTICLES.find((x) => x.path === path);
  if (!a) throw new Error(`article not found: ${path}`);
  return a;
}

/** Markdown-Auszeichnung (**fett**, *kursiv*, [text](url)) entfernen -> reiner Text (für JSON-LD). */
export function plainText(md: string): string {
  return md
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1");
}

export const articleUrl = (a: Pick<Article, "path">) => `${SITE}${a.path}`;
