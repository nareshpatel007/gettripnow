"use client"

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useParams } from "next/navigation";
import { TagDetail } from "@/components/tags/tag-detail";

export default function TagDetailPage() {
    // Get slug
    const params = useParams();
    const slug = params.slug;

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <TagDetail slug={slug} />
            <Footer />
        </div>
    )
}
