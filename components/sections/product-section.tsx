"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Bitcoin, DollarSign, Wallet } from "lucide-react"
import { products } from "@/lib/data"
import Image from "next/image"

export function ProductSection() {
  const [paymentMethod, setPaymentMethod] = useState<"fiat" | "crypto">("fiat")

  const handleCryptoPayment = async (amount: number) => {
    if (typeof window.ethereum === "undefined") {
      alert("Please install MetaMask to use this feature")
      return
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const paymentAddress = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
      
      const tx = await signer.sendTransaction({
        to: paymentAddress,
        value: ethers.utils.parseEther(amount.toString())
      })

      await tx.wait()
      alert("Payment successful!")
    } catch (error) {
      console.error("Payment failed:", error)
      alert("Payment failed. Please try again.")
    }
  }

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold text-green-800 mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="border-green-200 hover:shadow-lg transition-shadow duration-300 bg-white">
            <CardHeader>
              <div className="relative w-full h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardTitle className="mt-2">{product.name}</CardTitle>
              <CardDescription className="text-green-700 font-semibold">
                ${product.price.toFixed(2)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{product.description}</p>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Buy Now
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Choose Payment Method</DialogTitle>
                    <DialogDescription>
                      Select how you'd like to pay for {product.name}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex justify-around mt-4">
                    <Button 
                      onClick={() => setPaymentMethod("fiat")} 
                      className={`flex items-center ${paymentMethod === "fiat" ? "bg-green-600" : "bg-gray-300"}`}
                    >
                      <DollarSign className="mr-2" />
                      Fiat
                    </Button>
                    <Button 
                      onClick={() => setPaymentMethod("crypto")} 
                      className={`flex items-center ${paymentMethod === "crypto" ? "bg-green-600" : "bg-gray-300"}`}
                    >
                      <Bitcoin className="mr-2" />
                      Crypto
                    </Button>
                  </div>
                  {paymentMethod === "fiat" ? (
                    <div className="mt-4 space-y-2">
                      <Input placeholder="Card Number" />
                      <div className="flex gap-2">
                        <Input placeholder="MM/YY" className="w-1/2" />
                        <Input placeholder="CVC" className="w-1/2" />
                      </div>
                      <Button className="w-full bg-green-600">Pay ${product.price}</Button>
                    </div>
                  ) : (
                    <div className="mt-4">
                      <Button 
                        onClick={() => handleCryptoPayment(product.price)}
                        className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center"
                      >
                        <Wallet className="w-5 h-5 mr-2" />
                        Pay {product.price} ETH
                      </Button>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}