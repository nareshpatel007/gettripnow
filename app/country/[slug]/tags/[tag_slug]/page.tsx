"use client"

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useParams } from "next/navigation";
import { CountryTagDetail } from "@/components/tags/country-tag-detail";

export default function TagDetailPage() {
    // Get slug
    const params = useParams();
    const country = params?.slug;
    const tag = params?.tag_slug;

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <CountryTagDetail country={country} tag={tag} />
            <Footer />
        </div>
    )
}