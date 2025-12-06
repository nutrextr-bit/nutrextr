import type React from "react"
import type { Metadata } from "next"
import { Quicksand, Urbanist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-quicksand" })
const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" })

export const metadata: Metadata = {
  title: "Nutrextr - Iron-Rich Jellies for Healthy Living",
  description:
    "Convenient, effective, and enjoyable iron-rich jellies designed to support healthy hemoglobin levels. Perfect for busy lifestyles.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/oksdh.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/oksdh.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${quicksand.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
