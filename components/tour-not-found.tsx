// Define props
type Props = {
    tourList: any
}

export function TourNotFound({ tourList }: Props) {
    return (
        <>
            {tourList && tourList.length === 0 && (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f53]/10 border border-[#f53]/40">
                        <svg
                            className="h-8 w-8 text-[#f53]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 01.553-.894L9 2m6 0l5.447 2.724A1 1 0 0121 5.618v10.764a1 1 0 01-.553.894L15 20m-6 0l6-3m-6 3V2m6 18V2"
                            />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">No tours found!</h3>
                    <p className="mt-2 max-w-md text-sm text-gray-500">We couldn’t find any tours matching your filters. Try adjusting your search criteria.</p>
                </div>
            )}
        </>
    )
}
