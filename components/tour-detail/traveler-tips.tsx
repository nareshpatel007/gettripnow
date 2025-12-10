import { Lightbulb, ThumbsUp } from "lucide-react"

export function TravelerTips() {
  const tips = [
    {
      text: "Bring waterproof sunscreen - the sun is strong even in the water!",
      likes: 142,
    },
    {
      text: "Suggestion: bring a waterproof phone case for photos",
      likes: 98,
    },
  ]

  return (
    <section className="py-8 border-b border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Lightbulb className="h-5 w-5 text-yellow-500" />
        Tips from satisfied travelers
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-start justify-between gap-4">
            <p className="text-gray-700">"{tip.text}"</p>
            <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 flex-shrink-0">
              <ThumbsUp className="h-4 w-4" />
              {tip.likes}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
