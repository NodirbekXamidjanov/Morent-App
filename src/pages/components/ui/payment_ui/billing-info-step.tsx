"use client"

interface BillingInfoStepProps {
  formData: Record<string, string>
  onChange: (field: string, value: string) => void
}

export function BillingInfoStep({ formData, onChange }: BillingInfoStepProps) {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 border border-gray-100">
      <div className="flex justify-between items-start mb-6 sm:mb-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Billing Info</h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">Please enter your billing info</p>
        </div>
        <span className="text-xs sm:text-sm text-blue-600 font-semibold">Step 1 of 4</span>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={formData.name || ""}
              onChange={(e) => onChange("name", e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
            <input
              type="tel"
              placeholder="Phone number"
              value={formData.phone || ""}
              onChange={(e) => onChange("phone", e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Address</label>
            <input
              type="text"
              placeholder="Address"
              value={formData.address || ""}
              onChange={(e) => onChange("address", e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Town / City</label>
            <input
              type="text"
              placeholder="Town or city"
              value={formData.city || ""}
              onChange={(e) => onChange("city", e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
