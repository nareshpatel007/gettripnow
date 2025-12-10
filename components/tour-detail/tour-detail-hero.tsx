"use client"

import type React from "react"

import { useState } from "react"
import { Star, Share2, Heart, Flag, Camera, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function TourDetailHero() {
  const [mainImage, setMainImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const images = [
    "/people-swimming-with-stingrays-in-crystal-clear-ca.jpg",
    "/snorkeling-colorful-coral-reef-tropical-fish-under.jpg",
    "/family-touching-friendly-stingray-in-shallow-blue-.jpg",
    "/tourists-on-boat-tour-in-turquoise-caribbean-sea.jpg",
    // Additional images for the gallery
    "/tropical-beach-paradise.png",
    "/underwater-coral-reef.png",
    "/boat-tour-ocean.jpg",
    "/stingray-swimming.jpg",
    "/snorkeling-adventure.jpg",
    "/caribbean-sunset.jpg",
    "/tropical-fish.jpg",
    "/tropical-beach-getaway.png",
    "/crystal-clear-water.jpg",
    "/ocean-wildlife.jpg",
    "/island-tour.jpg",
    "/vibrant-coral-reef.png",
    "/diving-experience.jpg",
    "/serene-sea-turtle.png",
    "/tropical-beach-resort.png",
    "/water-sports.jpg",
    "/lush-tropical-island.png",
    "/expansive-ocean-vista.png",
    "/kayaking-adventure.png",
    "/sunset-cruise.png",
    "/tropical-beach-palms.png",
    "/blue-lagoon.jpg",
    "/scuba-diving.jpg",
    "/catamaran-tour.jpg",
  ]

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = () => {
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowLeft") goToPrevious()
    if (e.key === "ArrowRight") goToNext()
  }

  return (
    <div>
      {/* Title Section */}
      <div className="mb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Stingray City Sandbar, Coral Gardens Snorkeling & Blue Fish Point
        </h1>
        <div className="flex items-center flex-wrap gap-3 text-sm">
          <div className="flex items-center gap-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-medium">5.0</span>
            <span className="text-gray-500">(3,847 reviews)</span>
          </div>
          <span className="text-gray-300">|</span>
          <span className="text-gray-600">Grand Cayman, Cayman Islands</span>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="mb-4">
        <div className="grid grid-cols-4 gap-2">
          {/* Main Large Image - Added click handler */}
          <div
            className="col-span-4 md:col-span-2 row-span-2 relative rounded-lg overflow-hidden aspect-[4/3] cursor-pointer"
            onClick={() => openLightbox(mainImage)}
          >
            <Image
              src={images[mainImage] || "/placeholder.svg"}
              alt="Tour main image"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Thumbnail Images - Updated click handlers */}
          {images.slice(1, 4).map((img, index) => (
            <div
              key={index}
              className="hidden md:block relative rounded-lg overflow-hidden aspect-[4/3] cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => (index === 2 ? openLightbox(3) : openLightbox(index + 1))}
            >
              <Image src={img || "/placeholder.svg"} alt={`Tour image ${index + 2}`} fill className="object-cover" />
              {index === 2 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Camera className="h-6 w-6 mx-auto mb-1" />
                    <span className="text-sm font-medium">+{images.length - 4} photos</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
          <Share2 className="h-4 w-4" />
          Share
        </button>
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
          <Heart className="h-4 w-4" />
          Save
        </button>
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
          <Flag className="h-4 w-4" />
          Report
        </button>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
            {lightboxIndex + 1} / {images.length}
          </div>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 z-10 p-2 md:p-3 text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          {/* Main Image */}
          <div className="relative w-full h-full max-w-5xl max-h-[80vh] mx-4 md:mx-16">
            <Image
              src={images[lightboxIndex] || "/placeholder.svg"}
              alt={`Tour image ${lightboxIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 z-10 p-2 md:p-3 text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-4 left-0 right-0 px-4">
            <div className="flex gap-2 overflow-x-auto justify-center pb-2 scrollbar-hide">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setLightboxIndex(index)}
                  className={`relative flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-md overflow-hidden transition-all ${
                    index === lightboxIndex ? "ring-2 ring-white opacity-100" : "opacity-50 hover:opacity-75"
                  }`}
                >
                  <Image src={img || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
