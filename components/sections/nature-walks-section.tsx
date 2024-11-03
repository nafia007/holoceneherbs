"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { natureWalks } from "@/lib/data"
import Image from "next/image"

export function NatureWalksSection() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold text-green-800 mb-6">Traditional Nature Walks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {natureWalks.map((walk) => (
          <Card key={walk.id} className="border-green-200 hover:shadow-lg transition-shadow duration-300 bg-white">
            <CardHeader>
              <div className="relative w-full h-48">
                <Image
                  src={walk.image}
                  alt={walk.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardTitle className="mt-2">{walk.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{walk.description}</p>
              <div className="flex justify-between text-sm text-green-700">
                <span>
                  <Calendar className="inline-block w-4 h-4 mr-1" />
                  {walk.duration}
                </span>
                <span>Difficulty: {walk.difficulty}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Book Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}