"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function CartHeader() {
  const [currencyOpen, setCurrencyOpen] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState("INR")

  const currencies = ["INR", "USD", "EUR", "GBP", "AUD", "CAD"]

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <svg viewBox="0 0 100 24" className="h-7 w-auto" fill="none">
            <text x="0" y="18" className="text-xl font-bold" fill="#2D2D2D">
              viator
            </text>
          </svg>
          <span className="text-[10px] text-gray-500 ml-1">a Tripadvisor company</span>
        </Link>

        {/* Currency Selector */}
        <div className="relative">
          <button
            onClick={() => setCurrencyOpen(!currencyOpen)}
            onBlur={() => setTimeout(() => setCurrencyOpen(false), 150)}
            className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900"
          >
            <span className="text-gray-500">₹</span>
            <span className="underline font-medium">{selectedCurrency}</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${currencyOpen ? "rotate-180" : ""}`} />
          </button>

          {currencyOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2 min-w-[100px]">
              {currencies.map((currency) => (
                <button
                  key={currency}
                  onClick={() => {
                    setSelectedCurrency(currency)
                    setCurrencyOpen(false)
                  }}
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${
                    selectedCurrency === currency ? "text-[#1a9cb0] font-medium" : "text-gray-700"
                  }`}
                >
                  {currency}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
