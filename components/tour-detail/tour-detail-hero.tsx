"use client"

import type React from "react";
import { useState } from "react";
import { Star, Share2, Heart, Flag, Camera, X, ChevronLeft, ChevronRight, Verified } from "lucide-react";
import Image from "next/image";

// Define props
interface TourDetailHeroProps {
    tourData: any;
}

export function TourDetailHero({ tourData }: TourDetailHeroProps) {
    // Define state
    const [mainImage, setMainImage] = useState(0);
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

    // Close the lightbox
    const closeLightbox = () => {
        setLightboxOpen(false)
    }

    // Go to the previous image
    const goToPrevious = () => {
        if (!lightboxOpen) return;

        // If the current image is the first one, go back to the last one
        if (!lightboxIndex) {
            setLightboxIndex(0);
            return;
        }

        // If the current image is not the first one, go to the previous one
        setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    // Go to the next image
    const goToNext = () => {
        if (!lightboxOpen) return;

        // If the current image is the last one, go back to the first one
        if (lightboxIndex === tourData?.tour?.media_gallery.length - 1) {
            setLightboxIndex(0)
            return;
        }

        // If the current image is not the last one, go to the next one
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
            <div className="mb-4">
                <h1 className="text-2xl md:text-2xl font-bold text-[#1a2b49] mb-2">{tourData?.tour?.name}</h1>
                <div className="flex items-center flex-wrap gap-3 text-sm">
                    <div className="flex items-center gap-1">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className={`h-4 w-4 ${star <= Math.floor(tourData?.tour?.average_rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                                />
                            ))}
                        </div>
                        {tourData?.tour?.total_reviews && <span className="text-gray-600 ml-1 text-sm">{tourData?.tour?.total_reviews} reviews</span>}
                    </div>
                    <span className="text-gray-300">|</span>
                    <span className="flex text-gray-600 items-center text-sm">
                        <Verified className="inline-block h-4 w-4 mr-1 text-[#f53]" /> Recommended by 95% of travelers
                    </span>
                </div>
            </div>
            <div className="mb-4">
                <div className="grid grid-cols-4 gap-2">
                    <div
                        className="col-span-4 md:col-span-2 row-span-2 relative rounded-lg overflow-hidden aspect-[4/3] cursor-pointer"
                        onClick={() => openLightbox(0)}
                    >
                        <Image
                            src={tourData?.tour?.media_gallery[0] || "/placeholder.svg"}
                            alt={tourData?.tour?.name}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    {tourData?.tour?.media_gallery.slice(1, 5).map((img: string, index: number) => (
                        <div
                            key={index}
                            className="hidden md:block relative rounded-lg overflow-hidden aspect-[4/3] cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => (index === 2 ? openLightbox(3) : openLightbox(index + 1))}
                        >
                            <Image src={img || "/placeholder.svg"} alt={`Tour image ${index + 2}`} fill className="object-cover" />
                            {index === 3 && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                    <div className="text-white text-center">
                                        <Camera className="h-6 w-6 mx-auto mb-1" />
                                        <span className="text-sm font-medium">See more</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
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
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 z-10 p-2 text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                        aria-label="Close lightbox"
                    >
                        <X className="h-6 w-6" />
                    </button>
                    <div className="absolute top-4 left-4 text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                        {lightboxIndex + 1} / {tourData?.tour?.media_gallery.length}
                    </div>
                    <button
                        onClick={goToPrevious}
                        className="absolute left-2 md:left-4 z-10 p-2 md:p-3 text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
                    </button>
                    <div className="relative w-full h-full max-w-5xl max-h-[80vh] mx-4 md:mx-16">
                        <Image
                            src={tourData?.tour?.media_gallery[lightboxIndex] || "/placeholder.svg"}
                            alt={`Tour image ${lightboxIndex + 1}`}
                            fill
                            className="object-contain"
                        />
                    </div>
                    <button
                        onClick={goToNext}
                        className="absolute right-2 md:right-4 z-10 p-2 md:p-3 text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                        aria-label="Next image"
                    >
                        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
                    </button>
                    <div className="absolute bottom-4 left-0 right-0 px-4">
                        <div className="flex gap-2 overflow-x-auto justify-center pb-2 scrollbar-hide">
                            {tourData?.tour?.media_gallery && tourData?.tour?.media_gallery.map((img: string, index: number) => (
                                <button
                                    key={index}
                                    onClick={() => setLightboxIndex(index)}
                                    className={`relative flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-md overflow-hidden transition-all ${index === lightboxIndex ? "ring-2 ring-white opacity-100" : "opacity-50 hover:opacity-75"
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
