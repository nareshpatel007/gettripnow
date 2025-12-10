const destinations = [
  { name: "Las Vegas", image: "/las-vegas-strip-night-neon-lights-casino.jpg" },
  { name: "Rome", image: "/rome-colosseum-ancient-italy.jpg" },
  { name: "Paris", image: "/paris-eiffel-tower-france.png" },
  { name: "London", image: "/london-big-ben-tower-bridge.jpg" },
  { name: "New York City", image: "/new-york-city-skyline-statue-of-liberty.jpg" },
  { name: "Washington DC", image: "/washington-dc-capitol-building-monument.jpg" },
  { name: "Cancun", image: "/cancun-beach-mexico-tropical-resort.jpg" },
  { name: "Florence", image: "/florence-italy-duomo-cathedral.jpg" },
  { name: "Barcelona", image: "/sagrada-familia-barcelona.png" },
  { name: "Oahu", image: "/oahu-hawaii-beach-palm-trees.jpg" },
]

export function TopDestinations() {
  return (
    <section className="py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-8">Top Destinations</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {destinations.map((dest) => (
            <div key={dest.name} className="relative rounded-lg overflow-hidden cursor-pointer group h-28">
              <img
                src={dest.image || "/placeholder.svg"}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm md:text-base">
                {dest.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
