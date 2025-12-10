"use client"

import { User, Search, Heart, ShoppingCart } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function TourListingHeader() {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [searchValue, setSearchValue] = useState("Cayman Islands")

  const suggestedDestinations = [
    { name: "Paris", country: "France", image: "/paris-eiffel-tower.png" },
    { name: "Rome", country: "Italy", image: "/rome-colosseum.png" },
    { name: "Barcelona", country: "Spain", image: "/barcelona-sagrada-familia.jpg" },
    { name: "London", country: "United Kingdom", image: "/london-big-ben.png" },
    { name: "New York", country: "United States", image: "/new-york-statue-of-liberty.jpg" },
    { name: "Tokyo", country: "Japan", image: "/tokyo-tower-night.png" },
  ]

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <svg viewBox="0 0 100 24" className="h-6 w-auto" fill="none">
            <text x="0" y="18" className="text-xl font-bold" fill="#2D2D2D">
              viator
            </text>
          </svg>
        </Link>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-lg">
          <div className="border border-gray-300 rounded-full flex items-center gap-2 px-4 py-2">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search destinations or activities"
              className="flex-1 outline-none text-sm text-gray-700 placeholder:text-gray-400 bg-transparent"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            />
          </div>

          {showSuggestions && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50">
              <div className="p-3 border-b border-gray-100">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Popular Destinations
                </span>
              </div>
              <div className="max-h-[300px] overflow-y-auto">
                {suggestedDestinations.map((destination) => (
                  <button
                    key={destination.name}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
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

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-sm text-gray-600">Support:24/7</span>
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <Heart className="h-5 w-5 text-gray-700" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <ShoppingCart className="h-5 w-5 text-gray-700" />
            <span className="absolute -top-0.5 -right-0.5 bg-[#0057A8] text-white text-xs font-medium rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
              0
            </span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full flex items-center gap-1">
            <User className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  )
}
