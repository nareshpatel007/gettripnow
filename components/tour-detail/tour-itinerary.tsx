"use client"

import { useState } from "react";
import { ChevronDown, CornerDownRightIcon } from "lucide-react";

// Define props
interface TourItineraryProps {
    itinerary: any;
}

export function TourItinerary({ itinerary }: TourItineraryProps) {
    return (
        <section className="py-8 border-b border-gray-200">
            <h2 className="text-xl font-bold text-[#1a2b49] mb-4">Itinerary</h2>
            <div className="space-y-2">
                {itinerary?.itineraryItems.map((item: any, index: number) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-3">
                                {item?.pass_by && <div className="flex w-[5%] items-center justify-center w-8 h-8 rounded-full bg-white text-[#f53] text-sm font-medium">
                                    <CornerDownRightIcon className="h-5 w-5 text-[#f53]" />
                                </div>}

                                {!item?.pass_by && <div className="flex w-[5%] items-center justify-center w-8 h-8 rounded-full bg-[#f53] text-white text-sm font-medium">{item.no}</div>}
                                <div className="w-[95%]">
                                    <h3 className="font-medium text-[#1a2b49]">{item.name}</h3>
                                    <p className="text-sm text-gray-500">{item.description}</p>
                                </div>
                            </div>
                        </button>
                        {/* {openStops.includes(index) && (
                            <div className="px-4 pb-4 pl-16">
                                <p className="text-gray-600">{stop.description}</p>
                            </div>
                        )} */}
                    </div>
                ))}
            </div>
        </section>
    )
}
