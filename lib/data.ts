import { Product, NatureWalk, HerbalFact } from "@/types"

export const products: Product[] = [
  {
    id: 1,
    name: "Rooibos Tea",
    price: 12.99,
    description: "Caffeine-free red tea with antioxidants",
    image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    name: "Buchu Tincture",
    price: 24.99,
    description: "Traditional remedy for urinary tract health",
    image: "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    name: "African Wormwood",
    price: 15.99,
    description: "Helps with digestion and fever",
    image: "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    name: "Devil's Claw Root",
    price: 18.99,
    description: "Natural anti-inflammatory",
    image: "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3"
  }
]

export const natureWalks: NatureWalk[] = [
  {
    id: 1,
    title: "Cederberg Rooibos Experience",
    description: "Explore the rugged Cederberg mountains and learn about the unique Rooibos plant with our expert guide.",
    image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3",
    duration: "Full Day",
    difficulty: "Moderate"
  },
  {
    id: 2,
    title: "Kirstenbosch Medicinal Garden Tour",
    description: "Discover the healing properties of indigenous plants in the beautiful Kirstenbosch National Botanical Garden.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3",
    duration: "Half Day",
    difficulty: "Easy"
  },
  {
    id: 3,
    title: "Drakensberg Alpine Herb Walk",
    description: "High altitude trek to find rare medicinal plants used by traditional Zulu healers.",
    image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3",
    duration: "Full Day",
    difficulty: "Challenging"
  }
]

export const herbalFacts: HerbalFact[] = [
  {
    id: 1,
    fact: "Rooibos is only grown in the Cederberg region of South Africa."
  },
  {
    id: 2,
    fact: "Buchu has been used by the Khoisan people for centuries."
  },
  {
    id: 3,
    fact: "African Wormwood is also known as Umhlonyane in Zulu."
  },
  {
    id: 4,
    fact: "Devil's Claw gets its name from its hook-like fruit."
  }
]