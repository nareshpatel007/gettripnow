import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckoutForm } from "@/components/cart/checkout-form"
import { OrderSummary } from "@/components/cart/order-summary"

export default function CartPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 py-4 md:py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col-reverse lg:flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Left side - Checkout Form */}
            <div className="lg:col-span-2">
              <CheckoutForm />
            </div>

            {/* Right side - Order Summary */}
            <div className="lg:col-span-1">
              <OrderSummary />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
