"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"

import { impressumConfig } from "@/lib/impressum-config"
import { legalPageHref } from "@/lib/legal-links"
import { parseLang } from "@/lib/lang"

const pageCopy = {
  en: {
    title: "Legal Notice",
    organization: "Organization",
    legalForm: "Student initiative (informal association)",
    representatives: "Representatives",
    mail: "Email",
    registerNumber: "Association register number",
    roles: { president: "President" },
    liabilityContent: {
      heading: "Liability for content",
      body: "As a service provider, we are responsible for our own content on these pages in accordance with § 7(1) of the German Digital Services Act (DDG) and general laws. Pursuant to §§ 8 to 10 DDG, we are not obliged as a service provider to monitor transmitted or stored third-party information or to investigate circumstances indicating illegal activity. Obligations to remove or block the use of information under general laws remain unaffected. Liability in this regard is only possible from the time we become aware of a specific legal violation. Upon becoming aware of such violations, we will remove the content immediately.",
    },
    liabilityLinks: {
      heading: "Liability for links",
      body: "Our website contains links to external third-party websites whose content we do not control. We therefore cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not identifiable at the time of linking. Permanent monitoring of linked pages without concrete evidence of a legal violation is not reasonable. Upon becoming aware of legal violations, we will remove such links immediately.",
    },
    copyright: {
      heading: "Copyright",
      body: "The content and works created by the site operators on these pages are subject to German copyright law. Reproduction, editing, distribution, and any kind of use outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are permitted for private, non-commercial use only. Where content on this site was not created by the operator, third-party copyrights are respected. Third-party content is marked as such where applicable. Should you nevertheless become aware of a copyright infringement, please notify us. Upon becoming aware of legal violations, we will remove such content immediately.",
    },
    backHome: "Back to home",
  },
  pt: {
    title: "Aviso Legal",
    organization: "Organização",
    legalForm: "Iniciativa estudantil (associação informal)",
    representatives: "Representantes",
    mail: "E-mail",
    registerNumber: "Número de registro da associação",
    roles: { president: "Presidente" },
    liabilityContent: {
      heading: "Responsabilidade pelo conteúdo",
      body: "Como provedor de serviços, somos responsáveis pelo nosso próprio conteúdo nestas páginas, de acordo com o § 7, n.º 1, do Digitale-Dienste-Gesetz (DDG) alemão e com as leis gerais aplicáveis. Nos termos dos §§ 8 a 10 do DDG, não somos obrigados a monitorar informações de terceiros transmitidas ou armazenadas, nem a investigar circunstâncias que indiquem atividade ilegal. As obrigações de remover ou bloquear informações conforme as leis gerais permanecem inalteradas. A responsabilidade neste sentido só é possível a partir do momento em que tomamos conhecimento de uma violação legal concreta. Ao tomarmos conhecimento de tais violações, removeremos o conteúdo imediatamente.",
    },
    liabilityLinks: {
      heading: "Responsabilidade por links",
      body: "Nosso site contém links para sites externos de terceiros, sobre cujo conteúdo não temos controle. Portanto, não podemos assumir responsabilidade por esse conteúdo externo. O respectivo provedor ou operador das páginas vinculadas é sempre responsável pelo seu conteúdo. As páginas vinculadas foram verificadas quanto a possíveis violações legais no momento da vinculação. Não foi possível identificar conteúdo ilegal nesse momento. O monitoramento permanente das páginas vinculadas, sem indícios concretos de violação legal, não é razoável. Ao tomarmos conhecimento de violações legais, removeremos tais links imediatamente.",
    },
    copyright: {
      heading: "Direitos autorais",
      body: "O conteúdo e as obras criadas pelos operadores deste site nestas páginas estão sujeitos à lei alemã de direitos autorais. A reprodução, edição, distribuição e qualquer tipo de uso fora dos limites do direito autoral exigem o consentimento por escrito do respectivo autor ou criador. Downloads e cópias deste site são permitidos apenas para uso privado e não comercial. Quando o conteúdo deste site não foi criado pelo operador, os direitos autorais de terceiros são respeitados. Sempre que aplicável, conteúdos de terceiros são devidamente identificados. Se você tomar conhecimento de uma violação de direitos autorais, pedimos que nos informe. Ao tomarmos conhecimento de violações legais, removeremos tal conteúdo imediatamente.",
    },
    backHome: "Voltar ao início",
  },
  de: {
    title: "Impressum",
    organization: "Organisation",
    legalForm: "Studierendeninitiative (informeller Zusammenschluss)",
    representatives: "Vertreter",
    mail: "Mail",
    registerNumber: "Vereinsregisternummer",
    roles: { president: "Präsidentin" },
    liabilityContent: {
      heading: "Haftung für Inhalte",
      body: "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
    },
    liabilityLinks: {
      heading: "Haftung für Links",
      body: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
    },
    copyright: {
      heading: "Urheberrecht",
      body: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",
    },
    backHome: "Zurück zur Startseite",
  },
} as const

function organizationLine(
  config: typeof impressumConfig,
  legalForm: string,
  registerLabel: string
) {
  const { name, registerNumber } = config.organization
  const base = `${name} — ${legalForm}`
  if (registerNumber) {
    return `${base}. ${registerLabel}: ${registerNumber}`
  }
  return base
}

function formatRepresentatives(
  representatives: typeof impressumConfig.representatives,
  roles: { president: string }
) {
  return representatives
    .map(({ name, role }) => `${name} (${roles[role]})`)
    .join(", ")
}

export function ImpressumContent() {
  const searchParams = useSearchParams()
  const lang = parseLang(searchParams.get("lang"))
  const copy = pageCopy[lang]
  const homeHref = legalPageHref("/", lang, searchParams)

  const { representatives, email } = impressumConfig

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
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground sm:text-lg">
                {copy.organization}
              </h2>
              <p>{organizationLine(impressumConfig, copy.legalForm, copy.registerNumber)}</p>
              <p>
                {copy.representatives}: {formatRepresentatives(representatives, copy.roles)}
              </p>
              <p>
                {copy.mail}:{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-brand-green underline-offset-4 hover:underline"
                >
                  {email}
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-semibold text-foreground sm:text-lg">
                {copy.liabilityContent.heading}
              </h2>
              <p>{copy.liabilityContent.body}</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-semibold text-foreground sm:text-lg">
                {copy.liabilityLinks.heading}
              </h2>
              <p>{copy.liabilityLinks.body}</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-semibold text-foreground sm:text-lg">
                {copy.copyright.heading}
              </h2>
              <p>{copy.copyright.body}</p>
            </div>
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
