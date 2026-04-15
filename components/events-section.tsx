"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { withBasePath } from "@/lib/base-path"

const eventsCopy = {
  en: {
    title: "Events",
    intro:
      "Our chapter is known for bringing people together through unforgettable cultural celebrations and community moments.",
    bullets: [
      "Our Halloween parties are a chapter favorite, with themed nights, costumes, and a lot of Brazilian energy.",
      "Festa Junina is one of our highlights, celebrating Brazilian traditions with music, food, and community.",
      "We also host members-only events to hang out, get to know each other better, and build real friendships.",
      "From casual volleyball meetups to Copa BRASA, we create spaces where students can connect through sports and fun.",
    ],
  },
  pt: {
    title: "Eventos",
    intro:
      "Nosso capítulo é conhecido por unir as pessoas por meio de celebrações culturais inesquecíveis e momentos de convivência.",
    bullets: [
      "Nossas festas de Halloween são uma das favoritas do capítulo, com noites temáticas, fantasias e muita energia brasileira.",
      "A Festa Junina é um dos nossos destaques, celebrando tradições brasileiras com música, comida e comunidade.",
      "Também organizamos eventos exclusivos para membros para confraternizar, nos conhecermos melhor e fortalecer amizades reais.",
      "De encontros casuais de vôlei até a Copa BRASA, criamos espaços em que estudantes se conectam por meio do esporte e da diversão.",
    ],
  },
  de: {
    title: "Veranstaltungen",
    intro:
      "Unser Chapter ist dafür bekannt, Menschen durch unvergessliche kulturelle Feiern und Gemeinschaftsmomente zusammenzubringen.",
    bullets: [
      "Unsere Halloween-Partys gehören zu den Favoriten im Chapter: Themenabende, Kostüme und viel brasilianische Energie.",
      "Die Festa Junina ist eines unserer Highlights und feiert brasilianische Traditionen mit Musik, Essen und Gemeinschaft.",
      "Außerdem organisieren wir exklusive Mitglieder-Events, um Zeit miteinander zu verbringen, uns besser kennenzulernen und echte Freundschaften aufzubauen.",
      "Von lockeren Volleyball-Treffen bis zur Copa BRASA schaffen wir Räume, in denen sich Studierende durch Sport und Spaß vernetzen können.",
    ],
  },
} as const

export function EventsSection() {
  const searchParams = useSearchParams()
  const langParam = searchParams.get("lang")
  const lang = langParam === "pt" || langParam === "de" || langParam === "en" ? langParam : "pt"
  const copy = eventsCopy[lang]
  const [photos, setPhotos] = React.useState<string[]>([])
  const autoplay = React.useRef(
    Autoplay({
      delay: 4500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  )

  React.useEffect(() => {
    let isMounted = true

    async function loadPhotos() {
      try {
        const response = await fetch(withBasePath("/assets/images/events/photos.json"))
        if (!response.ok) {
          return
        }

        const data: { photos?: string[] } = await response.json()
        if (isMounted && Array.isArray(data.photos)) {
          setPhotos(data.photos.map((photo) => withBasePath(photo)))
        }
      } catch {
        // Keep placeholders if loading fails.
      }
    }

    void loadPhotos()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section id="events" aria-labelledby="events-heading" className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
          <div className="space-y-5">
            <h2
              id="events-heading"
              className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {copy.title}
            </h2>

            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base sm:leading-relaxed">
              {copy.intro}
            </p>

            <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base sm:leading-relaxed">
              {copy.bullets.map((item) => (
                <li key={item} className="flex gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-brand-green"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full px-4 lg:px-6">
            <Carousel opts={{ loop: true }} plugins={[autoplay.current]} className="w-full">
              <CarouselContent>
                {(photos.length > 0 ? photos : [withBasePath("/assets/images/events/placeholder-1")]).map(
                  (photo, index) => (
                  <CarouselItem key={`${photo}-${index}`}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                      {photos.length > 0 ? (
                        <Image
                          src={photo}
                          alt={`BRASA Munich event photo ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 400px, 100vw"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center p-6 text-center">
                          <p className="text-sm text-muted-foreground sm:text-base">
                            Add photos to public/assets/images/events
                          </p>
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                )
                )}
              </CarouselContent>
              <CarouselPrevious className="bg-background/90" />
              <CarouselNext className="bg-background/90" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
