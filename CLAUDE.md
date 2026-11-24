# CLAUDE.md — GetGrow Academy website

Read this first. Full history, repo map and open items: `PROJECT_NOTES.md`. Fonts/colours: `BRAND.md`.
Also see `AGENTS.md` (Lovable note: never rewrite published git history).

## Project

- Site of **GetGrow Academy GmbH** (coaching, Berlin): https://getgrow.academy. German-language site; legal pages in German.
- Stack: **TanStack Start (React) + Nitro**, `bun`. Self-hosted on **Hetzner** (Ubuntu): nginx → Node on `127.0.0.1:3000`,
  systemd service `getgrow.service`, code in `/var/www/getgrow` (owner: system user `getgrow`), HTTPS via certbot.
- No Supabase / Lovable Cloud. Contact form (`/kontakt`) → `src/routes/api/public/contact.ts` → SQLite (`data/app.db`, **not in git**)
  + notification e-mail through Gmail API. Secrets live only in `/var/www/getgrow/.env` on the server (see `.env.example`).
- Lovable is still connected to the GitHub repo and its bot can push to `main` and **re-add Supabase files**.
  `scripts/strip-lovable-supabase.sh` removes them and runs automatically as `prebuild`. Never push with `--force`.

## How to work with the owner (Anastasia)

- **Answer in Russian.** Short, step by step. Commands for her go in separate ```bash blocks, one command per block.
- Do **only what was asked**. For "colours and sizes only"-style requests do not touch texts or layout. Do not invent content:
  for coach bios use only the material she provides (CV etc.), omit anything under NDA.
- Always **verify before you say done**: build (`bun run build`), serve locally (`PORT=3015 bun .output/server/index.mjs`),
  look at it in the browser pane at **1440px and 390px**, measure instead of guessing. On live site check with `curl` / browser after deploy.
- Commits: English message, one logical change per commit, trailer `Co-Authored-By: Claude …`. Do not commit `.env`, DB files, secrets.
- **You have no GitHub credentials. Never run `git push`; the owner pushes** from her terminal
  (`git push origin main`, user `tanastasias-cloud` + access token). Check with `git fetch` that her push arrived.
- Never put passwords, tokens, API keys or private keys into chat, files or commits. Never read or print `.env` values.
- Ask before anything destructive or hard to undo (deleting data, server config changes outside the task).

## Deploy procedure (no auto-deploy; she declined it for now)

1. Make changes locally, verify, commit. Show her which files changed.
2. She runs `git push origin main`.
3. You generate a **one-time SSH key** locally (`ssh-keygen -t ed25519 -f ~/.ssh/hetzner_deploy_tempN -N "" -C claude-code-temp-deploy-N`),
   point the `Host hetzner-getgrow` entry in `~/.ssh/config` at it, and give her **one command** that adds the public key to the server
   through her own key (`~/.ssh/id_ed25519_hetzner`), ending with `echo KEY_ADDED`. The server IP is in DNS (`dig +short getgrow.academy`).
4. After she confirms, deploy:

```bash
ssh hetzner-getgrow "cd /var/www/getgrow \
 && sudo -u getgrow git pull --ff-only origin main \
 && sudo -u getgrow bun install \
 && sudo -u getgrow bun run build \
 && systemctl restart getgrow.service && systemctl is-active getgrow.service"
```

5. Verify the live site (status codes, content, browser), check `journalctl -u getgrow.service --since '1 minute ago'`.
6. **Always remove your temporary key afterwards** (`sed -i '/claude-code-temp-deploy/d' /root/.ssh/authorized_keys`); only her key
   `anastasia-mac` must stay. Confirm the temp key is rejected.

## Gotchas

- On the server run git/bun as `sudo -u getgrow …` (root gets "dubious ownership"). The `bun` binary is a real copy in `/usr/local/bin`.
- If `git pull` complains about a modified `bun.lock` on the server: `sudo -u getgrow git checkout -- bun.lock`.
- Static files in `public/` win over app routes with the same path. `public/` is the only folder served as-is; `archive/` is not published.
- Images in `src/assets/` are hashed by Vite (cache-safe). For static files in `public/` use a **new file name** when replacing an image.
- `better-sqlite3` is a native module: needs `build-essential`, `python3`, `node-gyp` on the server (already installed).
- Fonts are self-hosted via `@fontsource`. **Allura has no Cyrillic** — don't use script-font accents on Russian text.
- Production build preset is `node-server` (set in `vite.config.ts`); Cloudflare preset would break SQLite.
- Pushes from the Lovable bot: `git fetch`, merge (`git merge origin/main`), run `bash scripts/strip-lovable-supabase.sh`, build, commit.

## Languages (DE / RU / UK)

- German pages live in `src/routes/*.tsx` (texts inline, as before). Russian and Ukrainian versions are under `/ru/...` and `/uk/...`:
  routes `src/routes/$lang.*.tsx` → page components `src/i18n/pages/*.tsx` → texts in `src/i18n/{ru,uk}/` (`main.ts`, `programs.ts`, `coaches.ts`).
- **When a German text or fact changes, change it in `src/i18n/ru` and `src/i18n/uk` too** (the three versions are separate copies). Coach texts:
  `src/data/coaches.ts` (German) + `coachTexts` in `src/i18n/{ru,uk}/coaches.ts` (same credentials order).
- Vocabulary for RU/UK: AVGS → «ваучер AVGS (Aktivierungs- und Vermittlungsgutschein)», Jobcenter → «джобцентр (Jobcenter)», Agentur für Arbeit →
  «Агентство по труду / з праці (Agentur für Arbeit)», Bürgergeld → «Бюргергельд (Bürgergeld)», Erstgespräch → «бесплатная первая встреча» /
  «безкоштовна перша зустріч», UE → «академический час (45 минут)». German term in brackets at first mention on a page. Never promise a job.
- SEO: `pageHead(path, lang)` in `src/seo-schema.ts` gives canonical (self), hreflang de/ru/uk/x-default, og:url; every new page needs it.
  `public/sitemap.xml` lists all three versions of each page with hreflang. `<html lang>` is set in `__root.tsx` from the URL.
- Allura has no Cyrillic: `html[lang=ru|uk]` CSS swaps accent words to Cormorant Garamond italic. Impressum/Datenschutz/Event stay German only.

## Articles (RU/UK)

- Text: `src/content/articles/*.md` (frontmatter `lang, slug, title, description, h1, author, updated, hreflang_pair` + markdown). `src/articles.ts` parses them
  (h1/h2, lists, bold/italic/links, `**Q**\nA` FAQ blocks); `src/i18n/pages/Article.tsx` renders; JSON-LD Article + FAQPage: `articleHead()` in `src/seo-schema.ts`.
- Each article has its own route file (`$lang.stati.*.tsx` for RU, `$lang.statti.*.tsx` for UK; wrong language → 404) and its address pair in `ARTICLE_GROUPS` (`src/i18n/lang.ts`)
  — used by the header language switcher (RU ↔ UA only, no German version). Add both URLs to `public/sitemap.xml`. To update an article, replace the `.md` file (keep the slug).

## Coaches (frequent task)

Add photo to `src/assets/` (≈4:5, ~800px wide, ≤100KB) → import + entry in `src/data/coaches.ts`
(`slug`, `name`, `role`, `photo`, `languages`, `bio[]`, `credentials[]`, `expertise[]`, German text) →
add `https://getgrow.academy/coaches/<slug>` to `public/sitemap.xml`.

## Open items (details in `PROJECT_NOTES.md`, section 6)

Disconnect Lovable (GitHub app + Lovable project), close the Tally form of the past event, **DB backups** (none yet),
rotate Google OAuth credentials, Olesya Levitski profile for the coaches page, VHV cyber-insurance questionnaire.
