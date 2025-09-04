import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import StoreProvider from "@/components/StoreProvider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "GreenNest Plants - Your Indoor Plant Paradise",
  description: "Discover beautiful houseplants for your home",
  generator: "GreenNest Plants",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <StoreProvider>{children}</StoreProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
