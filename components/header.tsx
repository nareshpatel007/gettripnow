"use client"

import { Globe, ChevronDown, User, Search, Heart, ShoppingCart, Menu, X, MapPin, Ticket, HelpCircle } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { LoginModal } from "./login-modal"
import { PlanTripModal } from "./plan-trip-modal"

export function Header() {
    const [isDiscoverOpen, setIsDiscoverOpen] = useState(false)
    const [isUserOpen, setIsUserOpen] = useState(false)
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [showMobileSearch, setShowMobileSearch] = useState(false)
    const [isPlanTripModalOpen, setIsPlanTripModalOpen] = useState(false)

    const megaMenuCategories = [
        {
            title: "Things to Do",
            links: [
                { name: "Tours", href: "/tours" },
                { name: "Attractions", href: "/attractions" },
                { name: "Day Trips", href: "#" },
                { name: "Outdoor Activities", href: "#" },
                { name: "Concerts & Shows", href: "#" },
            ],
        },
        {
            title: "Top Destinations",
            links: [
                { name: "Las Vegas", href: "#" },
                { name: "Paris", href: "#" },
                { name: "New York City", href: "#" },
                { name: "Rome", href: "#" },
                { name: "London", href: "#" },
            ],
        },
        {
            title: "Travel Guides",
            links: [
                { name: "Travel Blog", href: "#" },
                { name: "Travel Tips", href: "#" },
                { name: "Bucket List", href: "#" },
                { name: "Travel Inspiration", href: "#" },
                { name: "Seasonal Guides", href: "#" },
            ],
        },
        {
            title: "Categories",
            links: [
                { name: "Food & Drink", href: "#" },
                { name: "Art & Culture", href: "#" },
                { name: "Water Sports", href: "#" },
                { name: "Adventure", href: "#" },
                { name: "Walking Tours", href: "#" },
            ],
        },
    ]

    const suggestedDestinations = [
        { name: "Paris", country: "France", image: "/paris-eiffel-tower.png" },
        { name: "Rome", country: "Italy", image: "/rome-colosseum.png" },
        { name: "Barcelona", country: "Spain", image: "/barcelona-sagrada-familia.jpg" },
        { name: "London", country: "United Kingdom", image: "/london-big-ben.png" },
        { name: "New York", country: "United States", image: "/new-york-statue-of-liberty.jpg" },
        { name: "Tokyo", country: "Japan", image: "/tokyo-tower-night.png" },
    ]

    return (
        <>
            <header className="relative bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 md:gap-8">
                        <button
                            className="md:hidden p-2 -ml-2 hover:bg-gray-100 rounded-full"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
                        </button>

                        <Link href="/" className="flex items-center gap-1">
                            <svg viewBox="0 0 100 24" className="h-6 md:h-7 w-auto" fill="none">
                                <text x="0" y="18" className="text-xl font-bold" fill="#2D2D2D">GoOneTravel</text>
                            </svg>
                        </Link>

                        <div
                            className="relative"
                            onMouseEnter={() => setIsDiscoverOpen(true)}
                            onMouseLeave={() => setIsDiscoverOpen(false)}
                        >
                            <button
                                className="hidden md:flex items-center gap-1.5 text-semibold text-gray-700 hover:text-gray-900 py-2"
                                onClick={() => setIsDiscoverOpen(!isDiscoverOpen)}
                            >
                                Discover
                                <ChevronDown className={`h-5 w-5 transition-transform ${isDiscoverOpen ? "rotate-180" : ""}`} />
                            </button>

                            {/* Mega Menu Dropdown */}
                            {isDiscoverOpen && (
                                <>
                                    <div className="absolute top-full left-0 h-2 w-full" />
                                    <div className="absolute top-[calc(100%+8px)] left-0 w-[680px] bg-white rounded-lg shadow-xl border border-gray-200 p-8 z-50">
                                        <div className="grid grid-cols-4 gap-8">
                                            {megaMenuCategories.map((category) => (
                                                <div key={category.title}>
                                                    <h3 className="font-semibold text-base text-gray-900 mb-4">{category.title}</h3>
                                                    <ul className="space-y-3">
                                                        {category.links.map((link) => (
                                                            <li key={link.name}>
                                                                <Link
                                                                    href={link.href}
                                                                    className="text-base text-gray-600 hover:text-[#f53] transition-colors"
                                                                >
                                                                    {link.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-8 pt-5 border-t border-gray-200">
                                            <Link href="#" className="text-base text-[#f53] font-medium hover:underline">
                                                View all destinations →
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Search Bar with Suggestions Dropdown - Desktop */}
                    <div className="relative flex-1 max-w-md hidden md:block">
                        <div className="bg-gray-100 rounded-full flex items-center gap-2 px-4 py-2 border-1">
                            <Search className="h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search destinations or activities"
                                className="flex-1 outline-none text-sm text-gray-700 placeholder:text-gray-400 bg-transparent"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                onFocus={() => setShowSuggestions(true)}
                                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                            />
                        </div>

                        {showSuggestions && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50">
                                <div className="p-3 border-b border-gray-100">
                                    <span className="text-xs font-semibold text-[#1a2b49] uppercase tracking-wide">
                                        Popular Destinations
                                    </span>
                                </div>
                                <div className="max-h-[300px] overflow-y-auto">
                                    {suggestedDestinations.map((destination) => (
                                        <button
                                            key={destination.name}
                                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
                                            onClick={() => {
                                                setSearchValue(destination.name)
                                                setShowSuggestions(false)
                                            }}
                                        >
                                            <img
                                                src={destination.image || "/placeholder.svg"}
                                                alt={destination.name}
                                                className="w-10 h-10 rounded-lg object-cover"
                                            />
                                            <div>
                                                <p className="font-medium text-gray-800">{destination.name}</p>
                                                <p className="text-sm text-gray-500">{destination.country}</p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-2 md:gap-5">
                        <button
                            className="md:hidden p-2 hover:bg-gray-100 rounded-full cursor-pointer"
                            onClick={() => setShowMobileSearch(!showMobileSearch)}
                        >
                            <Search className="h-5 w-5 text-gray-700" />
                        </button>

                        <Link href="/wishlist">
                            <button className="p-2 md:p-2.5 hover:bg-gray-100 rounded-full relative cursor-pointer">
                                <Heart className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
                            </button>
                        </Link>

                        <Link href="/cart" className="p-2 md:p-2.5 hover:bg-gray-100 rounded-full relative cursor-pointer">
                            <ShoppingCart className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
                            <span className="absolute -top-0.5 -right-0.5 bg-[#f53] text-white text-xs font-medium rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center text-[10px] md:text-xs">
                                0
                            </span>
                        </Link>

                        <div className="relative hidden md:block">
                            <button
                                className="flex items-center gap-1 p-2.5 hover:bg-gray-100 rounded-full cursor-pointer"
                                onClick={() => setIsUserOpen(!isUserOpen)}
                                onBlur={() => setTimeout(() => setIsUserOpen(false), 150)}
                            >
                                <User className="h-6 w-6 text-gray-700" />
                                <ChevronDown
                                    className={`h-5 w-5 text-gray-700 transition-transform ${isUserOpen ? "rotate-180" : ""}`}
                                />
                            </button>

                            {/* User Dropdown */}
                            {isUserOpen && (
                                <div className="absolute top-full right-0 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                                    <button
                                        onClick={() => {
                                            setIsLoginModalOpen(true)
                                            setIsUserOpen(false)
                                        }}
                                        className="w-full text-left block px-5 py-2.5 text-base text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                                    >
                                        <span className="font-medium">Log in / Sign up</span>
                                    </button>
                                    <div className="border-t border-gray-200 my-2" />
                                    <Link
                                        href="/bookings"
                                        className="block px-5 py-2.5 text-base text-gray-700 hover:bg-gray-50 transition-colors"
                                    >
                                        My bookings
                                    </Link>
                                    <Link
                                        href="/wishlist"
                                        className="block px-5 py-2.5 text-base text-gray-700 hover:bg-gray-50 transition-colors"
                                    >
                                        Wishlists
                                    </Link>
                                    <div className="border-t border-gray-200 my-2" />
                                    <Link
                                        href="/contact"
                                        className="block px-5 py-2.5 text-base text-gray-700 hover:bg-gray-50 transition-colors"
                                    >
                                        Help Center
                                    </Link>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => setIsPlanTripModalOpen(true)}
                            className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#f53] text-white rounded-full font-medium text-sm hover:bg-[#1a2b49] transition-colors cursor-pointer"
                        >
                            <MapPin className="h-4 w-4" />
                            Plan Your Trip
                        </button>
                    </div>
                </div>

                {showMobileSearch && (
                    <div className="md:hidden px-4 pb-4">
                        <div className="bg-gray-100 rounded-full flex items-center gap-2 px-4 py-2">
                            <Search className="h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search destinations or activities"
                                className="flex-1 outline-none text-sm text-gray-700 placeholder:text-gray-400 bg-transparent"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                autoFocus
                            />
                        </div>
                    </div>
                )}

                {isMobileMenuOpen && (
                    <div className="md:hidden fixed inset-0 top-[65px] bg-white z-50 overflow-y-auto">
                        <div className="p-4 space-y-6">
                            {/* User Actions */}
                            <div className="space-y-2">
                                <button
                                    onClick={() => {
                                        setIsLoginModalOpen(true)
                                        setIsMobileMenuOpen(false)
                                    }}
                                    className="w-full text-left px-4 py-3 bg-[#f53] text-white rounded-lg font-medium"
                                >
                                    Log in / Sign up
                                </button>
                            </div>

                            <div className="space-y-2">
                                <button
                                    onClick={() => setIsPlanTripModalOpen(true)}
                                    className="w-full flex items-center gap-2 text-left px-4 py-3 bg-[#f53] text-white rounded-lg font-medium"
                                >
                                    <MapPin className="h-4 w-4" />
                                    Plan Your Trip
                                </button>
                            </div>

                            {/* Categories */}
                            {megaMenuCategories.map((category) => (
                                <div key={category.title}>
                                    <h3 className="font-semibold text-base text-gray-900 mb-3">{category.title}</h3>
                                    <ul>
                                        {category.links.map((link) => (
                                            <li key={link.name}>
                                                <Link
                                                    href={link.href}
                                                    className="block py-2 text-gray-600 hover:text-[#1a9cb0]"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            {/* Additional Links */}
                            <div className="border-t border-gray-200 pt-4">
                                <Link href="/bookings" className="flex items-center gap-3 py-2 text-gray-700">
                                    <Ticket className="h-5 w-5" />
                                    My Bookings
                                </Link>
                                <Link href="/wishlist" className="flex items-center gap-3 py-2 text-gray-700">
                                    <Heart className="h-5 w-5" />
                                    Wishlists
                                </Link>
                                <Link href="/contact" className="flex items-center gap-3 py-2 text-gray-700">
                                    <HelpCircle className="h-5 w-5" />
                                    Help Center
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Login Modal */}
            <LoginModal open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen} />

            {/* Plan Trip Modal */}
            <PlanTripModal open={isPlanTripModalOpen} onOpenChange={setIsPlanTripModalOpen} />
        </>
    )
}
