import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Package, Briefcase, Crown } from "lucide-react"

const kitsData = [
  {
    title: "Kit Start",
    icon: Package,
    subtitle: "Ideal para empresas menores, brindes de eventos ou feiras corporativas",
    price: "R$ 15,00 - R$ 30,00",
    items: [
      "Chaveiro personalizado (logo, mascote ou nome)",
      "Porta-copos com relevo da logo",
      "Totem com nome para mesa ou placa decorativa",
    ],
    note: "Descontos progressivos para pedidos acima de 10 unidades",
    popular: false,
  },
  {
    title: "Kit Office",
    icon: Briefcase,
    subtitle: "Ideal para colaboradores, escritórios e home office",
    price: "R$ 50,00 - R$ 70,00",
    items: ["Suporte de headset", "Porta-canetas ou porta-trecos", "Porta-copos", "Suporte para celular"],
    note: "",
    popular: true,
  },
  {
    title: "Kit Premium",
    icon: Crown,
    subtitle: "Ideal para presentes corporativos, clientes especiais e eventos VIP",
    price: "R$ 100,00 - R$ 130,00",
    items: [
      "Miniatura de boneco ou produto da empresa",
      "Suporte de headset personalizado",
      "Porta-canetas com espaço para bloco de notas",
      "Organizador de cabos",
      "Nome personalizado em 3D",
    ],
    note: "Descontos especiais para pedidos acima de 10 kits, pode remover ou inserir mais itens",
    popular: false,
  },
]

export function Kits3D() {
  return (
    <section className="py-24 px-4" id="kits">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Kits 3D Personalizados</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Sua marca em cada detalhe. Feitos a dois, camada por camada.
          </p>
          <p className="text-lg text-accent font-semibold">Brindes que impressionam</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {kitsData.map((kit, index) => {
            const Icon = kit.icon
            return (
              <Card
                key={index}
                className={`relative border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  kit.popular ? "border-accent shadow-xl scale-105" : "border-border hover:border-primary"
                }`}
              >
                {kit.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1">
                    Mais Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-6 pt-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{kit.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{kit.subtitle}</CardDescription>

                  <div className="mt-6">
                    <div className="text-3xl font-bold text-accent">{kit.price}</div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {kit.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-accent" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  {kit.note && (
                    <div className="mt-4 p-3 bg-muted/50 rounded-lg border border-border">
                      <p className="text-xs text-muted-foreground">{kit.note}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-2 border-accent/30 bg-accent/5">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Personalização Total</CardTitle>
              <CardDescription className="text-center text-base">
                Quer um kit com a cara da sua empresa? Criamos projetos sob medida
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Chaveiro personalizado",
                  "Porta-copos",
                  "Totem com nome",
                  "Suporte headset",
                  "Porta-canetas",
                  "Suporte de celular",
                  "Miniatura boneco",
                  "Organizador de cabos",
                  "Porta-canetas e bloco",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-center">Como Solicitar o Seu Kit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { num: "1", text: "Escolha o modelo de kit" },
                  { num: "2", text: "Envie sua logo ou identidade visual" },
                  { num: "3", text: "Receba aprovação do projeto digital" },
                  { num: "4", text: "Após aprovação, seu kit vai para produção" },
                ].map((step, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="w-12 h-12 mx-auto bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl">
                      {step.num}
                    </div>
                    <p className="text-sm text-muted-foreground">{step.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center p-6 bg-muted/30 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              <strong>Embalagem e Apresentação:</strong> Cada kit é entregue com cuidado e identidade visual. Usamos
              caixas kraft ou transparentes, fita personalizada
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
