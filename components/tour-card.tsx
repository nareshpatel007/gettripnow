import { BadgeCheckIcon, Check, Heart, Star } from "lucide-react"
import Link from "next/link"

interface TourCardProps {
    id: string
    name: string
    slug: string
    featured_image?: string
    duration_format: string
    selling_price: string
    discount_price: string
    average_rating: number
    total_reviews: number
    is_refundable: boolean
    destination_name: string
    destination_slug: string
    country_name: string
    country_slug: string
    tag_name: string
    tag_slug: string
}

export function TourCard({
    id,
    name,
    slug,
    featured_image,
    duration_format,
    selling_price,
    discount_price,
    average_rating,
    total_reviews,
    is_refundable,
    destination_name,
    destination_slug,
    country_name,
    country_slug,
    tag_name,
    tag_slug
}: TourCardProps) {
    return (
        <div className="group">
            <div className="relative rounded-xl overflow-hidden mb-2 md:mb-3">
                <Link href={`/tours/${slug}`}>
                    <img
                        src={featured_image || "/placeholder.svg"}
                        alt={name}
                        className="w-full h-36 sm:h-44 md:h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </Link>
                {is_refundable == true && <div className="absolute top-2 md:top-3 left-2 md:left-3 flex items-center gap-1 md:gap-1.5 bg-white/95 backdrop-blur-sm px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">
                    <span className="w-4 h-4 md:w-5 md:h-5 bg-[#f53] rounded-full flex items-center justify-center text-white text-[10px] md:text-xs font-bold">
                        <BadgeCheckIcon className="w-3 h-3 md:w-4 md:h-4" />
                    </span>
                    <span className="text-[10px] md:text-xs text-gray-700 font-medium hidden sm:inline">Free Cancellation</span>
                </div>}
                <button className="absolute top-2 md:top-3 right-2 md:right-3 p-1.5 md:p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors cursor-pointer">
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-gray-600 hover:text-[#f53]" />
                </button>
            </div>
            <div className="space-y-1 md:space-y-1.5">
                {tag_name && (
                    <p className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-wide">{tag_name}</p>
                )}
                <Link href={`/tours/${slug}`} className="hover:underline hover:text-[#1a2b49]">
                    <h4 className="text-sm md:text-base font-semibold text-[#1a2b49] line-clamp-2 leading-snug">{name}</h4>
                </Link>
                {duration_format && (
                    <p className="text-xs md:text-sm text-gray-500">{duration_format}</p>
                )}
                {/* {is_refundable == true && <span className="inline-block bg-[#f53] text-white text-[10px] md:text-xs font-semibold px-2 md:px-2.5 py-0.5 md:py-1 rounded">
                        Free Cancellation
                    </span>} */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pt-1">
                    <div className="flex items-center gap-1">
                        {average_rating > 0 && <>
                            <Star className="h-3.5 w-3.5 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs md:text-sm font-medium text-gray-900">{average_rating}</span>
                            <span className="text-xs md:text-sm text-gray-500">({total_reviews.toLocaleString()})</span>
                        </>}
                    </div>
                    <div className="text-left sm:text-right">
                        <span className="text-[10px] md:text-xs text-gray-500">From </span>
                        <span className="font-bold text-sm md:text-base text-gray-900">${discount_price}</span>
                        {selling_price && discount_price != selling_price && (
                            <span className="text-xs md:text-sm text-gray-400 line-through ml-1">${selling_price}</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
