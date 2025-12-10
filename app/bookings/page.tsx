import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ManageBookings } from "@/components/manage-bookings"

export default function BookingsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <ManageBookings />
      </main>
      <Footer />
    </div>
  )
}
