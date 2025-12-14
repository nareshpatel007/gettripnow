"use client"

import { useState, useRef, useEffect } from "react";
import { SlidersHorizontal, X, ChevronDown, Loader2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Define props
interface TourFiltersProps {
    isLoading: boolean;
    totalCount: string;
    sortFilter: string;
    setSortFilter: (value: string) => void;
    setCurrentPage: (page: number) => void;
}

export function TourFilters({ isLoading, totalCount, sortFilter, setSortFilter, setCurrentPage }: TourFiltersProps) {
    // Define state
    const [isOpen, setIsOpen] = useState(false);
    const [expandedSections, setExpandedSections] = useState<string[]>(["languages", "duration", "price"]);
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
    const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
    const [priceMin, setPriceMin] = useState("");
    const [priceMax, setPriceMax] = useState("");
    const [sortDisplay, setSortDisplay] = useState("Traveler Rating");
    const [showAllLanguages, setShowAllLanguages] = useState(false);
    const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
    const sortDropdownRef = useRef<HTMLDivElement>(null);

    const languagesRef = useRef<HTMLDivElement>(null);
    const durationRef = useRef<HTMLDivElement>(null);
    const priceRef = useRef<HTMLDivElement>(null);

    const categories = [
        { name: "Activities", count: 0 },
        { name: "On the Ground", count: 0 },
        { name: "Tours, Sightseeing & Cruises", count: 0 },
        { name: "Uncategorized", count: 0 },
    ]

    const languages = ["English", "French", "German", "Italian", "Portuguese", "Spanish", "Japanese", "Chinese"]
    const displayedLanguages = showAllLanguages ? languages : languages.slice(0, 5)

    // Define durations
    const durations = ["Up to 1 hour", "1 to 4 hours", "4 hours to 1 day", "1 day to 3 days", "More than 3 days"]

    // Define sort options
    const sortOptions = [
        { value: "traveler_rating", label: "Traveler Rating" },
        { value: "price_low_to_high", label: "Price: Low to High" },
        { value: "price_high_to_low", label: "Price: High to Low" },
        { value: "duration_low_to_high", label: "Duration: Short to Long" },
        { value: "duration_high_to_low", label: "Duration: Long to Short" },
        { value: "newest_first", label: "Newest First" },
    ];

    const toggleSection = (section: string) => {
        setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
    }

    const toggleDuration = (duration: string) => {
        setSelectedDurations((prev) => (prev.includes(duration) ? prev.filter((d) => d !== duration) : [...prev, duration]))
    }

    const handleReset = () => {
        setSelectedLanguage(null)
        setSelectedDurations([])
        setPriceMin("")
        setPriceMax("")
        setSortFilter("traveler_rating");
        setCurrentPage(1);
    }

    const handleApply = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
                setSortDropdownOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div className="border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                    <p className="text-sm text-gray-600">{totalCount}+ results</p>
                    <div className="flex items-center gap-3">
                        {isLoading && <Loader2 className="animate-spin h-5 w-5 text-gray-600" />}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <button className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 border border-gray-300 rounded-md hover:border-gray-400 transition-colors cursor-pointer">
                                    <SlidersHorizontal className="h-4 w-4 text-gray-600" />
                                    <span className="text-sm text-gray-700">Filter</span>
                                </button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-full sm:w-[320px] md:w-[380px] p-0 overflow-y-auto">
                                {/* Header */}
                                <div className="sticky top-0 bg-white z-10 border-b border-gray-200">
                                    <div className="flex items-center justify-between p-4">
                                        <h2 className="text-xl font-semibold text-[#1a2b49]">Filter</h2>
                                        <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                                            <X className="h-5 w-5" />
                                        </button>
                                    </div>
                                    {/* Reset & Apply Buttons */}
                                    <div className="flex gap-3 px-4 pb-4">
                                        <button
                                            onClick={handleReset}
                                            className="flex-1 py-2.5 px-4 border border-[#1a2b49] rounded-md text-sm font-medium text-[#1a2b49] hover:bg-[#1a2b49] hover:text-white cursor-pointer transition-colors"
                                        >
                                            Reset
                                        </button>
                                        <button
                                            onClick={handleApply}
                                            className="flex-1 py-2.5 px-4 bg-[#1a2b49] text-white rounded-md border border-[#1a2b49] text-sm font-medium hover:bg-white hover:text-[#1a2b49] hover:border-[#1a2b49] cursor-pointer transition-colors"
                                        >
                                            Apply
                                        </button>
                                    </div>
                                </div>
                                <div className="p-4 space-y-6">
                                    <div>
                                        <button
                                            onClick={() => toggleSection("languages")}
                                            className="flex items-center justify-between w-full text-left mb-3"
                                        >
                                            <h3 className="text-base font-semibold text-[#1a2b49]">Languages</h3>
                                            <ChevronDown
                                                className={`h-4 w-4 text-gray-500 transition-transform duration-300 ease-in-out ${expandedSections.includes("languages") ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>
                                        <div
                                            ref={languagesRef}
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections.includes("languages") ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            <div className="space-y-2">
                                                {displayedLanguages.map((language) => (
                                                    <label key={language} className="flex items-center gap-3 cursor-pointer py-1">
                                                        <input
                                                            type="radio"
                                                            name="language"
                                                            checked={selectedLanguage === language}
                                                            onChange={() => setSelectedLanguage(language)}
                                                            className="w-4 h-4 text-[#1a9cb0] border-gray-300 focus:ring-[#1a9cb0]"
                                                        />
                                                        <span className="text-sm text-gray-700">{language}</span>
                                                    </label>
                                                ))}
                                                {languages.length > 5 && (
                                                    <button
                                                        onClick={() => setShowAllLanguages(!showAllLanguages)}
                                                        className="text-sm text-[#f53] cursor-pointer hover:underline mt-2"
                                                    >
                                                        {showAllLanguages ? "- Show less" : "+ Show more"}
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Duration Section */}
                                    <div>
                                        <button
                                            onClick={() => toggleSection("duration")}
                                            className="flex items-center justify-between w-full text-left mb-3"
                                        >
                                            <h3 className="text-base font-semibold text-[#1a2b49]">Duration</h3>
                                            <ChevronDown
                                                className={`h-4 w-4 text-gray-500 transition-transform duration-300 ease-in-out ${expandedSections.includes("duration") ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>
                                        <div
                                            ref={durationRef}
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections.includes("duration") ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            <div className="space-y-2">
                                                {durations.map((duration) => (
                                                    <label key={duration} className="flex items-center gap-3 cursor-pointer py-1">
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedDurations.includes(duration)}
                                                            onChange={() => toggleDuration(duration)}
                                                            className="w-4 h-4 text-[#1a9cb0] border-gray-300 rounded focus:ring-[#1a9cb0]"
                                                        />
                                                        <span className="text-sm text-gray-700">{duration}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Price Section */}
                                    <div>
                                        <button
                                            onClick={() => toggleSection("price")}
                                            className="flex items-center justify-between w-full text-left mb-3"
                                        >
                                            <h3 className="text-base font-semibold text-[#1a2b49]">Price</h3>
                                            <ChevronDown
                                                className={`h-4 w-4 text-gray-500 transition-transform duration-300 ease-in-out ${expandedSections.includes("price") ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>
                                        <div
                                            ref={priceRef}
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections.includes("price") ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            <div className="flex items-center gap-2 w-full">
                                                <div className="flex-1 flex items-center border border-gray-300 rounded-md overflow-hidden">
                                                    <input
                                                        type="text"
                                                        placeholder="Min"
                                                        value={priceMin}
                                                        onChange={(e) => setPriceMin(e.target.value)}
                                                        className="flex-1 w-full px-3 py-2 text-sm text-gray-700 focus:outline-none"
                                                    />
                                                    <span className="px-2 py-2 bg-gray-100 text-gray-500 text-sm border-l border-gray-300">
                                                        $
                                                    </span>
                                                </div>
                                                <span className="text-gray-500 text-sm">to</span>
                                                <div className="flex-1 flex items-center border border-gray-300 rounded-md overflow-hidden">
                                                    <input
                                                        type="text"
                                                        placeholder="Max"
                                                        value={priceMax}
                                                        onChange={(e) => setPriceMax(e.target.value)}
                                                        className="flex-1 w-full px-3 py-2 text-sm text-gray-700 focus:outline-none"
                                                    />
                                                    <span className="px-2 py-2 bg-gray-100 text-gray-500 text-sm border-l border-gray-300">
                                                        $
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>

                        {/* Sort Dropdown */}
                        <div className="relative" ref={sortDropdownRef}>
                            <button
                                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                                className="flex items-center gap-1 md:gap-2 border border-gray-300 rounded-md px-3 md:px-4 py-2 md:py-2.5 hover:border-gray-400 transition-colors cursor-pointer"
                            >
                                <span className="hidden sm:inline text-sm text-gray-600">Sort by:</span>
                                <span className="text-xs sm:text-sm font-medium text-gray-900 max-w-[100px] sm:max-w-none truncate">
                                    {sortDisplay}
                                </span>
                                <ChevronDown
                                    className={`h-4 w-4 transition-transform flex-shrink-0 ${sortDropdownOpen ? "rotate-180" : ""}`}
                                />
                            </button>

                            {/* Dropdown Menu */}
                            {sortDropdownOpen && (
                                <div className="absolute right-0 top-full mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                    <div className="py-1">
                                        {sortOptions.map((option) => (
                                            <button
                                                key={option?.value}
                                                onClick={() => {
                                                    setSortFilter(option?.value);
                                                    setSortDisplay(option?.label);
                                                    setSortDropdownOpen(false);
                                                    setCurrentPage(1);
                                                }}
                                                className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer ${sortFilter === option?.value
                                                    ? "bg-[#1a2b49]/5 text-[#1a2b49] font-medium"
                                                    : "text-gray-700 hover:bg-gray-50"
                                                    }`}
                                            >
                                                {option?.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
