"use client"

import { useState } from "react"
import { ethers } from "ethers"

export function useWallet() {
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

  return {
    walletConnected,
    walletAddress,
    connectWallet,
    disconnectWallet
  }
}