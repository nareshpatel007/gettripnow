import { Star, Heart } from "lucide-react"
import Image from "next/image"

export function SimilarExperiences() {
  const experiences = [
    {
      title: "Stingray City & Starfish Beach Tour",
      image: "/starfish-beach-turquoise-water-caribbean.jpg",
      rating: 4.9,
      reviews: 1823,
      duration: "3 hours",
      price: 49,
      badge: "Bestseller",
    },
    {
      title: "Seven Mile Beach Jet Ski Adventure",
      image: "/tourists-on-boat-tour-in-turquoise-caribbean-sea.jpg",
      rating: 4.8,
      reviews: 567,
      duration: "1.5 hours",
      price: 89,
      badge: null,
    },
    {
      title: "Grand Cayman Island Tour",
      image: "/family-on-boat-tour-vacation-caribbean.jpg",
      rating: 4.7,
      reviews: 2145,
      duration: "5 hours",
      price: 75,
      badge: "Top rated",
    },
  ]

  return (
    <section className="py-8 border-b border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Compare Similar Experiences</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="relative aspect-[4/3]">
              <Image src={exp.image || "/placeholder.svg"} alt={exp.title} fill className="object-cover" />
              <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform">
                <Heart className="h-4 w-4 text-gray-600" />
              </button>
              {exp.badge && (
                <span className="absolute top-3 left-3 bg-white text-xs font-medium px-2 py-1 rounded">
                  {exp.badge}
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-[#1a9cb0] transition-colors">
                {exp.title}
              </h3>
              <div className="flex items-center gap-1 text-sm mb-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{exp.rating}</span>
                <span className="text-gray-500">({exp.reviews.toLocaleString()})</span>
              </div>
              <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
              <p className="text-sm">
                <span className="text-gray-500">From</span> <span className="font-bold text-lg">${exp.price}</span>
                <span className="text-gray-500"> / Person</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
