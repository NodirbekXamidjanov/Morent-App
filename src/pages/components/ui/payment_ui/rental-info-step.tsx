"use client"

interface RentalInfoStepProps {
  formData: Record<string, string>
  onChange: (field: string, value: string) => void
}

export function RentalInfoStep({ formData, onChange }: RentalInfoStepProps) {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 border border-gray-100">
      <div className="flex justify-between items-start mb-6 sm:mb-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Rental Info</h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">Please select your rental date</p>
        </div>
        <span className="text-xs sm:text-sm text-blue-600 font-semibold">Step 2 of 4</span>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {/* Pick-Up Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <input type="radio" id="pickup" name="rentalType" defaultChecked className="w-4 h-4" />
            <label htmlFor="pickup" className="text-sm sm:text-base font-semibold text-gray-900 cursor-pointer">
              Pick - Up
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Locations</label>
              <select
                value={formData.pickupLocation || ""}
                onChange={(e) => onChange("pickupLocation", e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select your city</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
              </select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Date</label>
              <select
                value={formData.pickupDate || ""}
                onChange={(e) => onChange("pickupDate", e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select your date</option>
                <option value="2024-12-10">2024-12-10</option>
                <option value="2024-12-11">2024-12-11</option>
              </select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Time</label>
              <select
                value={formData.pickupTime || ""}
                onChange={(e) => onChange("pickupTime", e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select your time</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="14:00">02:00 PM</option>
              </select>
            </div>
          </div>
        </div>

        {/* Drop-Off Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <input type="radio" id="dropoff" name="rentalType" className="w-4 h-4" />
            <label htmlFor="dropoff" className="text-sm sm:text-base font-semibold text-gray-900 cursor-pointer">
              Drop - Off
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Locations</label>
              <select
                value={formData.dropoffLocation || ""}
                onChange={(e) => onChange("dropoffLocation", e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select your city</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
              </select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Date</label>
              <select
                value={formData.dropoffDate || ""}
                onChange={(e) => onChange("dropoffDate", e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select your date</option>
                <option value="2024-12-12">2024-12-12</option>
                <option value="2024-12-13">2024-12-13</option>
              </select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Time</label>
              <select
                value={formData.dropoffTime || ""}
                onChange={(e) => onChange("dropoffTime", e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select your time</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="14:00">02:00 PM</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
