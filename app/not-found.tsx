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
        <div className="min-h-screen bg-white">
            <Header />
            <div className="max-w-4xl mx-auto px-4 md:px-8 py-20 md:py-30 text-center">
                <div className="relative mb-8">
                    <h1 className="text-[120px] md:text-[180px] font-bold text-[#f53] opacity-10 leading-none">404</h1>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a2b49] mb-4">Oops! Looks like you're off the map</h2>
                <p className="text-md md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                    The page you're looking for doesn't exist. But don't worry, there are plenty of amazing destinations waiting
                    to be explored.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#f53] text-white rounded-lg font-semibold text-base hover:bg-[#1a2b49] transition-colors shadow-lg"
                    >
                        <Home className="h-5 w-5" />
                        Back to Home
                    </Link>
                    <Link
                        href="/tours"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#f53] border-2 border-[#f53] rounded-lg font-semibold text-base hover:bg-[#1a2b49] hover:border-[#1a2b49] hover:text-white transition-colors"
                    >
                        <Search className="h-5 w-5" />
                        Explore Tours
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}
