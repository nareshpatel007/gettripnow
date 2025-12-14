// Define props
type Props = {
    text?: any
}

export function HelpfulBanner({ text }: Props) {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <span className="text-xs md:text-sm text-gray-600">
                {text ? text : "Were these results helpful?"}
            </span>
            <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-500 hover:text-[#f53] cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                    </svg>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-gray-500 rotate-180 hover:text-[#f53] cursor-pointer"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}
