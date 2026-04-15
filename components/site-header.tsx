"use client"

import Image from "next/image"
import Link from "next/link"
import { Globe } from "lucide-react"
import * as React from "react"
import { usePathname, useSearchParams } from "next/navigation"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const mainNav = [
  { href: "/", labelKey: "home", hash: "" },
  { href: "/", labelKey: "about", hash: "#about" },
  { href: "/", labelKey: "events", hash: "#events" },
  { href: "/", labelKey: "community", hash: "#community" },
  { href: "/", labelKey: "contact", hash: "#contact" },
] as const

const languageNav = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
] as const

const headerCopy = {
  en: {
    home: "Home",
    about: "About",
    events: "Events",
    community: "Community",
    contact: "Contact",
    languageSrOnly: "Language",
  },
  pt: {
    home: "Início",
    about: "Sobre",
    events: "Eventos",
    community: "Comunidade",
    contact: "Contato",
    languageSrOnly: "Idioma",
  },
  de: {
    home: "Startseite",
    about: "Über uns",
    events: "Veranstaltungen",
    community: "Community",
    contact: "Kontakt",
    languageSrOnly: "Sprache",
  },
} as const

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const langParam = searchParams.get("lang")
  const currentLang =
    langParam === "pt" || langParam === "de" || langParam === "en" ? langParam : "en"
  const copy = headerCopy[currentLang]

  const withLang = React.useCallback(
    (href: string, hash = "") => {
      if (href.startsWith("#")) {
        return href
      }

      const next = new URLSearchParams(searchParams.toString())
      next.set("lang", currentLang)
      const query = next.toString()
      return `${href}${query ? `?${query}` : ""}${hash}`
    },
    [searchParams, currentLang]
  )

  const languageHref = React.useCallback(
    (lang: "en" | "pt" | "de") => {
      const next = new URLSearchParams(searchParams.toString())
      next.set("lang", lang)
      const query = next.toString()
      const targetPath = pathname || "/"
      return `${targetPath}${query ? `?${query}` : ""}`
    },
    [pathname, searchParams]
  )

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b backdrop-blur-md transition-colors",
        scrolled
          ? "border-border/0 bg-brand-green/85 text-[var(--background)]"
          : "border-transparent bg-transparent text-white"
      )}
    >
      <div className="flex h-14 w-full items-center justify-between gap-4 pl-2 pr-4 sm:pl-3 sm:pr-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 rounded-md outline-none ring-offset-background transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Image
            src="/logo.png"
            alt="BRASA Munique"
            width={477}
            height={524}
            className="h-9 w-auto object-contain"
            priority
          />
          <span
            className={cn(
              "text-sm font-semibold tracking-tight",
              scrolled ? "text-[var(--background)]" : "text-white"
            )}
          >
            BRASA Munique
          </span>
        </Link>

        {/* One NavigationMenu + one viewport (shadcn docs pattern) — avoids clipped dropdown panels */}
        <NavigationMenu viewport={false} className="max-w-none flex-1 justify-end">
          <NavigationMenuList className="flex-wrap justify-end gap-1">
            {mainNav.map(({ href, labelKey, hash }) => (
              <NavigationMenuItem key={`${href}-${labelKey}`}>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    "group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1",
                    scrolled
                      ? "bg-transparent text-[var(--background)] hover:bg-brand-blue-light/15 focus:bg-brand-blue-light/15 data-popup-open:bg-brand-blue-light/20 data-popup-open:hover:bg-brand-blue-light/20 data-open:bg-brand-blue-light/20 data-open:hover:bg-brand-blue-light/20 data-open:focus:bg-brand-blue-light/20"
                      : "bg-transparent text-white hover:bg-white/10 focus:bg-white/10 data-popup-open:bg-white/15 data-popup-open:hover:bg-white/15 data-open:bg-white/15 data-open:hover:bg-white/15 data-open:focus:bg-white/15"
                  )}
                >
                  <Link href={withLang(href, hash)}>{copy[labelKey]}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "gap-1",
                  scrolled
                    ? "bg-transparent hover:bg-brand-blue-light/15 focus:bg-brand-blue-light/15 data-popup-open:bg-brand-blue-light/20 data-popup-open:hover:bg-brand-blue-light/20 data-open:bg-brand-blue-light/20 data-open:hover:bg-brand-blue-light/20 data-open:focus:bg-brand-blue-light/20"
                    : "bg-transparent text-white hover:bg-white/10 focus:bg-white/10 data-popup-open:bg-white/15 data-popup-open:hover:bg-white/15 data-open:bg-white/15 data-open:hover:bg-white/15 data-open:focus:bg-white/15"
                )}
              >
                <Globe className="size-4" aria-hidden="true" />
                <span className="sr-only">{copy.languageSrOnly}</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="right-0 left-auto w-[88px] md:w-[88px]">
                <ul className="grid w-full gap-1 p-2">
                  {languageNav.map(({ code, label }) => (
                    <li key={code}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={languageHref(code)}
                          className={cn(
                            "justify-center",
                            currentLang === code ? "font-semibold text-brand-green" : ""
                          )}
                        >
                          {label}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
