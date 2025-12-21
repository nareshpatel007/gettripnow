"use client"

import { useState, useRef, useEffect } from "react";
import { TourCard } from "./tour-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function RecommendedSection() {
    // Define state
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [initLoading, setInitLoading] = useState(true);
    const [tourList, setTourList] = useState<any[]>([]);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Init data
    useEffect(() => {
        const controller = new AbortController();
        const filterData = async () => {
            try {
                // Fetch the data
                const response = await fetch("/api/tours/filter_tours", {
                    method: "POST",
                    signal: controller.signal,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        limit: 15,
                        rating: 5
                    }),
                });

                // Handle non-200 responses
                if (response.ok) {
                    // Parse the JSON response
                    const data = await response.json();

                    // Update the state
                    setTourList(data?.data?.result ?? []);
                }
            } catch (error: any) {
                if (error.name !== "AbortError") {
                    console.error("Failed to fetch tours:", error);
                }
            } finally {
                setInitLoading(false);
            }
        };
        filterData();
        return () => controller.abort();
    }, []);

    const checkScrollPosition = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
        }
    }

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth * 0.8
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            })
        }
    }

    return (
        <section className="max-w-7xl mx-auto py-8 md:py-12 px-4 md:px-8">
            <div className="flex items-center justify-between mb-6 md:mb-8">
                <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#1a2b49]">Unforgettable travel experiences</h2>
                <div className="flex gap-2">
                    {!initLoading && tourList.length !== 0 && (
                        <>
                            <button
                                onClick={() => scroll("left")}
                                disabled={!canScrollLeft}
                                className="p-2 rounded-full border border-[#f53] text-[#F53] hover:bg-[#f53] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                                aria-label="Scroll left"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                disabled={!canScrollRight}
                                className="p-2 rounded-full border border-[#f53] text-[#F53] hover:bg-[#f53] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                                aria-label="Scroll right"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </>
                    )}
                </div>
            </div>
            {!initLoading && tourList.length !== 0 ? (
                <div
                    ref={scrollContainerRef}
                    onScroll={checkScrollPosition}
                    className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {tourList && tourList.length > 0 && tourList.map((tour, index) => (
                        <div key={`${tour.slug}-${index}`} className="flex-shrink-0 w-[280px] md:w-[300px]">
                            <TourCard {...tour} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                    <Skeleton height={150} />
                    <div className="hidden lg:block"><Skeleton height={150} /></div>
                    <div className="hidden lg:block"><Skeleton height={150} /></div>
                    <div className="hidden lg:block"><Skeleton height={150} /></div>
                </div>
            )}
        </section>
    )
}
