import { Heart, Sparkles } from "lucide-react"
import Image from "next/image"

export function About() {
  return (
    <section className="py-24 px-4 bg-secondary/20" id="sobre">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Quem Somos</h2>
          <p className="text-xl text-accent font-semibold">DuoMaker 3D</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
              <Heart className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-semibold text-lg">Paixão</h3>
            <p className="text-sm text-muted-foreground">Por tecnologia e criatividade</p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden ring-4 ring-accent/20">
              <Image
                src="/thalita-victor.jpeg"
                alt="Thalita e Victor - Fundadores da DuoMaker 3D"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg">Thalita e Victor</h3>
            <p className="text-sm text-muted-foreground">Um casal empreendedor</p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-semibold text-lg">Inovação</h3>
            <p className="text-sm text-muted-foreground">Em cada projeto</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-center space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Acreditamos que cada ideia merece ganhar forma. Somos Thalita e Victor, um casal apaixonado por tecnologia e
            criatividade, que decidiu transformar nossa curiosidade em um negócio cheio de inovação e personalidade.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Nosso objetivo é simples: tornar o mundo mais colorido e funcional através da impressão 3D, criando produtos
            personalizados para empresas, eventos e momentos especiais. De chaveiros e miniaturas a itens corporativos
            exclusivos, cada peça que produzimos carrega cuidado, qualidade e um toque humano.
          </p>

          <p className="text-xl font-semibold text-foreground mt-8">
            Mais do que impressões, oferecemos experiências: soluções que unem imaginação, praticidade e design.
          </p>

          <p className="text-lg text-accent font-medium italic">Por nós, para você.</p>
        </div>
      </div>
    </section>
  )
}
