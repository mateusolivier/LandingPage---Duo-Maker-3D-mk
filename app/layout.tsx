import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DuoMaker3D - Impressão 3D Personalizada | Chaveiros, Miniaturas e Brindes",
  description:
    "Feito a dois, camada por camada. Criamos chaveiros, miniaturas de times e brindes personalizados com tecnologia de impressão 3D de alta qualidade. Peça seu orçamento!",
  generator: "v0.app",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider defaultTheme="light" storageKey="duomaker-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
