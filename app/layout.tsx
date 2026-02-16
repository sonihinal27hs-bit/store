import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Shree Ganesh Jewellers — Handcrafted Fine Jewellery",
    template: "%s | Shree Ganesh Jewellers",
  },
  description:
    "Discover timeless, handcrafted fine jewellery. Ethically sourced rings, necklaces, earrings & bracelets designed to be cherished for generations. Free shipping over ₹5,000.",
  keywords:
    "jewellery, fine jewellery, handcrafted jewellery, gold rings, diamond necklaces, earrings, bracelets, luxury jewellery India, ethical jewellery",
  authors: [{ name: "Shree Ganesh Jewellers" }],
  creator: "Shree Ganesh Jewellers",
  publisher: "Shree Ganesh Jewellers",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Shree Ganesh Jewellers — Handcrafted Fine Jewellery",
    description:
      "Timeless elegance, ethically crafted. Explore our collections of rings, necklaces, earrings & bracelets.",
    siteName: "Shree Ganesh Jewellers",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
