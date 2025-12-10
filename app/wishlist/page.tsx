import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WishlistGrid } from "@/components/wishlist/wishlist-grid"

export default function WishlistPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <WishlistGrid />
      </main>
      <Footer />
    </div>
  )
}
