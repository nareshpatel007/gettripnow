"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
    Star,
    MapPin,
    Clock,
    Calendar,
    ChevronLeft,
    ChevronRight,
    Heart,
    Share2,
    Camera,
    X,
    Info,
    Ticket,
    Globe,
    ArrowRight,
    User,
} from "lucide-react"

// Define props
type Props = {
    slug: any
}

export function AttractionDetail({ slug }: Props) {
    // Define state
    const [isLoading, setIsLoading] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [savedToWishlist, setSavedToWishlist] = useState(false);
    const [attractionData, setAttractionData] = useState<object>({});
    const [toursData, setToursData] = useState<any>([]);
    const [currentPage, setCurrentPage] = useState<any>(1);
    const [totalPages, setTotalPages] = useState<any>(0);
    const [totalCount, setTotalCount] = useState<any>(0);

    // Popular tours slider state
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    // const totalPages = Math.ceil(relatedTours.length / TOURS_PER_PAGE);
    const paginatedTours = 0; // relatedTours.slice((currentPage - 1) * TOURS_PER_PAGE, currentPage * TOURS_PER_PAGE);

    // Init data
    useEffect(() => {
        const controller = new AbortController();
        const fetchAttraction = async () => {
            try {
                // Fetch the data
                const response = await fetch("/api/attractions/single", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Parse the JSON response
                const data = await response.json();

                // Update the state
                if (data?.success) {
                    setAttractionData(data?.data?.attraction || {});
                    setToursData(data?.data?.tours?.result || []);
                    setTotalPages(data?.data?.tours?.last_page ?? 0);
                    setCurrentPage(data?.data?.tours?.current_page ?? 1);
                    setTotalCount(data?.data?.tours?.total ?? 0);
                }
            } catch (error: any) {
                if (error.name !== "AbortError") {
                    console.error("Failed to fetch tours:", error);
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchAttraction();
        return () => controller.abort();
    }, []);

    const openLightbox = (index: number) => {
        setLightboxIndex(index)
        setLightboxOpen(true)
    }

    const closeLightbox = () => {
        setLightboxOpen(false)
    }

    const goToPrevious = () => {
        // setLightboxIndex((prev) => (prev === 0 ? attractionData.images.length - 1 : prev - 1))
    }

    const goToNext = () => {
        // setLightboxIndex((prev) => (prev === attractionData.images.length - 1 ? 0 : prev + 1))
    }

    const scrollSlider = (direction: "left" | "right") => {
        // if (sliderRef.current) {
        //     const slideWidth = sliderRef.current.clientWidth
        //     const newSlide =
        //         direction === "left" ? Math.max(0, currentSlide - 1) : Math.min(popularTours.length - 1, currentSlide + 1)

        //     sliderRef.current.scrollTo({
        //         left: newSlide * slideWidth,
        //         behavior: "smooth",
        //     })
        //     setCurrentSlide(newSlide)
        // }
    }

    const handleSliderScroll = () => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.clientWidth
            const newSlide = Math.round(sliderRef.current.scrollLeft / slideWidth)
            setCurrentSlide(newSlide)
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 md:py-3">
            {/* Breadcrumb */}
            <nav className="text-xs md:text-sm text-gray-500 mb-4 overflow-x-auto whitespace-nowrap">
                <Link href="/" className="hover:underline">
                    Home
                </Link>
                <span className="mx-1 md:mx-2">/</span>
                <Link href="/attractions" className="hover:underline">
                    Attractions
                </Link>
                <span className="mx-1 md:mx-2">/</span>
                <span className="text-gray-700">{attractionData?.name}</span>
            </nav>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content */}
                <div className="flex-1 min-w-0">
                    {/* Hero Section */}
                    <div className="mb-6">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                                    {attractionData.name}
                                </h1>
                                <div className="flex items-center flex-wrap gap-3 text-sm">
                                    <div className="flex items-center gap-1">
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    className={`h-4 w-4 ${star <= Math.floor(attractionData.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                                                />
                                            ))}
                                        </div>
                                        <span className="font-medium">{attractionData.rating}</span>
                                        <span className="text-gray-500">({attractionData.reviews.toLocaleString()} reviews)</span>
                                    </div>
                                    <span className="text-gray-300">|</span>
                                    <span className="flex items-center gap-1 text-gray-600">
                                        <MapPin className="h-4 w-4" />
                                        {attractionData.location}
                                    </span>
                                </div>
                            </div>
                            <div className="hidden md:flex items-center gap-3">
                                <button
                                    onClick={() => setSavedToWishlist(!savedToWishlist)}
                                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <Heart className={`h-5 w-5 ${savedToWishlist ? "fill-red-500 text-red-500" : ""}`} />
                                    <span>{savedToWishlist ? "Saved" : "Save"}</span>
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                    <Share2 className="h-5 w-5" />
                                    <span>Share</span>
                                </button>
                            </div>
                        </div>

                        {/* Image Gallery */}
                        <div className="grid grid-cols-4 gap-2 mb-4">
                            <div
                                className="col-span-4 md:col-span-2 row-span-2 relative rounded-lg overflow-hidden aspect-[4/3] cursor-pointer"
                                onClick={() => openLightbox(0)}
                            >
                                <Image
                                    src={attractionData.images[0] || "/placeholder.svg"}
                                    alt={attractionData.name}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            {attractionData.images.slice(1, 5).map((img, index) => (
                                <div
                                    key={index}
                                    className="hidden md:block relative rounded-lg overflow-hidden aspect-[4/3] cursor-pointer hover:opacity-90 transition-opacity"
                                    onClick={() => openLightbox(index + 1)}
                                >
                                    <Image
                                        src={img || "/placeholder.svg"}
                                        alt={`${attractionData.name} ${index + 2}`}
                                        fill
                                        className="object-cover"
                                    />
                                    {index === 3 && attractionData.images.length > 5 && (
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                            <div className="text-white text-center">
                                                <Camera className="h-6 w-6 mx-auto mb-1" />
                                                <span className="text-sm font-medium">+{attractionData.images.length - 5} photos</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Mobile Action Buttons */}
                        <div className="flex md:hidden items-center gap-3 mb-6">
                            <button
                                onClick={() => setSavedToWishlist(!savedToWishlist)}
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <Heart className={`h-5 w-5 ${savedToWishlist ? "fill-red-500 text-red-500" : ""}`} />
                                <span>{savedToWishlist ? "Saved" : "Save"}</span>
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <Share2 className="h-5 w-5" />
                                <span>Share</span>
                            </button>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">About {attractionData.name}</h2>
                        <p className="text-gray-600 mb-4">{attractionData.description}</p>
                        <p className="text-gray-600 whitespace-pre-line">{attractionData.longDescription}</p>

                        {/* Quick Info */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-200">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-[#e6f7f9] rounded-lg">
                                    <Clock className="h-5 w-5 text-[#1a9cb0]" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Opening Hours</p>
                                    <p className="text-sm font-medium text-gray-900">{attractionData.openingHours}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-[#e6f7f9] rounded-lg">
                                    <Calendar className="h-5 w-5 text-[#1a9cb0]" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Best Time</p>
                                    <p className="text-sm font-medium text-gray-900">{attractionData.bestTimeToVisit}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-[#e6f7f9] rounded-lg">
                                    <Info className="h-5 w-5 text-[#1a9cb0]" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Duration</p>
                                    <p className="text-sm font-medium text-gray-900">{attractionData.averageVisitDuration}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-[#e6f7f9] rounded-lg">
                                    <Globe className="h-5 w-5 text-[#1a9cb0]" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Website</p>
                                    <a href="#" className="text-sm font-medium text-[#1a9cb0] hover:underline">
                                        {attractionData.website}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Highlights */}
                    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Highlights</h2>
                        <ul className="space-y-3">
                            {attractionData.highlights.map((highlight, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#1a9cb0] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Related Tours Section with Pagination */}
                    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">Tours at {attractionData.name}</h2>
                                <p className="text-gray-500 text-sm mt-1">{relatedTours.length} experiences available</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Ticket className="h-5 w-5 text-[#1a9cb0]" />
                                <span className="text-sm font-medium text-[#1a9cb0]">Book now, pay later</span>
                            </div>
                        </div>

                        {/* Tour Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                            {paginatedTours.map((tour) => (
                                <Link
                                    key={tour.id}
                                    href={`/tours/${tour.id}`}
                                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group"
                                >
                                    <div className="relative h-40">
                                        <Image src={tour.image || "/placeholder.svg"} alt={tour.title} fill className="object-cover" />
                                        {tour.badge && (
                                            <span className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-xs font-semibold text-gray-900">
                                                {tour.badge}
                                            </span>
                                        )}
                                        <button className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full hover:bg-white transition-colors">
                                            <Heart className="h-4 w-4 text-gray-600" />
                                        </button>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 mb-2 group-hover:text-[#1a9cb0] transition-colors">
                                            {tour.title}
                                        </h3>
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="flex items-center gap-1">
                                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                <span className="text-sm font-medium">{tour.rating}</span>
                                            </div>
                                            <span className="text-sm text-gray-500">({tour.reviews.toLocaleString()})</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                            <Clock className="h-4 w-4" />
                                            <span>{tour.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-[#1a9cb0]">{tour.price}</span>
                                            {tour.originalPrice && (
                                                <span className="text-sm text-gray-400 line-through">{tour.originalPrice}</span>
                                            )}
                                            <span className="text-sm text-gray-500">per person</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-center gap-2">
                            <button
                                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                                disabled={currentPage === 1}
                                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-10 h-10 rounded-lg font-medium transition-colors ${currentPage === page
                                        ? "bg-[#1a9cb0] text-white"
                                        : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}
                            <button
                                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    {/* Related Blogs Section */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">Related Articles</h2>
                            <Link
                                href="/blog"
                                className="text-[#1a9cb0] font-medium text-sm flex items-center gap-1 hover:underline"
                            >
                                View all <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedBlogs.map((blog) => (
                                <Link key={blog.slug} href={`/blog/${blog.slug}`} className="group">
                                    <div className="relative h-40 rounded-lg overflow-hidden mb-3">
                                        <Image
                                            src={blog.image || "/placeholder.svg"}
                                            alt={blog.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2 group-hover:text-[#1a9cb0] transition-colors">
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">{blog.excerpt}</p>
                                    <div className="flex items-center gap-3 text-xs text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <User className="h-3.5 w-3.5" />
                                            {blog.author}
                                        </span>
                                        <span>{blog.date}</span>
                                        <span>{blog.readTime}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <aside className="w-full lg:w-80 flex-shrink-0 space-y-6">
                    {/* Book Now Card */}
                    <div className="bg-white rounded-xl p-5 shadow-sm sticky top-4">
                        <h3 className="font-bold text-gray-900 mb-3">Plan Your Visit</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Book tours and skip-the-line tickets for the best experience at {attractionData.name}.
                        </p>
                        <Link
                            href="#tours"
                            className="block w-full bg-[#1a9cb0] text-white text-center font-medium py-3 rounded-lg hover:bg-[#158a9c] transition-colors"
                        >
                            View All Tours
                        </Link>
                        <p className="text-xs text-gray-500 text-center mt-3">Free cancellation on most bookings</p>
                    </div>

                    {/* Popular Tours Slider */}
                    <div className="bg-white rounded-xl p-5 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-gray-900">Popular in Paris</h3>
                            <div className="flex gap-1">
                                <button
                                    onClick={() => scrollSlider("left")}
                                    disabled={currentSlide === 0}
                                    className="p-1.5 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                    aria-label="Previous tour"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => scrollSlider("right")}
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
                            onScroll={handleSliderScroll}
                            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            {popularTours.map((tour) => (
                                <Link key={tour.id} href={`/tours/${tour.id}`} className="flex-shrink-0 w-full snap-start">
                                    <div className="relative h-40 rounded-lg overflow-hidden mb-3">
                                        <Image src={tour.image || "/placeholder.svg"} alt={tour.title} fill className="object-cover" />
                                    </div>
                                    <h4 className="font-medium text-gray-900 text-sm line-clamp-2 mb-2">{tour.title}</h4>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="flex items-center gap-1">
                                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            <span className="text-sm font-medium">{tour.rating}</span>
                                        </div>
                                        <span className="text-sm text-gray-500">({tour.reviews.toLocaleString()})</span>
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
                                    className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? "bg-[#1a9cb0]" : "bg-gray-300"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Quick Facts */}
                    <div className="bg-white rounded-xl p-5 shadow-sm">
                        <h3 className="font-bold text-gray-900 mb-4">Quick Facts</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                                <span className="text-sm text-gray-600">Built</span>
                                <span className="text-sm font-medium text-gray-900">1887-1889</span>
                            </div>
                            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                                <span className="text-sm text-gray-600">Height</span>
                                <span className="text-sm font-medium text-gray-900">330 meters</span>
                            </div>
                            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                                <span className="text-sm text-gray-600">Annual Visitors</span>
                                <span className="text-sm font-medium text-gray-900">~7 million</span>
                            </div>
                            <div className="flex items-center justify-between py-2">
                                <span className="text-sm text-gray-600">Observation Levels</span>
                                <span className="text-sm font-medium text-gray-900">3</span>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                    role="dialog"
                    aria-modal="true"
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 z-10 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Close lightbox"
                    >
                        <X className="h-6 w-6" />
                    </button>

                    <div className="absolute top-4 left-4 text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                        {lightboxIndex + 1} / {attractionData.images.length}
                    </div>

                    <button
                        onClick={goToPrevious}
                        className="absolute left-2 md:left-4 z-10 p-2 md:p-3 text-white hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
                    </button>

                    <div className="relative w-full h-full max-w-5xl max-h-[80vh] mx-4 md:mx-16">
                        <Image
                            src={attractionData.images[lightboxIndex] || "/placeholder.svg"}
                            alt={`${attractionData.name} ${lightboxIndex + 1}`}
                            fill
                            className="object-contain"
                        />
                    </div>

                    <button
                        onClick={goToNext}
                        className="absolute right-2 md:right-4 z-10 p-2 md:p-3 text-white hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Next image"
                    >
                        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
                    </button>

                    <div className="absolute bottom-4 left-0 right-0 px-4">
                        <div className="flex gap-2 overflow-x-auto justify-center pb-2 scrollbar-hide">
                            {attractionData.images.map((img, index) => (
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
