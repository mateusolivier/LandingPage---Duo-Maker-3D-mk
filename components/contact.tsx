import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram, Mail } from "lucide-react"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

export function Contact() {
  return (
    <section className="py-24 px-4 bg-primary text-primary-foreground" id="contato">
      <div className="container mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-balance">Pronto para criar algo incrível?</h2>
        <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90 text-pretty leading-relaxed">
          Entre em contato agora e transforme suas ideias em realidade com impressão 3D de alta qualidade
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
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
              WhatsApp
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 bg-transparent"
            asChild
          >
            <a href="https://instagram.com/duomaker_3d" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" />
              Instagram
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 bg-transparent"
            asChild
          >
            <a href="https://www.tiktok.com/@duomaker3d" target="_blank" rel="noopener noreferrer">
              <TikTokIcon className="mr-2 h-5 w-5" />
              TikTok
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-3 text-primary-foreground/90 pt-8">
          <Mail className="h-5 w-5" />
          <a
            href="https://mail.google.com/mail/?view=cm&to=duomakerd3@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            duomakerd3@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
