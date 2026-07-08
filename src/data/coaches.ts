import yuliiaAsset from "@/assets/yuliia-zaienchyk.jpg.asset.json";
import anastasiaAsset from "@/assets/anastasia-lunina.jpg.asset.json";
import alenaAsset from "@/assets/alena-yurpalova.jpg.asset.json";
import zoyaAsset from "@/assets/zoya-skobeltsyna.jpg.asset.json";
import alinaAsset from "@/assets/alina-orlanski.jpg.asset.json";
import olhaAsset from "@/assets/olha-shanta-hladun.jpg.asset.json";
import eugenieAsset from "@/assets/eugenie-kralyuk.jpg.asset.json";
import nataliiaAsset from "@/assets/nataliia-skliar.jpg.asset.json";

// Coach-Profile — neue Coaches einfach hier hinzufügen.
// Jeder Eintrag erscheint automatisch auf /coaches.

export type Coach = {
  slug: string;
  name: string;
  role: string;
  photo?: string;
  languages: { flag: string; label: string }[];
  bio: string[];
  credentials: { type: string; text: string; sub: string }[];
  expertise: string[];
  isFounder?: boolean;
  isPlaceholder?: boolean;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  photo?: string;
  bio: string;
};

export const coaches: Coach[] = [
  {
    slug: "yuliia-zaienchyk",
    name: "Yuliia Zaienchyk",
    role: "Mitgründerin · Psychologin · Job-Coach · Berlin seit 2015",
    isFounder: true,
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
    slug: "anastasia-lunina",
    name: "Anastasia Lunina",
    role: "Mitgründerin · Business & Leadership · Organisationsentwicklung",
    isFounder: true,
    photo: anastasiaAsset.url,
    languages: [
      { flag: "🇺🇦", label: "Ukrainisch" },
      { flag: "🇷🇺", label: "Russisch" },
      { flag: "🇩🇪", label: "Deutsch" },
      { flag: "🇬🇧", label: "Englisch" },
    ],
    bio: [
      "Ich begann meine Karriere in einem jungen SaaS-Unternehmen, als dort insgesamt rund 35 Menschen arbeiteten. Im Customer Support bestand unser Team aus nur fünf Mitarbeitenden. In den folgenden neun Jahren entwickelte ich mich von einer Support-Mitarbeiterin zur Direktorin der Bereiche Vertrieb und Customer Success — ich wuchs gemeinsam mit dem Unternehmen und gestaltete dieses Wachstum aktiv mit. Als ich das Unternehmen verließ, beschäftigte es rund 600 Mitarbeitende; für zwei der größten Bereiche mit rund 300 Mitarbeitenden trug ich die Verantwortung.",
      "Meine Aufgabe war weit mehr als Führung. Ich baute neue Abteilungen auf, entwickelte Organisationsstrukturen, stellte Mitarbeitende und Führungskräfte ein, führte Hunderte Bewerbungsgespräche, entwickelte Vertriebs- und Serviceprozesse, konzipierte Schulungsprogramme, Vergütungssysteme und Standards für Qualität und Zusammenarbeit. Ich begleitete die Einführung neuer Produkte, leitete bereichsübergreifende Projekte und war regelmäßig in strategische Entscheidungen eingebunden. Gleichzeitig arbeitete ich eng mit Kund:innen zusammen, führte Live-Webinare durch und unterstützte die internationale Weiterentwicklung des Unternehmens.",
      "Heute verbinde ich diese langjährige Management-Erfahrung mit einem professionellen Coaching-Ansatz. Ich begleite Führungskräfte, Unternehmer:innen und Menschen in beruflichen Veränderungsphasen dabei, Klarheit zu gewinnen, fundierte Entscheidungen zu treffen und nachhaltige Strukturen aufzubauen — analytisch, strukturiert und mit einem tiefen Verständnis für die Menschen hinter den Entscheidungen. Ich bin überzeugt: Nachhaltiger Erfolg entsteht dort, wo Klarheit, Verantwortung, gute Führung und konsequentes Handeln zusammenkommen.",
    ],
    credentials: [
      { type: "Erfahrung", text: "9 Jahre Führungserfahrung", sub: "Leitung der Bereiche Vertrieb und Customer Success" },
      { type: "Erfahrung", text: "Unternehmenswachstum aktiv mitgestaltet", sub: "Vom Start-up mit 35 Mitarbeitenden zu ~600 Mitarbeitenden" },
      { type: "Erfahrung", text: "Aufbau und Führung großer Teams", sub: "Verantwortung für rund 300 Mitarbeitende" },
      { type: "Praxis", text: "Business Development", sub: "Aufbau neuer Abteilungen, Prozesse, Produkte und Organisationsstrukturen" },
      { type: "Praxis", text: "Sales & Customer Experience", sub: "Entwicklung skalierbarer Vertriebs- und Serviceprozesse" },
    ],
    expertise: [
      "Leadership & Mitarbeiterführung",
      "Business Development & Organisationsentwicklung",
      "Unternehmenswachstum & Skalierung",
      "Sales & Customer Experience",
      "Change Management",
      "Karriereentwicklung",
      "Entscheidungsfindung",
      "Selbstständigkeit & Business-Aufbau",
    ],
  },
  {
    slug: "olha-shanta-hladun",
    name: "Olha Shanta-Hladun",
    role: "Job- & Business-Coach · Leadership · Persönlichkeitsentwicklung",
    photo: olhaAsset.url,
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
    role: "Job-Coach · Karriereberaterin · Expertin für Existenzgründung",
    photo: alinaAsset.url,
    languages: [
      { flag: "🇷🇺", label: "Russisch" },
      { flag: "🇺🇦", label: "Ukrainisch" },
      { flag: "🇩🇪", label: "Deutsch" },
    ],
    bio: [
      "Ich habe einen Bachelor of Science in BWL und Recht der Wirtschaft und bilde mich regelmäßig weiter — zu Themen wie Integration von Migrant:innen, Sozialrecht (SGB), Besonderheiten des deutschen Arbeitsmarkts und Zusammenarbeit mit Behörden. Mein Wissen basiert nicht nur auf Ausbildung, sondern auf langjähriger Praxis mit Menschen und eigener unternehmerischer Erfahrung.",
      "Seit mehreren Jahren begleite ich Menschen mit Migrationshintergrund auf ihrem Weg in den deutschen Arbeitsmarkt. Im AVGS-Coaching helfe ich, die berufliche Richtung zu klären, eine wirksame Bewerbungsstrategie zu entwickeln, moderne Bewerbungsunterlagen zu erstellen und Vorstellungsgespräche souverän zu meistern. Ich führe auch Trainingsinterviews durch und bereite Klient:innen anderer Coaches auf entscheidende Schritte im Bewerbungsprozess vor.",
      "Neben dem Coaching bin ich Mitgründerin und Geschäftsführerin der yaLASHes GmbH. Über die Jahre habe ich rund 100 Menschen bei der Gründung ihres eigenen Unternehmens in Deutschland begleitet — von der Idee bis zur Anmeldung, Rechtsform, Steuern und den ersten Schritten in der Selbstständigkeit. Dadurch begleite ich meine Klient:innen sowohl in Anstellung als auch in die Selbstständigkeit — praktisch, nicht theoretisch.",
    ],
    credentials: [
      { type: "Bachelor", text: "BWL und Recht der Wirtschaft (B.Sc.)", sub: "" },
      { type: "Weiterbildung", text: "Integration, Sozialrecht (SGB), deutscher Arbeitsmarkt", sub: "laufende Fortbildung" },
      { type: "Erfahrung", text: "AVGS-Coaching & Bewerbungstraining", sub: "mehrjährige Praxis mit Migrant:innen" },
      { type: "Praxis", text: "Mitgründerin & Geschäftsführerin yaLASHes GmbH", sub: "~100 begleitete Existenzgründungen in Deutschland" },
    ],
    expertise: [
      "Berufliche Orientierung & Wechsel der Branche",
      "Bewerbungsstrategie & moderne Unterlagen",
      "Vorstellungsgespräche & Trainingsinterviews",
      "Selbstpräsentation & Selbstvertrauen",
      "Existenzgründung in Deutschland: Rechtsform, Steuern, erste Schritte",
      "Ziele setzen & konkrete Handlungspläne",
    ],
  },
  {
    slug: "eugenie-kralyuk",
    name: "Eugenie Kralyuk",
    role: "Systemischer Coach · HR-Expertin · Job-Coach",
    photo: eugenieAsset.url,
    languages: [
      { flag: "🇺🇦", label: "Ukrainisch" },
      { flag: "🇩🇪", label: "Deutsch" },
      { flag: "🇷🇺", label: "Russisch" },
      { flag: "🇵🇱", label: "Polnisch" },
      { flag: "🇬🇧", label: "Englisch" },
    ],
    bio: [
      "Ich bin systemische Coach, HR-Expertin und Job-Coach. Master in Kulturwissenschaften an der Universität Leipzig, Bachelor in Politikwissenschaft / Internationale Beziehungen (Leipzig und Warschau). Zusätzlich Ausbildungen in systemischem Coaching, Corporate Social Responsibility, strategischem Umweltmanagement sowie im Umgang mit Stress und psychischem Trauma.",
      "Nach dem Studium habe ich über zehn Jahre internationale Projekte in deutschen Forschungsinstituten und der Deutsch-Ukrainischen Industrie- und Handelskammer geleitet — Kooperationen zwischen deutschen und ukrainischen Unternehmen in Energie, Automobil, Recruiting und Bildung.",
      "Seit über fünf Jahren arbeite ich in HR, Recruiting und Job-Coaching. Mein Schwerpunkt ist die Begleitung von Menschen mit Migrationserfahrung, ukrainischen Geflüchteten und internationalen Fachkräften, die sich in Deutschland beruflich neu aufstellen — sowie deutschen Fachkräften in beruflicher Umorientierung. Ich begleite meine Klient:innen von den ersten Zweifeln bis zur erfolgreichen beruflichen Realisierung.",
    ],
    credentials: [
      { type: "Master", text: "Kulturwissenschaften", sub: "Universität Leipzig" },
      { type: "Bachelor", text: "Politikwissenschaft / Internationale Beziehungen", sub: "Leipzig & Warschau" },
      { type: "Zertifikat", text: "Systemisches Coaching", sub: "" },
      { type: "Weiterbildung", text: "CSR, strategisches Umweltmanagement, Stress & Trauma", sub: "" },
      { type: "Erfahrung", text: "10+ Jahre internationales Projektmanagement", sub: "Deutsche Forschungsinstitute · Deutsch-Ukrainische IHK" },
      { type: "Erfahrung", text: "5+ Jahre HR, Recruiting & Job-Coaching", sub: "Schwerpunkt Migrant:innen & internationale Fachkräfte" },
    ],
    expertise: [
      "Berufliche Orientierung & Karrierestrategie",
      "Jobsuche & Bewerbungsprozess in Deutschland",
      "Stärken erkennen & individuelle Positionierung",
      "Begleitung bei Migration & beruflichem Neustart",
      "HR- & Recruiting-Perspektive im Coaching",
      "Umgang mit Stress und Belastung",
    ],
  },
  {
    slug: "nataliia-skliar",
    name: "Nataliia Skliar",
    role: "Diplom-Psychologin · Job-Coach · Eco-Facilitator",
    photo: nataliiaAsset.url,
    languages: [
      { flag: "🇺🇦", label: "Ukrainisch" },
      { flag: "🇷🇺", label: "Russisch" },
      { flag: "🇩🇪", label: "Deutsch" },
    ],
    bio: [
      "Ich bin Diplom-Psychologin (Nationale Universität Odesa I. I. Metschnikow) mit kontinuierlicher Fort- und Weiterbildung im Bereich Coaching, u. a. als Eco-Facilitator. Seit 2022 als Coachin tätig für über 50 Klientinnen mit mehr als 400 Coaching-Stunden — überwiegend im Rahmen von AVGS-finanzierten Maßnahmen, in Zusammenarbeit mit fünf Bildungsträgern.",
      "Parallel arbeite ich als Psychologin in einem Jugendprojekt (§ 16h SGB II, Förderung schwer erreichbarer junger Menschen, 16–25 Jahre) sowie in Workshops und Netzwerktreffen für Migrantinnen. Diese Kombination aus psychologischer, gruppenbezogener und individueller Praxis prägt meinen Coaching-Ansatz.",
      "Mein Fokus im Coaching: Frauen mit Migrationshintergrund auf ihrem Weg in den deutschen Arbeitsmarkt — von der Anerkennung des Diploms über professionelle Bewerbungsunterlagen bis zum ersten Arbeitstag. Beratung auf Ukrainisch, Russisch und Deutsch, im Hybrid-Format (online und vor Ort).",
    ],
    credentials: [
      { type: "Diplom", text: "Psychologie", sub: "Nationale Universität Odesa I. I. Metschnikow" },
      { type: "Weiterbildung", text: "Eco-Facilitator & Coaching", sub: "kontinuierliche Fort- und Weiterbildung" },
      { type: "Erfahrung", text: "400+ Coaching-Stunden · 50+ Klientinnen", sub: "seit 2022, AVGS mit 5 Bildungsträgern" },
      { type: "Praxis", text: "Psychologin im Jugendprojekt (§ 16h SGB II)", sub: "Förderung schwer erreichbarer junger Menschen, 16–25 Jahre" },
      { type: "Praxis", text: "Workshops & Netzwerktreffen für Migrantinnen", sub: "" },
    ],
    expertise: [
      "Bewerbungsstrategie & Unterlagen nach deutschem Standard",
      "Diplomanerkennung & Vorbereitung auf Vorstellungsgespräche",
      "Arbeitsmarktanalyse & Auswahl passender Weiterbildungen",
      "Standortbestimmung bei nicht-linearen Lebensläufen",
      "Resilienz & Selbstvertrauen in Übergangsphasen",
      "Netzwerkstrategie & Sichtbarkeit auf LinkedIn",
      "Digitale Kompetenz: Canva, LinkedIn, KI-Tools",
      "Interkulturelle Kompetenz & Gewaltfreie Kommunikation",
    ],
  },
];

// Platzhalter für Coaches, deren Profil noch ergänzt wird.
export const coachPlaceholders: Coach[] = [];

export const team: TeamMember[] = [];
