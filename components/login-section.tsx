export function LoginSection() {
  return (
    <section className="py-8 px-4">
      <div className="bg-[#2d2d2d] rounded-lg p-8 max-w-lg mx-auto text-center">
        <h3 className="text-white font-semibold text-lg mb-2">Log in to manage bookings & Viator Rewards</h3>
        <p className="text-gray-400 text-base mb-6">
          Don't have an account yet? <span className="underline cursor-pointer">Sign up</span>
        </p>
        <button className="w-full bg-white text-gray-900 font-semibold text-base py-3 rounded-lg hover:bg-gray-100">
          Log In
        </button>
      </div>
    </section>
  )
}
