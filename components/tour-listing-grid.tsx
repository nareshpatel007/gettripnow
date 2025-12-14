import { TourCard } from "./tour-card";
import { TourNotFound } from "./tour-not-found";

// Define props
type Props = {
    initLoading: boolean
    tourList: any
}

export function TourListingGrid({ initLoading, tourList }: Props) {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8">
            <TourNotFound initLoading={initLoading} tourList={tourList} />
            {tourList && tourList.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                    {tourList && tourList.map((tour: any) => (
                        <TourCard key={tour.id} {...tour} />
                    ))}
                </div>
            )}
        </div>
    )
}
