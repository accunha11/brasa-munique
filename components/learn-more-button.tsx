"use client"

import { cn } from "@/lib/utils"

type LearnMoreButtonProps = {
  label: string
  targetId: string
  className?: string
}

export function LearnMoreButton({ label, targetId, className }: LearnMoreButtonProps) {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId)
    if (!targetElement) {
      return
    }

    targetElement.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-lg px-5 text-base font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg",
        className
      )}
    >
      {label}
    </button>
  )
}
