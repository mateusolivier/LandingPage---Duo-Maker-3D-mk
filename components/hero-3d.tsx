"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram } from "lucide-react"
import Image from "next/image"

export function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar tamanho do canvas
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Array para armazenar as partículas animadas
    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }> = []

    // Criar 50 partículas com posições e velocidades aleatórias
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: Math.random() > 0.5 ? "#ef4444" : "#1e293b", // Vermelho ou azul escuro
      })
    }

    // Função de animação das partículas
    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Desenhar e mover cada partícula
      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Atualizar posição
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Inverter direção ao atingir as bordas
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Redimensionar canvas quando a janela mudar de tamanho
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    // Seção hero com altura total da tela
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />

      {/* Canvas com partículas animadas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />

      {/* Conteúdo principal */}
      <div className="container relative z-10 px-4 py-32 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="DuoMaker3D Logo"
              width={300}
              height={300}
              className="w-40 md:w-52 h-auto"
              priority
            />
          </div>

          {/* Badge com slogan */}
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm mb-4 animate-fade-in border border-accent/20">
            Feito a dois, camada por camada
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Transforme suas ideias em <span className="text-accent">realidade 3D</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Criamos chaveiros, miniaturas e brindes personalizados com tecnologia de impressão 3D de alta qualidade
          </p>

          {/* Botões de call-to-action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            {/* Botão para fazer pedido via WhatsApp */}
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a
                href="https://wa.me/5584999888796?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20fazer%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Faça seu Pedido
              </a>
            </Button>

            {/* Botão para seguir no Instagram */}
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 bg-transparent"
              asChild
            >
              <a href="https://instagram.com/duomaker_3d" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                Siga no Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Gradiente de transição na parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
