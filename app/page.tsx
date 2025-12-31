import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { WhyBookSection } from "@/components/why-book-section";
import { RecommendedSection } from "@/components/recommended-section";
import { FlexibleSection } from "@/components/flexible-section";
import { InterestSection } from "@/components/interest-section";
import { CancellationSection } from "@/components/cancellation-section";
import { ReviewsSection } from "@/components/reviews-section";
import { TopDestinations } from "@/components/top-destinations";
import { PopularCities } from "@/components/popular-cities";
import { PopularAttractions } from "@/components/popular-attractions";
import { Footer } from "@/components/footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <HeroSection />
            <WhyBookSection />
            {/* <LoginSection /> */}
            <RecommendedSection />
            <FlexibleSection />
            <InterestSection />
            <CancellationSection />
            <ReviewsSection />
            <TopDestinations />
            <PopularCities />
            <PopularAttractions />
            <Footer />
        </main>
    )
}