import yuliiaAsset from "@/assets/yuliia-zaienchyk.jpg.asset.json";
import alenaAsset from "@/assets/alena-yurpalova.jpg.asset.json";
import zoyaAsset from "@/assets/zoya-skobeltsyna.jpg.asset.json";
import alinaAsset from "@/assets/alina-orlanski.jpg.asset.json";

// Coach-Profile — neue Coaches einfach hier hinzufügen.
// Jeder Eintrag erscheint automatisch auf /coaches.

export type Coach = {
  slug: string;
  name: string;
  role: string;
  photo?: string; // URL oder Pfad. Wenn leer → Platzhalter mit Initialen.
  languages: { flag: string; label: string }[];
  bio: string[];
  credentials: { type: string; text: string; sub: string }[];
  expertise: string[];
  isPlaceholder?: boolean;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  photo?: string;
  bio: string;
};

// Aktive Coaches — Profile mit voller Bio, Qualifikationen, Expertise.
export const coaches: Coach[] = [
  {
    slug: "yuliia-zaienchyk",
    name: "Yuliia Zaienchyk",
    role: "Mitgründerin · Psychologin · Job-Coach · Berlin seit 2015",
    photo: yuliiaAsset.url,
    languages: [
      { flag: "🇺🇦", label: "Ukrainisch" },
      { flag: "🇷🇺", label: "Russisch" },
      { flag: "🇩🇪", label: "Deutsch B2" },
      { flag: "🇬🇧", label: "Englisch C1" },
    ],
    bio: [
      "Ich bin Psychologin und Job-Coach — mit Master in Psychologie (Pädagogische Universität, Kyiv), Bachelor in Internationalem Management und einer Coaching-Ausbildung in Existenziellem und Klientenzentriertem Coaching. Seit über fünf Jahren begleite ich Menschen als Coach.",
      "Ich habe mit Menschen aus vielen Ländern gearbeitet, die in Deutschland neu anfangen — im Rahmen von AVGS-Programmen in Zusammenarbeit mit Jobcentern und Bildungsträgern, und als Psychologin bei Albatros gGmbH, wo ich unter anderem unbegleitete Jugendliche aus der Ukraine begleitet habe.",
      "Für mich ist Job-Coaching mehr als Lebenslauf-Arbeit. Wir schauen nicht nur auf Diplome, sondern auf das, was du wirklich willst und worin deine Kraft liegt. Ich gehe weiter als den Punkt, an dem viele einen Endpunkt sehen — und öffne echte Türen in meinem Netzwerk aus Unternehmen, HR und Bildungsträgern.",
    ],
    credentials: [
      { type: "Master", text: "Psychologie", sub: "Pädagogische Universität, Kyiv" },
      { type: "Bachelor", text: "Internationales Management", sub: "Internationale Universität für Finanzen, Kyiv" },
      { type: "Zertifikat", text: "Existenzielles Coaching", sub: "Vector Growth" },
      { type: "Zertifikat", text: "Klientenzentriertes Coaching", sub: "" },
      { type: "Erfahrung", text: "5+ Jahre Coaching-Praxis", sub: "AVGS-Coaching, Jobcenter-Kooperationen, Gruppen- & Einzelarbeit" },
    ],
    expertise: [
      "Berufliche Orientierung & Stärken erkennen",
      "Jobsuche auf dem deutschen Arbeitsmarkt",
      "Vorbereitung auf Vorstellungsgespräche",
      "Ängste, Selbstzweifel & innere Blockaden",
      "Frauen-Coaching & Gruppendynamik",
      "Krisenbegleitung & Migrationserfahrung",
    ],
  },
  {
    slug: "olha-shanta-hladun",
    name: "Olha Shanta-Hladun",
    role: "Job- & Business-Coach · Leadership · Persönlichkeitsentwicklung",
    languages: [
      { flag: "🇺🇦", label: "Ukrainisch" },
      { flag: "🇷🇺", label: "Russisch" },
      { flag: "🇩🇪", label: "Deutsch" },
    ],
    bio: [
      "Ich bin zertifizierter Job- und Business-Coach mit langjähriger Erfahrung in Führung, Unternehmertum und Persönlichkeitsentwicklung. Bevor ich Coach wurde, war ich über 15 Jahre Unternehmerin und Führungskraft — als General Managerin eines Hotel-Resorts habe ich ein Team von rund 50 Mitarbeitenden geleitet und viele junge Menschen von den ersten Schritten bis in Führungsverantwortung begleitet.",
      "Seit Ende 2022 begleite ich Menschen mit Migrationsgeschichte auf ihrem beruflichen Weg in Deutschland. Wir machen berufliche Kompetenzen sichtbar, entwickeln Bewerbungsstrategien und bereiten Vorstellungsgespräche vor — sei es für eine Anstellung, eine Weiterbildung oder den Weg in die Selbstständigkeit. Über 700 Coachingstunden haben meine Überzeugung bestätigt: Jeder Mensch trägt die Ressourcen für seinen nächsten Schritt bereits in sich.",
      "Als Mitgründerin eines eigenen Unternehmens kenne ich beide Perspektiven — Arbeitnehmer:innen und Arbeitgeber:innen. Dieses Wissen fließt direkt in meine Coachings ein.",
    ],
    credentials: [
      { type: "Zertifikat", text: "Job- & Business-Coach", sub: "zertifizierte Coaching-Ausbildung" },
      { type: "Erfahrung", text: "700+ Coachingstunden", sub: "seit Ende 2022, u. a. mit Migrant:innen" },
      { type: "Erfahrung", text: "15+ Jahre Führung & Unternehmertum", sub: "General Managerin Hotel-Resort, Team ~50 Personen" },
      { type: "Weiterbildung", text: "Berufliche Integration, Kommunikation, Persönlichkeitsentwicklung", sub: "laufende Fortbildung" },
    ],
    expertise: [
      "Berufliche Stärken & Potenziale erkennen",
      "Bewerbungsstrategie & professionelle Unterlagen",
      "Vorbereitung auf Vorstellungsgespräche",
      "Innere Blockaden & Selbstzweifel überwinden",
      "Weg in die Selbstständigkeit",
      "Deutscher Arbeitsmarkt verstehen",
    ],
  },
  {
    slug: "zoya-skobeltsyna",
    name: "Zoya Skobeltsyna",
    role: "ICF-zertifizierte Job- & Life-Coach · AVGS-Coach · Berlin seit 2022",
    photo: zoyaAsset.url,
    languages: [
      { flag: "🇷🇺", label: "Russisch" },
      { flag: "🇺🇦", label: "Ukrainisch" },
      { flag: "🇩🇪", label: "Deutsch" },
      { flag: "🇬🇧", label: "Englisch" },
    ],
    bio: [
      "Ich bin ICF-zertifizierte Coach mit Ausbildungen in fünf Schulen — integratives Coaching, Neurointegration, Wellness-Coaching und Gruppenfasilitation — und derzeit in psychologischer Weiterbildung in Kognitiver Verhaltenstherapie (KVT). Über 1000 Stunden Einzel- und Gruppen-Coaching seit 2022.",
      "Als aktive AVGS-Coach arbeite ich mit Klient:innen von Jobcenter und Agentur für Arbeit. Meine Zielgruppe sind russischsprachige Migrant:innen und Expats in Deutschland — bei Jobsuche, Karrierewechsel, Burnout und Anpassung im neuen Land. Ich bin 2022 selbst nach Berlin migriert und kenne diesen Kontext von innen.",
      "Vorher: 11+ Jahre Unternehmerin, Founder & CEO der Agentur LINEUP (2011–2022), Teams von 10–50 Personen, Arbeit mit Top-Management in Communications, EdTech und Events. TEDx- und Skillbox-Speakerin mit über 1000 öffentlichen Auftritten.",
    ],
    credentials: [
      { type: "Master", text: "Medizinische Physik (MSc)", sub: "Polytechnische Universität St. Petersburg, 2010" },
      { type: "Zertifikat", text: "Coaching Mastery — integrativer Ansatz (ICF)", sub: "Psychodemia, 2022" },
      { type: "Zertifikat", text: "Wellness Coach", sub: "Psychodemia, 2023" },
      { type: "Zertifikat", text: "Neurointegration Expert (NIE)", sub: "Neurointegration Institute, California, 2024" },
      { type: "Zertifikat", text: "Gruppen-Coaching & Mastermind (ICF CCE, 28 h)", sub: "5 Prism, 2024" },
      { type: "Erfahrung", text: "1000+ Coachingstunden · aktive AVGS-Coach", sub: "seit 2022, Berlin" },
    ],
    expertise: [
      "Jobsuche in Deutschland: Lebenslauf, Anschreiben, LinkedIn, Vorstellungsgespräche",
      "Karrierewechsel & Neustart nach Migration",
      "Burnout, Stress & Ressourcen-Wiederherstellung",
      "Prioritäten, Planung, Umgang mit Prokrastination",
      "Arbeit mit Glaubenssätzen (KVT-Werkzeuge im Coaching)",
      "Wellness-Basis: Schlaf, Bewegung, Erholung",
    ],
  },
  {
    slug: "alena-yurpalova",
    name: "Alena Yurpalova",
    role: "Business- & Karriere-Coach · Selbstständigkeit · 20+ Jahre Erwachsenenbildung",
    photo: alenaAsset.url,
    languages: [
      { flag: "🇷🇺", label: "Russisch" },
      { flag: "🇺🇦", label: "Ukrainisch" },
      { flag: "🇩🇪", label: "Deutsch" },
    ],
    bio: [
      "Ich habe ein Diplom mit Auszeichnung in Berufspädagogik — inklusive Psychologie, Methodik der Berufsbildung und Erwachsenendidaktik — sowie Zusatzausbildungen in Psychologie, Lebensplanung und Unternehmensführung (WISE) und laufende Weiterbildungen in Unternehmertum, Marketing und Management.",
      "Seit über 20 Jahren arbeite ich mit Menschen in Bildung, beruflicher Entwicklung und Unternehmertum. Ich habe mehr als 1000 Fachkräfte ausgebildet — viele arbeiten heute selbstständig, führen eigene Salons oder Projekte. Seit 2018 bin ich Mitinhaberin der yaLASHes GmbH in Deutschland und begleite Klient:innen bei Gründung, Rechtsform, Steuern und Aufbau der Kundenbasis.",
      "Ich habe praktische Erfahrung mit Migrant:innen, Unternehmerinnen und Menschen in beruflicher Umorientierung — und weiß, wie deutscher Arbeitsmarkt und Selbstständigkeit in Deutschland wirklich funktionieren.",
    ],
    credentials: [
      { type: "Diplom", text: "Berufspädagogik (mit Auszeichnung)", sub: "Pädagogik, Psychologie, Methodik der Berufsbildung" },
      { type: "Zertifikat", text: "Psychologie", sub: "" },
      { type: "Zertifikat", text: "Technologien der Lebensplanung", sub: "" },
      { type: "Weiterbildung", text: "WISE — Effizienz in der Unternehmensführung", sub: "sowie laufende Fortbildung in Unternehmertum, Marketing, Management" },
      { type: "Erfahrung", text: "20+ Jahre in Erwachsenenbildung & Business-Coaching", sub: "1000+ ausgebildete Fachkräfte" },
      { type: "Praxis", text: "Mitinhaberin yaLASHes GmbH", sub: "Deutschland, seit 2018" },
    ],
    expertise: [
      "Berufliche Orientierung & Stärken erkennen",
      "Anstellung vs. Selbstständigkeit — die richtige Entscheidung",
      "Vorbereitung auf die Gründung in Deutschland",
      "Marketing, Positionierung & Kundengewinnung",
      "Planung, Zeitmanagement, Umgang mit Prokrastination",
      "Burnout-Prävention & Work-Life-Balance",
    ],
  },
  {
    slug: "alina-orlanski",
    name: "Alina Orlanski",
    role: "Coach · Profil folgt in Kürze",
    photo: alinaAsset.url,
    languages: [],
    bio: [
      "Vollständiges Profil mit Qualifikationen und Schwerpunkten folgt in Kürze.",
    ],
    credentials: [],
    expertise: [],
  },
];

// Platzhalter für Coaches, deren Profil noch ergänzt wird.
// Sobald Foto & Beschreibung vorliegen, Eintrag nach `coaches` verschieben.
export const coachPlaceholders: Coach[] = [
  { slug: "coach-6", name: "Coach 6", role: "Bald verfügbar", languages: [], bio: [], credentials: [], expertise: [], isPlaceholder: true },
  { slug: "coach-7", name: "Coach 7", role: "Bald verfügbar", languages: [], bio: [], credentials: [], expertise: [], isPlaceholder: true },
];

// Team / Backoffice — keine Coaching-Sessions, aber Teil von GetGrow.
export const team: TeamMember[] = [];
