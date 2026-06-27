import type { Metadata } from "next"
import { Suspense } from "react"

import { PrivacyContent } from "@/components/privacy-content"

export const metadata: Metadata = {
  title: "Datenschutz | BRASA Munique",
  description:
    "Privacy policy for BRASA Munique pursuant to GDPR and TDDDG.",
}

export default function DatenschutzPage() {
  return (
    <Suspense fallback={null}>
      <PrivacyContent />
    </Suspense>
  )
}
