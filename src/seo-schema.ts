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

const SITE = 'https://getgrow.academy'

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
  sameAs: [] as string[],
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

/** canonical + og:url для любой страницы: pageHead('/unternehmen') */
export const pageHead = (path: string) => ({
  links: [{ rel: 'canonical', href: `${SITE}${path}` }],
  meta: [{ property: 'og:url', content: `${SITE}${path}` }],
})

export const homeHead = () => {
  const base = pageHead('/')
  return {
    ...base,
    scripts: [ld(organization), ld(website)],
  }
}

export const avgsHead = () => {
  const base = pageHead('/avgs-coaching')
  return {
    ...base,
    scripts: [ld(avgsCourse), ld(avgsFaq), ld(avgsBreadcrumbs)],
  }
}
