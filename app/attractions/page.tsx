import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AttractionsList } from "@/components/attractions/attractions-list"

export default function AttractionsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <AttractionsList />
            <Footer />
        </div>
    )
}
