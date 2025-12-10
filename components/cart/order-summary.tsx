"use client"

import { useState, useEffect } from "react"
import { Clock, Users, Calendar, CheckCircle, Tag, Phone, MessageCircle, Star } from "lucide-react"
import Link from "next/link"

export function OrderSummary() {
  const [timeLeft, setTimeLeft] = useState(19 * 60 + 51) // 19:51 in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="lg:sticky lg:top-4">
      {/* Order Card */}
      <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">
        {/* Timer Banner */}
        <div className="bg-[#f8d7da] px-3 md:px-4 py-2 md:py-3 flex items-center justify-center gap-2">
          <Clock className="h-4 w-4 text-gray-700" />
          <span className="text-gray-700 text-xs md:text-sm">
            Holding your spot for <span className="font-bold text-gray-900">{formatTime(timeLeft)}</span> minutes
          </span>
        </div>

        {/* Tour Info */}
        <div className="p-3 md:p-4">
          <div className="flex gap-3 md:gap-4 mb-4">
            <img
              src="/boat-tour-caribbean-ocean.jpg"
              alt="Private Boat Tour"
              className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover flex-shrink-0"
            />
            <div>
              <Link href="#" className="text-[#1a9cb0] font-medium hover:underline text-xs md:text-sm leading-tight">
                Private Boat Tours: Customize Your Grand Cayman Adventure!
              </Link>
            </div>
          </div>

          {/* Booking Details */}
          <div className="space-y-2 md:space-y-3 mb-4">
            <div className="flex items-center justify-between gap-2 text-xs md:text-sm text-gray-700">
              <div className="flex items-center gap-2 md:gap-3">
                <Users className="h-4 w-4 text-gray-400" />
                <span>2 Travelers</span>
              </div>
              <span className="font-semibold">₹73,810.89</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-700">
              <Calendar className="h-4 w-4 text-gray-400" />
              <span>Wed, Jan 28, 2026 • 9:30 AM</span>
            </div>
          </div>

          {/* Free Cancellation */}
          <div className="flex items-start gap-2 mb-4">
            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <p className="text-xs md:text-sm">
              <Link href="#" className="text-green-600 font-medium underline">
                Free cancellation
              </Link>
              {" + "}
              <Link href="#" className="text-gray-900 font-medium underline">
                Unlimited rescheduling
              </Link>
              <span className="text-gray-600"> before 9:30 AM on Jan 27, 2026</span>
            </p>
          </div>

          {/* Promo Code */}
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
            <Tag className="h-4 w-4 text-gray-500" />
            <Link href="#" className="text-gray-700 text-xs md:text-sm underline hover:text-gray-900">
              Enter Promo Code
            </Link>
          </div>

          {/* Total Price */}
          <div className="flex items-center justify-between">
            <span className="text-gray-900 font-medium text-sm md:text-base">
              Total price <span className="underline cursor-help">(INR)</span>:
            </span>
            <span className="text-lg md:text-xl font-bold text-gray-900">₹73,810.89</span>
          </div>
        </div>
      </div>

      {/* Book with Confidence */}
      <div className="mt-4 md:mt-6">
        <h3 className="font-bold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Book with confidence</h3>

        {/* Trustpilot - responsive */}
        <div className="flex flex-wrap items-center gap-2 mb-3 md:mb-4">
          <span className="text-gray-700 font-medium text-sm">Excellent</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 md:w-5 md:h-5 bg-[#00b67a] flex items-center justify-center">
                <Star className="h-2.5 w-2.5 md:h-3 md:w-3 fill-white text-white" />
              </div>
            ))}
          </div>
          <Star className="h-3 w-3 md:h-4 md:w-4 fill-[#00b67a] text-[#00b67a]" />
          <span className="text-gray-700 text-xs md:text-sm font-semibold">Trustpilot</span>
        </div>
        <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6">Based on 293,466 traveler reviews</p>

        {/* Features */}
        <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
          <div>
            <h4 className="font-semibold text-gray-900 text-sm">Exceptional flexibility</h4>
            <p className="text-xs md:text-sm text-gray-600">Free cancellation and lowest price guarantee</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm">24/7 global support</h4>
            <p className="text-xs md:text-sm text-gray-600">Our award-winning customer service team is here to help</p>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <a
            href="tel:+17024443854"
            className="flex items-center gap-2 text-xs md:text-sm text-gray-700 hover:text-[#1a9cb0]"
          >
            <Phone className="h-4 w-4" />
            <span className="underline">+1 (702) 444-3854</span>
          </a>
          <button className="flex items-center gap-2 text-xs md:text-sm text-gray-700 hover:text-[#1a9cb0]">
            <MessageCircle className="h-4 w-4" />
            <span className="underline">Chat now</span>
          </button>
        </div>
      </div>
    </div>
  )
}
