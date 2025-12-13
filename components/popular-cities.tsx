const cities = [
    "Tokyo Tours",
    "Kyoto Tours",
    "Osaka Tours",
    "Fukuoka Tours",
    "Nagoya Tours",
    "Hiroshima Tours",
    "Hakone Tours",
    "Sapporo Tours",
    "Nara Tours",
    "Kanazawa Tours",
    "Kobe Tours",
    "Nikko Tours",
    "Kamakura Tours",
    "Nagasaki Tours",
    "Takayama Tours",
    "Nagano Tours",
    "Naha Tours",
    "Yokohama Tours",
    "Fujikawaguchiko Tours",
    "Uji Tours",
]

export function PopularCities() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center py-8 border-t border-gray-200">
                <h3 className="font-semibold text-2xl text-[#1a2b49] mb-6">Top Cities</h3>
                <div className="flex flex-wrap gap-3">
                    {cities.map((city, index) => (
                        <a
                            key={city}
                            href={`/city/${city}`}
                            className="inline-flex items-center border border-[#1a2b49] hover:bg-[#2a3b59] hover:text-white transition-colors rounded overflow-hidden"
                        >
                            <span className="px-3 py-2 bg-[#1a2b49] text-white font-semibold text-sm">{index + 1}</span>
                            <span className="pr-4 py-2 text-[#1a2b49] hover:bg-[#1a2b49] hover:text-white font-semibold text-sm pl-3">{city}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
