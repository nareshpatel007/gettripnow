import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogDetail } from "@/components/blog/blog-detail"

export default function BlogDetailPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <BlogDetail />
      </main>
      <Footer />
    </div>
  )
}
