"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import * as React from "react"

import { legalPageHref } from "@/lib/legal-links"
import { parseLang } from "@/lib/lang"

const footerCopy = {
  en: {
    impressum: "Legal Notice",
    privacy: "Privacy Policy",
    tagline: "BRASA Munique — Brazilian Student Association",
  },
  pt: {
    impressum: "Aviso Legal",
    privacy: "Privacidade",
    tagline: "BRASA Munique — Associação Brasileira de Estudantes",
  },
  de: {
    impressum: "Impressum",
    privacy: "Datenschutz",
    tagline: "BRASA Munique — Brazilian Student Association",
  },
} as const

export function SiteFooter() {
  const searchParams = useSearchParams()
  const lang = parseLang(searchParams.get("lang"))
  const copy = footerCopy[lang]

  const impressumHref = React.useMemo(
    () => legalPageHref("/impressum", lang, searchParams),
    [lang, searchParams]
  )

  const privacyHref = React.useMemo(
    () => legalPageHref("/datenschutz", lang, searchParams),
    [lang, searchParams]
  )

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-muted-foreground sm:flex-row">
        <p>{copy.tagline}</p>
        <nav aria-label="Legal" className="flex items-center gap-4">
          <Link
            href={privacyHref}
            className="font-medium text-foreground underline-offset-4 transition-colors hover:text-brand-green hover:underline"
          >
            {copy.privacy}
          </Link>
          <Link
            href={impressumHref}
            className="font-medium text-foreground underline-offset-4 transition-colors hover:text-brand-green hover:underline"
          >
            {copy.impressum}
          </Link>
        </nav>
      </div>
    </footer>
  )
}
