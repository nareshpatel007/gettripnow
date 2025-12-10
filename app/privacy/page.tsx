import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PrivacyPage } from "@/components/privacy-page"

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        <PrivacyPage />
      </main>
      <Footer />
    </div>
  )
}
