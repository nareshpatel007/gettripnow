"use client"

import { useState } from "react"
import { Heart, Trash2, Share2 } from "lucide-react"
import { WishlistTourCard } from "./wishlist-tour-card"
import Link from "next/link"

const initialWishlistTours = [
  {
    id: 1,
    image: "/historic-trolley-tour-richmond-vintage-red-trolley.jpg",
    badge: "LIKELY TO SELL OUT",
    tourType: "Half-day Tours",
    rating: 4.9,
    reviews: 2847,
    title: "Richmond Highlights: Historic Trolley Tour with Local Guide",
    duration: "3-4 hours",
    price: "₹2,450",
    originalPrice: "₹3,200",
  },
  {
    id: 2,
    image: "/ghost-tour-dark-spooky-shockoe-bottom-richmond.jpg",
    tourType: "Night Tours",
    rating: 4.8,
    reviews: 1523,
    title: "Haunted Richmond Ghost Walking Tour - Shockoe Bottom",
    duration: "2 hours",
    price: "₹1,850",
  },
  {
    id: 3,
    image: "/segway-tour-richmond-landmark-historic.jpg",
    badge: "BEST SELLER",
    tourType: "Unique Experiences",
    rating: 4.7,
    reviews: 892,
    title: "Richmond Segway Tour: Monument Avenue & Historic Districts",
    duration: "2.5 hours",
    price: "₹3,100",
  },
  {
    id: 4,
    image: "/sightseeing-tour-van-richmond-virginia-city.jpg",
    tourType: "City Tours",
    rating: 4.6,
    reviews: 654,
    title: "Best of Richmond: Full-Day Sightseeing Tour with Lunch",
    duration: "6-7 hours",
    price: "₹4,500",
    originalPrice: "₹5,200",
  },
  {
    id: 5,
    image: "/person-skiing-on-snowy-mountain-with-red-jacket.jpg",
    badge: "NEW",
    tourType: "Adventure",
    rating: 4.9,
    reviews: 234,
    title: "Wintergreen Ski Resort: Full Day Pass with Equipment",
    duration: "Full day",
    price: "₹6,800",
  },
  {
    id: 6,
    image: "/food-tour-richmond.jpg",
    tourType: "Food & Drink",
    rating: 4.8,
    reviews: 1102,
    title: "Richmond Food Tour: Taste the Best of Virginia Cuisine",
    duration: "3 hours",
    price: "₹2,900",
  },
]

export function WishlistGrid() {
  const [wishlistTours, setWishlistTours] = useState(initialWishlistTours)

  const handleRemove = (id: number) => {
    setWishlistTours(wishlistTours.filter((tour) => tour.id !== id))
  }

  const handleClearAll = () => {
    setWishlistTours([])
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 md:mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Heart className="h-6 w-6 md:h-7 md:w-7 text-[#1a9cb0] fill-[#1a9cb0]" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">My Wishlist</h1>
          </div>
          <p className="text-sm md:text-base text-gray-500">
            {wishlistTours.length} {wishlistTours.length === 1 ? "tour" : "tours"} saved
          </p>
        </div>

        {wishlistTours.length > 0 && (
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Share2 className="h-4 w-4" />
              <span className="hidden sm:inline">Share List</span>
            </button>
            <button
              onClick={handleClearAll}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-white border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
            >
              <Trash2 className="h-4 w-4" />
              <span className="hidden sm:inline">Clear All</span>
            </button>
          </div>
        )}
      </div>

      {/* Tours Grid or Empty State */}
      {wishlistTours.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {wishlistTours.map((tour) => (
            <WishlistTourCard key={tour.id} {...tour} onRemove={() => handleRemove(tour.id)} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 md:py-24 text-center">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <Heart className="h-10 w-10 md:h-12 md:w-12 text-gray-300" />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h2>
          <p className="text-gray-500 mb-6 max-w-md px-4">
            Start exploring and save your favorite tours and experiences to plan your perfect trip.
          </p>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a9cb0] text-white font-medium rounded-lg hover:bg-[#158a9c] transition-colors"
          >
            Explore Tours
          </Link>
        </div>
      )}

      {/* Recommendations Section */}
      {wishlistTours.length > 0 && (
        <div className="mt-12 md:mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                id: 101,
                image: "/brewery-tour-richmond-craft-beer.jpg",
                tourType: "Food & Drink",
                rating: 4.7,
                reviews: 445,
                title: "Richmond Craft Brewery Tour with Tastings",
                duration: "4 hours",
                price: "₹3,200",
              },
              {
                id: 102,
                image: "/kayak-tour-james-river-richmond.jpg",
                tourType: "Water Sports",
                rating: 4.8,
                reviews: 312,
                title: "James River Kayak Adventure: Downtown Richmond",
                duration: "3 hours",
                price: "₹2,600",
              },
              {
                id: 103,
                image: "/art-walk-richmond-murals.jpg",
                tourType: "Art & Culture",
                rating: 4.6,
                reviews: 198,
                title: "Richmond Street Art Walking Tour",
                duration: "2 hours",
                price: "₹1,500",
              },
              {
                id: 104,
                image: "/civil-war-battlefield-tour.jpg",
                tourType: "History Tours",
                rating: 4.9,
                reviews: 567,
                title: "Civil War Battlefields: Half-Day History Tour",
                duration: "5 hours",
                price: "₹3,800",
              },
            ].map((tour) => (
              <WishlistTourCard key={tour.id} {...tour} onRemove={() => {}} showAddButton />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
