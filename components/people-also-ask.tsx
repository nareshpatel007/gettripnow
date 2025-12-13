"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const questions = [
    "What are the best Cayman Island excursions?",
    "How much do Cayman Island tours cost?",
    "How many days is enough for Grand Cayman?",
    "What is the best month to visit the Cayman Islands?",
    "Can I swim with stingrays in Grand Cayman?",
    "Is the US dollar accepted in the Cayman Islands?",
];

export function PeopleAlsoAsk() {
    // Define state
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
            <h2 className="text-xl font-bold text-[#1a2b49] mb-6">People Also Ask</h2>
            <div className="border-t border-gray-200">
                {questions.map((question, index) => (
                    <div key={index} className="border-b border-gray-200">
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                            <span className="text-sm text-gray-700 pr-4">{question}</span>
                            <ChevronDown
                                className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>
                        {openIndex === index && (
                            <div className="pb-4 pr-8">
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    This is a sample answer to the frequently asked question. The actual content would provide detailed
                                    information about {question.toLowerCase().replace("?", ".")}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
