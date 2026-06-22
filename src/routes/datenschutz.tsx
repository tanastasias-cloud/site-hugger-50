import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz — GetGrow Academy Berlin" },
      {
        name: "description",
        content:
          "Datenschutzerklärung der GetGrow Academy GmbH. Informationen zur Verarbeitung personenbezogener Daten nach DSGVO.",
      },
      { property: "og:title", content: "Datenschutz — GetGrow Academy Berlin" },
      {
        property: "og:description",
        content:
          "Datenschutzerklärung der GetGrow Academy GmbH. Informationen zur Verarbeitung personenbezogener Daten nach DSGVO.",
      },
      { property: "og:type", content: "website" },
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
        <h1>
          <em>Datenschutzerklärung</em>
        </h1>
        <p className="page-hero-sub">
          Hinweise zum Umgang mit personenbezogenen Daten nach der DSGVO.
        </p>
      </section>

      <section className="section white">
        <div className="impressum-content">
          <div className="impressum-block">
            <div className="info-tag">1. Datenschutz auf einen Blick</div>
            <h3 className="impressum-h3">Allgemeine Hinweise</h3>
            <p className="impressum-text">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="impressum-h3">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
            <p className="impressum-text">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
              Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ in dieser
              Datenschutzerklärung entnehmen.
            </p>

            <h3 className="impressum-h3">Wie erfassen wir Ihre Daten?</h3>
            <p className="impressum-text">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen — etwa durch
              die Eingabe in ein Kontaktformular. Andere Daten werden automatisch oder nach Ihrer
              Einwilligung beim Besuch der Website durch IT-Systeme erfasst (z. B. technische Daten
              wie Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>

            <h3 className="impressum-h3">Wofür nutzen wir Ihre Daten?</h3>
            <p className="impressum-text">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
              gewährleisten. Andere Daten können zur Analyse des Nutzerverhaltens verwendet werden,
              sofern Sie eingewilligt haben.
            </p>

            <h3 className="impressum-h3">Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
            <p className="impressum-text">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
              Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
              Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft
              widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung
              der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen
              ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
            <p className="impressum-text">
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns
              wenden.
            </p>
          </div>

          <div className="impressum-block">
            <div className="info-tag">2. Hosting</div>
            <p className="impressum-text">
              Wir hosten die Inhalte unserer Website bei einem externen Anbieter. Beim Besuch unserer
              Website erfasst dieser Anbieter verschiedene Logfiles inklusive Ihrer IP-Adressen.
            </p>
            <p className="impressum-text">
              <strong>Hosting-Anbieter:</strong> Hetzner Online GmbH (Angaben zum konkreten Rechenzentrum
              und Vertrag über Auftragsverarbeitung werden vor dem Livegang ergänzt).
            </p>
            <p className="impressum-text">
              Die Verwendung des Hosting-Anbieters erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer
              Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
              ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG.
              Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="impressum-text">
              Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem Hosting-Anbieter
              geschlossen bzw. schließen diesen vor dem Livegang. Dieser Vertrag stellt sicher, dass
              der Anbieter personenbezogene Daten unserer Websitebesucher nur nach unseren Weisungen
              und unter Einhaltung der DSGVO verarbeitet.
            </p>
          </div>

          <div className="impressum-block">
            <div className="info-tag">3. Allgemeine Hinweise und Pflichtinformationen</div>
            <h3 className="impressum-h3">Datenschutz</h3>
            <p className="impressum-text">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
              behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="impressum-text">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation
              per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem
              Zugriff durch Dritte ist nicht möglich.
            </p>

            <h3 className="impressum-h3">Hinweis zur verantwortlichen Stelle</h3>
            <p className="impressum-text">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="impressum-text">
              <strong>GetGrow Academy GmbH</strong>
              <br />
              Geschäftsführer: ZAIENCHYK YULIIA
              <br />
              Krausenstraße 9/10
              <br />
              10117 Berlin
              <br />
              Deutschland
              <br />
              E-Mail: <a href="mailto:info@getgrow.academy">info@getgrow.academy</a>
              <br />
              Telefon: <a href="tel:+4915736651515">+49 157 3665 1515</a>
            </p>
            <p className="impressum-text">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
              gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen
              Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>

            <h3 className="impressum-h3">Speicherdauer</h3>
            <p className="impressum-text">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
              wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
              Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder
              eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
              wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
              personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen);
              im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>

            <h3 className="impressum-h3">Allgemeine Hinweise zu den Rechtsgrundlagen</h3>
            <p className="impressum-text">
              Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre
              personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2
              lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet
              werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener
              Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49
              Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf
              Informationen in Ihr Endgerät eingewilligt haben, erfolgt die Datenverarbeitung
              zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="impressum-text">
              Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.
              Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen
              Verpflichtung erforderlich sind, auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
              Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6
              Abs. 1 lit. f DSGVO erfolgen.
            </p>

            <h3 className="impressum-h3">Empfänger von personenbezogenen Daten</h3>
            <p className="impressum-text">
              Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen
              zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese
              externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen
              weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich
              hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein
              berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn
              eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
              Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage
              eines gültigen Vertrags über Auftragsverarbeitung weiter.
            </p>

            <h3 className="impressum-h3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="impressum-text">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
              Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
              der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="impressum-h3">Widerspruchsrecht gegen die Datenerhebung (Art. 21 DSGVO)</h3>
            <p className="impressum-text">
              Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
              haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation
              ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen;
              dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige
              Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser
              Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen
              personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende
              schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und
              Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder
              Verteidigung von Rechtsansprüchen.
            </p>
            <p className="impressum-text">
              Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben
              Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender
              personenbezogener Daten zum Zwecke derartiger Werbung einzulegen.
            </p>

            <h3 className="impressum-h3">Beschwerderecht bei der Aufsichtsbehörde</h3>
            <p className="impressum-text">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
              Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
              Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
            </p>

            <h3 className="impressum-h3">Recht auf Datenübertragbarkeit</h3>
            <p className="impressum-text">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung
              eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem
              gängigen, maschinenlesbaren Format aushändigen zu lassen.
            </p>

            <h3 className="impressum-h3">Auskunft, Berichtigung und Löschung</h3>
            <p className="impressum-text">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
              unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft
              und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
              Löschung dieser Daten.
            </p>

            <h3 className="impressum-h3">Recht auf Einschränkung der Verarbeitung</h3>
            <p className="impressum-text">
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
              verlangen. Dieses Recht besteht unter anderem, wenn Sie die Richtigkeit Ihrer Daten
              bestreiten, die Verarbeitung unrechtmäßig erfolgt, wir Ihre Daten nicht mehr benötigen,
              Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen
              benötigen, oder wenn Sie Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben.
            </p>

            <h3 className="impressum-h3">SSL- bzw. TLS-Verschlüsselung</h3>
            <p className="impressum-text">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
              Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem
              Schloss-Symbol in Ihrer Browserzeile.
            </p>

            <h3 className="impressum-h3">Widerspruch gegen Werbe-E-Mails</h3>
            <p className="impressum-text">
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur
              Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien
              wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich
              rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen vor.
            </p>
          </div>

          <div className="impressum-block">
            <div className="info-tag">4. Datenerfassung auf dieser Website</div>
            <h3 className="impressum-h3">Cookies</h3>
            <p className="impressum-text">
              Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete
              und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für
              die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
              Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht.
            </p>
            <p className="impressum-text">
              Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (Third-Party-
              Cookies). Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur
              Bereitstellung bestimmter, von Ihnen erwünschter Funktionen oder zur Optimierung der
              Website erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird.
            </p>
            <p className="impressum-text">
              Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren
              Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich
              auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG);
              die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="impressum-text">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert
              werden und Cookies nur im Einzelfall erlauben. Bei der Deaktivierung von Cookies kann
              die Funktionalität dieser Website eingeschränkt sein.
            </p>

            <h3 className="impressum-h3">Kontaktformular</h3>
            <p className="impressum-text">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
              wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="impressum-text">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
              Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an
              uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung
              (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
            </p>
            <p className="impressum-text">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur
              Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
              Datenspeicherung entfällt.
            </p>

            <h3 className="impressum-h3">Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p className="impressum-text">
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive
              aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung Ihres
              Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
              Einwilligung weiter.
            </p>
            <p className="impressum-text">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
              Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an
              uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung
              (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
          </div>

          <div className="impressum-block">
            <div className="info-tag">5. Externe Dienste und Inhalte</div>
            <h3 className="impressum-h3">Google Fonts</h3>
            <p className="impressum-text">
              Unsere Website nutzt Google Fonts, um Schriftarten einheitlich darzustellen. Beim Aufruf
              unserer Seite lädt Ihr Browser die benötigten Schriftarten von Servern der Google Ireland
              Limited, Gordon House, Barrow Street, Dublin 4, Irland. Dabei kann es sein, dass Google
              Ihre IP-Adresse und weitere technische Informationen erfasst.
            </p>
            <p className="impressum-text">
              Die genutzten Schriftarten sind: Allura, Tenor Sans, DM Sans und Cormorant Garamond. Die
              Einbindung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
              einer einheitlichen und ansprechenden Darstellung der Website). Sofern für den Zugriff auf
              Informationen im Endgerät eine Einwilligung erforderlich ist, erfolgt die Verarbeitung
              auf Grundlage von § 25 Abs. 1 TTDSG und Art. 6 Abs. 1 lit. a DSGVO.
            </p>
            <p className="impressum-text">
              Weitere Informationen zum Umgang mit Nutzerdaten durch Google finden Sie in der
              Datenschutzerklärung von Google:{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                policies.google.com/privacy
              </a>
              .
            </p>

            <h3 className="impressum-h3">Google Maps</h3>
            <p className="impressum-text">
              Auf unserer Website verlinken wir zu Google Maps-Bewertungen. Beim Anklicken dieses
              Links verlassen Sie unsere Website. Google Maps wird von Google Ireland Limited, Gordon
              House, Barrow Street, Dublin 4, Irland betrieben. Weitere Informationen zum Umgang mit
              Nutzerdaten finden Sie in der Datenschutzerklärung von Google:{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                policies.google.com/privacy
              </a>
              .
            </p>
          </div>

          <div className="impressum-block">
            <div className="info-tag">6. Hinweis zur Aktualisierung</div>
            <p className="impressum-text">
              Diese Datenschutzerklärung wird vor dem Livegang der Website final überprüft und
              ergänzt — insbesondere hinsichtlich der verwendeten Analytics-Tools, Schriftarten,
              Cookie-Banner-Lösung und weiterer eingebundener Drittanbieter. Bei Änderungen der
              Website oder der Rechtslage wird diese Seite entsprechend aktualisiert.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
