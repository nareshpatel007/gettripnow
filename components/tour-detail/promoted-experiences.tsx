import { ChevronLeft, ChevronRight } from "lucide-react"
import { TourCard } from "@/components/tour-card"

export function PromotedExperiences() {
  const experiences = [
    {
      title: "Stingray City, Starfish & Snorkel Tour",
      image: "/stingray-city-tour-boat-caribbean-blue-water.jpg",
      rating: 4.9,
      reviews: 2150,
      price: "$49",
      tourType: "Water Activities",
      badge: "Likely to Sell Out",
      duration: "4 hours",
    },
    {
      title: "Cayman Turtle Centre VIP Experience",
      image: "/sea-turtle-swimming-underwater-green-turtle.jpg",
      rating: 4.8,
      reviews: 1823,
      price: "$65",
      tourType: "Nature & Wildlife",
      duration: "3 hours",
    },
    {
      title: "Private Catamaran Sunset Sail",
      image: "/catamaran-sailboat-sunset-orange-sky-ocean.jpg",
      rating: 5.0,
      reviews: 456,
      price: "$125",
      tourType: "Sailing",
      badge: "Best Seller",
      duration: "2.5 hours",
    },
    {
      title: "Submarine Adventure Deep Dive",
      image: "/submarine-underwater-deep-sea-adventure-tour.jpg",
      rating: 4.7,
      reviews: 892,
      price: "$110",
      tourType: "Adventure",
      duration: "2 hours",
    },
  ]

  return (
    <section className="py-8 border-b border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Explore our promoted experiences</h2>
        <div className="flex gap-2">
          <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50">
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50">
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {experiences.map((exp, index) => (
          <TourCard
            key={index}
            image={exp.image}
            title={exp.title}
            rating={exp.rating}
            reviews={exp.reviews}
            price={exp.price}
            tourType={exp.tourType}
            badge={exp.badge}
            duration={exp.duration}
          />
        ))}
      </div>
    </section>
  )
}
