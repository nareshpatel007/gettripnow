import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogList } from "@/components/blog/blog-list"

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <BlogList />
      </main>
      <Footer />
    </div>
  )
}
