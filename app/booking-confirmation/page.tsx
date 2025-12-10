import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingConfirmation } from "@/components/booking-confirmation"

export default function BookingConfirmationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <BookingConfirmation />
      <Footer />
    </main>
  )
}
