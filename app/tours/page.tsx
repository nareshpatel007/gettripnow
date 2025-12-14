"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { TourFilters } from "@/components/tour-filters"
import { TourListingGrid } from "@/components/tour-listing-grid"
import { Pagination } from "@/components/pagination"
import { TopAttractions } from "@/components/top-attractions"
import { PeopleAlsoAsk } from "@/components/people-also-ask"
import { Footer } from "@/components/footer"

export default function ToursPage() {
    // Define state
    const [tourList, setTourList] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState<any>(1);
    const [totalPages, setTotalPages] = useState<any>(0);
    const [totalCount, setTotalCount] = useState<any>(0);
    const [sortFilter, setSortFilter] = useState<string>('traveler_rating');
    const [isLoading, setIsLoading] = useState(true);
    const [refreshContent, setRefreshContent] = useState(false);

    // Fetch data
    useEffect(() => {
        const controller = new AbortController();
        const fetchTours = async () => {
            try {
                setIsLoading(true);

                // Fetch the data
                const response = await fetch("/api/tours", {
                    method: "POST",
                    signal: controller.signal,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        page: currentPage,
                        sort: sortFilter,
                    }),
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
                isLoading={isLoading}
                totalCount={totalCount}
                sortFilter={sortFilter}
                setSortFilter={setSortFilter}
                setCurrentPage={setCurrentPage}
            />
            <TourListingGrid tourList={tourList} />
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />
            <TopAttractions />

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                <span className="text-xs md:text-sm text-gray-600">Were these results helpful?</span>
                <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-500 hover:text-[#f53] cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                            />
                        </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <svg
                            className="w-4 h-4 md:w-5 md:h-5 text-gray-500 rotate-180 hover:text-[#f53] cursor-pointer"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>
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
