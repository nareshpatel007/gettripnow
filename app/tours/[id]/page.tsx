"use client"

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TourDetailHero } from "@/components/tour-detail/tour-detail-hero";
import { TourBookingSidebar } from "@/components/tour-detail/tour-booking-sidebar";
import { TourOverview } from "@/components/tour-detail/tour-overview";
import { WhatsIncluded } from "@/components/tour-detail/whats-included";
import { MeetingAndPickup } from "@/components/tour-detail/meeting-and-pickup";
import { TourItinerary } from "@/components/tour-detail/tour-itinerary";
import { AdditionalInfo } from "@/components/tour-detail/additional-info";
import { CancellationPolicy } from "@/components/tour-detail/cancellation-policy";
import { TravelerPhotos } from "@/components/tour-detail/traveler-photos";
import { TravelerTips } from "@/components/tour-detail/traveler-tips";
import { TourReviews } from "@/components/tour-detail/tour-reviews";
import { SimilarExperiences } from "@/components/tour-detail/similar-experiences";
import { AlsoBought } from "@/components/tour-detail/also-bought";
import { RecentlyViewed } from "@/components/recently-viewed";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { TourTagsList } from "@/components/tour-detail/tags-list";

export default function TourDetailPage() {
    // Get slug
    const params = useParams();
    const slug = params?.id;

    // Define state
    const [isLoading, setIsLoading] = useState(false);
    const [tourData, setTourData] = useState<any>({});

    // Init data
    useEffect(() => {
        const controller = new AbortController();
        const fetchSingleTour = async () => {
            try {
                setIsLoading(true);

                // Fetch the data
                const response = await fetch("/api/tours/single", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ slug }),
                });

                // Handle non-200 responses
                if (response.ok) {
                    // Parse the JSON response
                    const data = await response.json();

                    // Update the state
                    setTourData(data?.data || {});
                }
            } catch (error: any) {
                if (error.name !== "AbortError") {
                    console.error("Failed to fetch tours:", error);
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchSingleTour();
        return () => controller.abort();
    }, [slug]);

    return (
        <div className="min-h-screen bg-white pb-20 lg:pb-0">
            <Header />
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:mb-3">
                <nav className="text-xs md:text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
                    <span className="hover:underline cursor-pointer">Home</span>
                    {tourData?.tour_location?.country_name && <>
                        <span className="mx-1 md:mx-2">/</span>
                        <Link href={`/country/${tourData?.tour_location?.country_slug}`}>
                            <span className="hover:underline cursor-pointer">{tourData?.tour_location?.country_name}</span>
                        </Link>
                    </>}
                    {tourData?.tour_location?.city_name && <>
                        <span className="mx-1 md:mx-2">/</span>
                        <Link href={`/city/${tourData?.tour_location?.city_slug}`}>
                            <span className="hover:underline cursor-pointer">{tourData?.tour_location?.city_name}</span>
                        </Link>
                    </>}
                    {tourData?.tour?.name && <>
                        <span className="mx-1 md:mx-2">/</span>
                        <span className="text-gray-700">{tourData?.tour?.name}</span>
                    </>}
                </nav>
            </div>
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    <div className="flex-1 min-w-0">
                        <TourDetailHero tourData={tourData} />
                        {/* <WhyTravelersLoved /> */}
                        {/* <PromotedExperiences /> */}
                        <TourOverview description={tourData?.tour?.description} />
                        <WhatsIncluded included={tourData?.inclusions} notIncluded={tourData?.exclusions} />
                        <MeetingAndPickup />
                        <TourItinerary itinerary={tourData?.itinerary} />
                        <AdditionalInfo additionalInfo={tourData?.additional_info} />
                        <CancellationPolicy />
                        <TravelerPhotos />
                        <TravelerTips />
                        <TourReviews />
                        <SimilarExperiences />
                        <AlsoBought />
                        <RecentlyViewed />
                    </div>
                    <div className="hidden lg:block lg:w-[380px] flex-shrink-0">
                        <div className="sticky top-4">
                            <TourBookingSidebar />
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10">
                <TourTagsList title="Explore Similar Things to Do" slug="tags" items={tourData?.tour_tags} />
                <TourTagsList title="Related Attractions" slug="attractions" items={tourData?.tour_attractions} />
            </div>
            <Footer />
        </div>
    )
}
