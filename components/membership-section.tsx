"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"

const membershipCopy = {
  en: {
    title: "Membership",
    ctaLabel: "Become a member",
    intro:
      "Join BRASA Munich and be part of a friendly community with great people, fun plans, and real support along the way.",
    whatsappTitle: "WhatsApp groups",
    whatsappBullets: [
      "Main members-only group where we share official BRASA events and updates.",
      "Interest-based groups for things like football, volleyball, crochet, and any new ideas from members.",
      "A place to chat, plan, and jump into what is happening in the community.",
    ],
    eventsTitle: "Members-only events",
    eventsBullets: [
      "From chill hangouts to sports moments like volleyball and Copa BRASA.",
      "Study meetups, watch parties, and other plans throughout the semester.",
    ],
    ticketsPriority:
      "Members also get priority access to tickets for major BRASA Munique events.",
    mentorshipTitle: "Alumni Network",
    mentorshipBody:
      "Get guidance from older students and alumni in your area whenever you need a hand.",
  },
  pt: {
    title: "Membership",
    ctaLabel: "Inscreva-se",
    intro:
      "Entre para a BRASA Munique e faça parte de uma comunidade acolhedora, com gente legal, programas incríveis e apoio de verdade.",
    whatsappTitle: "Grupos no WhatsApp",
    whatsappBullets: [
      "Grupo principal exclusivo para membros, onde divulgamos eventos oficiais e atualizações da BRASA.",
      "Grupos por interesse para futebol, vôlei, crochê e qualquer outra ideia que surgir entre os membros.",
      "Um espaço para conversar, combinar rolês e entrar no clima da comunidade.",
    ],
    eventsTitle: "Eventos exclusivos para membros",
    eventsBullets: [
      "De encontros mais tranquilos a momentos esportivos, como vôlei e Copa BRASA.",
      "Meetups de estudo, watch parties e outros programas ao longo do semestre.",
    ],
    ticketsPriority:
      "Membros também têm prioridade na compra de ingressos para os grandes eventos da BRASA Munique.",
    mentorshipTitle: "Alumni Network",
    mentorshipBody:
      "Conte com apoio de alunos mais velhos e alumni da sua área quando precisar de orientação.",
  },
  de: {
    title: "Membership",
    ctaLabel: "Mitglied werden",
    intro:
      "Werde Teil von BRASA München und erlebe eine offene Community mit tollen Leuten, coolen Plänen und echter Unterstützung.",
    whatsappTitle: "WhatsApp-Gruppen",
    whatsappBullets: [
      "Exklusive Hauptgruppe für Mitglieder mit offiziellen BRASA-Events und Updates.",
      "Interessengruppen für Fußball, Volleyball, Häkeln und neue Ideen aus der Community.",
      "Ein Ort zum Austauschen, Planen und Mitmachen.",
    ],
    eventsTitle: "Exklusive Mitglieder-Events",
    eventsBullets: [
      "Von entspannten Treffen bis zu Sport-Highlights wie Volleyball und Copa BRASA.",
      "Lerntreffen, Watch-Partys und weitere Aktionen im Semester.",
    ],
    ticketsPriority:
      "Mitglieder erhalten außerdem bevorzugten Zugang zu Tickets für größere BRASA-Munique-Events.",
    mentorshipTitle: "Alumni Network",
    mentorshipBody:
      "Erhalte Unterstützung von älteren Studierenden und Alumni aus deinem Fachbereich.",
  },
} as const

export function MembershipSection() {
  const searchParams = useSearchParams()
  const langParam = searchParams.get("lang")
  const lang = langParam === "pt" || langParam === "de" || langParam === "en" ? langParam : "pt"
  const copy = membershipCopy[lang]

  return (
    <section id="community" aria-labelledby="membership-heading" className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2
              id="membership-heading"
              className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {copy.title}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base sm:leading-relaxed">
              {copy.intro}
            </p>
          </div>

          <ul className="space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base sm:leading-relaxed">
            <li className="flex gap-2">
              <span
                aria-hidden="true"
                className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-brand-green"
              />
              <div className="space-y-2">
                <p className="font-semibold text-foreground">{copy.whatsappTitle}</p>
                <ul className="space-y-1.5 pl-5">
                  {copy.whatsappBullets.map((item) => (
                    <li key={item} className="list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className="flex gap-2">
              <span
                aria-hidden="true"
                className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-brand-green"
              />
              <div className="space-y-2">
                <p className="font-semibold text-foreground">{copy.eventsTitle}</p>
                <ul className="space-y-1.5 pl-5">
                  {[...copy.eventsBullets, copy.ticketsPriority].map((item) => (
                    <li key={item} className="list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className="flex gap-2">
              <span
                aria-hidden="true"
                className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-brand-green"
              />
              <div className="space-y-2">
                <p className="font-semibold text-foreground">{copy.mentorshipTitle}</p>
                <ul className="space-y-1.5 pl-5">
                  <li className="list-disc">{copy.mentorshipBody}</li>
                </ul>
              </div>
            </li>
          </ul>

          <div className="pt-2">
            <Link
              href="https://go.orbiapp.io/YhMnWqXwQ1b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-brand-green px-5 text-base font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-green hover:brightness-105 hover:shadow-lg"
            >
              {copy.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
