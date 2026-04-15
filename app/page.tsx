import { Suspense } from "react"

import { AboutSection } from "@/components/about-section"
import { BoardMembersSection } from "@/components/board-members-section"
import { EventsSection } from "@/components/events-section"
import { HeroSection } from "@/components/hero-section"
import { MembershipSection } from "@/components/membership-section"

export default function Page() {
  return (
    <div className="flex flex-col">
      <Suspense fallback={null}>
        <HeroSection />
      </Suspense>

      <div id="content-start" className="scroll-mt-14" />

      <Suspense fallback={null}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={null}>
        <EventsSection />
      </Suspense>

      <Suspense fallback={null}>
        <MembershipSection />
      </Suspense>

      <Suspense fallback={null}>
        <BoardMembersSection />
      </Suspense>
    </div>
  )
}
