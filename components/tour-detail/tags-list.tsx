import Link from "next/link";

// Define props
interface Props {
    title: string;
    slug: string;
    items: string[];
}

export function TourTagsList({ title, slug, items }: Props) {
    // If empty items, return null
    if (!items || items.length === 0) {
        return null;
    }

    return (
        <div className="py-8">
            <h3 className="font-semibold text-2xl text-[#1a2b49] mb-6">{title}</h3>
            <div className="flex flex-wrap gap-3">
                {items.map((item: any, index: number) => (
                    <Link key={item} href={`/${slug}/${item?.slug}`} className="inline-flex items-center border border-[#1a2b49] hover:bg-[#2a3b59] hover:text-white transition-colors rounded overflow-hidden">
                        <span className="px-3 py-2 bg-[#1a2b49] text-white font-semibold text-sm">{index + 1}</span>
                        <span className="pr-4 py-2 text-[#1a2b49] hover:bg-[#1a2b49] hover:text-white font-semibold text-sm pl-3">{item?.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}
