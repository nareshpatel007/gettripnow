import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Star } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-[#2d2d2d] text-white">
            <div className="py-10 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-center gap-4 md:gap-5 mb-6">
                        <a href="#" className="p-2 md:p-2.5 hover:bg-white/10 rounded-full">
                            <Facebook className="h-5 w-5 md:h-6 md:w-6" />
                        </a>
                        <a href="#" className="p-2 md:p-2.5 hover:bg-white/10 rounded-full">
                            <Twitter className="h-5 w-5 md:h-6 md:w-6" />
                        </a>
                        <a href="#" className="p-2 md:p-2.5 hover:bg-white/10 rounded-full">
                            <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href="#" className="p-2 md:p-2.5 hover:bg-white/10 rounded-full">
                            <Instagram className="h-5 w-5 md:h-6 md:w-6" />
                        </a>
                        <a href="#" className="p-2 md:p-2.5 hover:bg-white/10 rounded-full">
                            <Youtube className="h-5 w-5 md:h-6 md:w-6" />
                        </a>
                        <a href="#" className="p-2 md:p-2.5 hover:bg-white/10 rounded-full">
                            <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                            </svg>
                        </a>
                    </div>
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
                        <span className="text-sm md:text-base">4.4 rating | 260,452 reviews</span>
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
