export function AdditionalInfo() {
  const leftColumn = [
    { label: "Confirmation", value: "You will receive confirmation within 48 hours of booking" },
    { label: "Minimum age", value: "4 years old" },
    { label: "Maximum travelers", value: "12 per tour" },
    { label: "Accessibility", value: "Not wheelchair accessible" },
  ]

  const rightColumn = [
    { label: "Infant seats", value: "Not available" },
    { label: "Service animals", value: "Service animals allowed" },
    { label: "Physical fitness", value: "Most travelers can participate" },
    { label: "Weather", value: "Subject to favorable weather conditions" },
  ]

  return (
    <section className="py-8 border-b border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Additional Info</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {leftColumn.map((item, index) => (
            <div key={index}>
              <p className="text-sm font-medium text-gray-900">{item.label}</p>
              <p className="text-sm text-gray-600">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {rightColumn.map((item, index) => (
            <div key={index}>
              <p className="text-sm font-medium text-gray-900">{item.label}</p>
              <p className="text-sm text-gray-600">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
