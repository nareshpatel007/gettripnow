import { TourCard } from "./tour-card"

const interestTours = [
  {
    image: "/stingray-city-snorkeling-coral-reef-cayman-islands.jpg",
    location: "George Town, Cayman Islands",
    rating: 4.6,
    reviews: 5099,
    title: "Stingray City and Starfish Experience with Coral Reef Snorkeling",
    price: "₹6,005",
  },
  {
    image: "/cayman-spirits-distillery-tour-rum-tasting.jpg",
    location: "George Town, Cayman Islands",
    rating: 4.8,
    reviews: 3504,
    title: "Cayman Spirits Co. Distillery Tour Pass Ticket Only",
    price: "₹2,217",
  },
  {
    image: "/stingray-snorkeling-beach-tour-cayman-islands-trop.jpg",
    location: "George Town, Cayman Islands",
    rating: 5.0,
    reviews: 6455,
    title: "Private Half Day Stingray City, Snorkeling and Starfish Beach Tour",
    price: "₹58,427",
    priceNote: "Per group",
  },
  {
    image: "/stingray-city-snorkeling-starfish-adventure-cayman.jpg",
    location: "George Town, Cayman Islands",
    rating: 4.8,
    reviews: 3099,
    title: "Stingray City, Snorkeling, & Starfish Adventure",
    price: "₹6,005",
  },
]

export function InterestSection() {
  return (
    <section className="py-8 md:py-10 px-4 md:px-8">
      <h2 className="text-lg md:text-2xl font-semibold text-center text-gray-900 mb-6 md:mb-8">
        Based on your interest in George Town
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-7xl mx-auto">
        {interestTours.map((tour) => (
          <TourCard key={tour.title} {...tour} />
        ))}
      </div>
    </section>
  )
}
