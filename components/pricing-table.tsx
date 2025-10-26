import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const pricingData = [
  {
    title: "Chaveiros até 4 cm",
    subtitle: "Cor única",
    price: "R$ 3,00",
    bulkPrice: "R$ 2,50",
    bulkQuantity: "20 unidades",
    features: ["Cor única", "Até 4 cm de tamanho", "Alta durabilidade", "Acabamento premium"],
    popular: false,
  },
  {
    title: "Chaveiros 4 a 6 cm",
    subtitle: "Multicolorido",
    price: "R$ 4,00",
    bulkPrice: "R$ 3,50",
    bulkQuantity: "20 unidades",
    features: ["Múltiplas cores", "De 4 a 6 cm", "Detalhes refinados", "Qualidade superior"],
    popular: true,
  },
  {
    title: "Miniaturas de Times",
    subtitle: "9 a 10 cm",
    price: "R$ 15,00",
    bulkPrice: "R$ 13,50",
    bulkQuantity: "5 unidades",
    features: ["Tamanho 9-10 cm", "Detalhamento preciso", "Cores do time", "Perfeito para coleção"],
    popular: false,
  },
]

export function PricingTable() {
  return (
    <section className="py-24 px-4 bg-secondary/30" id="precos">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Tabela de Preços</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Valores especiais para pedidos em quantidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingData.map((item, index) => (
            <Card
              key={index}
              className={`relative border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                item.popular ? "border-accent shadow-xl scale-105" : "border-border hover:border-primary"
              }`}
            >
              {item.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1">
                  Mais Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                <CardDescription className="text-base">{item.subtitle}</CardDescription>

                <div className="mt-6 space-y-2">
                  <div className="text-4xl font-bold text-primary">{item.price}</div>
                  <div className="text-sm text-muted-foreground">por unidade</div>
                </div>

                <div className="mt-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <div className="text-sm font-medium text-foreground/80">Pedidos acima de {item.bulkQuantity}</div>
                  <div className="text-2xl font-bold text-accent mt-1">{item.bulkPrice} cada</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {item.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            * Valores podem ser alterados conforme solicitações e peças específicas modeladas do zero
          </p>
        </div>
      </div>
    </section>
  )
}
