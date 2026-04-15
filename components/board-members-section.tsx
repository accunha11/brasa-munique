"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
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

const boardMembersCopy = {
  en: [
    {
      name: "Ana Carolina Cunha",
      university: "Technical University of Munich",
      fieldOfStudy: "Informatics",
      avatarAlt: "Ana Carolina Cunha",
      avatarSrc: "/assets/images/team/Carol.jpg",
    },
    {
      name: "Clara Sarkozy",
      university: "Technical University of Munich",
      fieldOfStudy: "Architecture",
      avatarAlt: "Clara Sarkozy",
      avatarSrc: "/assets/images/team/Clara.jpeg",
    },
    {
      name: "Elisa Lemmermann",
      university: "Ludwig Maximilian University of Munich",
      fieldOfStudy: "Communication Science",
      avatarAlt: "Elisa Lemmermann",
      avatarSrc: "/assets/images/team/elisa.jpg",
    },
    {
      name: "Giulia Weber Colussi",
      university: "Ludwig Maximilian University of Munich",
      fieldOfStudy: "Business Administration (Specialization in Finance)",
      avatarAlt: "Giulia Weber Colussi",
      avatarSrc: "/assets/images/team/Giulia.jpeg",
    },
    {
      name: "João Gabriel Bento Alves",
      university: "Technical University of Munich",
      fieldOfStudy: "Physics B.Sc.",
      avatarAlt: "João Gabriel Bento Alves",
      avatarSrc: "/assets/images/team/Joao.jpeg",
    },
    {
      name: "Laura Santos de Quadros",
      university: "Ludwig Maximilian University of Munich",
      fieldOfStudy: "Law (Major)",
      avatarAlt: "Laura Santos de Quadros",
      avatarSrc: "/assets/images/team/laura.jpg",
    },
    {
      name: "Luiza Marchetti",
      university: "Ludwig Maximilian University of Munich",
      fieldOfStudy: "Economics",
      avatarAlt: "Luiza Marchetti",
      avatarSrc: "/assets/images/team/Luiza.jpeg",
    },
    {
      name: "Sophie Lundgren",
      university: "Hochschule Fresenius",
      fieldOfStudy: "Business Administration",
      avatarAlt: "Sophie Lundgren",
      avatarSrc: "/assets/images/team/Sophie.jpeg",
    },
  ],
  pt: [
    {
      name: "Ana Carolina Cunha",
      university: "Universidade Técnica de Munique",
      fieldOfStudy: "Informática",
      avatarAlt: "Ana Carolina Cunha",
      avatarSrc: "/assets/images/team/Carol.jpg",
    },
    {
      name: "Clara Sarkozy",
      university: "Universidade Técnica de Munique",
      fieldOfStudy: "Arquitetura",
      avatarAlt: "Clara Sarkozy",
      avatarSrc: "/assets/images/team/Clara.jpeg",
    },
    {
      name: "Elisa Lemmermann",
      university: "Universidade Ludwig Maximilian de Munique",
      fieldOfStudy: "Ciências da Comunicação",
      avatarAlt: "Elisa Lemmermann",
      avatarSrc: "/assets/images/team/elisa.jpg",
    },
    {
      name: "Giulia Weber Colussi",
      university: "Universidade Ludwig Maximilian de Munique",
      fieldOfStudy: "Administração de Empresas (Especialização em Finanças)",
      avatarAlt: "Giulia Weber Colussi",
      avatarSrc: "/assets/images/team/Giulia.jpeg",
    },
    {
      name: "João Gabriel Bento Alves",
      university: "Universidade Técnica de Munique",
      fieldOfStudy: "Física (Bacharelado)",
      avatarAlt: "João Gabriel Bento Alves",
      avatarSrc: "/assets/images/team/Joao.jpeg",
    },
    {
      name: "Laura Santos de Quadros",
      university: "Universidade Ludwig Maximilian de Munique",
      fieldOfStudy: "Direito (Major)",
      avatarAlt: "Laura Santos de Quadros",
      avatarSrc: "/assets/images/team/laura.jpg",
    },
    {
      name: "Luiza Marchetti",
      university: "Universidade Ludwig Maximilian de Munique",
      fieldOfStudy: "Economia",
      avatarAlt: "Luiza Marchetti",
      avatarSrc: "/assets/images/team/Luiza.jpeg",
    },
    {
      name: "Sophie Lundgren",
      university: "Hochschule Fresenius",
      fieldOfStudy: "Administração de Empresas",
      avatarAlt: "Sophie Lundgren",
      avatarSrc: "/assets/images/team/Sophie.jpeg",
    },
  ],
  de: [
    {
      name: "Ana Carolina Cunha",
      university: "Technische Universität München",
      fieldOfStudy: "Informatik",
      avatarAlt: "Ana Carolina Cunha",
      avatarSrc: "/assets/images/team/Carol.jpg",
    },
    {
      name: "Clara Sarkozy",
      university: "Technische Universität München",
      fieldOfStudy: "Architektur",
      avatarAlt: "Clara Sarkozy",
      avatarSrc: "/assets/images/team/Clara.jpeg",
    },
    {
      name: "Elisa Lemmermann",
      university: "Ludwig-Maximilians-Universität München",
      fieldOfStudy: "Kommunikationswissenschaft",
      avatarAlt: "Elisa Lemmermann",
      avatarSrc: "/assets/images/team/elisa.jpg",
    },
    {
      name: "Giulia Weber Colussi",
      university: "Ludwig-Maximilians-Universität München",
      fieldOfStudy: "BWL (Schwerpunkt Finanzen)",
      avatarAlt: "Giulia Weber Colussi",
      avatarSrc: "/assets/images/team/Giulia.jpeg",
    },
    {
      name: "João Gabriel Bento Alves",
      university: "Technische Universität München",
      fieldOfStudy: "Physik (B.Sc.)",
      avatarAlt: "João Gabriel Bento Alves",
      avatarSrc: "/assets/images/team/Joao.jpeg",
    },
    {
      name: "Laura Santos de Quadros",
      university: "Ludwig-Maximilians-Universität München",
      fieldOfStudy: "Jura (Hauptfach)",
      avatarAlt: "Laura Santos de Quadros",
      avatarSrc: "/assets/images/team/laura.jpg",
    },
    {
      name: "Luiza Marchetti",
      university: "Ludwig-Maximilians-Universität München",
      fieldOfStudy: "Volkswirtschaftslehre",
      avatarAlt: "Luiza Marchetti",
      avatarSrc: "/assets/images/team/Luiza.jpeg",
    },
    {
      name: "Sophie Lundgren",
      university: "Hochschule Fresenius",
      fieldOfStudy: "BWL",
      avatarAlt: "Sophie Lundgren",
      avatarSrc: "/assets/images/team/Sophie.jpeg",
    },
  ],
} as const

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
  const langParam = searchParams.get("lang")
  const lang = langParam === "pt" || langParam === "de" || langParam === "en" ? langParam : "en"
  const copy = sectionCopy[lang]
  const boardMembers = boardMembersCopy[lang]

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
                    <AvatarImage
                      src={member.avatarSrc}
                      alt={member.avatarAlt}
                      className={
                        member.name === "Clara Sarkozy"
                          ? "scale-150 translate-x-4 translate-y-6"
                          : member.name === "Luiza Marchetti"
                            ? "scale-150 translate-y-5"
                            : "scale-150"
                      }
                    />
                    <AvatarFallback>{initialsFromName(member.name)}</AvatarFallback>
                  </Avatar>

                  <div className="min-w-0 space-y-1">
                    <p className="text-base font-semibold text-foreground">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.university}</p>
                    <p className="text-sm text-muted-foreground">{member.fieldOfStudy}</p>
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
