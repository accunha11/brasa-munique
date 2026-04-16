"use client"

import { useSearchParams } from "next/navigation"

const aboutCopy = {
  en: {
    titlePrefix: "What is",
    p1: "BRASA (Brazilian Student Association) is a global, student-led nonprofit that connects Brazilians studying and living abroad. Through local BRASA groups at universities around the world, BRASA builds community, promotes professional and academic growth, and helps members stay close to Brazilian culture while navigating life overseas.",
    p2: "BRASA Munique unites Brazilian students from universities in and around Munich. We organize events, mentorship, career support, and cultural activities-creating a local network that supports students from arrival through graduation and beyond.",
  },
  pt: {
    titlePrefix: "O que é",
    p1: "A BRASA (Associação Brasileira de Estudantes) é uma organização global sem fins lucrativos, liderada por estudantes, que conecta brasileiros estudando e vivendo no exterior. Por meio de grupos locais da BRASA em universidades ao redor do mundo, a BRASA fortalece a comunidade, promove crescimento acadêmico e profissional e ajuda seus membros a manterem proximidade com a cultura brasileira enquanto constroem a vida fora do Brasil.",
    p2: "A BRASA Munique une estudantes brasileiros de universidades em Munique e arredores. Organizamos eventos, mentorias, apoio de carreira e atividades culturais, criando uma rede local que acompanha estudantes desde a chegada até a formatura e além.",
  },
  de: {
    titlePrefix: "Was ist",
    p1: "BRASA (Brazilian Student Association) ist eine globale, von Studierenden geführte Non-Profit-Organisation, die Brasilianerinnen und Brasilianer im Ausland vernetzt. Über lokale BRASA-Gruppen an Universitäten weltweit fördert BRASA Gemeinschaft, akademische und berufliche Entwicklung und hilft Mitgliedern, auch fern der Heimat eng mit der brasilianischen Kultur verbunden zu bleiben.",
    p2: "BRASA Munique vereint brasilianische Studierende von Universitäten in München und Umgebung. Wir organisieren Veranstaltungen, Mentoring, Karriereunterstützung und kulturelle Aktivitäten und schaffen so ein lokales Netzwerk, das Studierende von der Ankunft bis weit nach dem Abschluss begleitet.",
  },
} as const

export function AboutSection() {
  const searchParams = useSearchParams()
  const langParam = searchParams.get("lang")
  const lang = langParam === "pt" || langParam === "de" || langParam === "en" ? langParam : "pt"
  const copy = aboutCopy[lang]

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-14 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="space-y-4">
          <h2
            id="about-heading"
            className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {copy.titlePrefix}{" "}
            <span className="font-agrandir-regular font-bold text-brand-green">BRASA</span>?
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base sm:leading-relaxed">
            <p>
              {copy.p1}
            </p>
            <p>{copy.p2}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
