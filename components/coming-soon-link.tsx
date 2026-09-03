"use client"

import { useState } from "react"

interface ComingSoonLinkProps {
  href: string
  label: string
  variant?: "link" | "button"
}

export function ComingSoonLink({ href, label, variant = "link" }: ComingSoonLinkProps) {
  const [showMessage, setShowMessage] = useState(false)

  const className =
    variant === "button"
      ? "inline-flex items-center gap-2 rounded-md border border-primary/30 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
      : "text-sm leading-relaxed text-primary underline-offset-4 hover:underline"

  return (
    <div>
      <a
        href={href}
        onClick={(event) => {
          event.preventDefault()
          setShowMessage(true)
        }}
        className={className}
      >
        {label}
      </a>
      {showMessage ? (
        <p
          role="status"
          className="mt-1 text-xs font-medium text-secondary"
        >
          This page is coming soon.
        </p>
      ) : null}
    </div>
  )
}
