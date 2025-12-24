"use client"

import { useState } from "react";

// Define props
interface TourOverviewProps {
    description: string;
}

export function TourOverview({ description }: TourOverviewProps) {
    // Define state
    const [expanded, setExpanded] = useState(false);

    // If empty description
    if (!description) {
        return null;
    }

    return (
        <section className="py-8 border-b border-gray-200">
            <h2 className="text-xl font-bold text-[#1a2b49] mb-4">Overview</h2>
            <div className={`text-gray-600 leading-relaxed ${!expanded ? "line-clamp-4" : ""}`}>
                <p>{description}</p>
            </div>
            <button onClick={() => setExpanded(!expanded)} className="text-[#f53] font-medium hover:underline cursor-pointer mt-1">
                {expanded ? "Show less" : "Read more"}
            </button>
        </section>
    )
}
