import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Owen Fisher Portfolio - Mathematics, Finance & Technology",
  description:
    "Portfolio of Owen Fisher, a passionate problem-solver at the intersection of mathematics, finance, and technology.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



import './globals.css'