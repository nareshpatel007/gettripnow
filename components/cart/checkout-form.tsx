"use client"

import { useState } from "react"
import { User, ChevronDown, HelpCircle } from "lucide-react"

type Step = "contact" | "activity" | "payment"

export function CheckoutForm() {
  const [currentStep, setCurrentStep] = useState<Step>("contact")
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    countryCode: "(+1) United States",
    phone: "",
  })
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)

  const countryCodes = [
    "(+1) United States",
    "(+44) United Kingdom",
    "(+91) India",
    "(+61) Australia",
    "(+81) Japan",
    "(+49) Germany",
    "(+33) France",
    "(+86) China",
    "(+971) UAE",
    "(+65) Singapore",
  ]

  const handleContactSubmit = () => {
    setCurrentStep("activity")
  }

  const handleActivitySubmit = () => {
    setCurrentStep("payment")
  }

  return (
    <div className="space-y-4">
      {/* Step 1: Contact Details */}
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <button
          onClick={() => setCurrentStep("contact")}
          className="w-full px-6 py-5 flex items-center gap-3 text-left bg-white hover:bg-gray-50 transition-colors"
        >
          <span
            className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold ${
              currentStep === "contact" ? "bg-[#0f3c4c] text-white" : "bg-gray-200 text-gray-600"
            }`}
          >
            1
          </span>
          <span className="text-lg font-semibold text-gray-900">Contact details</span>
        </button>

        {currentStep === "contact" && (
          <div className="px-6 pb-6">
            <p className="text-gray-600 mb-6">
              We'll use this information to send you confirmation and updates about your booking
            </p>

            {/* Login Prompt */}
            <div className="bg-gray-50 rounded-lg px-4 py-3 flex items-center gap-3 mb-6">
              <User className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">
                <span className="text-[#1a9cb0] font-medium hover:underline cursor-pointer">Log in</span>
                {" or "}
                <span className="text-[#1a9cb0] font-medium hover:underline cursor-pointer">Sign-up</span>
                {" for a faster checkout and to redeem available Viator Rewards"}
              </span>
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First name"
                value={contactForm.firstName}
                onChange={(e) => setContactForm({ ...contactForm, firstName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a9cb0] focus:ring-1 focus:ring-[#1a9cb0] text-gray-900 placeholder:text-gray-400"
              />
              <input
                type="text"
                placeholder="Last name"
                value={contactForm.lastName}
                onChange={(e) => setContactForm({ ...contactForm, lastName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a9cb0] focus:ring-1 focus:ring-[#1a9cb0] text-gray-900 placeholder:text-gray-400"
              />
            </div>

            {/* Email Field */}
            <div className="mb-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a9cb0] focus:ring-1 focus:ring-[#1a9cb0] text-gray-900 placeholder:text-gray-400 pr-10"
                />
                <HelpCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 cursor-help" />
              </div>
              <p className="text-sm text-gray-500 mt-1">We'll send booking confirmation emails here</p>
            </div>

            {/* Confirm Email Field */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Confirm Email"
                value={contactForm.confirmEmail}
                onChange={(e) => setContactForm({ ...contactForm, confirmEmail: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a9cb0] focus:ring-1 focus:ring-[#1a9cb0] text-gray-900 placeholder:text-gray-400"
              />
              <p className="text-sm text-gray-500 mt-1">Just to ensure we got the right email.</p>
            </div>

            {/* Phone Field */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="relative">
                <button
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                  onBlur={() => setTimeout(() => setShowCountryDropdown(false), 150)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-left flex items-center justify-between text-gray-700 hover:border-gray-400 transition-colors"
                >
                  <span>{contactForm.countryCode}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 transition-transform ${showCountryDropdown ? "rotate-180" : ""}`}
                  />
                </button>

                {showCountryDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                    {countryCodes.map((code) => (
                      <button
                        key={code}
                        onClick={() => {
                          setContactForm({ ...contactForm, countryCode: code })
                          setShowCountryDropdown(false)
                        }}
                        className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 border-b border-gray-100 last:border-0"
                      >
                        {code}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a9cb0] focus:ring-1 focus:ring-[#1a9cb0] text-gray-900 placeholder:text-gray-400 pr-10"
                />
                <HelpCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 cursor-help" />
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleContactSubmit}
              className="bg-[#1a9cb0] hover:bg-[#158a9c] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Step 2: Activity Details */}
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <button
          onClick={() => currentStep !== "contact" && setCurrentStep("activity")}
          className="w-full px-6 py-5 flex items-center gap-3 text-left bg-white hover:bg-gray-50 transition-colors"
        >
          <span
            className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold ${
              currentStep === "activity" ? "bg-[#0f3c4c] text-white" : "bg-gray-200 text-gray-600"
            }`}
          >
            2
          </span>
          <span className="text-lg font-semibold text-gray-900">Activity details</span>
        </button>

        {currentStep === "activity" && (
          <div className="px-6 pb-6">
            <p className="text-gray-600 mb-6">Please provide additional details for your tour</p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Special requirements (optional)</label>
                <textarea
                  placeholder="Let us know if you have any special requirements or requests"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a9cb0] focus:ring-1 focus:ring-[#1a9cb0] text-gray-900 placeholder:text-gray-400 resize-none h-24"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hotel/Pickup location (optional)</label>
                <input
                  type="text"
                  placeholder="Enter your hotel name or pickup location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a9cb0] focus:ring-1 focus:ring-[#1a9cb0] text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>

            <button
              onClick={handleActivitySubmit}
              className="bg-[#1a9cb0] hover:bg-[#158a9c] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Step 3: Payment Details */}
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <button
          onClick={() => currentStep === "payment" && setCurrentStep("payment")}
          className="w-full px-6 py-5 flex items-center gap-3 text-left bg-white hover:bg-gray-50 transition-colors"
        >
          <span
            className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold ${
              currentStep === "payment" ? "bg-[#0f3c4c] text-white" : "bg-gray-200 text-gray-600"
            }`}
          >
            3
          </span>
          <span className="text-lg font-semibold text-gray-900">Payment details</span>
        </button>

        {currentStep === "payment" && (
          <div className="px-6 pb-6">
            <p className="text-gray-600 mb-6">Enter your payment information to complete the booking</p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a9cb0] focus:ring-1 focus:ring-[#1a9cb0] text-gray-900 placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expiry date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a9cb0] focus:ring-1 focus:ring-[#1a9cb0] text-gray-900 placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a9cb0] focus:ring-1 focus:ring-[#1a9cb0] text-gray-900 placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name on card</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a9cb0] focus:ring-1 focus:ring-[#1a9cb0] text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>

            <button className="w-full bg-[#0f3c4c] hover:bg-[#0a2f3c] text-white font-semibold py-4 rounded-lg transition-colors text-lg">
              Complete Booking
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
