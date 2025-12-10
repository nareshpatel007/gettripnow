"use client"

import { Heart, Star, Plus } from "lucide-react"
import Link from "next/link"

interface WishlistTourCardProps {
  id: number
  image: string
  badge?: string
  tourType?: string
  rating: number
  reviews: number
  title: string
  duration?: string
  price: string
  originalPrice?: string
  onRemove: () => void
  showAddButton?: boolean
}

export function WishlistTourCard({
  id,
  image,
  badge,
  tourType,
  rating,
  reviews,
  title,
  duration,
  price,
  originalPrice,
  onRemove,
  showAddButton = false,
}: WishlistTourCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <Link href={`/tours/${id}`}>
          <img
            src={image || "/placeholder.svg?height=200&width=300&query=tour"}
            alt={title}
            className="w-full h-40 sm:h-44 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Orange bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#f26b38]" />

        {/* Badge - top left */}
        {badge && (
          <div
            className={`absolute top-2 md:top-3 left-2 md:left-3 px-2 py-0.5 md:py-1 rounded text-[10px] md:text-xs font-semibold ${
              badge === "BEST SELLER"
                ? "bg-[#00aa6c] text-white"
                : badge === "NEW"
                  ? "bg-blue-500 text-white"
                  : "bg-[#f26b38] text-white"
            }`}
          >
            {badge}
          </div>
        )}

        {/* Remove/Add button - top right */}
        {showAddButton ? (
          <button
            onClick={onRemove}
            className="absolute top-2 md:top-3 right-2 md:right-3 p-1.5 md:p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-[#1a9cb0] hover:text-white transition-colors group/btn"
            title="Add to wishlist"
          >
            <Plus className="h-4 w-4 md:h-5 md:w-5 text-gray-600 group-hover/btn:text-white" />
          </button>
        ) : (
          <button
            onClick={onRemove}
            className="absolute top-2 md:top-3 right-2 md:right-3 p-1.5 md:p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-red-50 transition-colors group/btn"
            title="Remove from wishlist"
          >
            <Heart className="h-4 w-4 md:h-5 md:w-5 text-[#1a9cb0] fill-[#1a9cb0] group-hover/btn:text-red-500 group-hover/btn:fill-red-500" />
          </button>
        )}
      </div>

      <div className="p-3 md:p-4 space-y-1.5 md:space-y-2">
        {/* Tour type label */}
        {tourType && (
          <p className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-wide">{tourType}</p>
        )}

        {/* Title */}
        <Link href={`/tours/${id}`}>
          <h4 className="text-sm md:text-base font-semibold text-gray-900 line-clamp-2 leading-snug hover:text-[#1a9cb0] transition-colors">
            {title}
          </h4>
        </Link>

        {/* Duration */}
        {duration && <p className="text-xs md:text-sm text-gray-500">{duration}</p>}

        {/* Rating and price row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pt-1">
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 md:h-4 md:w-4 fill-gray-900 text-gray-900" />
            <span className="text-xs md:text-sm font-medium text-gray-900">{rating.toFixed(1)}</span>
            <span className="text-xs md:text-sm text-gray-500">({reviews.toLocaleString()})</span>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-[10px] md:text-xs text-gray-500">From </span>
            <span className="font-bold text-sm md:text-base text-gray-900">{price}</span>
            {originalPrice && (
              <span className="text-xs md:text-sm text-gray-400 line-through ml-1">{originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
