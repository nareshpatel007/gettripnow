"use client"

import { useState } from "react";
import { ChevronUp, CornerDownRightIcon } from "lucide-react";

// Define props
interface TourItineraryProps {
    itinerary: any;
}

export function TourItinerary({ itinerary }: TourItineraryProps) {
    // Define state
    const [isExpanded, setIsExpanded] = useState(true);
    const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

    // Toggle item expanded
    const toggleItemExpanded = (index: number) => {
        setExpandedItems((prev) => ({
            ...prev,
            [index]: !prev[index],
        }))
    }

    // Get display text
    const getDisplayText = (description: string, index: number) => {
        // Count total words
        const words = description.split(" ");

        // If item expanded
        if (expandedItems[index]) return description;

        // If total words less than 30
        if (words.length < 30) return description;

        // If more words
        if (words.length > 30) {
            return words.slice(0, 30).join(" ") + "...";
        }

        // Else show full
        return description;
    }

    return (
        <section className="py-8 border-b border-gray-200">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-between mb-6 transition-opacity"
            >
                <h2 className="text-2xl font-bold text-[#1a2b49]">Itinerary</h2>
                <ChevronUp className={`h-6 w-6 text-gray-400 transition-transform ${isExpanded ? "" : "rotate-180"}`} />
            </button>
            {isExpanded && (
                <div className="relative">
                    <div className="absolute left-4.5 top-8 bottom-0 w-1 bg-gray-300"></div>
                    <div className="space-y-6">
                        {itinerary?.itineraryItems.map((item: any, index: number) => (
                            <div key={index} className="flex gap-6">
                                <div className="flex-shrink-0 relative">
                                    <div className="w-10 h-10 rounded-full bg-[#f53] text-white flex items-center justify-center font-bold text-lg">
                                        {item.pass_by && <CornerDownRightIcon className="w-5 h-5 text-white" />}
                                        {!item.pass_by && item.no}
                                    </div>
                                </div>
                                <div className="flex-1 pt-1">
                                    <div className="mb-2">
                                        <h3 className="font-bold text-gray-900 text-base">
                                            {item.name}
                                            {item.pass_by && <span className="font-normal text-sm text-gray-600 ml-1">(Pass By)</span>}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                        {getDisplayText(item.description, index)}

                                        {item.description && item.description.split(" ").length > 30 && <button
                                            onClick={() => toggleItemExpanded(index)}
                                            className="text-[#f53] hover:underline ml-1 font-medium bg-none border-none cursor-pointer p-0"
                                        >
                                            {expandedItems[index] ? "Show less" : "Read more"}
                                        </button>}
                                    </p>
                                    <div className="flex gap-2 text-xs text-gray-600">
                                        {item.duration && <span>{item.duration}</span>}
                                        {item.admission_included && item.admission_included == 'YES' && <>
                                            <span className="text-gray-300">|</span>
                                            <span>Admission Ticket Free</span>
                                        </>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}
