"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Wallet } from "lucide-react"
import { useState } from "react"
import { ethers } from "ethers"

export function WalletConnect() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" })
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const address = await signer.getAddress()
        setWalletConnected(true)
        setWalletAddress(address)
      } catch (error) {
        console.error("Failed to connect wallet:", error)
      }
    } else {
      alert("Please install MetaMask to use this feature")
    }
  }

  const disconnectWallet = () => {
    setWalletConnected(false)
    setWalletAddress("")
  }

  if (walletConnected) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="text-white hover:text-green-200">
            <Wallet className="w-5 h-5 mr-2" />
            {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={disconnectWallet}>Disconnect Wallet</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <Button onClick={connectWallet} variant="ghost" className="text-white hover:text-green-200">
      <Wallet className="w-5 h-5 mr-2" />
      Connect Wallet
    </Button>
  )
}