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
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon.ico" },
    ],
    apple: "/favicon/apple-touch-icon.png",
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
