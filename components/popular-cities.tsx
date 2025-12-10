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
    <section className="py-8 px-4 md:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h3 className="font-bold text-2xl md:text-3xl text-gray-900 mb-6">Tours in Japan</h3>
        <div className="flex flex-wrap gap-3">
          {cities.map((city, index) => (
            <a
              key={city}
              href="#"
              className="inline-flex items-center bg-[#1a2b49] hover:bg-[#2a3b59] transition-colors rounded overflow-hidden"
            >
              <span className="px-3 py-2 text-white font-medium text-sm">{index + 1}</span>
              <span className="pr-4 py-2 text-white text-sm">{city}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
