import { Heart, Star } from "lucide-react"

interface TourListingCardProps {
  image: string
  badge?: string
  rating: number
  reviews: number
  title: string
  hasFreeCancellation?: boolean
  duration: string
  price: string
  priceType?: string
}

export function TourListingCard({
  image,
  badge,
  rating,
  reviews,
  title,
  hasFreeCancellation,
  duration,
  price,
  priceType,
}: TourListingCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative rounded-lg overflow-hidden mb-3">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badge */}
        {badge && (
          <div className="absolute top-3 left-3 bg-[#1a4d2e] text-white text-xs font-medium px-2 py-1 rounded">
            {badge}
          </div>
        )}

        {/* Heart icon */}
        <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
          <Heart className="h-4 w-4 text-gray-600" />
        </button>
      </div>

      <div className="space-y-1">
        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-gray-900 text-gray-900" />
          <span className="text-sm font-medium text-gray-900">{rating.toFixed(1)}</span>
          <span className="text-sm text-gray-500">({reviews.toLocaleString()})</span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-snug">{title}</h3>

        {/* Free Cancellation */}
        {hasFreeCancellation && (
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-xs text-gray-500">Free Cancellation</span>
          </div>
        )}

        {/* Duration */}
        <p className="text-xs text-gray-500">{duration}</p>

        {/* Price */}
        <div className="pt-1">
          <span className="text-xs text-gray-500">From </span>
          <span className="font-bold text-gray-900">{price}</span>
          {priceType && <span className="text-xs text-gray-500 ml-1">{priceType}</span>}
        </div>
      </div>
    </div>
  )
}
