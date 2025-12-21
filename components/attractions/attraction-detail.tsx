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
import { formatPrice } from "@/lib/utils"
import { TourListingGrid } from "../tour-listing-grid"
import { Pagination } from "../pagination"
import { HelpfulBanner } from "../helpful-banner"
import { TourFilters } from "../tour-filters"

// Define props
type Props = {
    slug: any
}

export function AttractionDetail({ slug }: Props) {
    // Define state
    const [isLoading, setIsLoading] = useState(false);
    const [attractionData, setAttractionData] = useState<any>({});
    const [tourList, setTourList] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState<any>(1);
    const [totalPages, setTotalPages] = useState<any>(0);
    const [totalCount, setTotalCount] = useState<any>(0);

    // Filter state
    const [isSidebarFilterOpen, setIsSidebarFilterOpen] = useState(false);
    const [sortFilter, setSortFilter] = useState<string>('traveler_rating');
    const [minPrice, setMinPrice] = useState<string>('');
    const [maxPrice, setMaxPrice] = useState<string>('');
    const [filterOptions, setFilterOptions] = useState<string[]>([]);
    const [selectedDurations, setSelectedDurations] = useState<string>('');
    const [selectedRating, setSelectedRating] = useState<string>('');
    const [selectedCountry, setSelectedCountry] = useState<string>('');
    const [appliedFilter, setAppliedFilter] = useState(false);
    const [resetFilter, setResetFilter] = useState(false);

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
                    },
                    body: JSON.stringify({ slug }),
                });

                // Handle non-200 responses
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Parse the JSON response
                const data = await response.json();

                // Update the state
                if (data?.success) {
                    setAttractionData(data?.data?.attraction || {});
                    setTourList(data?.data?.tours?.result || []);
                    setFilterOptions(data?.data?.tours?.filters ?? []);
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
                setIsSidebarFilterOpen(false);
            }
        };
        fetchAttraction();
        return () => controller.abort();
    }, []);

    // Filter data
    useEffect(() => {
        const controller = new AbortController();
        const filterData = async () => {
            try {
                setIsLoading(true);

                // Prepare json payload
                let payloadData: any = {
                    page: currentPage,
                    sort: sortFilter,
                    location: 'attraction',
                    slug: attractionData?.slug || '',
                };

                // If min price or max price is selected, add them to the payload
                if (minPrice || maxPrice) {
                    payloadData['min_price'] = minPrice || 0;
                    payloadData['max_price'] = maxPrice || 0;
                }

                // If selectedDurations is not empty, add it to the payload
                if (selectedDurations) {
                    payloadData['duration'] = selectedDurations;
                }

                // If selectedRating is not empty, add it to the payload
                if (selectedRating) {
                    payloadData['rating'] = selectedRating;
                }

                // If selectedCountry is not empty, add it to the payload
                if (selectedCountry) {
                    payloadData['country_id'] = selectedCountry;
                }

                // Fetch the data
                const response = await fetch("/api/tours/filter_tours", {
                    method: "POST",
                    signal: controller.signal,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payloadData),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Parse the JSON response
                const data = await response.json();

                // Update the state
                setTourList(data?.data?.result ?? []);
                setTotalPages(data?.data?.last_page ?? 0);
                setCurrentPage(data?.data?.current_page ?? 1);
                setTotalCount(data?.data?.total ?? 0);
            } catch (error: any) {
                if (error.name !== "AbortError") {
                    console.error("Failed to fetch tours:", error);
                }
            } finally {
                setIsLoading(false);
                setAppliedFilter(false);
                setIsSidebarFilterOpen(false);
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }
        };
        filterData();
        return () => controller.abort();
    }, [currentPage, sortFilter, appliedFilter]);

    // Reset filters
    useEffect(() => {
        if (resetFilter) {
            setMinPrice('');
            setMaxPrice('');
            setSelectedDurations('');
            setSelectedRating('');
            setSelectedCountry('');
            setResetFilter(false);
        }
    }, [resetFilter]);

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 md:py-3">
                <nav className="text-xs md:text-sm text-gray-500 mb-4 overflow-x-auto whitespace-nowrap">
                    <Link href="/" className="hover:underline">Home</Link>
                    <span className="mx-1 md:mx-2">/</span>
                    <Link href="/attractions" className="hover:underline">Attractions</Link>
                    <span className="mx-1 md:mx-2">/</span>
                    <span className="text-gray-700">{attractionData?.name}</span>
                </nav>
            </div>
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex items-start justify-between">
                    <div>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                            {attractionData?.name}
                        </h1>
                        <div className="flex items-center flex-wrap gap-3 text-sm">
                            <div className="flex items-center gap-1">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            className={`h-4 w-4 ${star <= Math.floor(attractionData.average_rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                                        />
                                    ))}
                                </div>
                                <span className="font-medium">{attractionData.average_rating}</span>
                                <span className="text-gray-500">({formatPrice(attractionData.total_reviews, 0)} reviews)</span>
                            </div>
                            <span className="text-gray-300">|</span>
                            <span className="flex items-center gap-1 text-gray-600">
                                <MapPin className="h-4 w-4" /> {attractionData.address}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <TourFilters
                isLoading={isLoading}
                setAppliedFilter={setAppliedFilter}
                setResetFilter={setResetFilter}
                setIsSidebarFilterOpen={setIsSidebarFilterOpen}
                isSidebarFilterOpen={isSidebarFilterOpen}
                totalCount={totalCount}
                sortFilter={sortFilter}
                setSortFilter={setSortFilter}
                setCurrentPage={setCurrentPage}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                setSelectedDurations={setSelectedDurations}
                selectedDurations={selectedDurations}
                setSelectedRating={setSelectedRating}
                setSelectedCountry={setSelectedCountry}
                selectedCountry={selectedCountry}
                selectedRating={selectedRating}
                filterOptions={filterOptions}
            />
            <TourListingGrid
                tourList={tourList}
            />
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />
            <HelpfulBanner />
        </>
    )
}
