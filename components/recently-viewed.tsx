import { Star, Heart } from "lucide-react"
import Link from "next/link"

const recentlyViewed = [
  {
    id: 1,
    image: "/placeholder.svg?height=200&width=280",
    rating: 5.0,
    reviews: 85,
    title: "Grand Cayman Exotic Jet Car Experience in 7 Mile Beach",
    price: "₹27,714",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=200&width=280",
    rating: 4.9,
    reviews: 899,
    title: "Stingray City and Starfish Experience with Coral Reef Snorkeling",
    price: "₹6,005",
  },
]

export function RecentlyViewed() {
  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Recently Viewed</h2>
        <Link href="#" className="text-sm text-gray-600 hover:underline flex items-center gap-1">
          See all
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {recentlyViewed.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative rounded-lg overflow-hidden mb-3">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                <Heart className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-gray-900 text-gray-900" />
                <span className="text-sm font-medium text-gray-900">{item.rating.toFixed(1)}</span>
                <span className="text-sm text-gray-500">({item.reviews.toLocaleString()})</span>
              </div>
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2">{item.title}</h3>
              <p className="text-sm">
                <span className="text-gray-500">From </span>
                <span className="font-bold text-gray-900">{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
