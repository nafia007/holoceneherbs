"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ShoppingCart, User, Search, Menu, Wallet } from "lucide-react"
import { useState } from "react"
import { WalletConnect } from "@/components/web3/wallet-connect"

export function Header() {
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  return (
    <header className="bg-green-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Holocene Herbs</h1>
        <nav className="hidden md:flex space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white hover:text-green-200">Shop</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Teas</DropdownMenuItem>
              <DropdownMenuItem>Tinctures</DropdownMenuItem>
              <DropdownMenuItem>Dried Herbs</DropdownMenuItem>
              <DropdownMenuItem>Essential Oils</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" className="text-white hover:text-green-200">Nature Walks</Button>
          <Button variant="ghost" className="text-white hover:text-green-200">Herbal DAO</Button>
          <Button variant="ghost" className="text-white hover:text-green-200">About Us</Button>
          <Button variant="ghost" className="text-white hover:text-green-200">Blog</Button>
          <Button variant="ghost" className="text-white hover:text-green-200">Contact</Button>
        </nav>
        <div className="flex items-center space-x-4">
          <div className={`transition-all duration-300 ${isSearchVisible ? 'w-64' : 'w-0'} md:w-64 overflow-hidden`}>
            <Input 
              placeholder="Search..." 
              className="bg-green-700 text-white placeholder-green-300 border-green-600"
            />
          </div>
          <Button 
            variant="ghost" 
            className="md:hidden text-white hover:text-green-200"
            onClick={() => setIsSearchVisible(!isSearchVisible)}
          >
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" className="text-white hover:text-green-200">
            <ShoppingCart className="w-5 h-5" />
          </Button>
          <UserMenu />
          <WalletConnect />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-white hover:text-green-200">
          <User className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Orders</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-white hover:text-green-200 md:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Shop</DropdownMenuItem>
        <DropdownMenuItem>Nature Walks</DropdownMenuItem>
        <DropdownMenuItem>Herbal DAO</DropdownMenuItem>
        <DropdownMenuItem>About Us</DropdownMenuItem>
        <DropdownMenuItem>Blog</DropdownMenuItem>
        <DropdownMenuItem>Contact</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}