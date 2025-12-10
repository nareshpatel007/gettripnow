"use client"

import { useState } from "react"
import { Star, ChevronDown, Search, MoreHorizontal, CheckCircle, X, ChevronLeft, ChevronRight } from "lucide-react"

export function TourReviews() {
  const [sortBy, setSortBy] = useState("Most recent")
  const [showSortDropdown, setShowSortDropdown] = useState(false)
  const [expandedReviews, setExpandedReviews] = useState<number[]>([])
  const [visibleReviews, setVisibleReviews] = useState(3)
  const [lightbox, setLightbox] = useState<{ photos: string[]; currentIndex: number } | null>(null)

  const ratingBreakdown = [
    { stars: 5, percentage: 92 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 0 },
  ]

  const highlightedReviews = [
    {
      name: "Samantha",
      location: "United States",
      date: "November 27, 2025",
      rating: 5,
      verified: true,
      text: "The trip was very well planned and had lots of sights and opportunities to walk around! The tour guide was also very funny and had many interesting points of interest that she really brought to life with her storytelling.",
    },
    {
      name: "Judy",
      location: "United States",
      date: "November 22, 2025",
      rating: 5,
      verified: true,
      text: "This trip was excellent. Our guide was so helpful in every way. She was very knowledgeable and very kind.",
    },
  ]

  const allReviews = [
    {
      name: "Samantha",
      location: "United States",
      date: "November 27, 2025",
      travelType: "Traveled with partner",
      rating: 5,
      verified: true,
      text: "The trip was very well planned and had lots of sights and opportunities to walk around! The tour guide was also very funny and had many interesting points of interest that she noted along the trip.",
      photos: [],
    },
    {
      name: "Judy",
      location: "United States",
      date: "November 22, 2025",
      travelType: "Traveled with partner",
      rating: 5,
      verified: true,
      text: "This trip was excellent. Our guide was so helpful in every way. She was very knowledgeable and very kind.",
      photos: [],
    },
    {
      name: "Brandon",
      location: "United States",
      date: "November 16, 2025",
      travelType: "Traveled solo",
      rating: 5,
      verified: true,
      text: "Amazing trip. Cathrine was a great guide. Worth the price",
      photos: ["/mountain-view-with-red-trees.jpg", "/japanese-temple-gate.jpg", "/mount-fuji-scenic-view.jpg"],
    },
    {
      name: "Michael",
      location: "Canada",
      date: "November 14, 2025",
      travelType: "Traveled with family",
      rating: 5,
      verified: true,
      text: "An absolutely wonderful experience from start to finish. The organization was impeccable and our guide made every moment special. Would highly recommend to anyone visiting the area.",
      photos: [],
    },
    {
      name: "Emma",
      location: "United Kingdom",
      date: "November 12, 2025",
      travelType: "Traveled with partner",
      rating: 4,
      verified: true,
      text: "Great tour overall. The guide was knowledgeable and friendly. Only minor issue was the timing felt a bit rushed at some stops.",
      photos: [],
    },
    {
      name: "David",
      location: "Australia",
      date: "November 10, 2025",
      travelType: "Traveled solo",
      rating: 5,
      verified: true,
      text: "Exceeded all expectations! Beautiful scenery and perfect weather. Our guide Sarah was fantastic - so passionate about the history and culture.",
      photos: ["/scenic-landscape-tour.jpg", "/historic-building-architecture.jpg"],
    },
  ]

  const toggleExpand = (index: number) => {
    setExpandedReviews((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const getAvatarColor = (name: string) => {
    const colors = ["bg-[#e85a4f]", "bg-[#4a90a4]", "bg-[#8b5cf6]", "bg-[#f59e0b]", "bg-[#10b981]"]
    const index = name.charCodeAt(0) % colors.length
    return colors[index]
  }

  const handleLoadMore = () => {
    setVisibleReviews((prev) => Math.min(prev + 3, allReviews.length))
  }

  const openLightbox = (photos: string[], index: number) => {
    setLightbox({ photos, currentIndex: index })
  }

  const closeLightbox = () => {
    setLightbox(null)
  }

  const goToPrevious = () => {
    if (lightbox) {
      setLightbox({
        ...lightbox,
        currentIndex: lightbox.currentIndex === 0 ? lightbox.photos.length - 1 : lightbox.currentIndex - 1,
      })
    }
  }

  const goToNext = () => {
    if (lightbox) {
      setLightbox({
        ...lightbox,
        currentIndex: lightbox.currentIndex === lightbox.photos.length - 1 ? 0 : lightbox.currentIndex + 1,
      })
    }
  }

  const goToSlide = (index: number) => {
    if (lightbox) {
      setLightbox({ ...lightbox, currentIndex: index })
    }
  }

  return (
    <section className="py-8 border-b border-gray-200">
      {lightbox && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          {lightbox.photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
          )}

          <div className="flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.photos[lightbox.currentIndex] || "/placeholder.svg"}
              alt={`Review photo ${lightbox.currentIndex + 1}`}
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg"
            />

            {lightbox.photos.length > 1 && (
              <div className="flex items-center gap-2 mt-4">
                {lightbox.photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === lightbox.currentIndex ? "bg-white" : "bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            )}

            <p className="text-white/70 text-sm mt-2">
              {lightbox.currentIndex + 1} / {lightbox.photos.length}
            </p>
          </div>

          {lightbox.photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      )}

      <h2 className="text-xl font-bold text-gray-900 mb-6">Highlighted reviews from other travelers</h2>

      {/* Highlighted Reviews Grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {highlightedReviews.map((review, index) => {
          const isExpanded = expandedReviews.includes(index)
          const shouldTruncate = review.text.length > 150
          const displayText = shouldTruncate && !isExpanded ? review.text.slice(0, 150) + "..." : review.text

          return (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${star <= review.rating ? "fill-[#f53] text-[#f53]" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-900 ml-1">{review.rating}</span>
              </div>

              <div className="flex items-start gap-3 mb-3">
                <div
                  className={`w-10 h-10 rounded-full ${getAvatarColor(review.name)} flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white font-semibold text-sm">{review.name.charAt(0).toUpperCase()}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {review.name} – {review.location}
                  </p>
                  <p className="text-sm text-gray-500">{review.date} - Verified booking</p>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed">
                {displayText}
                {shouldTruncate && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-gray-900 font-semibold ml-1 hover:underline"
                  >
                    {isExpanded ? "Show less" : "Read more"}
                  </button>
                )}
              </p>
            </div>
          )
        })}
      </div>

      {/* Rating breakdown section */}
      <div className="grid md:grid-cols-3 gap-8 mb-8 pt-6 border-t border-gray-200">
        <div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-5xl font-bold text-gray-900">4.8</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
          </div>
          <p className="text-gray-500">3,847 reviews</p>
        </div>

        <div className="md:col-span-2">
          {ratingBreakdown.map((item) => (
            <div key={item.stars} className="flex items-center gap-3 mb-2">
              <span className="text-sm text-gray-600 w-16">{item.stars} stars</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-500 rounded-full" style={{ width: `${item.percentage}%` }} />
              </div>
              <span className="text-sm text-gray-500 w-10">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Sort */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search reviews"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a9cb0] focus:border-transparent"
          />
        </div>
        <div className="relative">
          <button
            className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-sm"
            onClick={() => setShowSortDropdown(!showSortDropdown)}
          >
            Sort by: <span className="font-medium">{sortBy}</span>
            <ChevronDown className="h-4 w-4" />
          </button>
          {showSortDropdown && (
            <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              {["Most recent", "Highest rated", "Lowest rated"].map((option) => (
                <button
                  key={option}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                  onClick={() => {
                    setSortBy(option)
                    setShowSortDropdown(false)
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="space-y-0 divide-y divide-gray-200">
        {allReviews.slice(0, visibleReviews).map((review, index) => (
          <div key={index} className="py-6 first:pt-0">
            {/* Rating row */}
            <div className="flex items-center gap-1 mb-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${star <= review.rating ? "fill-[#1a4d80] text-[#1a4d80]" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-900 ml-1">{review.rating}</span>
            </div>

            {/* User info row with menu */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${getAvatarColor(review.name)} flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white font-semibold text-sm">{review.name.charAt(0).toUpperCase()}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {review.name} – {review.location}
                  </p>
                  <p className="text-sm text-gray-500">
                    {review.date} - {review.travelType}
                  </p>
                </div>
              </div>
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <MoreHorizontal className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            {/* Photos if available */}
            {review.photos && review.photos.length > 0 && (
              <div className="flex gap-2 mb-3">
                {review.photos.map((photo, photoIndex) => (
                  <button
                    key={photoIndex}
                    onClick={() => openLightbox(review.photos, photoIndex)}
                    className="focus:outline-none focus:ring-2 focus:ring-[#1a9cb0] rounded-lg overflow-hidden"
                  >
                    <img
                      src={photo || "/placeholder.svg"}
                      alt={`Review photo ${photoIndex + 1}`}
                      className="w-20 h-20 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Review text */}
            <p className="text-sm text-gray-700 leading-relaxed mb-3">{review.text}</p>

            {/* Verified booking badge */}
            {review.verified && (
              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-gray-500" />
                <span>Verified booking</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {visibleReviews < allReviews.length && (
        <button
          onClick={handleLoadMore}
          className="mt-6 w-full py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Load more
        </button>
      )}
    </section>
  )
}
