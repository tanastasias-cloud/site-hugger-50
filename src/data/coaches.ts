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
    role: "Mitgründerin · Karriere-Coach · Angewandte Psychologin · Berlin seit 2015",
    languages: [
      { flag: "🇺🇦", label: "Ukrainisch" },
      { flag: "🇷🇺", label: "Russisch" },
      { flag: "🇩🇪", label: "Deutsch B2" },
      { flag: "🇬🇧", label: "Englisch C1" },
    ],
    bio: [
      "Ich lebe seit 2015 in Berlin — ich weiß also genau, wie es sich anfühlt, in einem neuen Land anzukommen, mit einem ganzen Berufsleben im Gepäck, und noch einmal von vorn beginnen zu müssen. Diese persönliche Erfahrung ist der Kern meiner Arbeit mit jedem Klienten.",
      "Ich bin zertifizierter Karriere-Coach mit einem Master in Angewandter Psychologie und 6 Jahren Praxis. Ich arbeite an der Schnittstelle von Psychologie und Coaching — denn die meisten Karrierethemen drehen sich nicht wirklich um den Lebenslauf. Es geht um Ängste, Identität und Überzeugungen aus einem früheren Leben.",
      "Über die Jahre habe ich ein breites Netzwerk in Deutschland aufgebaut — Unternehmen, HR-Manager, Bildungsträger und soziale Organisationen. Das heißt: Ich gebe nicht nur Rat — ich öffne echte Türen.",
    ],
    credentials: [
      { type: "Master", text: "Angewandte Psychologie", sub: "Pädagogische Universität, Kyiv" },
      { type: "Bachelor", text: "Internationales Management", sub: "International University of Finance, Kyiv" },
      { type: "Zertifikat", text: "Karriere-Coaching — zertifizierte Ausbildung", sub: "Berlin" },
      { type: "Erfahrung", text: "6 Jahre Coaching-Praxis", sub: "u. a. 2+ Jahre bei MigraVision — AVGS-Coaching, Gruppenprogramme, Team-Koordination" },
    ],
    expertise: [
      "Jobsuche auf dem deutschen Markt",
      "Lebenslauf & Bewerbung, die Türen öffnen",
      "Ausbildung & Anerkennung von Abschlüssen",
      "Vorbereitung auf Vorstellungsgespräche",
      "Krisenbegleitung & Migrationserfahrung",
      "Identität, Motivation & innere Klarheit",
    ],
  },
];

// Team / Backoffice — keine Coaching-Sessions, aber Teil von GetGrow.
export const team: TeamMember[] = [];

