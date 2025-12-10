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
                <div key={i} className="w-5 h-5 md:w-6 md:h-6 bg-[#0057A8] flex items-center justify-center">
                  <Star className="h-3 w-3 md:h-4 md:w-4 fill-white text-white" />
                </div>
              ))}
              <div className="w-5 h-5 md:w-6 md:h-6 bg-[#0057A8] flex items-center justify-center">
                <Star className="h-3 w-3 md:h-4 md:w-4 fill-white text-white" />
              </div>
            </div>
            <span className="text-sm md:text-base">4.4 rating | 260,452 reviews</span>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 md:h-5 md:w-5 fill-[#0057A8] text-[#0057A8]" />
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
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8">
            <a
              href="#"
              className="bg-black rounded px-4 py-2.5 flex items-center justify-center gap-2.5 hover:bg-gray-800"
            >
              <svg className="h-6 w-6 md:h-7 md:w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.9 17.39c-.26.8-.64 1.56-1.14 2.25-.69 1.01-1.26 1.71-1.7 2.1-.67.62-1.38.94-2.14.96-.55 0-1.2-.16-1.97-.47-.76-.31-1.46-.47-2.1-.47-.67 0-1.39.16-2.16.47-.77.32-1.39.48-1.86.5-.73.03-1.47-.3-2.2-.98-.48-.43-1.08-1.16-1.8-2.21-.77-1.12-1.41-2.42-1.9-3.9C.33 14.06 0 12.58 0 11.15c0-1.67.36-3.11 1.08-4.31.57-1 1.32-1.78 2.27-2.35.94-.57 1.96-.86 3.05-.88.58 0 1.35.18 2.3.53.95.35 1.56.53 1.82.53.19 0 .85-.21 1.96-.62 1.05-.38 1.94-.54 2.66-.48 1.97.16 3.45.94 4.44 2.35-1.76 1.07-2.63 2.57-2.61 4.49.02 1.5.56 2.75 1.62 3.74.48.46 1.02.81 1.62 1.07-.13.38-.27.74-.42 1.09l.01-.01zM13.17.82C13.17.54 13.19.27 13.24 0c1.5.06 3.31.99 4.14 2.25.75 1.1 1.12 2.43 1.1 3.97-.03.02-.07.03-.1.03-1.43.06-3.08-.85-4.07-2.14-.5-.66-.89-1.4-1.14-2.2v-.09z" />
              </svg>
              <div className="text-left">
                <p className="text-xs leading-none">Get it on</p>
                <p className="text-sm md:text-base font-semibold leading-none">Google Play</p>
              </div>
            </a>
            <a
              href="#"
              className="bg-black rounded px-4 py-2.5 flex items-center justify-center gap-2.5 hover:bg-gray-800"
            >
              <svg className="h-6 w-6 md:h-7 md:w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <p className="text-xs leading-none">Download on the</p>
                <p className="text-sm md:text-base font-semibold leading-none">App Store</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-4 text-xs md:text-sm text-gray-400">
          <span>© 1997-2025 Viator, Inc.</span>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              How Viator works
            </a>
            <a href="#" className="hover:underline">
              Cookie Consent
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
