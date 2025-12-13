"use client"

import { useState, useRef } from "react"
import { TourCard } from "./tour-card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const recommendedTours = [
    {
        image: "/historic-trolley-tour-richmond-vintage-red-trolley.jpg",
        badge: "Likely to sell out",
        tourType: "DAY TRIP",
        rating: 4.6,
        reviews: 1446,
        title: "From London: Oxford and Cotswolds Villages Day Trip",
        duration: "10 hours",
        price: "₹7,151",
        originalPrice: "₹11,919",
    },
    {
        image: "/ghost-tour-dark-spooky-shockoe-bottom-richmond.jpg",
        tourType: "GUIDED TOUR",
        rating: 4.8,
        reviews: 777,
        title: "Prague: Old Town, Astronomical Clock and Underground Tour",
        duration: "2 - 3 hours",
        price: "₹3,031",
        originalPrice: "₹3,788",
    },
    {
        image: "/sightseeing-tour-van-richmond-virginia-city.jpg",
        tourType: "WORKSHOP OR CLASS",
        rating: 4.9,
        reviews: 2826,
        title: "Istanbul: Original Turkish Mosaic Lamp Workshop with Snacks",
        duration: "3 hours",
        extraInfo: "Snacks included • 3 hours",
        price: "₹2,016",
        originalPrice: "₹2,762",
    },
    {
        image: "/segway-tour-richmond-landmark-historic.jpg",
        badge: "Likely to sell out",
        tourType: "GUIDED TOUR",
        rating: 4.6,
        reviews: 3640,
        title: "Budapest: Buda Castle District Vampires and Myths Night Tour",
        duration: "110 minutes - 2 hours",
        price: "₹2,105",
    },
    {
        image: "/historic-trolley-tour-richmond-vintage-red-trolley.jpg",
        tourType: "CITY TOUR",
        rating: 4.7,
        reviews: 2150,
        title: "Rome: Skip-the-Line Colosseum, Forum & Palatine Hill Tour",
        duration: "3 hours",
        price: "₹4,500",
        originalPrice: "₹5,200",
    },
    {
        image: "/ghost-tour-dark-spooky-shockoe-bottom-richmond.jpg",
        badge: "Best seller",
        tourType: "ADVENTURE",
        rating: 4.9,
        reviews: 4200,
        title: "Dubai: Desert Safari with BBQ Dinner and Entertainment",
        duration: "6 hours",
        price: "₹3,800",
    },
    {
        image: "/sightseeing-tour-van-richmond-virginia-city.jpg",
        tourType: "FOOD TOUR",
        rating: 4.8,
        reviews: 1890,
        title: "Barcelona: Tapas and Wine Walking Tour in Gothic Quarter",
        duration: "3 hours",
        price: "₹5,600",
        originalPrice: "₹6,200",
    },
    {
        image: "/segway-tour-richmond-landmark-historic.jpg",
        tourType: "DAY TRIP",
        rating: 4.5,
        reviews: 980,
        title: "Paris: Versailles Palace and Gardens Full-Day Tour",
        duration: "8 hours",
        price: "₹8,900",
    },
]

export function RecommendedSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const checkScrollPosition = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
        }
    }

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth * 0.8
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            })
        }
    }

    return (
        <section className="py-8 md:py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-6 md:mb-8">
                    <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#1a2b49]">Unforgettable travel experiences</h2>
                    <div className="flex gap-2">
                        <button
                            onClick={() => scroll("left")}
                            disabled={!canScrollLeft}
                            className="p-2 rounded-full border border-[#f53] text-[#F53] hover:bg-[#f53] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            disabled={!canScrollRight}
                            className="p-2 rounded-full border border-[#f53] text-[#F53] hover:bg-[#f53] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                <div
                    ref={scrollContainerRef}
                    onScroll={checkScrollPosition}
                    className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {recommendedTours.map((tour, index) => (
                        <div key={`${tour.title}-${index}`} className="flex-shrink-0 w-[280px] md:w-[300px]">
                            <TourCard {...tour} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
