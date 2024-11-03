import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProductSection } from "@/components/sections/product-section"
import { NatureWalksSection } from "@/components/sections/nature-walks-section"
import { HerbalDaoSection } from "@/components/sections/herbal-dao-section"
import { HerbalWisdomSection } from "@/components/sections/herbal-wisdom-section"
import { ShamanSection } from "@/components/sections/shaman-section"
import { ChatSupport } from "@/components/chat/chat-support"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500/70 to-orange-300/70 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <ProductSection />
        <NatureWalksSection />
        <HerbalDaoSection />
        <HerbalWisdomSection />
        <ShamanSection />
      </main>
      <ChatSupport />
      <Footer />
    </div>
  )
}