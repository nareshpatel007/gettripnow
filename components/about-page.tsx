"use client"

import { Globe, Heart, MapPin, Star, Shield, Headphones } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const stats = [
  { value: "300K+", label: "Travel Experiences" },
  { value: "200+", label: "Countries & Regions" },
  { value: "50M+", label: "Happy Travelers" },
  { value: "4.5", label: "Average Rating", icon: Star },
]

const values = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "We connect travelers with local experiences in destinations around the world.",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Every experience is vetted for quality and safety to ensure peace of mind.",
  },
  {
    icon: Heart,
    title: "Passion for Travel",
    description: "We believe travel has the power to transform lives and create lasting memories.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated team is always available to help you before, during, and after your trip.",
  },
]

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    image: "/professional-ceo-portrait.png",
  },
  {
    name: "Michael Rodriguez",
    role: "Chief Product Officer",
    image: "/professional-product-officer.png",
  },
  {
    name: "Emily Thompson",
    role: "Head of Operations",
    image: "/professional-operations-manager.png",
  },
  {
    name: "David Kim",
    role: "Chief Technology Officer",
    image: "/professional-man-tech-officer-portrait.jpg",
  },
]

const milestones = [
  {
    year: "2008",
    title: "Founded",
    description: "Viator was founded with a mission to connect travelers with experiences",
  },
  { year: "2014", title: "Joined TripAdvisor", description: "Became part of the TripAdvisor family" },
  {
    year: "2018",
    title: "10M+ Travelers",
    description: "Reached milestone of serving over 10 million happy travelers",
  },
  {
    year: "2023",
    title: "300K+ Experiences",
    description: "Expanded to offer over 300,000 travel experiences worldwide",
  },
]

export function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <Image src="/travel-adventure-group-tourists-exploring-beautifu.jpg" alt="Travel Experience" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">About Viator</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Connecting travelers with unforgettable experiences around the world
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-3xl md:text-4xl font-bold text-[#1a9cb0]">{stat.value}</span>
                  {stat.icon && <stat.icon className="h-6 w-6 text-yellow-400 fill-yellow-400" />}
                </div>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                At Viator, we believe that travel is about more than just visiting new places—it's about creating
                meaningful connections and unforgettable memories. Our mission is to help travelers discover and book
                the best experiences, from iconic attractions to hidden gems.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We partner with thousands of local operators and tour guides around the world to bring you authentic,
                high-quality experiences that go beyond the typical tourist path. Whether you're seeking adventure,
                culture, relaxation, or all three, we're here to help you plan your perfect trip.
              </p>
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a9cb0] text-white font-medium rounded-full hover:bg-[#158a9c] transition-colors"
              >
                <MapPin className="h-5 w-5" />
                Explore Experiences
              </Link>
            </div>
            <div className="lg:w-[450px]">
              <Image
                src="/diverse-group-tourists-enjoying-guided-tour-advent.jpg"
                alt="Travelers enjoying an experience"
                width={450}
                height={350}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-100 py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-[#1a9cb0]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-[#1a9cb0]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex items-center gap-6 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <span className="text-[#1a9cb0] font-bold text-lg">{milestone.year}</span>
                    <h3 className="font-semibold text-gray-900">{milestone.title}</h3>
                    <p className="text-sm text-gray-600">{milestone.description}</p>
                  </div>
                  <div className="w-4 h-4 bg-[#1a9cb0] rounded-full border-4 border-white shadow z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-12 md:py-16 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1a9cb0] py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-white/90 mb-6">
            Discover thousands of unforgettable experiences waiting for you around the world.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#1a9cb0] font-medium rounded-full hover:bg-gray-100 transition-colors"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  )
}
