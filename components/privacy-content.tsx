"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import type { ReactNode } from "react"

import { impressumConfig } from "@/lib/impressum-config"
import { legalPageHref } from "@/lib/legal-links"
import { parseLang, type Lang } from "@/lib/lang"
import { privacyConfig } from "@/lib/privacy-config"

const linkedinPrivacyUrl: Record<Lang, string> = {
  de: "https://de.linkedin.com/legal/privacy-policy",
  en: "https://www.linkedin.com/legal/privacy-policy",
  pt: "https://www.linkedin.com/legal/privacy-policy",
}

const pageCopy = {
  de: {
    title: "Datenschutzerklärung BRASA Munique",
    legalForm: "Studierendeninitiative (informeller Zusammenschluss)",
    emailLabel: "E-Mail",
    lastUpdated: "Juni 2025",
    backHome: "Zurück zur Startseite",
    s1: {
      heading:
        "1. Name und Kontaktdaten des für die Verarbeitung Verantwortlichen",
      intro:
        "Diese Datenschutz-Information gilt für die Datenverarbeitung durch",
    },
    s2: {
      heading:
        "2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck deren Verwendung",
      a: {
        heading: "a) Beim Besuch der Website",
        intro: (url: string) =>
          `Beim Aufrufen der Website ${url} werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:`,
        list: [
          "IP-Adresse des anfragenden Rechners,",
          "Datum und Uhrzeit des Zugriffs,",
          "Name und URL der abgerufenen Datei,",
          "Referrer-URL,",
          "verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers.",
        ],
        purposesIntro: "Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:",
        purposes: [
          "Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,",
          "Gewährleistung einer komfortablen Nutzung unserer Website,",
          "Auswertung der Systemsicherheit und -stabilität sowie",
          "weitere administrative Zwecke.",
        ],
        legalBasis:
          "Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus den oben aufgelisteten Zwecken der Datenerhebung. In keinem Fall verwenden wir die erhobenen Daten zu dem Zweck, Rückschlüsse auf Ihre Person zu ziehen.",
        hostingNote: (provider: string) =>
          `Die Website wird auf ${provider} gehostet. Weitere Informationen finden Sie in der Datenschutzerklärung des Hosting-Anbieters:`,
      },
      b: {
        heading: "b) Bei Kontakt per E-Mail",
        body: (email: string) =>
          `Wenn Sie uns per E-Mail kontaktieren (${email}), verarbeiten wir die von Ihnen mitgeteilten personenbezogenen Daten (z. B. Ihre E-Mail-Adresse, Ihren Namen und den Inhalt Ihrer Nachricht), um Ihre Anfrage zu bearbeiten.`,
        legalBasis:
          "Die Datenverarbeitung erfolgt nach Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage die Mitgliedschaft oder Teilnahme betrifft, ansonsten nach Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unserer berechtigten Interessen an der Beantwortung von Anfragen.",
        retention:
          "Die für die Kontaktaufnahme erhobenen personenbezogenen Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
      },
      c: {
        heading: "c) Bei Mitgliedschaft über Orbi",
        intro:
          "Für die Anmeldung zur Mitgliedschaft bei BRASA Munique verlinken wir auf ein externes Anmeldeformular:",
        outro:
          "Wenn Sie diesen Link nutzen, verlassen Sie unsere Website. Die dort eingegebenen Daten werden von Orbi (orbiapp.io) als eigenständigem Verantwortlichen verarbeitet.",
        legalBasis:
          "Die Datenverarbeitung auf der Orbi-Plattform erfolgt auf Grundlage der dort geltenden Datenschutzbestimmungen und Ihrer dort erteilten Einwilligung. Für den Link auf unserer Website ist Art. 6 Abs. 1 lit. f DSGVO maßgeblich.",
      },
      d: {
        heading: "d) Auf der Website veröffentlichte Daten",
        body: "Wir veröffentlichen auf dieser Website Informationen über Mitglieder unseres Teams (Name, Rolle in der Organisation und Foto) sowie Veranstaltungsfotos aus Community-Events. Diese Veröffentlichungen dienen der Vorstellung unserer Community.",
        legalBasis:
          "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Sie können der Veröffentlichung Ihrer Daten jederzeit widersprechen (siehe Abschnitt 8).",
      },
    },
    s3: {
      heading: "3. Webanalyse",
      body: "Wir setzen auf dieser Website kein Webanalyse-Tool (z. B. Google Analytics) ein und führen kein Nutzerverhalten-Tracking durch.",
    },
    s4: {
      heading: "4. Weitergabe von Daten",
      intro:
        "Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt.",
      listIntro: "Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:",
      list: [
        "Sie nach Art. 6 Abs. 1 lit. a DSGVO Ihre ausdrückliche Einwilligung dazu erteilt haben,",
        "die Weitergabe nach Art. 6 Abs. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben,",
        "für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht, sowie",
        "dies gesetzlich zulässig und nach Art. 6 Abs. 1 lit. b DSGVO für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist.",
      ],
    },
    s5: {
      heading: "5. Drittanbieter",
      social: {
        heading: "a) Social Media",
        body: "Auf unserer Website befinden sich Schaltflächen mit Links zu unseren Social-Media-Seiten. Diese übermitteln Ihre Daten nicht schon beim Besuch unserer Website, sondern erst mit Betätigung der entsprechenden Schaltfläche ggf. an das jeweilige soziale Netzwerk.",
        note: "Wir weisen Sie darauf hin, dass hierbei auch Nutzungsdaten an einen Server in einem Drittland übermittelt werden und somit außerhalb der Europäischen Union verarbeitet werden können. Sofern Sie auf dem verwendeten Endgerät in Ihrem persönlichen Benutzerkonto des jeweiligen Netzwerks eingeloggt sind, kann der Netzwerkbetreiber den Besuch auch Ihrem Konto zuordnen.",
        rightsNote:
          "Die erhobenen personenbezogenen Daten, ihre Verarbeitung sowie die Zwecke der Verarbeitung und Ihre Betroffenenrechte können Sie den vom jeweiligen Betreiber bereitgestellten Informationen entnehmen:",
        instagramLabel: "Für Instagram:",
        linkedinLabel: "Für LinkedIn:",
      },
      orbi: {
        heading: "b) Mitgliedschaft über Orbi",
        body: (domain: string) =>
          `Die Anmeldung zur Mitgliedschaft erfolgt über die externe Plattform Orbi (${domain}). Mit Nutzung des Anmeldeformulars verlassen Sie unsere Website. Die dort eingegebenen Daten werden von Orbi verarbeitet. Bitte beachten Sie die Datenschutzinformationen des jeweiligen Anbieters.`,
      },
    },
    s6: {
      heading: "6. Cookies",
      paragraphs: [
        "Wir setzen auf dieser Website derzeit keine Cookies ein. Es werden weder Session-Cookies noch dauerhafte Cookies zu Analyse-, Marketing- oder Präferenzzwecken gespeichert.",
        "Spracheinstellungen werden über den URL-Parameter (?lang=) übermittelt und nicht in Cookies oder im lokalen Speicher Ihres Endgeräts gespeichert.",
        "Sollten wir künftig Cookies oder vergleichbare Technologien einsetzen, werden wir diese Datenschutzerklärung anpassen und erforderliche Einwilligungen gemäß § 25 TDDDG einholen.",
      ],
    },
    s7: {
      heading: "7. Betroffenenrechte",
      intro: "Sie haben das Recht:",
      list: [
        "gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen;",
        "gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;",
        "gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist;",
        "gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen;",
        "gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen;",
        "gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen, und",
        "gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren. In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes wenden.",
      ],
      authorityIntro: "Zuständige Aufsichtsbehörde für uns ist:",
    },
    s8: {
      heading: "8. Widerspruchsrecht",
      body: "Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben.",
      contactPrefix:
        "Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch machen, genügt eine E-Mail an",
    },
    s9: {
      heading: "9. Datensicherheit",
      paragraphs: [
        "Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-/TLS-Verfahren in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. Ob eine Seite verschlüsselt übertragen wird, erkennen Sie an der geschlossenen Darstellung des Schüssel- beziehungsweise Schloss-Symbols in der Statusleiste Ihres Browsers.",
        "Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.",
      ],
    },
    s10: {
      heading: "10. Aktualität und Änderung dieser Datenschutzerklärung",
      bodyPrefix: "Diese Datenschutzerklärung ist aktuell gültig und hat den Stand",
      bodySuffix:
        "Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf unserer Website unter",
      bodyEnd: "abgerufen werden.",
    },
  },
  en: {
    title: "Privacy Policy — BRASA Munique",
    legalForm: "Student initiative (informal association)",
    emailLabel: "Email",
    lastUpdated: "June 2025",
    backHome: "Back to home",
    s1: {
      heading: "1. Name and contact details of the controller",
      intro: "This privacy notice applies to data processing by",
    },
    s2: {
      heading:
        "2. Collection and storage of personal data and the nature and purpose of its use",
      a: {
        heading: "a) When visiting the website",
        intro: (url: string) =>
          `When you access ${url}, the browser on your device automatically sends information to our website server. This information is temporarily stored in a log file. The following information is collected without any action on your part and stored until automatic deletion:`,
        list: [
          "IP address of the requesting device,",
          "date and time of access,",
          "name and URL of the retrieved file,",
          "referrer URL,",
          "browser used and, where applicable, your operating system and the name of your access provider.",
        ],
        purposesIntro: "We process this data for the following purposes:",
        purposes: [
          "ensuring a smooth connection to the website,",
          "ensuring comfortable use of our website,",
          "assessing system security and stability, and",
          "other administrative purposes.",
        ],
        legalBasis:
          "The legal basis for this processing is Art. 6(1)(f) GDPR. Our legitimate interest follows from the purposes listed above. We never use the collected data to draw conclusions about your identity.",
        hostingNote: (provider: string) =>
          `The website is hosted on ${provider}. Further information is available in the hosting provider's privacy statement:`,
      },
      b: {
        heading: "b) When contacting us by email",
        body: (email: string) =>
          `If you contact us by email (${email}), we process the personal data you provide (such as your email address, name, and message content) to handle your inquiry.`,
        legalBasis:
          "Processing is based on Art. 6(1)(b) GDPR if your inquiry relates to membership or participation; otherwise, it is based on Art. 6(1)(f) GDPR to protect our legitimate interest in responding to inquiries.",
        retention:
          "Personal data collected for contact purposes is deleted once your inquiry has been fully processed, unless statutory retention obligations apply.",
      },
      c: {
        heading: "c) Membership via Orbi",
        intro:
          "To register for BRASA Munique membership, we link to an external registration form:",
        outro:
          "When you use this link, you leave our website. Data entered there is processed by Orbi (orbiapp.io) as an independent controller.",
        legalBasis:
          "Processing on the Orbi platform is governed by Orbi's privacy policy and your consent given there. For the link on our website, Art. 6(1)(f) GDPR applies.",
      },
      d: {
        heading: "d) Data published on this website",
        body: "We publish information about members of our team (name, role within the organization, and photo) as well as event photos from community events to present our community.",
        legalBasis:
          "The legal basis is Art. 6(1)(f) GDPR. You may object to the publication of your data at any time (see Section 8).",
      },
    },
    s3: {
      heading: "3. Web analytics",
      body: "We do not use web analytics tools (such as Google Analytics) on this website and do not track user behavior.",
    },
    s4: {
      heading: "4. Disclosure of data",
      intro:
        "We do not transfer your personal data to third parties for purposes other than those listed below.",
      listIntro: "We only disclose your personal data to third parties if:",
      list: [
        "you have given explicit consent pursuant to Art. 6(1)(a) GDPR,",
        "disclosure is necessary pursuant to Art. 6(1)(f) GDPR to assert, exercise, or defend legal claims and there is no reason to assume you have an overriding legitimate interest in non-disclosure,",
        "disclosure is required by law pursuant to Art. 6(1)(c) GDPR, or",
        "disclosure is legally permitted and required pursuant to Art. 6(1)(b) GDPR for the performance of contractual relationships with you.",
      ],
    },
    s5: {
      heading: "5. Third-party providers",
      social: {
        heading: "a) Social media",
        body: "Our website contains buttons linking to our social media pages. These do not transmit your data when you merely visit our website, but only when you click the respective button, if at all, to the social network.",
        note: "We would like to point out that usage data may be transferred to servers in a third country and may therefore be processed outside the European Union. If you are logged into your personal account on the respective network on your device, the network operator may associate your visit with your account.",
        rightsNote:
          "Information about the personal data collected, its processing, the purposes of processing, and your rights can be found in the information provided by each operator:",
        instagramLabel: "For Instagram:",
        linkedinLabel: "For LinkedIn:",
      },
      orbi: {
        heading: "b) Membership via Orbi",
        body: (domain: string) =>
          `Membership registration takes place via the external Orbi platform (${domain}). When you use the registration form, you leave our website. Data entered there is processed by Orbi. Please refer to the respective provider's privacy information.`,
      },
    },
    s6: {
      heading: "6. Cookies",
      paragraphs: [
        "We currently do not use cookies on this website. Neither session cookies nor persistent cookies are stored for analytics, marketing, or preference purposes.",
        "Language settings are passed via the URL parameter (?lang=) and are not stored in cookies or in your device's local storage.",
        "If we use cookies or similar technologies in the future, we will update this privacy policy and obtain the consent required under § 25 TDDDG (German Telecommunications Digital Services Data Protection Act).",
      ],
    },
    s7: {
      heading: "7. Data subject rights",
      intro: "You have the right:",
      list: [
        "to request access to your personal data processed by us pursuant to Art. 15 GDPR;",
        "to request without undue delay the rectification of inaccurate or the completion of incomplete personal data pursuant to Art. 16 GDPR;",
        "to request erasure of your personal data pursuant to Art. 17 GDPR, unless processing is required to comply with a legal obligation or to assert, exercise, or defend legal claims;",
        "to request restriction of processing pursuant to Art. 18 GDPR;",
        "to receive your personal data in a structured, commonly used, machine-readable format or to request transfer to another controller pursuant to Art. 20 GDPR;",
        "to withdraw consent at any time pursuant to Art. 7(3) GDPR, and",
        "to lodge a complaint with a supervisory authority pursuant to Art. 77 GDPR. As a rule, you may contact the supervisory authority for your habitual place of residence or place of work.",
      ],
      authorityIntro: "The supervisory authority responsible for us is:",
    },
    s8: {
      heading: "8. Right to object",
      body: "If your personal data is processed on the basis of legitimate interests pursuant to Art. 6(1)(f) GDPR, you have the right pursuant to Art. 21 GDPR to object to the processing of your personal data where grounds relating to your particular situation exist.",
      contactPrefix:
        "To exercise your right of withdrawal or objection, please send an email to",
    },
    s9: {
      heading: "9. Data security",
      paragraphs: [
        "During your visit, we use the common SSL/TLS protocol with the highest encryption level supported by your browser. You can recognize encrypted transmission by the closed padlock symbol in your browser's status bar.",
        "We also use appropriate technical and organizational measures to protect your data against accidental or intentional manipulation, partial or complete loss, destruction, or unauthorized access by third parties.",
      ],
    },
    s10: {
      heading: "10. Updates to this privacy policy",
      bodyPrefix: "This privacy policy is currently valid as of",
      bodySuffix:
        "We may update it as our website develops or as legal requirements change. The current version is always available on our website at",
      bodyEnd: ".",
    },
  },
  pt: {
    title: "Política de Privacidade — BRASA Munique",
    legalForm: "Iniciativa estudantil (associação informal)",
    emailLabel: "E-mail",
    lastUpdated: "junho de 2025",
    backHome: "Voltar ao início",
    s1: {
      heading: "1. Nome e dados de contato do responsável",
      intro: "Esta política de privacidade aplica-se ao tratamento de dados realizado por",
    },
    s2: {
      heading:
        "2. Coleta e armazenamento de dados pessoais, bem como natureza e finalidade de uso",
      a: {
        heading: "a) Ao visitar o site",
        intro: (url: string) =>
          `Ao acessar ${url}, o navegador do seu dispositivo envia automaticamente informações ao servidor do nosso site. Essas informações são temporariamente armazenadas em um arquivo de log. As seguintes informações são coletadas sem qualquer ação da sua parte e armazenadas até a exclusão automática:`,
        list: [
          "endereço IP do dispositivo solicitante,",
          "data e hora do acesso,",
          "nome e URL do arquivo acessado,",
          "URL de referência,",
          "navegador utilizado e, quando aplicável, sistema operacional e provedor de acesso.",
        ],
        purposesIntro: "Processamos esses dados para as seguintes finalidades:",
        purposes: [
          "garantir uma conexão estável com o site,",
          "garantir o uso confortável do nosso site,",
          "avaliar a segurança e a estabilidade do sistema e",
          "outras finalidades administrativas.",
        ],
        legalBasis:
          "A base legal para esse tratamento é o Art. 6.º, n.º 1, alínea f), do RGPD. O nosso interesse legítimo decorre das finalidades listadas acima. Em nenhum caso utilizamos os dados coletados para tirar conclusões sobre a sua identidade.",
        hostingNote: (provider: string) =>
          `O site é hospedado no ${provider}. Mais informações estão disponíveis na declaração de privacidade do provedor de hospedagem:`,
      },
      b: {
        heading: "b) Ao entrar em contato por e-mail",
        body: (email: string) =>
          `Se você entrar em contato conosco por e-mail (${email}), tratamos os dados pessoais fornecidos (como endereço de e-mail, nome e conteúdo da mensagem) para responder à sua solicitação.`,
        legalBasis:
          "O tratamento baseia-se no Art. 6.º, n.º 1, alínea b), do RGPD quando a solicitação estiver relacionada à associação ou participação; caso contrário, baseia-se no Art. 6.º, n.º 1, alínea f), do RGPD, com fundamento no nosso interesse legítimo em responder às solicitações.",
        retention:
          "Os dados pessoais coletados para contato são excluídos após o encerramento da solicitação, salvo se houver obrigações legais de retenção.",
      },
      c: {
        heading: "c) Associação via Orbi",
        intro:
          "Para se associar à BRASA Munique, disponibilizamos um link para um formulário externo:",
        outro:
          "Ao utilizar este link, você sai do nosso site. Os dados inseridos lá são tratados pela Orbi (orbiapp.io) como controladora independente.",
        legalBasis:
          "O tratamento na plataforma Orbi rege-se pela política de privacidade da Orbi e pelo consentimento fornecido nesse ambiente. Para o link em nosso site, aplica-se o Art. 6.º, n.º 1, alínea f), do RGPD.",
      },
      d: {
        heading: "d) Dados publicados neste site",
        body: "Publicamos informações sobre membros da nossa equipe (nome, cargo na organização e foto), bem como fotos de eventos comunitários, para apresentar a nossa comunidade.",
        legalBasis:
          "A base legal é o Art. 6.º, n.º 1, alínea f), do RGPD. Você pode opor-se à publicação dos seus dados a qualquer momento (ver Seção 8).",
      },
    },
    s3: {
      heading: "3. Análise web",
      body: "Não utilizamos ferramentas de análise web (como o Google Analytics) neste site e não rastreamos o comportamento dos usuários.",
    },
    s4: {
      heading: "4. Compartilhamento de dados",
      intro:
        "Não transferimos os seus dados pessoais a terceiros para finalidades além das listadas abaixo.",
      listIntro: "Só compartilhamos os seus dados pessoais com terceiros se:",
      list: [
        "você tiver dado consentimento explícito nos termos do Art. 6.º, n.º 1, alínea a), do RGPD,",
        "a divulgação for necessária nos termos do Art. 6.º, n.º 1, alínea f), do RGPD para exercer ou defender direitos legais, e não houver motivo para supor que você tenha interesse legítimo prevalecente na não divulgação,",
        "houver obrigação legal nos termos do Art. 6.º, n.º 1, alínea c), do RGPD, ou",
        "for legalmente permitido e necessário nos termos do Art. 6.º, n.º 1, alínea b), do RGPD para relações contratuais com você.",
      ],
    },
    s5: {
      heading: "5. Provedores terceiros",
      social: {
        heading: "a) Redes sociais",
        body: "Nosso site contém botões com links para as nossas páginas em redes sociais. Eles não transmitem os seus dados apenas pela visita ao site, mas somente quando você clica no respectivo botão, se for o caso, para a rede social.",
        note: "Ressaltamos que dados de uso podem ser transferidos para servidores em países terceiros e, portanto, processados fora da União Europeia. Se você estiver conectado à sua conta pessoal na rede em seu dispositivo, o operador poderá associar a visita à sua conta.",
        rightsNote:
          "Informações sobre os dados pessoais coletados, o seu tratamento, as finalidades e os seus direitos estão disponíveis nas informações fornecidas por cada operador:",
        instagramLabel: "Para o Instagram:",
        linkedinLabel: "Para o LinkedIn:",
      },
      orbi: {
        heading: "b) Associação via Orbi",
        body: (domain: string) =>
          `O cadastro de membros ocorre pela plataforma externa Orbi (${domain}). Ao usar o formulário de inscrição, você sai do nosso site. Os dados inseridos são tratados pela Orbi. Consulte a política de privacidade do respectivo provedor.`,
      },
    },
    s6: {
      heading: "6. Cookies",
      paragraphs: [
        "Atualmente não utilizamos cookies neste site. Nenhum cookie de sessão ou persistente é armazenado para fins de análise, marketing ou preferências.",
        "As configurações de idioma são transmitidas pelo parâmetro de URL (?lang=) e não são armazenadas em cookies ou no armazenamento local do seu dispositivo.",
        "Se passarmos a utilizar cookies ou tecnologias similares, atualizaremos esta política e obteremos o consentimento exigido pelo § 25 TDDDG (lei alemã de proteção de dados em telecomunicações e serviços digitais).",
      ],
    },
    s7: {
      heading: "7. Direitos dos titulares",
      intro: "Você tem os seguintes direitos:",
      list: [
        "solicitar acesso aos seus dados pessoais tratados por nós, nos termos do Art. 15.º do RGPD;",
        "solicitar, sem demora indevida, a retificação de dados inexatos ou a complementação de dados incompletos, nos termos do Art. 16.º do RGPD;",
        "solicitar a exclusão dos seus dados pessoais, nos termos do Art. 17.º do RGPD, salvo se o tratamento for necessário para cumprir uma obrigação legal ou para exercer ou defender direitos legais;",
        "solicitar a limitação do tratamento, nos termos do Art. 18.º do RGPD;",
        "receber os seus dados pessoais em formato estruturado, de uso corrente e leitura automática, ou solicitar a transferência a outro responsável, nos termos do Art. 20.º do RGPD;",
        "revogar o consentimento a qualquer momento, nos termos do Art. 7.º, n.º 3, do RGPD, e",
        "apresentar reclamação a uma autoridade de supervisão, nos termos do Art. 77.º do RGPD. Em regra, você pode contatar a autoridade do local da sua residência habitual ou do seu local de trabalho.",
      ],
      authorityIntro: "A autoridade de supervisão competente para nós é:",
    },
    s8: {
      heading: "8. Direito de oposição",
      body: "Se os seus dados pessoais forem tratados com base em interesses legítimos nos termos do Art. 6.º, n.º 1, alínea f), do RGPD, você tem o direito de se opor ao tratamento nos termos do Art. 21.º do RGPD, por motivos relacionados à sua situação particular.",
      contactPrefix: "Para exercer o seu direito de revogação ou oposição, envie um e-mail para",
    },
    s9: {
      heading: "9. Segurança de dados",
      paragraphs: [
        "Durante a visita, utilizamos o protocolo SSL/TLS comum, com o mais alto nível de criptografia suportado pelo seu navegador. A transmissão criptografada é indicada pelo ícone de cadeado fechado na barra do navegador.",
        "Também adotamos medidas técnicas e organizacionais adequadas para proteger os seus dados contra manipulação acidental ou intencional, perda parcial ou total, destruição ou acesso não autorizado por terceiros.",
      ],
    },
    s10: {
      heading: "10. Atualizações desta política de privacidade",
      bodyPrefix: "Esta política de privacidade está em vigor desde",
      bodySuffix:
        "Podemos atualizá-la conforme o site evolui ou os requisitos legais mudam. A versão atual está sempre disponível em nosso site, em",
      bodyEnd: ".",
    },
  },
} as const

function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-base font-semibold text-foreground sm:text-lg">{heading}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  )
}

function SubSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div className="space-y-2">
      <h3 className="font-medium text-foreground">{heading}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="list-inside list-disc space-y-1">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export function PrivacyContent() {
  const searchParams = useSearchParams()
  const lang = parseLang(searchParams.get("lang"))
  const copy = pageCopy[lang]
  const homeHref = legalPageHref("/", lang, searchParams)

  const { organization, email } = impressumConfig
  const { websiteUrl, hosting, supervisoryAuthority, externalServices } = privacyConfig

  const orgLine = `${organization.name} — ${copy.legalForm}`
  const privacyPageUrl = `${websiteUrl}/datenschutz/`

  return (
    <section className="scroll-mt-14 py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="space-y-8">
          <header>
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {copy.title}
            </h1>
          </header>

          <div className="space-y-6 text-sm leading-relaxed text-foreground sm:text-base">
            <Section heading={copy.s1.heading}>
              <p>{copy.s1.intro}</p>
              <p>
                {orgLine}
                <br />
                {copy.emailLabel}:{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-brand-green underline-offset-4 hover:underline"
                >
                  {email}
                </a>
              </p>
            </Section>

            <Section heading={copy.s2.heading}>
              <SubSection heading={copy.s2.a.heading}>
                <p>{copy.s2.a.intro(websiteUrl)}</p>
                <BulletList items={copy.s2.a.list} />
                <p>{copy.s2.a.purposesIntro}</p>
                <BulletList items={copy.s2.a.purposes} />
                <p>{copy.s2.a.legalBasis}</p>
                <p>
                  {copy.s2.a.hostingNote(hosting.service)}{" "}
                  <a
                    href={hosting.privacyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-green underline-offset-4 hover:underline"
                  >
                    {hosting.privacyUrl.replace(/^https?:\/\//, "")}
                  </a>
                </p>
              </SubSection>

              <SubSection heading={copy.s2.b.heading}>
                <p>{copy.s2.b.body(email)}</p>
                <p>{copy.s2.b.legalBasis}</p>
                <p>{copy.s2.b.retention}</p>
              </SubSection>

              <SubSection heading={copy.s2.c.heading}>
                <p>
                  {copy.s2.c.intro}{" "}
                  <a
                    href={externalServices.orbi.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-green underline-offset-4 hover:underline"
                  >
                    {externalServices.orbi.url}
                  </a>
                  . {copy.s2.c.outro}
                </p>
                <p>{copy.s2.c.legalBasis}</p>
              </SubSection>

              <SubSection heading={copy.s2.d.heading}>
                <p>{copy.s2.d.body}</p>
                <p>{copy.s2.d.legalBasis}</p>
              </SubSection>
            </Section>

            <Section heading={copy.s3.heading}>
              <p>{copy.s3.body}</p>
            </Section>

            <Section heading={copy.s4.heading}>
              <p>{copy.s4.intro}</p>
              <p>{copy.s4.listIntro}</p>
              <BulletList items={copy.s4.list} />
            </Section>

            <Section heading={copy.s5.heading}>
              <SubSection heading={copy.s5.social.heading}>
                <p>{copy.s5.social.body}</p>
                <p>{copy.s5.social.note}</p>
                <p>{copy.s5.social.rightsNote}</p>
                <p className="font-medium">{copy.s5.social.instagramLabel}</p>
                <p>
                  {externalServices.instagram.provider}
                  <br />
                  {externalServices.instagram.providerAddress}
                  <br />
                  <a
                    href={externalServices.instagram.privacyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-green underline-offset-4 hover:underline"
                  >
                    {externalServices.instagram.privacyUrl.replace(/^https?:\/\//, "")}
                  </a>
                </p>
                <p className="font-medium">{copy.s5.social.linkedinLabel}</p>
                <p>
                  {externalServices.linkedin.provider}
                  <br />
                  {externalServices.linkedin.providerAddress}
                  <br />
                  <a
                    href={linkedinPrivacyUrl[lang]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-green underline-offset-4 hover:underline"
                  >
                    {linkedinPrivacyUrl[lang].replace(/^https?:\/\//, "")}
                  </a>
                </p>
              </SubSection>

              <SubSection heading={copy.s5.orbi.heading}>
                <p>{copy.s5.orbi.body(externalServices.orbi.domain)}</p>
              </SubSection>
            </Section>

            <Section heading={copy.s6.heading}>
              {copy.s6.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Section>

            <Section heading={copy.s7.heading}>
              <p>{copy.s7.intro}</p>
              <BulletList items={copy.s7.list} />
              <p>{copy.s7.authorityIntro}</p>
              <p>
                {supervisoryAuthority.name}
                <br />
                {supervisoryAuthority.address}
                <br />
                <a
                  href={supervisoryAuthority.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-green underline-offset-4 hover:underline"
                >
                  {supervisoryAuthority.website.replace(/^https?:\/\//, "")}
                </a>
              </p>
            </Section>

            <Section heading={copy.s8.heading}>
              <p>{copy.s8.body}</p>
              <p>
                {copy.s8.contactPrefix}{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-brand-green underline-offset-4 hover:underline"
                >
                  {email}
                </a>
                .
              </p>
            </Section>

            <Section heading={copy.s9.heading}>
              {copy.s9.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Section>

            <Section heading={copy.s10.heading}>
              <p>
                {copy.s10.bodyPrefix} {copy.lastUpdated}. {copy.s10.bodySuffix}{" "}
                <a
                  href={privacyPageUrl}
                  className="text-brand-green underline-offset-4 hover:underline"
                >
                  {privacyPageUrl.replace(/^https?:\/\//, "")}
                </a>
                {lang === "de" ? ` ${copy.s10.bodyEnd}` : `${copy.s10.bodyEnd}`}
              </p>
            </Section>
          </div>

          <div>
            <Link
              href={homeHref}
              className="text-sm font-medium text-brand-green underline-offset-4 hover:underline"
            >
              ← {copy.backHome}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
