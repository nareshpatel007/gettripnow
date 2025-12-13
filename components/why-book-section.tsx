import { Headphones, Gift, Star, Calendar } from "lucide-react"

const features = [
    {
        icon: Headphones,
        title: "24/7 customer support",
        description: "No matter the time zone, we're here to help.",
    },
    {
        icon: Gift,
        title: "Earn rewards",
        description: "Explore, earn, redeem, and repeat with our loyalty program.",
    },
    {
        icon: Star,
        title: "Millions of reviews",
        description: "Plan and book with confidence using reviews from fellow travelers.",
    },
    {
        icon: Calendar,
        title: "Plan your way",
        description: "Stay flexible with free cancellation and the option to reserve now and pay later at no additional cost.",
    },
]

export function WhyBookSection() {
    return (
        <section className="max-w-7xl mx-auto md:py-12 px-4 md:px-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-[#1a2b49] mb-6 md:mb-10">
                Why book with Get Trip Now?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
                {features.map((feature) => (
                    <div key={feature.title} className="text-center">
                        <div className="flex justify-center mb-2 md:mb-4">
                            <feature.icon className="h-8 w-8 md:h-10 md:w-10 text-[#f53]" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-1 md:mb-2">{feature.title}</h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
