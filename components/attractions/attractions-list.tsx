"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Star, MapPin, Search, ChevronDown } from "lucide-react"

const attractions = [
  {
    slug: "eiffel-tower",
    name: "Eiffel Tower",
    location: "Paris, France",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    reviews: 128547,
    toursCount: 156,
  },
  {
    slug: "colosseum",
    name: "Colosseum",
    location: "Rome, Italy",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    reviews: 98234,
    toursCount: 124,
  },
  {
    slug: "statue-of-liberty",
    name: "Statue of Liberty",
    location: "New York, USA",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    reviews: 75621,
    toursCount: 89,
  },
  {
    slug: "machu-picchu",
    name: "Machu Picchu",
    location: "Cusco, Peru",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    reviews: 45678,
    toursCount: 67,
  },
  {
    slug: "great-wall-of-china",
    name: "Great Wall of China",
    location: "Beijing, China",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    reviews: 67890,
    toursCount: 98,
  },
  {
    slug: "taj-mahal",
    name: "Taj Mahal",
    location: "Agra, India",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    reviews: 89012,
    toursCount: 112,
  },
]

export function AttractionsList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("popular")

  const filteredAttractions = attractions.filter(
    (attraction) =>
      attraction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attraction.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Popular Attractions</h1>
          <p className="text-gray-600 text-lg">Discover top attractions and book tours worldwide</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search attractions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a9cb0] focus:border-transparent"
            />
          </div>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none px-4 py-2.5 pr-10 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a9cb0] focus:border-transparent cursor-pointer"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="tours">Most Tours</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAttractions.map((attraction) => (
            <Link
              key={attraction.slug}
              href={`/attractions/${attraction.slug}`}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="relative h-48">
                <Image
                  src={attraction.image || "/placeholder.svg"}
                  alt={attraction.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h2 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#1a9cb0] transition-colors">
                  {attraction.name}
                </h2>
                <p className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                  <MapPin className="h-4 w-4" />
                  {attraction.location}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-sm">{attraction.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({attraction.reviews.toLocaleString()} reviews)</span>
                  </div>
                  <span className="text-sm font-medium text-[#1a9cb0]">{attraction.toursCount} tours</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredAttractions.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl">
            <p className="text-gray-500">No attractions found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
