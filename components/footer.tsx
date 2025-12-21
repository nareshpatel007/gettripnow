import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Star } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-[#2d2d2d] text-white">
            <div className="py-10 px-4 md:px-8 py-2 md:py-14">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-8">
                        <div className="flex gap-0.5">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="w-5 h-5 md:w-6 md:h-6 bg-[#f53] flex items-center justify-center">
                                    <Star className="h-3 w-3 md:h-4 md:w-4 fill-white text-white" />
                                </div>
                            ))}
                            <div className="w-5 h-5 md:w-6 md:h-6 bg-[#f53] flex items-center justify-center">
                                <Star className="h-3 w-3 md:h-4 md:w-4 fill-white text-white" />
                            </div>
                        </div>
                        <span className="text-sm md:text-base">4.4 rating | 260,452+ reviews</span>
                        <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 md:h-5 md:w-5 fill-[#f53] text-[#f53]" />
                            <span className="text-sm md:text-base font-semibold">Trustpilot</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-5 text-sm md:text-base mb-10">
                        <a href="#" className="hover:underline">
                            Help Center
                        </a>
                        <a href="#" className="hover:underline">
                            Careers
                        </a>
                        <a href="#" className="hover:underline">
                            Travel Agents
                        </a>
                        <a href="#" className="hover:underline">
                            Viator blog
                        </a>
                        <a href="#" className="hover:underline col-span-2 sm:col-span-1">
                            Privacy and Cookies Statement
                        </a>
                        <a href="#" className="hover:underline">
                            Sitemap
                        </a>
                        <a href="#" className="hover:underline">
                            Become an Affiliate
                        </a>
                        <a href="#" className="hover:underline">
                            Accessibility
                        </a>
                        <a href="#" className="hover:underline">
                            About Viator
                        </a>
                        <a href="#" className="hover:underline">
                            Supplier Sign Up
                        </a>
                        <a href="#" className="hover:underline">
                            News
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-600 py-5 px-4">
                <div className="max-w-7xl mx-auto flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-4 text-xs md:text-sm text-gray-400">
                    <span>&copy; {new Date().getFullYear()} GoOneTravel. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    )
}
