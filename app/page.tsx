import { Header } from "@/components/header"
import { Hero3D } from "@/components/hero-3d"
import { About } from "@/components/about"
import { Features } from "@/components/features"
import { Kits3D } from "@/components/kits-3d"
import { PricingTable } from "@/components/pricing-table"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero3D />
      <About />
      <Features />
      <Kits3D />
      <Gallery />
      <PricingTable />
      <Contact />
      <Footer />
    </main>
  )
}
