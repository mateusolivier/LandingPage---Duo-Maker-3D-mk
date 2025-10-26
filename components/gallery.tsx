"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function Gallery() {
  // Array com as imagens dos trabalhos realizados
  const images = [
    { url: "/trabalhos/trabalho-1.jpg", title: "Chaveiro Personalizado", category: "Chaveiros" },
    { url: "/trabalhos/trabalho-2.jpg", title: "Miniatura de Jogador", category: "Miniaturas" },
    { url: "/trabalhos/trabalho-3.jpg", title: "Brinde Corporativo", category: "Brindes" },
    { url: "/trabalhos/trabalho-4.jpg", title: "Presente Personalizado", category: "Presentes" },
    { url: "/trabalhos/trabalho-5.jpg", title: "Mascote de Time", category: "Miniaturas" },
  ]

  // Estado para controlar qual imagem está ampliada no modal
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; category: string } | null>(null)

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        {/* Título da seção */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Nossos Trabalhos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Veja alguns exemplos do que já criamos para nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-muted cursor-pointer aspect-square"
              onClick={() => setSelectedImage(image)}
            >
              {/* Imagem com efeito de zoom ao hover */}
              <img
                src={image.url || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Overlay com gradiente e informações */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <span className="text-accent text-sm font-semibold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.category}
                </span>
                <h3 className="text-white font-bold text-xl md:text-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {image.title}
                </h3>
              </div>

              {/* Borda animada ao hover */}
              <div className="absolute inset-0 border-4 border-accent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Call to action após a galeria */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">Gostou do que viu? Vamos criar algo incrível juntos!</p>
          <a
            href="https://wa.me/5584999888796?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20fazer%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Faça seu Pedido
          </a>
        </div>
      </div>

      {/* Modal para visualizar imagem ampliada (lightbox) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          {/* Botão para fechar o modal */}
          <button
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Container da imagem ampliada */}
          <div className="max-w-6xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url || "/placeholder.svg"}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
            {/* Informações da imagem */}
            <div className="text-center mt-6 space-y-2">
              <span className="text-accent text-sm font-semibold">{selectedImage.category}</span>
              <h3 className="text-white text-2xl md:text-3xl font-bold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
