"use client"

import { Search } from "lucide-react"
import { useState, useEffect } from "react"

const suggestedDestinations = [
    { name: "Paris", country: "France", image: "/paris-eiffel-tower.png" },
    { name: "Rome", country: "Italy", image: "/rome-colosseum.png" },
    { name: "Barcelona", country: "Spain", image: "/barcelona-sagrada-familia.jpg" },
    { name: "London", country: "United Kingdom", image: "/london-big-ben.png" },
    { name: "New York", country: "United States", image: "/new-york-statue-of-liberty.jpg" },
    { name: "Tokyo", country: "Japan", image: "/tokyo-tower-night.png" },
]

const heroSlides = [
    {
        image: "/person-skiing-on-snowy-mountain-with-red-jacket.jpg",
        alt: "Person skiing on snowy mountain",
    },
    {
        image: "/tropical-beach-with-palm-trees-and-crystal-clear-w.jpg",
        alt: "Tropical beach paradise",
    },
    {
        image: "/ancient-ruins-in-rome-italy-with-tourists.jpg",
        alt: "Ancient ruins in Rome",
    },
]

export function HeroSection() {
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, []);

    return (
        <section className="relative h-[480px] md:h-[560px]">
            <div className="absolute inset-0 overflow-hidden">
                {heroSlides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.alt}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}
                <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 text-center">Discover & book things to do</h1>
                <p className="text-white/90 text-base md:text-lg mb-8">Plan better with 300,000+ travel experiences.</p>

                <div className="relative w-full">
                    <div className="bg-white rounded-lg p-1.5 flex items-center gap-2 w-full shadow-lg">
                        <div className="flex-1 flex items-center gap-3 px-4 py-3">
                            <Search className="h-6 w-6 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search for a place or activity"
                                className="flex-1 outline-none text-base text-gray-700 placeholder:text-gray-400"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                onFocus={() => setShowSuggestions(true)}
                                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                            />
                        </div>
                        <button className="bg-[#f53] hover:bg-[#1a2b49] text-white p-3 rounded-lg cursor-pointer">
                            <Search className="h-6 w-6" />
                        </button>
                    </div>

                    {showSuggestions && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50">
                            <div className="p-3 border-b border-gray-100">
                                <span className="text-xs font-semibold text-[#1a2b49] uppercase tracking-wide">
                                    Popular Destinations
                                </span>
                            </div>
                            <div className="max-h-[300px] overflow-y-auto">
                                {suggestedDestinations.map((destination) => (
                                    <button
                                        key={destination.name}
                                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left cursor-pointer"
                                        onClick={() => {
                                            setSearchValue(destination.name)
                                            setShowSuggestions(false)
                                        }}
                                    >
                                        <img
                                            src={destination.image || "/placeholder.svg"}
                                            alt={destination.name}
                                            className="w-10 h-10 rounded-lg object-cover"
                                        />
                                        <div>
                                            <p className="font-medium text-gray-800">{destination.name}</p>
                                            <p className="text-sm text-gray-500">{destination.country}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white/70"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
            {/* <button className="absolute bottom-4 right-4 bg-black/50 text-white text-sm px-4 py-2 rounded hover:bg-black/60">
                Do more with Viator
            </button> */}
        </section>
    )
}
