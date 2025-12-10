import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TourDetailHero } from "@/components/tour-detail/tour-detail-hero"
import { TourBookingSidebar } from "@/components/tour-detail/tour-booking-sidebar"
import { WhyTravelersLoved } from "@/components/tour-detail/why-travelers-loved"
import { PromotedExperiences } from "@/components/tour-detail/promoted-experiences"
import { TourOverview } from "@/components/tour-detail/tour-overview"
import { WhatsIncluded } from "@/components/tour-detail/whats-included"
import { MeetingAndPickup } from "@/components/tour-detail/meeting-and-pickup"
import { TourItinerary } from "@/components/tour-detail/tour-itinerary"
import { AdditionalInfo } from "@/components/tour-detail/additional-info"
import { CancellationPolicy } from "@/components/tour-detail/cancellation-policy"
import { TravelerPhotos } from "@/components/tour-detail/traveler-photos"
import { TravelerTips } from "@/components/tour-detail/traveler-tips"
import { TourReviews } from "@/components/tour-detail/tour-reviews"
import { SimilarExperiences } from "@/components/tour-detail/similar-experiences"
import { AlsoBought } from "@/components/tour-detail/also-bought"
import { RecentlyViewed } from "@/components/recently-viewed"

export default function TourDetailPage() {
    return (
        <div className="min-h-screen bg-white pb-20 lg:pb-0">
            <Header />

            {/* Breadcrumb - responsive */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
                <nav className="text-xs md:text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
                    <span className="hover:underline cursor-pointer">Home</span>
                    <span className="mx-1 md:mx-2">/</span>
                    <span className="hover:underline cursor-pointer">Cayman Islands</span>
                    <span className="mx-1 md:mx-2">/</span>
                    <span className="hover:underline cursor-pointer">Grand Cayman</span>
                    <span className="mx-1 md:mx-2">/</span>
                    <span className="text-gray-700">Stingray City Sandbar Tour</span>
                </nav>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Left Content - All Tour Details */}
                    <div className="flex-1 min-w-0">
                        <TourDetailHero />
                        <WhyTravelersLoved />
                        <PromotedExperiences />
                        <TourOverview />
                        <WhatsIncluded />
                        <MeetingAndPickup />
                        <TourItinerary />
                        <AdditionalInfo />
                        <CancellationPolicy />
                        <TravelerPhotos />
                        <TravelerTips />
                        <TourReviews />
                        <SimilarExperiences />
                        <AlsoBought />
                        <RecentlyViewed />
                    </div>

                    {/* Right Sidebar - Sticky Booking */}
                    <div className="hidden lg:block lg:w-[380px] flex-shrink-0">
                        <div className="sticky top-4">
                            <TourBookingSidebar />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile booking bar is handled inside TourBookingSidebar */}

            <Footer />
        </div>
    )
}
