import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/ui/Header"
import Footer from "@/components/ui/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Galleria Cerámica",
  description: "Cerámica hecha a mano, desde mi casa de artista.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable}`}>
        <div className="mx-auto min-h-screen bg-[#F5F0E8]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
