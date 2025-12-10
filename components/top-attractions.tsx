"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const attractions = [
  {
    id: 1,
    name: "Stingray City",
    image: "/stingray-city-cayman-underwater-stingrays.jpg",
    price: "From ₹5,073",
  },
  {
    id: 2,
    name: "Seven Mile Beach",
    image: "/seven-mile-beach-cayman-crystal-water.jpg",
    price: "From ₹6,005",
  },
  {
    id: 3,
    name: "Starfish Point",
    image: "/starfish-point-cayman-beach-starfish.jpg",
    price: "From ₹5,505",
  },
  {
    id: 4,
    name: "Coral Gardens",
    image: "/coral-gardens-underwater.jpg",
    price: "From ₹4,500",
  },
  {
    id: 5,
    name: "Rum Point",
    image: "/rum-point-beach-cayman.jpg",
    price: "From ₹3,800",
  },
  {
    id: 6,
    name: "Hell Grand Cayman",
    image: "/hell-grand-cayman-rocks.jpg",
    price: "From ₹2,500",
  },
  {
    id: 7,
    name: "Cayman Crystal Caves",
    image: "/crystal-caves-cayman.jpg",
    price: "From ₹7,200",
  },
  {
    id: 8,
    name: "Queen Elizabeth II Botanic Park",
    image: "/botanic-park-cayman.jpg",
    price: "From ₹3,200",
  },
]

export function TopAttractions() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 768) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3)
      } else {
        setItemsPerView(4)
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  const totalSlides = Math.ceil(attractions.length / itemsPerView)
  const currentSlide = Math.floor(currentIndex / itemsPerView) + 1

  const slideLeft = () => {
    setCurrentIndex((prev) => Math.max(0, prev - itemsPerView))
  }

  const slideRight = () => {
    setCurrentIndex((prev) => Math.min(attractions.length - itemsPerView, prev + itemsPerView))
  }

  const canSlideLeft = currentIndex > 0
  const canSlideRight = currentIndex < attractions.length - itemsPerView

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Top Attractions in Cayman Islands</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            {currentSlide} / {totalSlides}
          </span>
          <button
            onClick={slideLeft}
            disabled={!canSlideLeft}
            className={`p-2 rounded-full border border-gray-300 transition-colors ${
              canSlideLeft ? "hover:bg-gray-50" : "opacity-50 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="h-4 w-4 text-gray-600" />
          </button>
          <button
            onClick={slideRight}
            disabled={!canSlideRight}
            className={`p-2 rounded-full border border-gray-300 transition-colors ${
              canSlideRight ? "hover:bg-gray-50" : "opacity-50 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {attractions.map((attraction) => (
            <div
              key={attraction.id}
              className="flex-shrink-0 px-2 cursor-pointer group"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={attraction.image || "/placeholder.svg"}
                  alt={attraction.name}
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-medium">{attraction.name}</p>
                  <p className="text-white/80 text-sm">{attraction.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4 md:hidden">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * itemsPerView)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index + 1 ? "bg-[#1a9cb0]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
