import { TourCard } from "./tour-card";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// Define props
type Props = {
    tourList: any
}

export function TourListingGrid({ tourList }: Props) {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8">
            {tourList.length !== 0 ? (
                <>
                    {tourList && tourList.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                            {tourList && tourList.map((tour: any) => (
                                <TourCard key={tour.id} {...tour} />
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-5">
                        <Skeleton height={200} />
                        <div className="hidden lg:block"><Skeleton height={200} /></div>
                        <div className="hidden lg:block"><Skeleton height={200} /></div>
                        <div className="hidden lg:block"><Skeleton height={200} /></div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                        <div className="hidden lg:block"><Skeleton height={200} /></div>
                        <div className="hidden lg:block"><Skeleton height={200} /></div>
                        <div className="hidden lg:block"><Skeleton height={200} /></div>
                        <div className="hidden lg:block"><Skeleton height={200} /></div>
                    </div>
                </>
            )}
        </div>
    )
}