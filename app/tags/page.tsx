import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TagsList } from "@/components/tags/tags-list";

export default function TagsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <TagsList />
            <Footer />
        </div>
    )
}