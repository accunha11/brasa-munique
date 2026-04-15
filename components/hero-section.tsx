"use client"

import { useSearchParams } from "next/navigation"

import { LearnMoreButton } from "@/components/learn-more-button"

const heroCopy = {
  en: {
    welcome: "Welcome to",
    subtitle: "Where Brazilian students from universities in and around Munich come together",
    learnMore: "Learn More",
  },
  pt: {
    welcome: "Bem-vindo a",
    subtitle: "Onde estudantes brasileiros de universidades em Munique e regiao se conectam",
    learnMore: "Saiba mais",
  },
  de: {
    welcome: "Willkommen bei",
    subtitle: "Wo brasilianische Studierende von Universitaten in und um Munchen zusammenkommen",
    learnMore: "Mehr erfahren",
  },
} as const

export function HeroSection() {
  const searchParams = useSearchParams()
  const langParam = searchParams.get("lang")
  const lang: keyof typeof heroCopy =
    langParam === "pt" || langParam === "de" || langParam === "en" ? langParam : "en"
  const copy = heroCopy[lang]

  return (
    <section
      className="-mt-14 flex min-h-screen flex-col items-center justify-center bg-brand-green px-6 pb-12 pt-20 sm:pb-16 sm:pt-24 md:pb-20 md:pt-28"
      aria-label="BRASA Munique"
    >
      <h1 className="flex flex-col items-center gap-1 text-balance text-center sm:gap-2">
        <span className="font-agrandir text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
          {copy.welcome}
        </span>
        <span className="font-agrandir inline-block text-6xl leading-none font-extrabold tracking-tight text-brand-yellow sm:text-7xl md:text-8xl lg:text-9xl">
          BRASA
        </span>
        <span className="font-agrandir text-2xl font-semibold tracking-wide text-brand-yellow sm:text-3xl md:text-4xl lg:text-5xl">
          Munique
        </span>
      </h1>
      <div className="mt-6 flex w-full max-w-2xl flex-col items-start">
        <p className="text-left font-sans text-lg leading-relaxed text-white sm:text-xl md:text-2xl">
          {copy.subtitle}
        </p>
        <LearnMoreButton
          label={copy.learnMore}
          targetId="content-start"
          className="mt-5 bg-brand-yellow text-brand-green hover:bg-brand-yellow"
        />
      </div>
    </section>
  )
}
