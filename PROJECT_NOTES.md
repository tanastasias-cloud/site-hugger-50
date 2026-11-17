# GetGrow Academy — сайт: что сделано и как это устроено

Сводка по работе над сайтом **getgrow.academy** (июль – ноябрь 2026). Состояние на **17.11.2026**,
последний коммит `d7c11b7`.

> В файле нет паролей, токенов и ключей. Секреты лежат только в `.env` на сервере (он не в git).

---

## 1. Коротко: где мы сейчас

- Сайт на **TanStack Start (React) + Nitro**, работает на **собственном сервере Hetzner**, без Supabase и Lovable Cloud.
- Заявки с формы `/kontakt` пишутся в **SQLite**, на `info@getgrow.academy` уходит письмо через **Gmail API**.
- HTTPS через **Let's Encrypt**, перед приложением стоит **nginx**.
- В разделе «Коучи» **11 карточек** (в т. ч. Корнелия Боос и Парвин Фатуллаев), в футере знак LGBTQIA+.
- Страница ивента (15.11.2026) отработала и **закрыта**: `/event` показывает заглушку «Мероприятие окончено».
- Остаётся на вашей стороне: отключить Lovable, закрыть форму Tally, настроить бэкапы (см. раздел 6).

---

## 2. Хронология

### Июль 2026 — уход с Supabase / Lovable Cloud на свой бэкенд

| Что | Как |
|---|---|
| Убрали Supabase | Удалены `src/integrations/supabase/*`, папка `supabase/`, зависимость `@supabase/supabase-js`, middleware в `src/start.ts` |
| Секреты | `.env` убран из git (`git rm --cached`), добавлен в `.gitignore`, создан `.env.example` с пустыми значениями |
| Заявки | `src/routes/api/public/contact.ts` пишет в SQLite через `better-sqlite3` (`src/lib/db.server.ts`), таблица `contact_requests` |
| Письмо о заявке | `src/lib/email.server.ts` — Gmail API (`googleapis`), OAuth refresh token; письмо уходит «в фоне», сбой почты не ломает форму |
| Форма на сайте | `src/routes/kontakt.tsx` отправляет настоящий `fetch POST`; после успеха форма заменяется сообщением «Vielen Dank!» |
| Datenschutz | Раздел про Supabase заменён на «своя БД на Hetzner» и «Google Workspace (e-mail)» |
| Сборка | В `vite.config.ts` указано `nitro: { preset: "node-server" }` (Cloudflare по умолчанию не умеет `better-sqlite3`) |

### Июль 2026 — сервер Hetzner

- Ubuntu 26.04, Node.js 24 LTS, nginx, git, bun (бинарник в `/usr/local/bin/bun`), `build-essential` + `python3` + `node-gyp` (нужны, чтобы собрался `better-sqlite3`).
- Код: `/var/www/getgrow`, владелец — системный пользователь `getgrow` (без логина).
- Сервис **`getgrow.service`** (systemd): `node .output/server/index.mjs`, слушает `127.0.0.1:3000`, `Restart=always`, включён в автозапуск, данные пишет только в `data/`.
- **nginx** проксирует `getgrow.academy` и `www.getgrow.academy` на `127.0.0.1:3000`.
- **SSL**: certbot + Let's Encrypt, редирект http → https, автообновление через `certbot.timer` (дважды в день).
- Файл **`/var/www/getgrow/.env`** (права 600): `DB_PATH`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REFRESH_TOKEN`, `GMAIL_SENDER_EMAIL`, `CONTACT_NOTIFICATION_EMAIL`. Отправка письма проверена.
- База: `/var/www/getgrow/data/app.db` (в git не попадает).

### Июль 2026 — исправления и SEO

- **Фото коучей не грузились**: они ссылались на `/__l5e/assets-v1/…` — прокси Lovable, который есть только в `vite dev`. Скачали оригиналы в `src/assets/` и подключили обычным импортом.
- Добавлены `public/robots.txt` и `public/sitemap.xml` (все публичные страницы и страницы коучей, без Impressum и Datenschutz).

### Октябрь 2026 — палитра и анкета страховки

- `BRAND.md` и `brand-palette.png` — шрифты и цвета сайта (Tenor Sans, DM Sans, Cormorant Garamond, Allura; `--forest #1a2e26`, `--green #3d6b55`, `--mint #7fc4a0` и т. д.). Файлы пока **не в git**.
- Анкета киберстраховки VHV CyberProtect 3.0: разобрали вопросы про антивирус, обновления, пароли, бэкапы. Выяснили, что **бэкапов базы заявок нет**, а Mac на macOS 14.3 сильно отстаёт по обновлениям. Анкета **не заполнялась**.

### Ноябрь 2026 — главный сайт

- **Коучи** (`src/data/coaches.ts`): Дарья теперь «Daria Lazarieva» (адрес `/coaches/daria` не менялся); добавлены **Cornelia Boos** и **Parvin Fatullayev** (немецкое описание по резюме; компания под NDA в профиль не вошла); новое фото у Зои и Корнелии.
- **Футер**: строка «Ein sicherer und inklusiver Raum für alle – LGBTQIA+-freundlich» с приглушённым флагом Progress Pride, справа на уровне юридического текста.
- Пункт меню «Event» добавлялся и потом был убран (см. ниже).

### Ноябрь 2026 — страница ивента (15.11.2026)

Статичная страница `public/event/index.html`, отдавалась по `getgrow.academy/event`.

- Что было: билет-«проездной», программа, спикеры, отзывы, кнопки регистрации на Tally, ссылка на основной сайт.
- Правки по ходу: ширина как на главной, оформление блока «Wachsen, wo Sie stehen», новые темы и порядок спикеров, подпись «Тема», читаемость (цвета, размеры), заголовок вкладки, иконка, кнопка в шапке на телефоне.
- Устойчивость к узким экранам и крупному шрифту (жалоба с Android во встроенном браузере Instagram): карточки спикеров, шапка и нижняя панель больше не вылезают и не наезжают друг на друга.
- Код Meta Pixel был добавлен, но **выключен** (ID не завели).
- **17.11.2026 страница закрыта**: теперь `src/routes/event.tsx` — заглушка «Мероприятие окончено» (RU + DE, `noindex, nofollow`), `/event/` редиректит на `/event`. Старая страница и её фото перенесены в **`archive/event-2026-11-15/`** (не публикуется, можно вернуть). Пункт «Event» из меню убран.

### Про Lovable

Lovable остаётся подключённым к GitHub-репозиторию: его бот (`gpt-engineer-app[bot]`) периодически пушит в `main` и **снова добавляет Supabase**. Защита сейчас такая:

- `scripts/strip-lovable-supabase.sh` удаляет вернувшиеся файлы, а `"prebuild"` в `package.json` запускает его при каждой сборке (в том числе на сервере).
- Живой сайт обновляется **только** когда мы вручную делаем `git pull` и сборку на сервере. Автодеплоя нет, так что бот сам на сайт повлиять не может.

---

## 3. Как выкладывать изменения (текущий порядок)

1. Правки делаются в репозитории и коммитятся (`git commit`).
2. Вы пушите на GitHub в терминале: `git push origin main` (логин `tanastasias-cloud`, вместо пароля — токен доступа GitHub).
3. На сервер заходит временный SSH-ключ (один на деплой): вы добавляете его одной командой через свой ключ `id_ed25519_hetzner`, после деплоя ключ удаляется. В `authorized_keys` постоянно остаётся только `anastasia-mac`.
4. На сервере:

```bash
cd /var/www/getgrow
sudo -u getgrow git pull --ff-only origin main
sudo -u getgrow bun install
sudo -u getgrow bun run build
systemctl restart getgrow.service
systemctl status getgrow.service --no-pager
journalctl -u getgrow.service --since '5 minutes ago' --no-pager
```

5. Проверка: страницы отдают 200, форма `/kontakt` отправляется, в логах нет ошибок.

Подводные камни:
- Команды `git` на сервере выполнять **от пользователя `getgrow`** (`sudo -u getgrow …`), иначе будет ошибка «dubious ownership».
- Если на сервере `git pull` ругается на локальное изменение `bun.lock`: `sudo -u getgrow git checkout -- bun.lock`, затем снова `pull`.
- Если на GitHub попали коммиты бота, перед пушем: `git fetch`, слить (`git merge origin/main`), запустить `bash scripts/strip-lovable-supabase.sh`, проверить сборку. Историю не переписывать (`force push` не использовать).

---

## 4. Карта проекта

| Что | Где |
|---|---|
| Страницы сайта | `src/routes/*.tsx` (файловая маршрутизация TanStack) |
| API формы | `src/routes/api/public/contact.ts` |
| База и письма | `src/lib/db.server.ts`, `src/lib/email.server.ts` (серверные модули, подключать через `await import(...)` внутри обработчика) |
| Шапка / подвал | `src/components/site/SiteHeader.tsx`, `SiteFooter.tsx` |
| Стили | `src/styles.css` (переменные цветов в блоке `:root`) |
| Коучи | `src/data/coaches.ts`, фото в `src/assets/` |
| Статика | `public/` (`robots.txt`, `sitemap.xml`, `favicon.png` …) |
| Архив старой страницы ивента | `archive/event-2026-11-15/` |
| Защита от возврата Supabase | `scripts/strip-lovable-supabase.sh` |
| Настройки окружения | `.env.example` (шаблон); реальный `.env` — только на сервере |

### Как добавить коуча

1. Положить фото в `src/assets/` (формат 4:5, ширина около 800 px, до ~100 КБ).
2. В `src/data/coaches.ts`: импорт фото и новый объект (`slug`, `name`, `role`, `photo`, `languages`, `bio[]`, `credentials[]`, `expertise[]`).
3. Добавить страницу `https://getgrow.academy/coaches/<slug>` в `public/sitemap.xml`.
4. Собрать, проверить локально (`bun run build`, затем `PORT=3015 bun .output/server/index.mjs`), закоммитить и выложить.

### Как вернуть страницу ивента

Перенести `archive/event-2026-11-15/` обратно в `public/event/` и удалить `src/routes/event.tsx` (статический файл иначе будет перекрыт маршрутом).

---

## 5. Безопасность и приватность

- `.env` не в git; на сервере права 600.
- Секреты Google OAuth (Client Secret и refresh token) в июле вставлялись в чат. **Рекомендация: перевыпустить их** в Google Cloud Console и обновить в `/var/www/getgrow/.env`, затем `systemctl restart getgrow.service`.
- Основной сайт шрифты и скрипты берёт со своего сервера. Только страница ивента подгружала шрифты Google (теперь она закрыта).
- Заявки содержат персональные данные: ограничивать доступ к серверу и к `data/app.db`.

---

## 6. Открытые вопросы и идеи

| # | Что | Статус |
|---|---|---|
| 1 | **Отключить Lovable**: на GitHub (Settings → Applications) и в самом Lovable; затем убрать его следы из проекта (`AGENTS.md`, `.lovable/`, пакет `@lovable.dev/vite-tanstack-config` заменить обычным конфигом) | за вами, затем за мной |
| 2 | **Закрыть форму на Tally** (`tally.so/r/7XqYG2`) — она остаётся открытой | за вами |
| 3 | **Бэкапы базы заявок** (`data/app.db`): ежедневная копия вне сервера и проверка восстановления (нужно и для анкеты страховки) | не сделано |
| 4 | Перевыпустить ключи Google OAuth (см. раздел 5) | не сделано |
| 5 | Олеся Левицки в разделе «Коучи» на главном сайте (нужны текст и фото) | ждём материалы |
| 6 | Сетка «Коучи»: в последнем ряду две карточки, можно выровнять по центру | по желанию |
| 7 | Заполнить анкету VHV CyberProtect (после бэкапов, обновления Mac, проверки паролей и роутера) | не начато |
| 8 | Автодеплой после `git push` без временных ключей | вы пока отказались |
| 9 | Закоммитить `BRAND.md`, `brand-palette.png` и этот файл (сейчас не в git) | по желанию |

---

## 7. Приложение: коммиты этой работы

```
d3da796  2026-07-12  Replace Supabase/Lovable Cloud with self-hosted backend
fc9ede6  2026-07-12  Fix broken photos and contact form success UX
c207975  2026-07-12  Add sitemap.xml and robots.txt
fa26864  2026-11-04  Add /event landing page for the 15 Nov opening
302ea4e  2026-11-04  Strip auto-reintroduced Supabase (Lovable Cloud)
f7b053a  2026-11-04  Event page: match main-site content width, drop tagline
eda3ff5  2026-11-04  Event page: style "Wachsen, wo Sie stehen." like the main-site headline
5be9dec  2026-11-05  Add coach Cornelia Boos, Daria's surname and a pride flag in the footer
182c8c9  2026-11-05  Event page: speaker surnames and Zoya's credentials
21b8f5c  2026-11-05  Footer: move the inclusion note to the right of the legal text, larger
063d45f  2026-11-05  Link the main site and the event page to each other
109e1ad  2026-11-05  Event page: show Zoya's credentials after the topic, in the description block
e9dcf9f  2026-11-05  Event page: use the description text color for Zoya's credentials line
337540a  2026-11-05  Replace Zoya's photo (main site and event page)
0804f9a  2026-11-05  Add coach Parvin Fatullayev to the coaches section
8415879  2026-11-05  Replace Cornelia Boos's photo
beae5ec  2026-11-05  Event page: use the same Parvin photo as in the coaches section
a627201  2026-11-05  Event page: update the programme and speaker topics
98de781  2026-11-05  Event page: review fixes (title, favicon base, mobile header CTA, button text)
f49cc4d  2026-11-05  Event page: rework the speakers block presentation
8aa90b5  2026-11-05  Event page: improve text readability (colours and sizes only)
b4ee56b  2026-11-12  Event page: make the layout robust on very narrow screens and with large system text
d7c11b7  2026-11-17  Close the event page: "event is over" stub at /event
```
