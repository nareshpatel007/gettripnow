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
      <div className="max-w-7xl mx-auto">
        <h3 className="font-semibold text-base text-gray-900 mb-4">Popular Attractions</h3>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {attractions.map((attraction) => (
            <a key={attraction} href="#" className="text-sm text-gray-600 hover:underline">
              {attraction}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
