"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Star, Mail } from "lucide-react"

const popularTours = [
  {
    id: 1,
    image: "/historic-trolley-tour-richmond-vintage-red-trolley.jpg",
    title: "London: Oxford and Cotswolds Villages Day Trip",
    rating: 4.6,
    reviews: 1446,
    price: "₹7,151",
  },
  {
    id: 2,
    image: "/ghost-tour-dark-spooky-shockoe-bottom-richmond.jpg",
    title: "Prague: Old Town and Underground Tour",
    rating: 4.8,
    reviews: 777,
    price: "₹3,031",
  },
  {
    id: 3,
    image: "/sightseeing-tour-van-richmond-virginia-city.jpg",
    title: "Istanbul: Turkish Mosaic Lamp Workshop",
    rating: 4.9,
    reviews: 2826,
    price: "₹2,016",
  },
  {
    id: 4,
    image: "/segway-tour-richmond-landmark-historic.jpg",
    title: "Budapest: Vampires and Myths Night Tour",
    rating: 4.6,
    reviews: 3640,
    price: "₹2,105",
  },
  {
    id: 5,
    image: "/historic-trolley-tour-richmond-vintage-red-trolley.jpg",
    title: "Rome: Skip-the-Line Colosseum Tour",
    rating: 4.7,
    reviews: 2150,
    price: "₹4,500",
  },
]

const recentPosts = [
  {
    slug: "best-adventure-tours-2024",
    title: "Best Adventure Tours to Take in 2024",
    date: "Dec 10, 2024",
  },
  {
    slug: "food-tours-around-the-world",
    title: "Food Tours Around the World",
    date: "Dec 8, 2024",
  },
  {
    slug: "traveling-with-kids-tips",
    title: "Traveling with Kids: Essential Tips",
    date: "Dec 5, 2024",
  },
]

export function BlogSidebar() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [email, setEmail] = useState("")

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth
      const newSlide =
        direction === "left" ? Math.max(0, currentSlide - 1) : Math.min(popularTours.length - 1, currentSlide + 1)

      sliderRef.current.scrollTo({
        left: newSlide * slideWidth,
        behavior: "smooth",
      })
      setCurrentSlide(newSlide)
    }
  }

  const handleScroll = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth
      const newSlide = Math.round(sliderRef.current.scrollLeft / slideWidth)
      setCurrentSlide(newSlide)
    }
  }

  return (
    <aside className="w-full lg:w-80 flex-shrink-0 space-y-6">
      {/* Popular Tours Slider */}
      <div className="bg-white rounded-xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900">Popular Tours</h3>
          <div className="flex gap-1">
            <button
              onClick={() => scroll("left")}
              disabled={currentSlide === 0}
              className="p-1.5 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous tour"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={currentSlide === popularTours.length - 1}
              className="p-1.5 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Next tour"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {popularTours.map((tour) => (
            <Link key={tour.id} href={`/tours/${tour.id}`} className="flex-shrink-0 w-full snap-start">
              <div className="relative h-40 rounded-lg overflow-hidden mb-3">
                <img src={tour.image || "/placeholder.svg"} alt={tour.title} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-medium text-gray-900 text-sm line-clamp-2 mb-2">{tour.title}</h4>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{tour.rating}</span>
                </div>
                <span className="text-sm text-gray-500">({tour.reviews} reviews)</span>
              </div>
              <p className="font-bold text-[#1a9cb0]">{tour.price}</p>
            </Link>
          ))}
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          {popularTours.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (sliderRef.current) {
                  sliderRef.current.scrollTo({
                    left: index * sliderRef.current.clientWidth,
                    behavior: "smooth",
                  })
                  setCurrentSlide(index)
                }
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-[#1a9cb0]" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-[#1a9cb0] rounded-xl p-5 text-white">
        <div className="flex items-center gap-2 mb-3">
          <Mail className="h-5 w-5" />
          <h3 className="font-bold">Subscribe to Newsletter</h3>
        </div>
        <p className="text-white/90 text-sm mb-4">Get travel tips and exclusive offers delivered to your inbox.</p>
        <div className="space-y-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="w-full bg-white text-[#1a9cb0] font-medium py-2.5 rounded-lg hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-xl p-5 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#1a9cb0] transition-colors line-clamp-2">
                {post.title}
              </h4>
              <p className="text-xs text-gray-500 mt-1">{post.date}</p>
            </Link>
          ))}
        </div>
        <Link href="/blog" className="block text-center text-[#1a9cb0] text-sm font-medium mt-4 hover:underline">
          View all posts
        </Link>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-xl p-5 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {["Travel Tips", "City Guides", "Adventure", "Food & Drink", "Family Travel", "Sustainability"].map(
            (category) => (
              <Link
                key={category}
                href={`/blog?category=${category}`}
                className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0 hover:text-[#1a9cb0] transition-colors"
              >
                <span className="text-sm text-gray-700">{category}</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </Link>
            ),
          )}
        </div>
      </div>
    </aside>
  )
}
