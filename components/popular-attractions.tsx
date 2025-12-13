const attractions = [
    "Antelope Canyon",
    "Aquarium of the Pacific",
    "Alcatraz",
    "British Museum",
    "London Natural History Museum",
    "Hyde Park",
    "Stonehenge",
    "Distillery Historic District",
    "El Yunque National Forest",
    "Chichen Itza",
    "Machu Picchu",
    "Hoover Dam",
    "Teotihuacan",
    "Gondola Rides at the Venetian",
    "Bioluminescent Bay (Mosquito Bay)",
    "Arch of Cabo San Lucas (El Arco)",
    "Molokini Crater",
    "Mauna Kea Summit and Observatory",
]

export function PopularAttractions() {
    return (
        <section className="py-8 px-4 md:px-8 border-t border-gray-200">
            <div className="max-w-7xl mx-auto text-center">
                <h3 className="font-semibold text-2xl text-[#1a2b49] mb-6">Popular Attractions</h3>
                <div className="flex flex-wrap gap-3">
                    {attractions.map((attraction, index) => (
                        <a
                            key={attraction}
                            href={`/attraction/${attraction}`}
                            className="inline-flex items-center border border-[#1a2b49] hover:bg-[#2a3b59] hover:text-white transition-colors rounded overflow-hidden"
                        >
                            <span className="px-3 py-2 bg-[#1a2b49] text-white font-semibold text-sm">{index + 1}</span>
                            <span className="pr-4 py-2 text-[#1a2b49] hover:bg-[#1a2b49] hover:text-white font-semibold text-sm pl-3">{attraction}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
