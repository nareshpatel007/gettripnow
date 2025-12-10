import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutPage } from "@/components/about-page"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        <AboutPage />
      </main>
      <Footer />
    </div>
  )
}
