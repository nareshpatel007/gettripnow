import Link from "next/link"

export function CartFooter() {
  return (
    <footer className="bg-[#2d2d2d] py-5 px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-sm text-gray-300">
        <span>© 1997-2025 Viator, Inc.</span>
        <span className="hidden md:inline">•</span>
        <Link href="#" className="hover:underline hover:text-white">
          Terms & Conditions
        </Link>
        <span className="hidden md:inline">•</span>
        <Link href="#" className="hover:underline hover:text-white">
          Privacy and Cookies Statement
        </Link>
        <span className="hidden md:inline">•</span>
        <Link href="#" className="hover:underline hover:text-white">
          How Viator works
        </Link>
        <span className="hidden md:inline">•</span>
        <Link href="#" className="hover:underline hover:text-white">
          Cookie Consent
        </Link>
      </div>
    </footer>
  )
}
