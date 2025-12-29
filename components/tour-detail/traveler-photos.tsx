"use client"

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Define props
interface TravelerPhotosProps {
    photos: string[];
}

export function TravelerPhotos({ photos }: TravelerPhotosProps) {
    // Define state
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    }

    const closeLightbox = () => {
        setLightboxOpen(false);
    }

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
    }

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    }

    // If empty, return null
    if (!photos || photos.length === 0) {
        return null;
    }

    return (
        <section className="py-8 border-b border-gray-200">
            <h2 className="text-xl font-bold text-[#1a2b49] mb-4">Traveler Photos</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {photos && photos.slice(0, 6).map((photo, index) => (
                    <div
                        key={index}
                        onClick={() => openLightbox(index)}
                        className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                    >
                        <Image
                            src={photo || "/placeholder.svg"}
                            alt={`Traveler photo ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
            <button onClick={() => openLightbox(0)} className="mt-4 text-[#f53] text-sm font-medium hover:underline cursor-pointer">
                View all photos →
            </button>

            {lightboxOpen && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 cursor-pointer"
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <div className="absolute top-4 left-4 text-white text-sm font-medium">{currentIndex + 1} / {photos.length}</div>
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            goToPrevious()
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <div className="relative w-full max-w-4xl h-[80vh] mx-16" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={photos[currentIndex].replace("?w=600&h=600&s=1", "") || "/placeholder.svg"}
                            alt={`Traveler photo ${currentIndex + 1}`}
                            fill
                            className="object-contain"
                        />
                    </div>
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            goToNext()
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Dot indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
                        {photos && photos.map((_, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setCurrentIndex(index)
                                }}
                                className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/40 hover:bg-white/60"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Thumbnail strip */}
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2">
                        {photos && photos.map((photo, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setCurrentIndex(index)
                                }}
                                className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all ${index === currentIndex ? "ring-2 ring-white opacity-100" : "opacity-50 hover:opacity-75"
                                    }`}
                            >
                                <Image src={photo || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}
