"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { MessageCircle } from "lucide-react"

export function ChatSupport() {
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState<string[]>([])

  const sendMessage = (message: string) => {
    setChatMessages([
      ...chatMessages,
      `You: ${message}`,
      "Shaman: Thank you for your question. Our traditional herbalist will respond shortly."
    ])
  }

  return (
    <Dialog open={chatOpen} onOpenChange={setChatOpen}>
      <DialogTrigger asChild>
        <Button className="fixed bottom-4 right-4 rounded-full w-16 h-16 bg-green-600 hover:bg-green-700 text-white shadow-lg">
          <MessageCircle className="w-8 h-8" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Chat with our Bushman Shaman</DialogTitle>
          <DialogDescription>
            Ask about our herbs and traditional remedies
          </DialogDescription>
        </DialogHeader>
        <div className="h-[300px] overflow-y-auto border border-green-200 rounded p-2 mb-4">
          {chatMessages.map((msg, index) => (
            <p key={index} className="mb-2">{msg}</p>
          ))}
        </div>
        <form onSubmit={(e) => {
          e.preventDefault()
          const input = e.currentTarget.elements.namedItem("message") as HTMLInputElement
          if (input.value) {
            sendMessage(input.value)
            input.value = ""
          }
        }}>
          <Input id="message" placeholder="Type your message here..." className="mb-2" />
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
            Send
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}