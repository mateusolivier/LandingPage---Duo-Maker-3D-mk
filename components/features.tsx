import { Box, Palette, Zap, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Box,
    title: "Impressão de Alta Qualidade",
    description: "Tecnologia de ponta para resultados perfeitos em cada detalhe",
  },
  {
    icon: Palette,
    title: "Personalização Total",
    description: "Cores, tamanhos e designs exclusivos para seu projeto",
  },
  {
    icon: Zap,
    title: "Entrega Rápida",
    description: "Produção ágil sem comprometer a qualidade",
  },
  {
    icon: Heart,
    title: "Presentes Únicos",
    description: "Crie brindes e presentes que realmente marcam",
  },
]

export function Features() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Por que escolher nossos serviços?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Qualidade, criatividade e tecnologia em cada impressão
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card"
            >
              <CardContent className="pt-8 pb-6 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
