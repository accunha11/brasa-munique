import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"
import localFont from "next/font/local"
import { Suspense } from "react"

import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { cn } from "@/lib/utils"

// Icons: use `app/icon.png` + `app/apple-icon.png` (Next injects <link> tags automatically).
export const metadata: Metadata = {
  title: "BRASA Munique",
}

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontAgrandir = localFont({
  src: "../public/assets/Agrandir/Agrandir-GrandHeavy.otf",
  variable: "--font-agrandir",
  display: "swap",
  weight: "800",
  style: "normal",
})

const fontAgrandirRegular = localFont({
  src: "../public/assets/Agrandir/Agrandir-Regular.otf",
  variable: "--font-agrandir-regular",
  display: "swap",
  weight: "400",
  style: "normal",
})


const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        fontSans.variable,
        fontAgrandir.variable,
        fontAgrandirRegular.variable
      )}
    >
      <body>
        <div className="flex min-h-svh flex-col">
          <Suspense fallback={null}>
            <SiteHeader />
          </Suspense>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}
