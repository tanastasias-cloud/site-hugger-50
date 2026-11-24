// Генерация обложек для соцсетей (og:image, 1200×630) при сборке.
//   - по одной обложке на каждую статью (src/content/articles/*.md): public/og/<lang>-<slug>.png
//   - общая обложка сайта: public/og/default.png
// Запускается из `prebuild` (bun scripts/generate-og.mjs). Шрифты — те же @fontsource, что на сайте.
// Результат в git не хранится (public/og/ в .gitignore) — создаётся на каждой сборке.
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const OUT = `${ROOT}public/og`;
const W = 1200;
const H = 630;

const BG = "#1A2E26"; // --forest
const GREEN = "#8FBFA4"; // светло-зелёный для акцентов на тёмном фоне
const CREAM = "#F5F0E8"; // --cream

// ---- шрифты ---------------------------------------------------------------------------------
const font = (pkg, file, name, weight = 400, style = "normal") => ({
  name,
  data: readFileSync(`${ROOT}node_modules/@fontsource/${pkg}/files/${file}.woff`),
  weight,
  style,
});
const FONTS = [
  font("tenor-sans", "tenor-sans-latin-400-normal", "Tenor"),
  font("tenor-sans", "tenor-sans-cyrillic-400-normal", "TenorCyr"),
  font("cormorant-garamond", "cormorant-garamond-latin-400-italic", "Cormorant", 400, "italic"),
  font("cormorant-garamond", "cormorant-garamond-cyrillic-400-italic", "CormorantCyr", 400, "italic"),
  font("allura", "allura-latin-400-normal", "Allura"),
  font("dm-sans", "dm-sans-latin-400-normal", "DMSans"),
];
const TENOR = "Tenor, TenorCyr";
const CORMORANT = "Cormorant, CormorantCyr";

// ---- маленький помощник для дерева элементов satori ---------------------------------------------
const h = (type, style, children) => ({ type, props: { style, children } });
const col = (style, children) => h("div", { display: "flex", flexDirection: "column", ...style }, children);
const row = (style, children) => h("div", { display: "flex", flexDirection: "row", ...style }, children);

/** Логотип как в шапке сайта: «Get» (Allura) | GROW / ACADEMY · BERLIN — светлые цвета для тёмного фона. */
function logo(scale = 1) {
  return row({ alignItems: "center" }, [
    h("div", { fontFamily: "Allura", fontSize: 68 * scale, color: GREEN, lineHeight: 1, marginRight: 18 * scale }, "Get"),
    h("div", { width: 1.5, height: 58 * scale, background: "rgba(143,191,164,0.55)", marginRight: 18 * scale }, ""),
    col({}, [
      h("div", { fontFamily: TENOR, fontSize: 28 * scale, letterSpacing: 8 * scale, color: CREAM, lineHeight: 1 }, "GROW"),
      h("div", { fontFamily: "DMSans", fontSize: 11.5 * scale, letterSpacing: 4.2 * scale, color: GREEN, marginTop: 9 * scale }, "ACADEMY · BERLIN"),
    ]),
  ]);
}

const footer = () =>
  h("div", { fontFamily: "DMSans", fontSize: 24, letterSpacing: 1.5, color: GREEN }, "getgrow.academy");

// ---- обложка статьи -------------------------------------------------------------------------
/** H1 «… в Берлине — пошаговая инструкция» -> ["… в Берлине", "— пошаговая инструкция"] (как на сайте) */
function splitH1(h1) {
  const i = Math.max(h1.lastIndexOf(" – "), h1.lastIndexOf(" — "));
  return i < 0 ? [h1, ""] : [h1.slice(0, i), h1.slice(i + 1)];
}

/** Однобуквенные предлоги (в, у, и, с …) не оставляем в конце строки: после них неразрывный пробел */
const glue = (t) => t.replace(/(^|\s)([А-Яа-яІіЇїЄєҐґ])\s/g, "$1$2\u00A0");

function articleCover(h1) {
  const [a0, b0] = splitH1(h1);
  const [a, b] = [glue(a0), glue(b0)];
  return col({ width: W, height: H, boxSizing: "border-box", background: BG, paddingTop: 60, paddingBottom: 56, paddingLeft: 72, paddingRight: 72, justifyContent: "space-between" }, [
    logo(1),
    col({}, [
      h("div", { fontFamily: TENOR, fontSize: 70, lineHeight: 1.12, color: CREAM, letterSpacing: -0.5 }, a),
      b ? h("div", { fontFamily: CORMORANT, fontStyle: "italic", fontSize: 76, lineHeight: 1.1, color: GREEN, marginTop: 8 }, b) : null,
    ].filter(Boolean)),
    row({ alignItems: "center", justifyContent: "space-between" }, [footer(), h("div", { width: 120, height: 2, background: "rgba(143,191,164,0.5)" }, "")]),
  ]);
}

// ---- общая обложка ---------------------------------------------------------------------------
function defaultCover() {
  return col({ width: W, height: H, boxSizing: "border-box", background: BG, paddingTop: 56, paddingBottom: 56, paddingLeft: 72, paddingRight: 72, justifyContent: "space-between", alignItems: "center" }, [
    h("div", { height: 2 }, ""),
    col({ alignItems: "center" }, [
      logo(2),
      h("div", { fontFamily: TENOR, fontSize: 46, color: CREAM, marginTop: 64, letterSpacing: 0.5 }, "Коучинг в Берлине · DE · UA · RU"),
    ]),
    footer(),
  ]);
}

// ---- статьи: frontmatter ---------------------------------------------------------------------
function frontmatter(raw) {
  const m = raw.replace(/\r\n/g, "\n").match(/^---\n([\s\S]*?)\n---/);
  if (!m) throw new Error("frontmatter not found");
  const meta = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return meta;
}

async function render(tree, file) {
  const svg = await satori(tree, { width: W, height: H, fonts: FONTS });
  const png = new Resvg(svg, { fitTo: { mode: "width", value: W } }).render().asPng();
  writeFileSync(`${OUT}/${file}`, png);
  console.log(`og: ${file} (${Math.round(png.length / 1024)} KB)`);
}

mkdirSync(OUT, { recursive: true });
await render(defaultCover(), "default.png");

const dir = `${ROOT}src/content/articles`;
for (const f of readdirSync(dir).filter((x) => x.endsWith(".md"))) {
  const meta = frontmatter(readFileSync(`${dir}/${f}`, "utf8"));
  // Имя файла картинки = <lang>-<последний сегмент адреса>; то же правило в src/articles.ts (ogImageFile)
  const name = `${meta.lang}-${meta.slug.split("/").pop()}.png`;
  if (f !== name.replace(/\.png$/, ".md")) throw new Error(`og: имя ${f} не совпадает с lang+slug (${name})`);
  await render(articleCover(meta.h1), name);
}
