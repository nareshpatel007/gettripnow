"use client"

import { useState } from "react"

export function TourOverview() {
  const [expanded, setExpanded] = useState(false)

  const fullText = `Get in the water with Southern Stingrays at Stingray City Sandbar in Grand Cayman, one of the best places on the planet to interact with rays in their natural habitat. This tour takes you on an unforgettable journey to three amazing locations.

Your adventure begins with a scenic boat ride to Stingray City Sandbar, where you'll wade into crystal-clear waist-deep waters to meet the friendly stingrays. Touch, feed, and photograph these gentle creatures in their natural environment.

Next, we'll head to Coral Gardens, a stunning snorkeling spot teeming with colorful tropical fish and beautiful coral formations. Explore the underwater world at your own pace with provided snorkeling equipment.

Our final stop is Blue Fish Point, another excellent snorkeling location known for its abundance of marine life. Keep your eyes peeled for parrotfish, sergeant majors, and maybe even a sea turtle!

All equipment, instruction, and refreshments are included. Our experienced guides ensure a safe and memorable experience for snorkelers of all skill levels.`

  return (
    <section className="py-8 border-b border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Overview</h2>
      <div className={`text-gray-600 leading-relaxed ${!expanded ? "line-clamp-4" : ""}`}>
        {fullText.split("\n\n").map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
      <button onClick={() => setExpanded(!expanded)} className="text-[#f53] font-medium hover:underline mt-2">
        {expanded ? "Show less" : "Read more"}
      </button>
    </section>
  )
}
