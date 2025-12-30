"use client"

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useParams } from "next/navigation";
import { CityDetail } from "@/components/city-details";

export default function CityDetailPage() {
    // Get slug
    const params = useParams();
    const slug = params?.slug;

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <CityDetail slug={slug} />
            <Footer />
        </div>
    )
}