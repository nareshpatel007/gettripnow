"use client"

import { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { TourFilters } from "@/components/tour-filters";
import { TourListingGrid } from "@/components/tour-listing-grid";
import { Pagination } from "@/components/pagination";
import { TopAttractions } from "@/components/top-attractions";
import { PeopleAlsoAsk } from "@/components/people-also-ask";
import { Footer } from "@/components/footer";
import { HelpfulBanner } from "@/components/helpful-banner";

export default function ToursPage() {
    // Define state
    const [isLoading, setIsLoading] = useState(false);
    const [initLoading, setInitLoading] = useState(true);
    const [refreshContent, setRefreshContent] = useState(false);
    const [tourList, setTourList] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState<any>(1);
    const [totalPages, setTotalPages] = useState<any>(0);
    const [totalCount, setTotalCount] = useState<any>(0);
    const [sortFilter, setSortFilter] = useState<string>('traveler_rating');
    const [minPrice, setMinPrice] = useState<string>('');
    const [maxPrice, setMaxPrice] = useState<string>('');
    const [selectedDurations, setSelectedDurations] = useState<string[]>([]);

    // Fetch data
    useEffect(() => {
        const controller = new AbortController();
        const fetchTours = async () => {
            try {
                // Prepare json payload
                let payloadData: any = {
                    page: currentPage,
                    sort: sortFilter,
                };

                // If min price or max price is selected, add them to the payload
                // if (minPrice || maxPrice) {
                //     payloadData['min_price'] = minPrice;
                //     payloadData['max_price'] = maxPrice;
                // }

                // Fetch the data
                const response = await fetch("/api/tours", {
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
                setRefreshContent(false);
                setInitLoading(false);
            }
        };
        fetchTours();
        return () => controller.abort();
    }, [currentPage, sortFilter, refreshContent]);

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 md:py-3">
                <nav className="text-xs md:text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
                    <span className="hover:underline cursor-pointer">Home</span>
                    {/* <span className="mx-1 md:mx-2">/</span>
                    <span className="hover:underline cursor-pointer">Things to do in Cayman Islands</span> */}
                    <span className="mx-1 md:mx-2">/</span>
                    <span className="text-gray-700">All Tours</span>
                </nav>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-3 md:pb-4">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a2b49]">All Tours & Activities</h1>
            </div>

            <TourFilters
                initLoading={initLoading}
                isLoading={isLoading}
                totalCount={totalCount}
                sortFilter={sortFilter}
                setSortFilter={setSortFilter}
                setCurrentPage={setCurrentPage}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
            />
            <TourListingGrid
                initLoading={initLoading}
                tourList={tourList}
            />
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />
            <TopAttractions />
            <HelpfulBanner />

            <div className="max-w-7xl mx-auto md:px-8 py-2 md:py-2">
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    The Cayman Islands are known for white-sand beaches and world-class diving—and for good reason, as they're
                    home to some of the most pristine coral reefs in the Caribbean. Most Cayman Island tours are focused on the
                    water, featuring activities like snorkeling, boat trips, and visiting the popular Stingray City. But these
                    tours can also help you explore more of the island, from its gourmet culinary scene to its mangrove-dense
                    nature parks. Best of all, many tours are designed as shore excursions, making it easy to tuck a new
                    experience into your itinerary.
                </p>
            </div>
            <PeopleAlsoAsk />
            <Footer />
        </div>
    )
}
