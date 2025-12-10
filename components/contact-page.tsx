"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, HelpCircle, FileText } from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Travel Street", "San Francisco, CA 94102", "United States"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (800) 123-4567", "+1 (415) 555-0100"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["support@viator.com", "bookings@viator.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9AM - 8PM", "Saturday - Sunday: 10AM - 6PM"],
  },
]

const quickLinks = [
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    link: "#",
    linkText: "Start Chat",
  },
  {
    icon: HelpCircle,
    title: "Help Center",
    description: "Find answers to frequently asked questions",
    link: "#",
    linkText: "Visit Help Center",
  },
  {
    icon: FileText,
    title: "Manage Booking",
    description: "View, modify or cancel your bookings",
    link: "/bookings",
    linkText: "Go to Bookings",
  },
]

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    bookingNumber: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about your booking or need assistance? We're here to help. Reach out to us through any of the
            channels below.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {quickLinks.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#1a9cb0]/10 rounded-lg">
                  <item.icon className="h-6 w-6 text-[#1a9cb0]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                  <Link href={item.link} className="text-[#1a9cb0] text-sm font-medium hover:underline">
                    {item.linkText} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <div className="flex-1">
            <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#0057A8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-[#0057A8]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({ name: "", email: "", subject: "", bookingNumber: "", message: "" })
                    }}
                    className="text-[#1a9cb0] font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a9cb0] focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a9cb0] focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a9cb0] focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="booking">Booking Inquiry</option>
                        <option value="cancellation">Cancellation Request</option>
                        <option value="refund">Refund Request</option>
                        <option value="complaint">Complaint</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Booking Number (Optional)</label>
                      <input
                        type="text"
                        value={formData.bookingNumber}
                        onChange={(e) => setFormData({ ...formData, bookingNumber: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a9cb0] focus:border-transparent outline-none transition-all"
                        placeholder="GYG12345678"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a9cb0] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Please describe your inquiry in detail..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-3 bg-[#1a9cb0] text-white font-medium rounded-full hover:bg-[#158a9c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:w-80 space-y-6">
            {contactInfo.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <item.icon className="h-5 w-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Interactive Map</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
