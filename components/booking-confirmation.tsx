"use client"

import { CheckCircle, Info, Printer, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const bookingDetails = {
  tourName: "Historium Bruges All-Inclusive Entrance Ticket",
  image: "/historic-trolley-tour-richmond-vintage-red-trolley.jpg",
  price: "₹1,950",
  bookingNumber: "GYG52539120",
  pin: "a+NcqxYh",
  date: "November 9, 2024",
  time: "10:00 AM — 4:00 PM",
  validity: "Valid 1 day",
  travelers: "1 Adult (Age 13+)",
}

const popularExperiences = [
  {
    title: "Bruges: Guided Rickshaw Tour",
    image: "/sightseeing-tour-van-richmond-virginia-city.jpg",
    rating: 4.8,
    reviews: 88,
    price: "₹4,500",
  },
  {
    title: "Bruges: 30-Minute Private Tour by Bike Carriage",
    image: "/segway-tour-richmond-landmark-historic.jpg",
    rating: 4.7,
    reviews: 101,
    price: "₹2,499",
  },
  {
    title: "From Amsterdam: Bruges Day Tour & Canal Cruise",
    image: "/ghost-tour-dark-spooky-shockoe-bottom-richmond.jpg",
    rating: 4.6,
    reviews: 245,
    price: "₹8,900",
  },
]

export function BookingConfirmation() {
  return (
    <section className="py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-[#0057A8]" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Thanks for your order</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 md:p-6 mb-6">
              <div className="flex gap-4">
                <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <ul className="space-y-3 text-gray-700 text-sm md:text-base">
                  <li>
                    Thank you for your order. We've sent the information for your activity to{" "}
                    <span className="font-medium text-gray-900">customer@email.com</span>. If you can't find it, please
                    check your spam or promotion folder.
                  </li>
                  <li>If you need to make changes to your booking, you'll need your booking number and PIN.</li>
                </ul>
              </div>
            </div>

            {/* Booking Details Card */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-4 md:p-6">
                <div className="flex gap-4">
                  {/* Tour Image */}
                  <div className="flex-shrink-0">
                    <Image
                      src={bookingDetails.image || "/placeholder.svg"}
                      alt={bookingDetails.tourName}
                      width={100}
                      height={100}
                      className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg"
                    />
                  </div>

                  {/* Tour Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-4">
                      <h2 className="font-semibold text-gray-900 text-base md:text-lg">{bookingDetails.tourName}</h2>
                      <span className="font-semibold text-gray-900 text-base md:text-lg flex-shrink-0">
                        {bookingDetails.price}
                      </span>
                    </div>

                    {/* Voucher Status */}
                    <div className="flex items-center gap-2 mt-2">
                      <CheckCircle className="w-4 h-4 text-[#0057A8]" />
                      <span className="text-[#0057A8] font-medium text-sm">We've sent your vouchers</span>
                    </div>

                    {/* Booking Number & PIN */}
                    <div className="mt-2 text-sm text-gray-600">
                      Booking Number <span className="font-semibold text-gray-900">{bookingDetails.bookingNumber}</span>{" "}
                      | PIN <span className="font-semibold text-gray-900">{bookingDetails.pin}</span>
                    </div>

                    {/* Date & Time */}
                    <div className="mt-1 text-sm text-gray-600">
                      {bookingDetails.date} (Open from {bookingDetails.time}) | {bookingDetails.validity}
                    </div>

                    {/* Travelers */}
                    <div className="mt-1 text-sm text-gray-600">{bookingDetails.travelers}</div>

                    {/* Action Links */}
                    <div className="mt-3 flex flex-wrap gap-4 text-sm">
                      <Link href="#" className="text-[#1a9cb0] hover:underline font-medium">
                        View booking summary
                      </Link>
                      <span className="text-gray-300">|</span>
                      <Link href="#" className="text-[#1a9cb0] hover:underline font-medium">
                        Add to calendar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Printable Voucher Button */}
              <div className="border-t border-gray-200 p-4 md:p-6 flex justify-center">
                <button className="flex items-center gap-2 px-6 py-3 bg-[#1a9cb0] text-white rounded-full font-medium hover:bg-[#158a9c] transition-colors">
                  <Printer className="w-5 h-5" />
                  Printable voucher
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Need Help Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Need help?</h3>
              <p className="text-sm text-gray-600">
                You can find a contact form and phone number for your language on our{" "}
                <Link href="#" className="text-[#1a9cb0] hover:underline">
                  help page
                </Link>
                .
              </p>
            </div>

            {/* More Popular Experiences */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5">
              <h3 className="font-semibold text-gray-900 mb-4">More popular experiences</h3>
              <div className="space-y-4">
                {popularExperiences.map((experience, index) => (
                  <Link key={index} href="#" className="flex gap-3 group">
                    <Image
                      src={experience.image || "/placeholder.svg"}
                      alt={experience.title}
                      width={60}
                      height={60}
                      className="w-14 h-14 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#1a9cb0] transition-colors line-clamp-2">
                        {experience.title}
                      </h4>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(experience.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">{experience.reviews}</span>
                        <span className="text-xs font-semibold text-gray-900 ml-auto">{experience.price}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
