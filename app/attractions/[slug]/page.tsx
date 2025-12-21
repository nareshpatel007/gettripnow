"use client"

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AttractionDetail } from "@/components/attractions/attraction-detail";
import { useParams } from "next/navigation";

export default function AttractionDetailPage() {
    // Get slug
    const params = useParams();
    const slug = params.slug;

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <AttractionDetail slug={slug} />
            <Footer />
        </div>
    )
}
