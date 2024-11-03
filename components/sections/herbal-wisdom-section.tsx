import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { herbalFacts } from "@/lib/data"

export function HerbalWisdomSection() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold text-green-800 mb-6">Herbal Wisdom</h2>
      <Card className="border-green-200 bg-white">
        <CardHeader>
          <CardTitle className="text-2xl text-green-700">Did You Know?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {herbalFacts.map((fact) => (
              <li key={fact.id}>{fact.fact}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}