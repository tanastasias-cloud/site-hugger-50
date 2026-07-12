import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung — GetGrow Academy Berlin" },
      {
        name: "description",
        content:
          "Datenschutzerklärung der GetGrow Academy GmbH nach DSGVO. Informationen zur Verarbeitung personenbezogener Daten, Ihren Rechten und den eingesetzten Diensten.",
      },
      { property: "og:title", content: "Datenschutzerklärung — GetGrow Academy Berlin" },
      {
        property: "og:description",
        content:
          "Datenschutzerklärung der GetGrow Academy GmbH nach DSGVO.",
      },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <SiteShell>
      <section className="page-hero simple">
        <div className="breadcrumb">
          <Link to="/">Startseite</Link> · Datenschutz
        </div>
        <h1>Datenschutz<em>erklärung</em></h1>
        <p className="page-hero-sub">
          Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO auf
          getgrow.academy.
        </p>
      </section>

      <article className="legal-content">
        <h2>1. Datenschutz auf einen Blick</h2>

        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
          personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
          Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
          Text aufgeführten Datenschutzerklärung.
        </p>

        <h3>Datenerfassung auf dieser Website</h3>
        <p>
          <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
          <br />
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
          Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser
          Datenschutzerklärung entnehmen.
        </p>
        <p>
          <strong>Wie erfassen wir Ihre Daten?</strong>
          <br />
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei
          kann es sich z. B. um Daten handeln, die Sie in unser Kontaktformular eingeben.
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
          durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B.
          Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
        </p>
        <p>
          <strong>Wofür nutzen wir Ihre Daten?</strong>
          <br />
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
          gewährleisten. Andere Daten können zur Bearbeitung Ihrer Anfrage und zur Analyse
          Ihres Nutzerverhaltens verwendet werden.
        </p>
        <p>
          <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
          <br />
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
          Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem
          ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
          Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
          jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten
          Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
          Aufsichtsbehörde zu.
        </p>

        <h2>2. Hosting</h2>
        <p>Wir hosten die Inhalte unserer Website bei folgenden Anbietern:</p>

        <h3>Hetzner (Website-Hosting)</h3>
        <p>
          Anbieter ist die Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen,
          Deutschland (nachfolgend „Hetzner"). Die Server, auf denen unsere Website
          gehostet wird, stehen in Deutschland. Beim Besuch unserer Website erfasst
          Hetzner verschiedene Logfiles inklusive Ihrer IP-Adressen.
        </p>
        <p>
          Details entnehmen Sie der Datenschutzerklärung von Hetzner:{" "}
          <a
            href="https://www.hetzner.com/de/rechtliches/datenschutz"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.hetzner.com/de/rechtliches/datenschutz
          </a>
          .
        </p>
        <p>
          Die Verwendung von Hetzner erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
          Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen und
          sicheren Darstellung unserer Website.
        </p>

        <h3>Datenbank für Kontaktanfragen</h3>
        <p>
          Formularanfragen speichern wir in einer selbst betriebenen Datenbank auf unseren
          Servern bei Hetzner (siehe oben), nicht bei einem externen Datenbank-Anbieter.
        </p>

        <h3>Google Workspace (E-Mail-Benachrichtigung)</h3>
        <p>
          Um neue Kontaktanfragen zeitnah zu bearbeiten, versenden wir bei Formulareingang eine
          interne Benachrichtigungs-E-Mail an info@getgrow.academy über die Gmail API. Anbieter
          ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland
          (nachfolgend „Google").
        </p>
        <p>
          Details entnehmen Sie der Datenschutzerklärung von Google:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/privacy
          </a>
          .
        </p>


        <p>
          <strong>Auftragsverarbeitung.</strong> Mit den oben genannten Anbietern haben wir
          Verträge über Auftragsverarbeitung (AVV) geschlossen, die gewährleisten, dass diese
          Ihre personenbezogenen Daten nur nach unseren Weisungen und unter Einhaltung der
          DSGVO verarbeiten.
        </p>

        <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

        <h3>Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
          Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
          gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>

        <h3>Hinweis zur verantwortlichen Stelle</h3>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p>
          GetGrow Academy GmbH
          <br />
          c/o Mindspace
          <br />
          Krausenstraße 9/10
          <br />
          10117 Berlin
          <br />
          <br />
          Vertreten durch die Geschäftsführerin: Yuliia Zaienchyk
          <br />
          Telefon: <a href="tel:+4915736651515">+49 157 3665 1515</a>
          <br />
          E-Mail:{" "}
          <a href="mailto:info@getgrow.academy">info@getgrow.academy</a>
        </p>
        <p>
          Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
          gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
          personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
        </p>

        <h3>Speicherdauer</h3>
        <p>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
          wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
          Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen
          oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
          sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
          personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche
          Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall
          dieser Gründe.
        </p>

        <h3>Allgemeine Hinweise zu den Rechtsgrundlagen</h3>
        <p>
          Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre
          personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Sind Ihre
          Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b
          DSGVO. Verarbeiten wir Ihre Daten zur Erfüllung einer rechtlichen Verpflichtung,
          erfolgt dies auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung
          kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f
          DSGVO erfolgen.
        </p>

        <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
          möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die
          Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
          unberührt.
        </p>

        <h3>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
        <p>
          Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO
          erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen
          Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch
          einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling.
          Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so
          haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender
          personenbezogener Daten zum Zwecke derartiger Werbung einzulegen.
        </p>

        <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
        <p>
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei
          einer Aufsichtsbehörde zu. Für uns zuständig ist die Berliner Beauftragte für
          Datenschutz und Informationsfreiheit.
        </p>

        <h3>Recht auf Datenübertragbarkeit</h3>
        <p>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
          Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in
          einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
        </p>

        <h3>Auskunft, Berichtigung und Löschung</h3>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
          unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren
          Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ggf. ein Recht auf
          Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen können Sie
          sich jederzeit an uns wenden.
        </p>

        <h3>Recht auf Einschränkung der Verarbeitung</h3>
        <p>
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
          Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden.
        </p>

        <h3>SSL- bzw. TLS-Verschlüsselung</h3>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
          vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
          Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf
          „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
        </p>

        <h3>Widerspruch gegen Werbe-E-Mails</h3>
        <p>
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur
          Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien
          wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich
          rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa
          durch Spam-E-Mails, vor.
        </p>

        <h2>4. Datenerfassung auf dieser Website</h2>

        <h3>Cookies</h3>
        <p>
          Unsere Website verwendet ausschließlich technisch notwendige Cookies bzw.
          vergleichbare Wiedererkennungstechnologien (z. B. für die Spracheinstellung).
          Diese sind erforderlich, um bestimmte Funktionen der Website bereitzustellen. Die
          Rechtsgrundlage bildet Art. 6 Abs. 1 lit. f DSGVO sowie § 25 Abs. 2 TTDSG. Wir setzen
          derzeit keine Analyse-, Tracking- oder Werbe-Cookies ein.
        </p>
        <p>
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies
          informiert werden und Cookies nur im Einzelfall erlauben oder das automatische
          Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung
          von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
        </p>

        <h3>Kontaktformular</h3>
        <p>
          Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
          aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
          (Vorname, Nachname, E-Mail-Adresse, optional Telefonnummer sowie Ihre Nachricht)
          zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
          gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>
        <p>
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
          Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
          vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
          Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an
          uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) sowie auf Ihrer Einwilligung
          (Art. 6 Abs. 1 lit. a DSGVO), die Sie jederzeit widerrufen können.
        </p>
        <p>
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns
          zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
          für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen — insbesondere
          Aufbewahrungsfristen — bleiben unberührt.
        </p>

        <h3>Anfrage per E-Mail oder Telefon</h3>
        <p>
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller
          daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der
          Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben
          wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von
          Art. 6 Abs. 1 lit. b, f DSGVO sowie ggf. Ihrer Einwilligung nach Art. 6 Abs. 1 lit.
          a DSGVO.
        </p>

        <h2>5. Coaching-Leistungen</h2>
        <p>
          Für die Durchführung unserer Coaching-Leistungen (u. a. im Rahmen von AVGS gemäß
          § 45 SGB III und §16k SGB II) verarbeiten wir personenbezogene Daten unserer
          Klient:innen ausschließlich zum Zweck der Vertragserfüllung und im Rahmen der
          gesetzlichen Vorgaben (Art. 6 Abs. 1 lit. b und c DSGVO). Eine Weitergabe an
          Jobcenter oder Agentur für Arbeit erfolgt nur, soweit dies gesetzlich vorgesehen
          oder zur Abrechnung der Maßnahme erforderlich ist.
        </p>

        <h2>6. Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
          aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen
          in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die
          neue Datenschutzerklärung.
        </p>

        <p className="legal-updated">Stand: Juli 2026</p>
      </article>
    </SiteShell>
  );
}
