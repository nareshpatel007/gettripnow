import { Shield, HelpCircle } from "lucide-react"

export function CancellationPolicy() {
  return (
    <section className="py-8 border-b border-gray-200">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Cancellation Policy</h2>
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-gray-900">Free cancellation</p>
              <p className="text-gray-600 text-sm">
                Cancel up to 24 hours in advance for a full refund. No refunds will be given for cancellations made less
                than 24 hours before start time.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Questions?</h2>
          <div className="flex items-start gap-3">
            <HelpCircle className="h-5 w-5 text-[#f53] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-gray-600 text-sm mb-3">
                If you have questions about this tour or need help with your booking, we're here to help.
              </p>
              <button className="text-[#f53] font-medium hover:underline">Contact us →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
