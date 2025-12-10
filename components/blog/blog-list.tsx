"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, User, ArrowRight, Search } from "lucide-react"
import { BlogSidebar } from "./blog-sidebar"

const blogPosts = [
  {
    slug: "top-10-hidden-gems-in-europe",
    title: "Top 10 Hidden Gems in Europe You Must Visit",
    excerpt:
      "Discover the lesser-known destinations in Europe that offer authentic experiences away from the tourist crowds. From charming villages to stunning natural landscapes.",
    image: "/historic-trolley-tour-richmond-vintage-red-trolley.jpg",
    author: "Sarah Johnson",
    date: "Dec 15, 2024",
    category: "Travel Tips",
    readTime: "8 min read",
  },
  {
    slug: "ultimate-guide-to-paris",
    title: "The Ultimate Guide to Paris: Beyond the Eiffel Tower",
    excerpt:
      "Paris has so much more to offer than its iconic landmarks. Explore hidden cafes, secret gardens, and local neighborhoods that make the City of Light truly magical.",
    image: "/ghost-tour-dark-spooky-shockoe-bottom-richmond.jpg",
    author: "Michael Chen",
    date: "Dec 12, 2024",
    category: "City Guides",
    readTime: "12 min read",
  },
  {
    slug: "best-adventure-tours-2024",
    title: "Best Adventure Tours to Take in 2024",
    excerpt:
      "From hiking in Patagonia to diving in the Maldives, discover the most thrilling adventure tours that will push your limits and create unforgettable memories.",
    image: "/sightseeing-tour-van-richmond-virginia-city.jpg",
    author: "Emily Rodriguez",
    date: "Dec 10, 2024",
    category: "Adventure",
    readTime: "10 min read",
  },
  {
    slug: "food-tours-around-the-world",
    title: "Food Tours Around the World: A Culinary Journey",
    excerpt:
      "Embark on a gastronomic adventure with the best food tours across different continents. Taste authentic local cuisine and learn about culinary traditions.",
    image: "/segway-tour-richmond-landmark-historic.jpg",
    author: "David Park",
    date: "Dec 8, 2024",
    category: "Food & Drink",
    readTime: "7 min read",
  },
  {
    slug: "traveling-with-kids-tips",
    title: "Traveling with Kids: Essential Tips for Family Adventures",
    excerpt:
      "Planning a family vacation? Learn how to keep the little ones entertained while exploring new destinations. Practical tips from experienced traveling parents.",
    image: "/historic-trolley-tour-richmond-vintage-red-trolley.jpg",
    author: "Lisa Thompson",
    date: "Dec 5, 2024",
    category: "Family Travel",
    readTime: "9 min read",
  },
  {
    slug: "sustainable-travel-guide",
    title: "Sustainable Travel: How to Explore Responsibly",
    excerpt:
      "Learn how to minimize your environmental impact while traveling. Discover eco-friendly accommodations, tours, and practices for conscious travelers.",
    image: "/ghost-tour-dark-spooky-shockoe-bottom-richmond.jpg",
    author: "James Wilson",
    date: "Dec 3, 2024",
    category: "Sustainability",
    readTime: "11 min read",
  },
]

const categories = ["All", "Travel Tips", "City Guides", "Adventure", "Food & Drink", "Family Travel", "Sustainability"]

export function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Travel Blog</h1>
          <p className="text-gray-600 text-lg">Discover travel tips, destination guides, and inspiring stories</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a9cb0] focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-[#1a9cb0] text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Posts Grid */}
          <div className="flex-1">
            <div className="grid gap-6">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row"
                >
                  <div className="md:w-72 h-48 md:h-auto flex-shrink-0">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-[#e6f7f9] text-[#1a9cb0] text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-[#1a9cb0] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <User className="h-4 w-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </span>
                      </div>
                      <span className="text-[#1a9cb0] font-medium text-sm flex items-center gap-1">
                        Read more <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl">
                <p className="text-gray-500">No articles found matching your criteria.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <BlogSidebar />
        </div>
      </div>
    </div>
  )
}
