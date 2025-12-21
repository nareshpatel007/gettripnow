import Link from "next/link";
import { Search, Home, MapPin, Compass } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function NotFound() {
    const popularDestinations = [
        { name: "Paris", country: "France", href: "/tours" },
        { name: "Rome", country: "Italy", href: "/tours" },
        { name: "Barcelona", country: "Spain", href: "/tours" },
        { name: "London", country: "United Kingdom", href: "/tours" },
    ]

    return (
        <>
            <Header />
            <main className="min-h-[calc(100vh-200px)] bg-gradient-to-b from-[#f8f9fa] to-white">
                <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24 text-center">
                    {/* 404 Number */}
                    <div className="relative mb-8">
                        <h1 className="text-[120px] md:text-[180px] font-bold text-[#0057A8] opacity-10 leading-none">404</h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Compass className="h-20 w-20 md:h-32 md:w-32 text-[#0057A8] animate-spin-slow" />
                        </div>
                    </div>

                    {/* Main Message */}
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Oops! Looks like you're off the map</h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        The page you're looking for doesn't exist. But don't worry, there are plenty of amazing destinations waiting
                        to be explored.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Link
                            href="/"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#0057A8] text-white rounded-lg font-semibold text-base hover:bg-[#004a8f] transition-colors shadow-lg"
                        >
                            <Home className="h-5 w-5" />
                            Back to Home
                        </Link>
                        <Link
                            href="/tours"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0057A8] border-2 border-[#0057A8] rounded-lg font-semibold text-base hover:bg-[#0057A8] hover:text-white transition-colors"
                        >
                            <Search className="h-5 w-5" />
                            Explore Tours
                        </Link>
                    </div>

                    {/* Popular Destinations */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <MapPin className="h-6 w-6 text-[#0057A8]" />
                            <h3 className="text-2xl font-bold text-gray-900">Popular Destinations</h3>
                        </div>
                        <p className="text-gray-600 mb-8">Start your journey with these amazing places</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {popularDestinations.map((destination) => (
                                <Link
                                    key={destination.name}
                                    href={destination.href}
                                    className="group p-5 bg-gradient-to-br from-[#0057A8]/5 to-[#0057A8]/10 rounded-xl hover:from-[#0057A8] hover:to-[#004a8f] transition-all duration-300 border-2 border-transparent hover:border-[#0057A8]"
                                >
                                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors mb-1">
                                        {destination.name}
                                    </h4>
                                    <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors">
                                        {destination.country}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Help Text */}
                    <p className="mt-12 text-gray-500">
                        Need help?{" "}
                        <Link href="/contact" className="text-[#0057A8] font-medium hover:underline">
                            Contact our support team
                        </Link>
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}
