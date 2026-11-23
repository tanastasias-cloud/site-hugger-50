import type { Lang } from "./lang";

type Ui = {
  nav: {
    home: string; privat: string; unternehmen: string; jobcenter: string;
    avgsLabel: string; avgsTitle: string; k16Label: string; k16Title: string;
    coaches: string; referenzen: string; cta: string; ctaMobile: string; menu: string;
  };
  footer: {
    email: string; phone: string; website: string; imprint: string; privacy: string;
    disclaimer: string; rights: string; inclusive: string; prideAlt: string;
  };
  switcherLabel: string;
  logoAlt: string;
};

const de: Ui = {
  nav: {
    home: "Start", privat: "Privatpersonen", unternehmen: "Unternehmen", jobcenter: "Mit Jobcenter",
    avgsLabel: "Programm 01 · AVGS", avgsTitle: "Job Coaching",
    k16Label: "Programm 02 · §16k SGB II", k16Title: "Ganzheitliches Coaching",
    coaches: "Coaches", referenzen: "Referenzen", cta: "Erstgespräch",
    ctaMobile: "Erstgespräch buchen →", menu: "Menü",
  },
  footer: {
    email: "E-Mail", phone: "Telefon", website: "Website", imprint: "Impressum", privacy: "Datenschutz",
    disclaimer: "Keine Gewährleistung auf Vermittlungserfolg. § 45 SGB III.",
    rights: "Alle Rechte vorbehalten.",
    inclusive: "Ein sicherer und inklusiver Raum für alle – LGBTQIA+-freundlich",
    prideAlt: "Progress-Pride-Flagge",
  },
  switcherLabel: "Sprache",
  logoAlt: "GetGrow Academy Berlin",
};

const ru: Ui = {
  nav: {
    home: "Главная", privat: "Частным лицам", unternehmen: "Компаниям", jobcenter: "С джобцентром",
    avgsLabel: "Программа 01 · AVGS", avgsTitle: "Job Coaching",
    k16Label: "Программа 02 · §16k SGB II", k16Title: "Комплексный коучинг",
    coaches: "Коучи", referenzen: "Отзывы", cta: "Первая встреча",
    ctaMobile: "Записаться на первую встречу →", menu: "Меню",
  },
  footer: {
    email: "Эл. почта", phone: "Телефон", website: "Сайт", imprint: "Impressum (DE)", privacy: "Datenschutz (DE)",
    disclaimer: "Мы не гарантируем результат трудоустройства. § 45 SGB III.",
    rights: "Все права защищены.",
    inclusive: "Безопасное и инклюзивное пространство для всех — дружелюбно к ЛГБТКИА+ (LGBTQIA+)",
    prideAlt: "Флаг прайда (Progress Pride)",
  },
  switcherLabel: "Язык",
  logoAlt: "GetGrow Academy Berlin",
};

const uk: Ui = {
  nav: {
    home: "Головна", privat: "Приватним особам", unternehmen: "Компаніям", jobcenter: "З джобцентром",
    avgsLabel: "Програма 01 · AVGS", avgsTitle: "Job Coaching",
    k16Label: "Програма 02 · §16k SGB II", k16Title: "Комплексний коучинг",
    coaches: "Коучі", referenzen: "Відгуки", cta: "Перша зустріч",
    ctaMobile: "Записатися на першу зустріч →", menu: "Меню",
  },
  footer: {
    email: "Ел. пошта", phone: "Телефон", website: "Сайт", imprint: "Impressum (DE)", privacy: "Datenschutz (DE)",
    disclaimer: "Ми не гарантуємо результат працевлаштування. § 45 SGB III.",
    rights: "Усі права захищено.",
    inclusive: "Безпечний та інклюзивний простір для всіх — дружній до ЛГБТКІА+ (LGBTQIA+)",
    prideAlt: "Прапор прайду (Progress Pride)",
  },
  switcherLabel: "Мова",
  logoAlt: "GetGrow Academy Berlin",
};

export const UI: Record<Lang, Ui> = { de, ru, uk };
