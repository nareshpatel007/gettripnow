import { Check, X } from "lucide-react";

// Define props
interface WhatsIncludedProps {
    included: string[];
    notIncluded: string[];
}

export function WhatsIncluded({ included, notIncluded }: WhatsIncludedProps) {
    // If empty description
    if (!included || !notIncluded) {
        return null;
    }

    return (
        <section className="py-8 border-b border-gray-200">
            <h2 className="text-xl font-bold text-[#1a2b49] mb-4">What's Included</h2>
            <div className={`grid ${notIncluded.length > 0 ? "md:grid-cols-2" : "md:grid-cols-1"} gap-8`}>
                {included.length > 0 && <div>
                    {notIncluded.length > 0 && <h3 className="font-medium text-[#1a2b49] mb-3">Included</h3>}
                    <ul className="space-y-2">
                        {included.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-600">
                                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>}
                {notIncluded.length > 0 && <div>
                    <h3 className="font-medium text-[#1a2b49] mb-3">Not Included</h3>
                    <ul className="space-y-2">
                        {notIncluded.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-600">
                                <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>}
            </div>
        </section>
    )
}
