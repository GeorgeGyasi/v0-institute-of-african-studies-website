"use client"

import { useState } from "react"

interface ComingSoonLinkProps {
  href: string
  label: string
}

export function ComingSoonLink({ href, label }: ComingSoonLinkProps) {
  const [showMessage, setShowMessage] = useState(false)

  return (
    <div>
      <a
        href={href}
        onClick={(event) => {
          event.preventDefault()
          setShowMessage(true)
        }}
        className="text-sm leading-relaxed text-primary underline-offset-4 hover:underline"
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
