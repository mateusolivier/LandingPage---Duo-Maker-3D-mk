"use client"

import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function Header() {
  return (
    // Cabeçalho fixo no topo da página com efeito de blur
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo da empresa */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="DuoMaker3D" width={120} height={40} className="h-10 w-auto" />
        </div>

        {/* Menu de navegação (oculto em mobile) */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#sobre" className="text-sm font-medium hover:text-accent transition-colors">
            Sobre
          </a>
          <a href="#kits" className="text-sm font-medium hover:text-accent transition-colors">
            Kits 3D
          </a>
          <a href="#precos" className="text-sm font-medium hover:text-accent transition-colors">
            Preços
          </a>
          <a href="#contato" className="text-sm font-medium hover:text-accent transition-colors">
            Contato
          </a>
        </nav>

        {/* Botões de ação: toggle de tema e orçamento */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <a
              href="https://wa.me/5584999888796?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20fazer%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Orçamento
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
