"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { Star, MapPin } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { TourFilters } from "./tour-filters";
import { TourListingGrid } from "./tour-listing-grid";
import { Pagination } from "./pagination";
import { HelpfulBanner } from "./helpful-banner";

// Define props
type Props = {
    slug: any
}

export function CityDetail({ slug }: Props) {
    // Define state
    const [isLoading, setIsLoading] = useState(false);
    const [cityData, setCityData] = useState<any>({});
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
                setIsLoading(true);

                // Fetch the data
                const response = await fetch("/api/city/single", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ slug }),
                });

                // Handle non-200 responses
                if (response.ok) {
                    // Parse the JSON response
                    const data = await response.json();

                    // Update the state
                    setCityData(data?.data?.city || {});
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
    }, [slug]);

    // Filter data
    useEffect(() => {
        const controller = new AbortController();
        const filterData = async () => {
            try {
                if (!cityData?.id) {
                    return;
                }

                // Set loading
                setIsLoading(true);

                // Prepare json payload
                let payloadData: any = {
                    page: currentPage,
                    sort: sortFilter,
                    location: 'city',
                    slug: cityData?.id || '',
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

                // Handle non-200 responses
                if (response.ok) {
                    // Parse the JSON response
                    const data = await response.json();

                    // Update the state
                    setTourList(data?.data?.result ?? []);
                    setTotalPages(data?.data?.last_page ?? 0);
                    setCurrentPage(data?.data?.current_page ?? 1);
                    setTotalCount(data?.data?.total ?? 0);
                }
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
    }, [cityData, currentPage, sortFilter, resetFilter, appliedFilter]);

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
            {cityData?.name ? <>
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 md:py-3">
                    <nav className="text-xs md:text-sm text-gray-500 overflow-x-auto whitespace-nowrap mb-3">
                        <Link href="/" className="hover:underline">Home</Link>
                        <span className="mx-1 md:mx-2">/</span>
                        <Link href={`/country/${cityData?.country_slug}`} className="hover:underline">{cityData?.country_name}</Link>
                        <span className="mx-1 md:mx-2">/</span>
                        <span className="text-gray-700">{cityData?.name}</span>
                    </nav>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#1a2b49]">{`${cityData?.name}, ${cityData?.country_name}`}</h1>
                </div>
            </> : <>
                <div className="max-w-7xl mx-auto px-4 md:px-8 mt-3">
                    <Skeleton height={30} />
                    <Skeleton height={20} />
                    <Skeleton height={20} />
                </div>
            </>}
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
            <TourListingGrid tourList={tourList} />
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />
            <HelpfulBanner />
        </>
    )
}
