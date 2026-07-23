"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { withBasePath } from "@/lib/base-path"
import { parseLang } from "@/lib/lang"
import Link from "next/link"
import { Instagram, Linkedin, Mail } from "lucide-react"
import { useSearchParams } from "next/navigation"

const sectionCopy = {
  en: {
    title: "Meet our Team",
    getInTouch: "Get in touch",
  },
  pt: {
    title: "Conheça nossa equipe",
    getInTouch: "Entre em contato",
  },
  de: {
    title: "Lerne unser Team kennen",
    getInTouch: "Kontakt aufnehmen",
  },
} as const

const boardMembers = [
  {
    name: "Sophie Lundgren",
    avatarAlt: "Sophie Lundgren",
    avatarSrc: "/assets/images/team/Sophie.jpeg",
    title: {
      en: "President",
      pt: "Presidente",
      de: "Präsidentin",
    },
  },
  {
    name: "João Gabriel Bento Alves",
    avatarAlt: "João Gabriel Bento Alves",
    avatarSrc: "/assets/images/team/Joao.jpeg",
    title: {
      en: "Head of Membership",
      pt: "Responsável por Membros",
      de: "Leiter Mitgliedschaft",
    },
  },
  {
    name: "Laura Santos de Quadros",
    avatarAlt: "Laura Santos de Quadros",
    avatarSrc: "/assets/images/team/Laura.JPG",
    title: {
      en: "Head of Academic Events and Legal",
      pt: "Responsável por Eventos Acadêmicos e Jurídico",
      de: "Leiterin Akademische Veranstaltungen & Recht",
    },
  },
  {
    name: "Elisa Lemmermann",
    avatarAlt: "Elisa Lemmermann",
    avatarSrc: "/assets/images/team/Elisa.JPG",
    title: {
      en: "Head of Marketing",
      pt: "Responsável por Marketing",
      de: "Leiterin Marketing",
    },
  },
  {
    name: "Ana Carolina Cunha",
    avatarAlt: "Ana Carolina Cunha",
    avatarSrc: "/assets/images/team/Carol.jpg",
    title: {
      en: "Head of IT",
      pt: "Responsável de TI",
      de: "Leiterin IT",
    },
  },
  {
    name: "Lorena Soares",
    avatarAlt: "Lorena Soares",
    avatarSrc: "/assets/images/team/Lorena.jpeg",
    avatarClassName: "scale-100 object-[50%_20%]",
    title: {
      en: "Academic Events Analyst",
      pt: "Analista de Eventos Acadêmicos",
      de: "Analystin für Akademische Veranstaltungen",
    },
  },
  {
    name: "Laura Fadin",
    avatarAlt: "Laura Fadin",
    avatarSrc: "/assets/images/team/Laura Fadin.jpeg",
    avatarClassName: "scale-100 object-[50%_10%]",
    title: {
      en: "Academic Events Analyst",
      pt: "Analista de Eventos Acadêmicos",
      de: "Analystin für Akademische Veranstaltungen",
    },
  },
  {
    name: "Clara Sarkozy",
    avatarAlt: "Clara Sarkozy",
    avatarSrc: "/assets/images/team/Clara.jpeg",
    title: {
      en: "Head of Events",
      pt: "Responsável por Eventos",
      de: "Leiterin Veranstaltungen",
    },
  },
  {
    name: "Gabriel Lagos",
    avatarAlt: "Gabriel Lagos",
    avatarSrc: "/assets/images/team/Gabriel.jpeg",
    avatarClassName: "scale-105 object-[40%_10%]",
    title: {
      en: "Events Analyst",
      pt: "Analista de Eventos",
      de: "Event-Analyst",
    },
  },
  {
    name: "João Francisco Pinto Oliveira",
    avatarAlt: "João Francisco Pinto Oliveira",
    avatarSrc: "/assets/images/team/JF.jpg",
    title: {
      en: "Events Analyst",
      pt: "Analista de Eventos",
      de: "Event-Analyst",
    },
  },
  {
    name: "Lukas",
    avatarAlt: "Lukas",
    title: {
      en: "Events Analyst",
      pt: "Analista de Eventos",
      de: "Event-Analyst",
    },
  },
] as const

function initialsFromName(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")
}

export function BoardMembersSection() {
  const searchParams = useSearchParams()
  const lang = parseLang(searchParams.get("lang"))
  const copy = sectionCopy[lang]

  return (
    <section
      id="contact"
      aria-labelledby="board-heading"
      className="py-12 sm:py-16"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="space-y-6">
          <h2
            id="board-heading"
            className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {copy.title}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {boardMembers.map((member) => (
              <Card key={member.name} className="bg-card/90">
                <CardContent className="flex flex-col items-center justify-center gap-4 pt-4 text-center">
                  <Avatar size="2xl">
                    {"avatarSrc" in member ? (
                      <AvatarImage
                        src={withBasePath(member.avatarSrc)}
                        alt={member.avatarAlt}
                        className={
                          member.name === "Clara Sarkozy"
                            ? "scale-150 translate-x-4 translate-y-6"
                            : "avatarClassName" in member
                              ? member.avatarClassName
                              : "scale-150"
                        }
                      />
                    ) : null}
                    <AvatarFallback>{initialsFromName(member.name)}</AvatarFallback>
                  </Avatar>

                  <div className="min-w-0 space-y-1">
                    <p className="text-base font-semibold text-foreground">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.title[lang]}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="pt-4 text-center">
            <h3 className="text-lg font-semibold text-foreground">{copy.getInTouch}</h3>
            <div className="mt-3 flex items-center justify-center gap-3">
              <Link
                href="https://www.linkedin.com/company/blmunique/?originalSubdomain=de"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full bg-card text-muted-foreground ring-1 ring-border transition-colors hover:text-foreground"
              >
                <Linkedin className="size-5" aria-hidden="true" />
              </Link>
              <Link
                href="https://www.instagram.com/brasamunique/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full bg-card text-muted-foreground ring-1 ring-border transition-colors hover:text-foreground"
              >
                <Instagram className="size-5" aria-hidden="true" />
              </Link>
              <Link
                href="mailto:munique@brasalocal.org"
                aria-label="Email"
                className="inline-flex size-10 items-center justify-center rounded-full bg-card text-muted-foreground ring-1 ring-border transition-colors hover:text-foreground"
              >
                <Mail className="size-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
