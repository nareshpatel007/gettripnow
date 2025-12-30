"use client"

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useParams } from "next/navigation";
import { CountryDetail } from "@/components/country-details";

export default function CountryDetailPage() {
    // Get slug
    const params = useParams();
    const slug = params.slug;

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <CountryDetail slug={slug} />
            <Footer />
        </div>
    )
}