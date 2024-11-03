import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ShamanSection() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold text-green-800 mb-6">
        Traditional Herbalist Corner
      </h2>
      <Card className="border-green-200 bg-white">
        <CardHeader>
          <CardTitle className="text-2xl text-green-700">Bushman Shaman Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            Our traditional herbalists carry ancient wisdom passed down through generations. 
            They understand the deep connection between nature and healing.
          </p>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Herb of the Month: Rooibos</h3>
            <p className="text-gray-700">
              Rooibos, known as "red bush" in Afrikaans, has been used by the indigenous 
              people of the Cederberg region for centuries. It's known for its calming 
              properties and rich antioxidant content.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}