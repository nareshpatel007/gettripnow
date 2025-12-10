import { Star, ThumbsUp, Camera, Users, Award } from "lucide-react"

export function WhyTravelersLoved() {
  const highlights = [
    { icon: ThumbsUp, text: "Exceptional service" },
    { icon: Camera, text: "Great photo opportunities" },
    { icon: Users, text: "Friendly guides" },
    { icon: Award, text: "Best value" },
  ]

  return (
    <div className="py-6 border-b border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Why travelers loved this</h2>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">5.0</span>
          <span className="text-gray-500 text-sm">3,847 reviews</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        {highlights.map((item, index) => (
          <div key={index} className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 text-sm text-gray-700">
            <item.icon className="h-4 w-4 text-[#f53]" />
            {item.text}
          </div>
        ))}
      </div>
    </div>
  )
}
