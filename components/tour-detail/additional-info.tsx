"use client"

import { Check, ChevronRight } from "lucide-react";

// Define props
type AdditionalInfoProps = {
    additionalInfo: string[];
}

export function AdditionalInfo({ additionalInfo }: AdditionalInfoProps) {
    // If empty description
    if (!additionalInfo) {
        return null;
    }

    return (
        <section className="py-8 border-b border-gray-200">
            <h2 className="text-xl font-bold text-[#1a2b49] mb-4">Additional Information</h2>
            {additionalInfo.length > 0 && <div>
                <ul className="space-y-2">
                    {additionalInfo.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-600">
                            <ChevronRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>}
        </section>
    )
}
