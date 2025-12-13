"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export function Pagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 8;

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8 flex items-center justify-center gap-1 md:gap-2">
            <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-1.5 md:p-2 rounded-full border border-gray-300 cursor-pointer hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
            </button>

            {[1, 2, 3].map((page) => (
                <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full text-xs md:text-sm cursor-pointer font-medium transition-colors ${currentPage === page ? "bg-[#f53] text-white" : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                        }`}
                >
                    {page}
                </button>
            ))}

            <span className="px-1 md:px-2 text-gray-500 text-sm">...</span>

            <button
                onClick={() => setCurrentPage(totalPages)}
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full text-xs md:text-sm cursor-pointer font-medium transition-colors ${currentPage === totalPages
                        ? "bg-[#f53] text-white"
                        : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
            >
                {totalPages}
            </button>

            <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-1.5 md:p-2 rounded-full border border-gray-300 hover:bg-gray-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
            </button>
        </div>
    )
}
