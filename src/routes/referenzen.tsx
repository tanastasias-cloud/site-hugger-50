import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/referenzen")({
  head: () => ({
    meta: [
      { title: "Referenzen — GetGrow Academy Berlin" },
      {
        name: "description",
        content:
          "Echte Stimmen von Klient:innen: Karriere-Coaching mit Yulia und der GetGrow Academy Berlin — Erfahrungen, Erfolge, Empfehlungen.",
      },
      { property: "og:title", content: "Referenzen — GetGrow Academy Berlin" },
      {
        property: "og:description",
        content: "Was unsere Klient:innen über das Coaching mit Yulia sagen.",
      },
    ],
  }),
  component: ReferenzenPage,
});

type Review = {
  name: string;
  initials: string;
  date: string;
  lang: "RU" | "EN" | "DE";
  text: string;
};

const reviews: Review[] = [
  {
    name: "Алла Приходько",
    initials: "АП",
    date: "vor 1 Monat",
    lang: "RU",
    text: "Я могу сказать что лучше. Юля помогла мне поверить в себя, поддержала в непростой период поиска направления работы, мы вместе заполняли и отсылали необходимые документы, вели переговоры с работодателями и я очень много добилась благодаря Юле. Результат — работа мечты! Желаю всем удачи! Юля — лучший Коуч! Рекомендую 👍",
  },
  {
    name: "Yaroslav Boretsky",
    initials: "YB",
    date: "vor 1 Monat",
    lang: "EN",
    text: "Great experience with Yulia! Thanks to her coaching, I understood the preliminary strategy for my further career options as well as to discover a lot of helpful insights with regards to the mental view of myself. Very thankful for the dedication and work!",
  },
  {
    name: "Jade Gritsfeldt",
    initials: "JG",
    date: "vor 3 Wochen",
    lang: "RU",
    text: "Хочу оставить небольшой отзыв о работе с GetGrow Academy. Я проходил консультации у Юлии по вопросам развития профессиональной карьеры в Германии и получил действительно качественную, структурированную и практичную поддержку. Это был не просто разговор, а чёткое разложение ситуации: куда двигаться дальше, как выстраивать позиционирование в новой стране, и какие шаги важны именно в условиях эмиграции и адаптации к немецкому рынку. Особенно ценно было ощущение ясности после сессий — когда сложные вещи становятся понятными и появляется ощущение направления. Могу рекомендовать, особенно тем, кто проходит путь иммиграции и ищет опору в профессиональной реализации в новой среде.",
  },
  {
    name: "Елена Хащивская",
    initials: "ЕХ",
    date: "vor 1 Monat",
    lang: "RU",
    text: "Я проходила коучинг с Юлей два раза и очень благодарна ей за помощь и поддержку. Благодаря нашей работе, в которой Коуч выставила правильно приоритеты, я смогла найти квартиру и работу, что стало для меня очень важным результатом. Юля — очень внимательный, чуткий и искренний человек, который умеет поддержать и направить в нужный момент. С ней легко и комфортно работать. Для меня она стала уже не просто коучем, а дорогим человеком и подругой. От всей души рекомендую Юлю как прекрасного специалиста ❤️.",
  },
  {
    name: "Olha",
    initials: "O",
    date: "vor 1 Monat",
    lang: "RU",
    text: "Я бухгалтер с большим опытом работы в Украине, но в Германии всё нужно было начинать заново. Юлия помогла мне составить резюме на немецком рынке, подготовиться к собеседованиям и найти подходящие курсы. Немецкий давался мне очень тяжело — со второго раза, но я сдала! И в итоге нашла работу по своей специальности. На протяжении всего пути Юлия была рядом — всегда отвечала на вопросы, поддерживала в трудные моменты. В чужой стране это бесценно. Огромное спасибо!",
  },
];

const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/Hg5wdXiciV3Ent7i8";

function Stars() {
  return (
    <div className="ref-stars" aria-label="5 von 5 Sternen">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

function ReferenzenPage() {
  return (
    <SiteShell>
      <section className="page-hero simple">
        <div className="breadcrumb">
          <Link to="/">Start</Link> · Referenzen
        </div>
        <h1>
          Stimmen unserer <em>Klient:innen</em>
        </h1>
        <p className="page-hero-sub">
          Echte Erfahrungen von Menschen, die mit Yulia und der GetGrow Academy
          ihren Weg in Deutschland gefunden haben — vom ersten Schritt in den
          Arbeitsmarkt bis zum Job, der wirklich passt.
        </p>
      </section>

      <section className="ref-summary">
        <div className="ref-summary-inner">
          <div className="ref-rating">
            <div className="ref-rating-score">5,0</div>
            <Stars />
            <div className="ref-rating-source">
              Bewertungen auf{" "}
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
                Google Maps
              </a>
            </div>
          </div>
          <div className="ref-summary-text">
            <div className="ref-tag">Vertrauen, das wächst</div>
            <p>
              Viele unserer Klient:innen kommen über persönliche Empfehlungen.
              Die folgenden Stimmen stammen von echten Personen, die mit uns
              gearbeitet haben — veröffentlicht auf Google Maps.
            </p>
          </div>
        </div>
      </section>

      <section className="ref-list">
        {reviews.map((r) => (
          <article className="ref-card" key={r.name}>
            <div className="ref-card-head">
              <div className="ref-avatar">{r.initials}</div>
              <div>
                <div className="ref-name">{r.name}</div>
                <div className="ref-meta">
                  <Stars />
                  <span className="ref-date">· {r.date}</span>
                  <span className="ref-lang">· {r.lang}</span>
                </div>
              </div>
            </div>
            <p className="ref-text">{r.text}</p>
          </article>
        ))}

        <div className="ref-more">
          <p>Alle Bewertungen findest du auf Google Maps.</p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mint"
          >
            Auf Google ansehen →
          </a>
        </div>
      </section>

      <section className="cta-strip">
        <div>
          <div className="cta-strip-tag">Dein Weg beginnt hier</div>
          <h2>Buche dein kostenloses Erstgespräch.</h2>
        </div>
        <div className="cta-btns">
          <Link to="/kontakt" className="btn-mint">
            Erstgespräch buchen
          </Link>
          <Link to="/coaches" className="btn-outline-w">
            Coaches kennenlernen →
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
