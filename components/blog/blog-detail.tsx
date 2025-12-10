"use client"

import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { BlogSidebar } from "./blog-sidebar"

const blogPost = {
  slug: "top-10-hidden-gems-in-europe",
  title: "Top 10 Hidden Gems in Europe You Must Visit",
  excerpt:
    "Discover the lesser-known destinations in Europe that offer authentic experiences away from the tourist crowds.",
  image: "/historic-trolley-tour-richmond-vintage-red-trolley.jpg",
  author: "Sarah Johnson",
  authorImage: "/professional-woman-avatar.png",
  date: "Dec 15, 2024",
  category: "Travel Tips",
  readTime: "8 min read",
  content: `
    <p>Europe is home to countless breathtaking destinations, but some of the most magical places remain hidden from the typical tourist trail. While cities like Paris, Rome, and Barcelona draw millions of visitors each year, there are lesser-known gems waiting to be discovered by adventurous travelers.</p>
    
    <h2>1. Hallstatt, Austria</h2>
    <p>Nestled between a pristine lake and towering Alps, Hallstatt is a fairytale village that looks like it belongs in a storybook. With its pastel-colored houses, historic salt mines, and stunning mountain backdrop, this UNESCO World Heritage site offers a peaceful retreat from the bustling tourist hotspots.</p>
    
    <h2>2. Colmar, France</h2>
    <p>Often overshadowed by its more famous neighbors, Colmar is a charming Alsatian town that inspired the village in Disney's "Beauty and the Beast." Its colorful half-timbered houses, flower-lined canals, and excellent wine scene make it a perfect destination for romance and relaxation.</p>
    
    <h2>3. Ronda, Spain</h2>
    <p>Perched dramatically on a cliff overlooking the El Tajo gorge, Ronda is one of Spain's most spectacular white villages. The iconic Puente Nuevo bridge, ancient bullring, and stunning views make this hilltop town an unforgettable stop in Andalusia.</p>
    
    <h2>4. Plitvice Lakes, Croatia</h2>
    <p>This national park features 16 terraced lakes connected by waterfalls, surrounded by lush forest and diverse wildlife. The crystal-clear turquoise waters and wooden walkways create a magical experience that rivals any natural wonder in Europe.</p>
    
    <h2>5. Sintra, Portugal</h2>
    <p>Just a short train ride from Lisbon, Sintra feels like stepping into a fairytale kingdom. The colorful Pena Palace, mysterious Quinta da Regaleira, and enchanting gardens make this UNESCO site a must-visit for any Portugal itinerary.</p>
    
    <h2>Planning Your Visit</h2>
    <p>The best time to visit these hidden gems is during shoulder season (April-May or September-October) when crowds are smaller and weather is still pleasant. Consider booking guided tours to learn about the local history and culture, and always check for any entry requirements or reservations needed in advance.</p>
    
    <p>Remember, the joy of discovering hidden gems lies in experiencing them authentically. Take your time, engage with locals, and embrace the slower pace of life in these enchanting destinations.</p>
  `,
}

export function BlogDetail() {
  return (
    <div className="py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-[#1a9cb0] hover:underline mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <article className="flex-1">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              {/* Featured Image */}
              <div className="relative h-64 md:h-96">
                <img
                  src={blogPost.image || "/placeholder.svg"}
                  alt={blogPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#1a9cb0] text-white text-sm font-medium rounded-full">
                    {blogPost.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6 md:p-8">
                {/* Title */}
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">{blogPost.title}</h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <img
                      src={blogPost.authorImage || "/placeholder.svg"}
                      alt={blogPost.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{blogPost.author}</p>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {blogPost.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {blogPost.readTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Share Buttons */}
                  <div className="flex items-center gap-2 ml-auto">
                    <span className="text-sm text-gray-500 mr-2">Share:</span>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Facebook className="h-5 w-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Twitter className="h-5 w-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Linkedin className="h-5 w-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Share2 className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Article Body */}
                <div
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-[#1a9cb0] prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-gray-500">Tags:</span>
                    {["Europe", "Travel Tips", "Hidden Gems", "Adventure", "Budget Travel"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Author Box */}
            <div className="bg-white rounded-xl p-6 mt-6 shadow-sm">
              <div className="flex items-start gap-4">
                <img
                  src={blogPost.authorImage || "/placeholder.svg"}
                  alt={blogPost.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">About {blogPost.author}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Sarah is a passionate traveler and writer with over 10 years of experience exploring hidden corners
                    of the world. She specializes in off-the-beaten-path destinations and sustainable travel practices.
                  </p>
                  <Link href="#" className="text-[#1a9cb0] text-sm font-medium hover:underline">
                    View all posts by {blogPost.author}
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <BlogSidebar />
        </div>
      </div>
    </div>
  )
}
