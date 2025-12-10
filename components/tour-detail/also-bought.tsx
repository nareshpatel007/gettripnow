import { Star, Heart } from "lucide-react"
import Image from "next/image"

export function AlsoBought() {
  const tours = [
    {
      title: "Rum Point Beach Break & Stingray City",
      image: "/people-swimming-with-stingrays-in-crystal-clear-ca.jpg",
      rating: 4.8,
      reviews: 1234,
      duration: "6 hours",
      price: 85,
    },
    {
      title: "Cayman Crystal Caves & Pedro St. James",
      image: "/snorkeling-colorful-coral-reef-tropical-fish-under.jpg",
      rating: 4.9,
      reviews: 892,
      duration: "4 hours",
      price: 95,
    },
    {
      title: "Private Sunset Catamaran Cruise",
      image: "/catamaran-sailboat-sunset-orange-sky-ocean.jpg",
      rating: 5.0,
      reviews: 456,
      duration: "2 hours",
      price: 150,
    },
    {
      title: "Bioluminescent Bay Night Kayak Tour",
      image: "/submarine-underwater-deep-sea-adventure-tour.jpg",
      rating: 4.7,
      reviews: 678,
      duration: "2.5 hours",
      price: 75,
    },
  ]

  return (
    <section className="py-8 border-b border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Customers Who Bought This Tour Also Bought</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tours.map((tour, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] mb-3">
              <Image
                src={tour.image || "/placeholder.svg"}
                alt={tour.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            <h3 className="font-medium text-sm text-gray-900 mb-1 line-clamp-2 group-hover:text-[#1a9cb0] transition-colors">
              {tour.title}
            </h3>
            <div className="flex items-center gap-1 text-xs mb-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{tour.rating}</span>
              <span className="text-gray-500">({tour.reviews})</span>
            </div>
            <p className="text-xs text-gray-500 mb-1">{tour.duration}</p>
            <p className="text-sm">
              <span className="text-gray-500">From </span>
              <span className="font-semibold">${tour.price}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
