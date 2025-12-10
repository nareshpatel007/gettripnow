import Link from "next/link"

const footerLinks = [
  {
    title: "More Tours in Cayman Islands",
    links: [
      "Snorkeling",
      "Boat Rentals",
      "Catamaran Cruises",
      "On the Water",
      "Museum Tickets & Passes",
      "Fishing Charters",
    ],
  },
  {
    title: "Attractions in Cayman Islands",
    links: [
      "Private Charters",
      "Weddings & Celebrations",
      "Walking Tours",
      "All the Rentals",
      "Self-guided Tours",
      "Photography Tours",
    ],
  },
]

const categoryLinks = [
  "More Tours in Cayman Islands",
  "Attractions in Cayman Islands",
  "Things to do near Cayman Islands",
  "Cayman Islands Best Experiences",
  "Popular on Viator",
]

export function TourListingFooter() {
  return (
    <div className="border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Category Tabs */}
        <div className="flex items-center gap-6 mb-8 overflow-x-auto pb-2 border-b border-gray-200">
          {categoryLinks.map((link, index) => (
            <button
              key={link}
              className={`text-sm whitespace-nowrap pb-3 ${
                index === 0
                  ? "text-gray-900 font-medium border-b-2 border-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            "Snorkeling",
            "Boat Rentals",
            "Catamaran Cruises",
            "On the Water",
            "Museum Tickets & Passes",
            "Fishing Charters",
            "Private Charters",
            "Weddings & Celebrations",
            "Walking Tours",
            "All the Rentals",
            "Self-guided Tours",
            "Photography Tours",
          ].map((link) => (
            <Link key={link} href="#" className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
              {link}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
