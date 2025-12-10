import { Check, X } from "lucide-react"

export function WhatsIncluded() {
  const included = [
    "Use of snorkeling equipment",
    "Bottled water",
    "Professional guide",
    "Hotel pickup and drop-off",
    "Life jackets available",
  ]

  const notIncluded = ["Gratuities", "Food and drinks (available for purchase)", "Underwater camera rental"]

  return (
    <section className="py-8 border-b border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-4">What's Included</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-medium text-gray-900 mb-3">Included</h3>
          <ul className="space-y-2">
            {included.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-gray-900 mb-3">Not Included</h3>
          <ul className="space-y-2">
            {notIncluded.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600">
                <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
