"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function TourItinerary() {
  const [openStops, setOpenStops] = useState<number[]>([0])

  const stops = [
    {
      title: "Hotel Pickup",
      duration: "15 minutes",
      description: "Pickup from your hotel or cruise terminal. Our driver will meet you at the lobby.",
    },
    {
      title: "Stingray City Sandbar",
      duration: "1 hour",
      description:
        "Wade into crystal-clear, waist-deep waters to interact with Southern Stingrays. Touch, feed, and photograph these gentle creatures.",
    },
    {
      title: "Coral Gardens",
      duration: "45 minutes",
      description:
        "Snorkel among vibrant coral formations and colorful tropical fish. Equipment and instruction provided.",
    },
    {
      title: "Blue Fish Point",
      duration: "45 minutes",
      description:
        "Our final snorkeling stop, known for its abundance of marine life including parrotfish and sergeant majors.",
    },
    {
      title: "Return to Hotel",
      duration: "15 minutes",
      description: "Comfortable ride back to your hotel or cruise terminal.",
    },
  ]

  const toggleStop = (index: number) => {
    setOpenStops((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="py-8 border-b border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Itinerary</h2>
      <div className="space-y-2">
        {stops.map((stop, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              onClick={() => toggleStop(index)}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f53] text-white text-sm font-medium">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{stop.title}</h3>
                  <p className="text-sm text-gray-500">{stop.duration}</p>
                </div>
              </div>
              <ChevronDown
                className={`h-5 w-5 text-gray-400 transition-transform ${
                  openStops.includes(index) ? "rotate-180" : ""
                }`}
              />
            </button>
            {openStops.includes(index) && (
              <div className="px-4 pb-4 pl-16">
                <p className="text-gray-600">{stop.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
