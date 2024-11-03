"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sprout, Wallet } from "lucide-react"
import { useWallet } from "@/hooks/use-wallet"

export function HerbalDaoSection() {
  const { walletConnected, connectWallet } = useWallet()

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold text-green-800 mb-6">Herbal Farming DAO</h2>
      <Card className="border-green-200 bg-white">
        <CardHeader>
          <CardTitle className="text-2xl text-green-700">
            Join Our Herbal Farming Community
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            Become part of our decentralized autonomous organization (DAO) and contribute 
            to sustainable herbal farming. Together, we can purchase and manage farming land, 
            ensuring the preservation of traditional herbal knowledge and practices.
          </p>
          <div className="bg-green-100 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-green-800 mb-2">Benefits of Joining:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Voting rights on land acquisition and farming decisions</li>
              <li>Share in the harvest and profits from herb sales</li>
              <li>Access to exclusive herbal products and educational content</li>
              <li>Contribute to the preservation of traditional herbal knowledge</li>
            </ul>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-green-700 font-semibold">Current Members: 128</p>
            <p className="text-green-700 font-semibold">Total Land: 50 hectares</p>
          </div>
        </CardContent>
        <CardFooter>
          {walletConnected ? (
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center">
              <Sprout className="mr-2" />
              Join the Herbal Farming DAO
            </Button>
          ) : (
            <Button 
              onClick={connectWallet}
              className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center"
            >
              <Wallet className="mr-2" />
              Connect Wallet to Join DAO
            </Button>
          )}
        </CardFooter>
      </Card>
    </section>
  )
}