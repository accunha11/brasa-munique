import type { Metadata } from "next"
import { Suspense } from "react"

import { ImpressumContent } from "@/components/impressum-content"

export const metadata: Metadata = {
  title: "Impressum | BRASA Munique",
  description:
    "Legal notice and provider information for BRASA Munique pursuant to § 5 DDG.",
}

export default function ImpressumPage() {
  return (
    <Suspense fallback={null}>
      <ImpressumContent />
    </Suspense>
  )
}
