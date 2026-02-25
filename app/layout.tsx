import React from "react"
import type { Metadata, Viewport } from "next"
import { Source_Serif_4, Inter } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import "./globals.css"

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
  preload: true,
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "Institute of African Studies | University of Ghana",
    template: "%s | Institute of African Studies",
  },
  description:
    "The Institute of African Studies (IAS) at the University of Ghana is a leading research institution dedicated to the study of African societies, cultures, histories, and development.",
  metadataBase: new URL("https://africanstudies.ug"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://africanstudies.ug",
    siteName: "Institute of African Studies",
  },
}

export const viewport: Viewport = {
  themeColor: "#003399",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${sourceSerif.variable} ${inter.variable} font-display antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
