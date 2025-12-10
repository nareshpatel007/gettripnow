import { MapPin, Clock } from "lucide-react"

export function MeetingAndPickup() {
  return (
    <section className="py-8 border-b border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Meeting and Pickup</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-[#f53]" />
            Pickup points
          </h3>
          <p className="text-gray-600 mb-2">
            We offer complimentary pickup from most hotels and cruise ship terminals in George Town and Seven Mile Beach
            area.
          </p>
          <p className="text-sm text-gray-500">
            Please provide your hotel name or cruise ship information at checkout.
          </p>
        </div>
        <div>
          <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
            <Clock className="h-5 w-5 text-[#f53]" />
            Meeting point
          </h3>
          <p className="text-gray-600 mb-2">If you prefer to meet at the departure point:</p>
          <p className="text-gray-600 font-medium">Safe Haven Dock, George Town</p>
          <p className="text-sm text-gray-500 mt-2">Please arrive 15 minutes before departure time.</p>
        </div>
      </div>
    </section>
  )
}
