import { Heart, Star } from "lucide-react"
import Link from "next/link"

interface TourCardProps {
    image: string
    badge?: string
    tourType?: string
    rating: number
    reviews: number
    title: string
    duration?: string
    price: string
    originalPrice?: string
    extraInfo?: string
    location?: string
    priceNote?: string
}

export function TourCard({
    image,
    badge,
    tourType,
    rating,
    reviews,
    title,
    duration,
    price,
    originalPrice,
    extraInfo,
}: TourCardProps) {
    return (
        <div className="group cursor-pointer">
            <Link href="/tours/asdasdasd">
                <div className="relative rounded-xl overflow-hidden mb-2 md:mb-3">
                    <img
                        src={image || "/placeholder.svg"}
                        alt={title}
                        className="w-full h-36 sm:h-44 md:h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 md:top-3 left-2 md:left-3 flex items-center gap-1 md:gap-1.5 bg-white/95 backdrop-blur-sm px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">
                        <span className="w-4 h-4 md:w-5 md:h-5 bg-[#f53] rounded-full flex items-center justify-center text-white text-[10px] md:text-xs font-bold">G</span>
                        <span className="text-[10px] md:text-xs text-gray-700 font-medium hidden sm:inline">Exclusive</span>
                    </div>
                    <button className="absolute top-2 md:top-3 right-2 md:right-3 p-1.5 md:p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors cursor-pointer">
                        <Heart className="h-4 w-4 md:h-5 md:w-5 text-gray-600 hover:text-[#f53]" />
                    </button>
                </div>
                <div className="space-y-1 md:space-y-1.5">
                    {tourType && (
                        <p className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-wide">{tourType}</p>
                    )}
                    <h4 className="text-sm md:text-base font-semibold text-[#1a2b49] line-clamp-2 leading-snug">{title}</h4>
                    {(extraInfo || duration) && (
                        <p className="text-xs md:text-sm text-gray-500">{extraInfo ? extraInfo : duration}</p>
                    )}
                    {badge && (
                        <span className="inline-block bg-[#f53] text-white text-[10px] md:text-xs font-semibold px-2 md:px-2.5 py-0.5 md:py-1 rounded">
                            {badge}
                        </span>
                    )}
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
            </Link>
        </div>
    )
}
