/**
 * GetGrow Academy — Schema.org (JSON-LD) + canonical для TanStack Start.
 *
 * Как подключить (TanStack Router/Start, в файле маршрута):
 *
 *   import { homeHead, avgsHead } from '~/seo-schema'
 *
 *   // routes/index.tsx
 *   export const Route = createFileRoute('/')({
 *     head: homeHead,
 *     component: ...,
 *   })
 *
 *   // routes/avgs-coaching.tsx
 *   export const Route = createFileRoute('/avgs-coaching')({
 *     head: avgsHead,
 *     component: ...,
 *   })
 *
 * Если в маршруте уже есть head() со своими meta — объедините массивы
 * (meta / links / scripts), а не заменяйте их.
 *
 * ВАЖНО: при переезде из Mindspace Krausenstraße поменять адрес в ADDRESS ниже.
 */

import { localizedPath, OG_LOCALE, SITE, TLANGS, type Lang, type TLang } from '@/i18n/lang'
import { CONTENT } from '@/i18n'
import { articleUrl, plainText, type Article } from '@/articles'

const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'c/o Mindspace, Krausenstraße 9/10',
  postalCode: '10117',
  addressLocality: 'Berlin',
  addressRegion: 'Berlin',
  addressCountry: 'DE',
}

const LANGUAGES = ['de', 'en', 'uk', 'ru', 'pl']

/** Организация — один объект, на который ссылаются остальные через @id */
const organization = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  '@id': `${SITE}/#organization`,
  name: 'GetGrow Academy Berlin',
  legalName: 'GetGrow Academy GmbH',
  alternateName: ['ГетГроу Академия', 'ГетГроу Академія'],
  foundingDate: '2026',
  url: `${SITE}/`,
  logo: `${SITE}/favicon.png`,
  image: `${SITE}/certuria-azav-badge.jpg`,
  description:
    'AZAV-zertifizierter Coaching-Träger in Berlin: Karriere-Coaching, Bewerbungstraining und Jobvermittlung für Privatpersonen, Unternehmen und Jobcenter-Kund:innen. AVGS & §16k SGB II anerkannt. Coaching auf Deutsch, Englisch, Ukrainisch, Russisch und Polnisch.',
  email: 'info@getgrow.academy',
  telephone: '+49 157 3665 1515',
  address: ADDRESS,
  areaServed: { '@type': 'City', name: 'Berlin' },
  knowsLanguage: LANGUAGES,
  founder: {
    '@type': 'Person',
    name: 'Yuliia Zaienchyk',
    jobTitle: 'Gründerin, Psychologin, Job-Coach',
    url: `${SITE}/coaches/yuliia-zaienchyk`,
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: 'AZAV-Trägerzulassung (CERTURIA)',
    credentialCategory: 'Zulassung nach AZAV',
  },
  knowsAbout: [
    'AVGS Coaching',
    'Job Coaching',
    '§16k SGB II Coaching',
    'Karriere-Coaching',
    'Bewerbungstraining',
    'Jobvermittlung',
    'Führungskräfte-Coaching',
    'Onboarding internationaler Fachkräfte',
  ],
  // Добавьте сюда ссылки на профили, когда они есть:
  // Instagram, LinkedIn, Google Business Profile, KURSNET-карточку и т.п.
  sameAs: [
    'https://www.instagram.com/getgrow.academy/',
    'https://maps.google.com/?cid=4081706355022156686',
  ] as string[],
}

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  url: `${SITE}/`,
  name: 'GetGrow Academy Berlin',
  inLanguage: 'de',
  publisher: { '@id': `${SITE}/#organization` },
}

/** Программа AVGS как курс */
const avgsCourse = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  '@id': `${SITE}/avgs-coaching#course`,
  name: 'Job Coaching mit AVGS',
  description:
    'Zertifiziertes Job Coaching in Berlin, 100 % kostenlos mit AVGS (Aktivierungs- und Vermittlungsgutschein): 8 Module, 56 Unterrichtseinheiten — Standortanalyse, Bewerbungsunterlagen, ATS-optimierte Bewerbung, KI-gestützte Bewerbung mit ChatGPT & Claude, Vorstellungsgespräche, digitale Jobsuche und direkte HR-Kontakte. Hybrid, online oder in Präsenz.',
  url: `${SITE}/avgs-coaching`,
  provider: { '@id': `${SITE}/#organization` },
  inLanguage: LANGUAGES,
  isAccessibleForFree: true,
  educationalCredentialAwarded: 'Teilnehmerzertifikat der GetGrow Academy Berlin',
  timeRequired: 'P2M',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    category: 'Gefördert über AVGS (Jobcenter / Agentur für Arbeit)',
  },
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: ['online', 'onsite', 'blended'],
    location: { '@type': 'Place', name: 'Mindspace Berlin', address: ADDRESS },
    inLanguage: LANGUAGES,
  },
}

const faq = (pairs: [string, string][]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pairs.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
})

/** Тексты 1:1 с видимым FAQ на /avgs-coaching. Меняете FAQ на странице — меняйте и здесь. */
const avgsFaq = faq([
  [
    'Wie finden Sie passende Stellen für mich?',
    'Wir kombinieren klassische Jobsuche mit unserem eigenen Netzwerk aus direkten Unternehmens- und HR-Kontakten. Das bedeutet: neben öffentlichen Stellenanzeigen greifen wir auch auf Vakanzen zurück, die uns direkt zugespielt werden — und vermitteln Sie persönlich weiter, wenn Ihr Profil passt.',
  ],
  [
    'Was ist ein AVGS-Gutschein?',
    'Der AVGS (Aktivierungs- und Vermittlungsgutschein) ist ein Berechtigungsschein, den Sie von Ihrer Agentur für Arbeit oder Ihrem Jobcenter erhalten. Mit diesem Gutschein können Sie sich kostenlos einen zugelassenen Bildungsträger — wie uns — für Ihr Coaching aussuchen. Die Kosten übernimmt vollständig der Staat.',
  ],
  [
    'Wie lange dauert das Coaching?',
    'In der Regel rund 2 Monate, mit mindestens zwei Terminen pro Woche. Insgesamt umfasst das Programm 56 Unterrichtseinheiten. Die genaue Verteilung passen wir gemeinsam an Ihre Situation an.',
  ],
  [
    'Kann ich meinen Coach selbst wählen?',
    'Ja. Sie lernen Ihren Coach im kostenlosen Erstgespräch kennen. Passt es menschlich nicht, sprechen Sie uns an — wir finden gemeinsam eine passende Lösung.',
  ],
  [
    'In welchen Sprachen wird gecoacht?',
    'Das Coaching kann bei Bedarf in der Muttersprache der Teilnehmenden durchgeführt werden, um ein vollständiges Verständnis der Inhalte und eine effektive Bearbeitung individueller Themen sicherzustellen. Gleichzeitig findet ein wesentlicher Teil des Coachings auf Deutsch statt und umfasst die Vorbereitung auf Vorstellungsgespräche, berufliche Kommunikation, die Arbeit mit Bewerbungsunterlagen sowie die Interaktion mit Arbeitgebern und Behörden. Dieser Ansatz fördert eine nachhaltige Integration in den deutschen Arbeitsmarkt.',
  ],
  [
    'Helfen Sie mir, einen AVGS-Gutschein zu erhalten?',
    'Ja. Sprechen Sie zunächst mit Ihrer Ansprechperson im Jobcenter oder der Agentur für Arbeit und beantragen Sie einen AVGS für Job Coaching. Sobald Sie ihn haben, melden Sie sich bei uns — wir übernehmen den Rest und kümmern uns auch um die Formalitäten.',
  ],
  [
    'Bekomme ich ein Zertifikat?',
    'Ja. Nach erfolgreichem Abschluss erhalten Sie das Teilnehmerzertifikat der GetGrow Academy Berlin mit Angaben zu Inhalt, Dauer und Zielen des Coachings. Zwei verpflichtende Check-Gespräche (Check 1 und Check 2) begleiten den Fortschritt und sind Voraussetzung für das Zertifikat.',
  ],
  [
    'Nutzen Sie KI-Tools im Coaching?',
    'Ja — bewusst und angeleitet. Wir arbeiten unter anderem mit ChatGPT und Claude, um Bewerbungen ATS-optimiert zu erstellen, Anschreiben zu verfeinern und Sie gezielt auf Interviews vorzubereiten. So bekommen Sie sowohl das Handwerk als auch die aktuellen Werkzeuge des Arbeitsmarkts.',
  ],
  [
    'Wo findet das Coaching statt?',
    'Hybrid: online und in Präsenz in unseren Räumen im Mindspace, Krausenstraße 9/10, 10117 Berlin (Mitte). Sie wählen das Format, das zu Ihrem Alltag passt — oder kombinieren beide.',
  ],
  [
    'Was passiert, wenn ich abbreche oder die Maßnahme nicht zu mir passt?',
    'Sollten Sie feststellen, dass die Maßnahme nicht Ihren Bedürfnissen entspricht, sprechen Sie bitte Ihren Coach sowie Ihre Ansprechperson beim Jobcenter oder der Agentur für Arbeit an. Gemeinsam prüfen wir mögliche Lösungen oder Anpassungen. Eine Beendigung der Teilnahme ist grundsätzlich möglich und erfolgt in Abstimmung mit dem Kostenträger gemäß den geltenden Förderbedingungen.',
  ],
  [
    'Was, wenn ich keinen AVGS-Gutschein bekomme oder mein Fall nicht passt?',
    'Auch ohne Gutschein können wir Sie unterstützen — im privaten Rahmen.',
  ],
])

const avgsBreadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Job Coaching · AVGS', item: `${SITE}/avgs-coaching` },
  ],
}

const ld = (data: unknown) => ({
  type: 'application/ld+json',
  children: JSON.stringify(data),
})

/** hreflang-Alternativen für eine Seite (Pfad ohne Sprachpräfix): de, ru, uk und x-default (= Deutsch). */
const alternates = (base: string) => [
  { rel: 'alternate', hreflang: 'de', href: `${SITE}${base}` },
  ...TLANGS.map((l) => ({ rel: 'alternate', hreflang: l, href: `${SITE}${localizedPath(l, base)}` })),
  { rel: 'alternate', hreflang: 'x-default', href: `${SITE}${base}` },
]

/**
 * canonical + hreflang + og:url für jede Seite: pageHead('/unternehmen') bzw. pageHead('/unternehmen', 'ru').
 * `path` ist immer der deutsche Pfad (ohne /ru, /uk). Der canonical zeigt auf die Seite selbst.
 */
export const pageHead = (path: string, lang: Lang = 'de') => {
  const url = `${SITE}${localizedPath(lang, path)}`
  return {
    links: [{ rel: 'canonical', href: url }, ...alternates(path)],
    meta: [
      { property: 'og:url', content: url },
      ...(lang === 'de' ? [] : [{ property: 'og:locale', content: OG_LOCALE[lang as TLang] }]),
    ],
  }
}

// ---- Lokalisierte Varianten (RU / UK) -------------------------------------------------------

const orgFor = (lang: Lang) => {
  if (lang === 'de') return organization
  const t = CONTENT[lang].schema
  return {
    ...organization,
    description: t.orgDescription,
    knowsAbout: t.knowsAbout,
    founder: { ...organization.founder, jobTitle: t.founderJobTitle },
    hasCredential: {
      ...organization.hasCredential,
      name: t.credentialName,
      credentialCategory: t.credentialCategory,
    },
  }
}

const websiteFor = (lang: Lang) => {
  if (lang === 'de') return website
  return {
    ...website,
    '@id': `${SITE}${localizedPath(lang, '/')}#website`,
    url: `${SITE}${localizedPath(lang, '/')}`,
    inLanguage: lang,
  }
}

const courseFor = (lang: Lang) => {
  if (lang === 'de') return avgsCourse
  const t = CONTENT[lang].schema
  const url = `${SITE}${localizedPath(lang, '/avgs-coaching')}`
  return {
    ...avgsCourse,
    '@id': `${url}#course`,
    name: t.courseName,
    description: t.courseDescription,
    url,
    inLanguage: lang,
    educationalCredentialAwarded: t.courseCredential,
    offers: { ...avgsCourse.offers, category: t.offerCategory },
  }
}

const faqFor = (lang: Lang) => {
  if (lang === 'de') return avgsFaq
  // Fragen/Antworten 1:1 aus dem sichtbaren FAQ der Seite (gleiche Quelle wie die Seite selbst)
  const pairs = CONTENT[lang].avgs.faq.items.map((f) => [f.q, f.a] as [string, string])
  return { ...faq(pairs), inLanguage: lang }
}

const breadcrumbsFor = (lang: Lang) => {
  if (lang === 'de') return avgsBreadcrumbs
  const t = CONTENT[lang].schema
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.breadcrumbHome, item: `${SITE}${localizedPath(lang, '/')}` },
      { '@type': 'ListItem', position: 2, name: t.breadcrumbAvgs, item: `${SITE}${localizedPath(lang, '/avgs-coaching')}` },
    ],
  }
}

export const homeHead = (lang: Lang = 'de') => {
  const base = pageHead('/', lang)
  return {
    ...base,
    scripts: [ld(orgFor(lang)), ld(websiteFor(lang))],
  }
}

export const avgsHead = (lang: Lang = 'de') => {
  const base = pageHead('/avgs-coaching', lang)
  return {
    ...base,
    scripts: [ld(courseFor(lang)), ld(faqFor(lang)), ld(breadcrumbsFor(lang))],
  }
}

/**
 * Статья (RU/UK): canonical на себя, hreflang между двумя версиями, og:*, JSON-LD Article + FAQPage.
 * Все данные — из frontmatter и текста статьи; datePublished = dateModified = `updated` (отдельной даты публикации во frontmatter нет).
 */
export const articleHead = (a: Article) => {
  const url = articleUrl(a)
  const pairUrl = `${SITE}${a.pairPath}`
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: a.h1,
    description: a.description,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    inLanguage: a.lang,
    author: { '@type': 'Person', name: a.authorName },
    publisher: { '@type': 'Organization', '@id': `${SITE}/#organization`, name: organization.name },
    datePublished: a.updated,
    dateModified: a.updated,
  }
  const pairs = a.blocks.flatMap((b) => (b.t === 'qa' ? [[plainText(b.q), plainText(b.a)] as [string, string]] : []))
  const scripts = [ld(article)]
  if (pairs.length > 0) scripts.push(ld({ ...faq(pairs), '@id': `${url}#faq`, inLanguage: a.lang }))
  return {
    links: [
      { rel: 'canonical', href: url },
      { rel: 'alternate', hreflang: a.lang, href: url },
      { rel: 'alternate', hreflang: a.pairLang, href: pairUrl },
    ],
    meta: [
      { title: a.title },
      { name: 'description', content: a.description },
      { property: 'og:title', content: a.title },
      { property: 'og:description', content: a.description },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: url },
      { property: 'og:locale', content: OG_LOCALE[a.lang] },
      { property: 'article:modified_time', content: a.updated },
    ],
    scripts,
  }
}
