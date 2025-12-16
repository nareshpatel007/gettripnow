"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Star, MapPin, Search, ChevronDown, Loader2 } from "lucide-react"
import { Pagination } from "../pagination"
import { formatPrice } from "@/lib/utils"

export function AttractionsList() {
    // Define state
    const [searchQuery, setSearchQuery] = useState("");
    const [attractionList, setAttractionList] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<any>(1);
    const [totalPages, setTotalPages] = useState<any>(0);
    const [totalCount, setTotalCount] = useState<any>(0);

    // Init data
    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            try {
                setIsLoading(true);

                // Fetch the data
                const response = await fetch("/api/attractions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    signal: controller.signal,
                    body: JSON.stringify({
                        limit: 15,
                        page: currentPage
                    })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Parse the JSON response
                const data = await response.json();

                // Update the state
                setAttractionList(data?.data?.result ?? []);
                setTotalPages(data?.data?.last_page ?? 0);
                setCurrentPage(data?.data?.current_page ?? 1);
                setTotalCount(data?.data?.total ?? 0);
            } catch (error: any) {
                if (error.name !== "AbortError") {
                    console.error("Failed to fetch tours:", error);
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
        return () => controller.abort();
    }, [currentPage]);

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 md:py-3">

                <nav className="text-xs md:text-sm text-gray-500 overflow-x-auto whitespace-nowrap mb-3">
                    <Link href="/" className="hover:underline cursor-pointer">
                        <span className="hover:underline cursor-pointer">Home</span>
                    </Link>
                    <span className="mx-1 md:mx-2">/</span>
                    <span className="text-gray-700">Popular Attractions</span>
                </nav>

                <div className="mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#1a2b49] mb-3">Popular Attractions</h1>
                    <p className="text-gray-600 text-md">Discover top attractions and book tours worldwide</p>
                </div>

                {/* Search and Filter */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        {isLoading && <Loader2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 animate-spin" />}
                        {!isLoading && <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />}
                        <input
                            type="text"
                            placeholder="Search for attractions..."
                            value={searchQuery}
                            disabled={isLoading}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#f53] focus:border-transparent"
                        />
                    </div>
                    {/* <div className="relative">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="appearance-none px-4 py-2.5 pr-10 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a9cb0] focus:border-transparent cursor-pointer"
                        >
                            <option value="popular">Most Popular</option>
                            <option value="rating">Highest Rated</option>
                            <option value="tours">Most Tours</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div> */}
                </div>

                {/* Attractions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {attractionList.map((attraction: { id: number, slug: string, name: string, image: string, total_reviews: string, average_rating: string, address: string, product_count: string, free_attraction: boolean }) => (
                        <Link
                            key={attraction.id}
                            href={`/attractions/${attraction.slug}`}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={attraction.image || "/placeholder.svg"}
                                    alt={attraction.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-5">
                                <h2 className="text-lg font-bold text-[#1a2b49] mb-1 group-hover:text-[#f53] transition-colors">
                                    {attraction.name}
                                </h2>
                                <p className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                                    <MapPin className="h-4 w-4" />
                                    {attraction.address}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1">
                                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            <span className="font-medium text-sm">{attraction.average_rating}</span>
                                        </div>
                                        <span className="text-sm text-gray-500">({attraction.total_reviews.toLocaleString()} reviews)</span>
                                    </div>
                                    <span className="text-sm font-medium text-[#f53]">{formatPrice(attraction.product_count, 0)} tours</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* {filteredAttractions.length === 0 && (
                    <div className="text-center py-12 bg-white rounded-xl">
                        <p className="text-gray-500">No attractions found matching your search.</p>
                    </div>
                )} */}

                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                />
            </div>
        </div>
    )
}
