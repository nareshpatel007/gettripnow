import { Star } from "lucide-react"

const reviews = [
  {
    time: "30 minutes ago",
    title: "What a day!",
    text: "What a day! Our guide and driver, Neal was polite, knowledgeable and a lot of fun. The day was such... continue",
  },
  {
    time: "24 minutes ago",
    title: "I have always used VIATOR as the Pu...",
    text: "I have always used VIATOR as they're very trustworthy in terms of offering the right tours for... Mitzi Schaad",
  },
  {
    time: "40 minutes ago",
    title: "Good selection of tours",
    text: "Good selection of tours, easy to book. Colin B",
  },
]

export function ReviewsSection() {
  return (
    <section className="py-8 md:py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 md:gap-8 mb-6">
          {/* Trustpilot Rating - centered on mobile */}
          <div className="flex justify-center md:justify-start">
            <div className="text-center md:text-left">
              <p className="font-semibold text-base md:text-lg text-gray-900">Excellent</p>
              <div className="flex gap-0.5 my-2 justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 md:w-7 md:h-7 bg-[#0057A8] flex items-center justify-center">
                    <Star className="h-4 w-4 md:h-5 md:w-5 fill-white text-white" />
                  </div>
                ))}
              </div>
              <p className="text-xs md:text-sm text-gray-500">Based on 260,452 reviews</p>
              <div className="flex items-center gap-1.5 mt-2 justify-center md:justify-start">
                <Star className="h-4 w-4 md:h-5 md:w-5 fill-[#0057A8] text-[#0057A8]" />
                <span className="text-sm md:text-base font-semibold">Trustpilot</span>
              </div>
            </div>
          </div>

          {/* Reviews Grid - responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-3 md:pl-4">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 md:w-5 md:h-5 bg-[#0057A8] flex items-center justify-center">
                      <Star className="h-2.5 w-2.5 md:h-3.5 md:w-3.5 fill-white text-white" />
                    </div>
                  ))}
                </div>
                <p className="text-xs md:text-sm text-gray-500">{review.time}</p>
                <p className="text-sm md:text-base font-semibold text-gray-900 line-clamp-1">{review.title}</p>
                <p className="text-xs md:text-sm text-gray-600 line-clamp-2">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs md:text-sm text-gray-500 text-center md:text-left">
          Showing our latest 4 and 5 star reviews
        </p>
        <p className="text-xs md:text-sm text-gray-400 mt-2 text-center md:text-left">
          Viator does not perform checks on Trustpilot reviews.
        </p>
      </div>
    </section>
  )
}
