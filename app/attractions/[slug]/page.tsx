import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AttractionDetail } from "@/components/attractions/attraction-detail"

export default function AttractionDetailPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <AttractionDetail />
      <Footer />
    </div>
  )
}
