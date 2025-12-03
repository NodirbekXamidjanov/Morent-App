"use client"

import { useState } from "react"
import { Shield } from "lucide-react"

export function CheckoutForm() {
  const [formData, setFormData] = useState<Record<string, string>>({})

  const handleFieldChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    alert("Booking confirmed! Thank you for renting with us.")
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* BILLING INFO SECTION */}
      <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 border border-gray-100 mb-6 sm:mb-8 md:mb-10">
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
                onChange={(e) => handleFieldChange("name", e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="Phone number"
                value={formData.phone || ""}
                onChange={(e) => handleFieldChange("phone", e.target.value)}
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
                onChange={(e) => handleFieldChange("address", e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Town / City</label>
              <input
                type="text"
                placeholder="Town or city"
                value={formData.city || ""}
                onChange={(e) => handleFieldChange("city", e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* RENTAL INFO SECTION */}
      <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 border border-gray-100 mb-6 sm:mb-8 md:mb-10">
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
                  onChange={(e) => handleFieldChange("pickupLocation", e.target.value)}
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
                  onChange={(e) => handleFieldChange("pickupDate", e.target.value)}
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
                  onChange={(e) => handleFieldChange("pickupTime", e.target.value)}
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
                  onChange={(e) => handleFieldChange("dropoffLocation", e.target.value)}
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
                  onChange={(e) => handleFieldChange("dropoffDate", e.target.value)}
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
                  onChange={(e) => handleFieldChange("dropoffTime", e.target.value)}
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

      {/* PAYMENT METHOD SECTION */}
      <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 border border-gray-100 mb-6 sm:mb-8 md:mb-10">
        <div className="flex justify-between items-start mb-6 sm:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Payment Method</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Please enter your payment method</p>
          </div>
          <span className="text-xs sm:text-sm text-blue-600 font-semibold">Step 3 of 4</span>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {/* Credit Card Option */}
          <div className="border-2 border-blue-600 rounded-lg p-4 sm:p-6 bg-gray-50">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-3">
                <input type="radio" id="creditcard" name="payment" defaultChecked className="w-4 h-4" />
                <label htmlFor="creditcard" className="text-sm sm:text-base font-semibold text-gray-900 cursor-pointer">
                  Credit Card
                </label>
              </div>
              <div className="flex gap-2">
                <img src="/visa-logo.jpg" alt="Visa" className="h-6 w-10 object-contain" />
                <img src="/mastercard-logo.jpg" alt="Mastercard" className="h-6 w-10 object-contain" />
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Card Number</label>
                  <input
                    type="text"
                    placeholder="Card number"
                    value={formData.cardNumber || ""}
                    onChange={(e) => handleFieldChange("cardNumber", e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Expiration Date</label>
                  <input
                    type="text"
                    placeholder="DD/MM/YY"
                    value={formData.expiryDate || ""}
                    onChange={(e) => handleFieldChange("expiryDate", e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Card Holder</label>
                  <input
                    type="text"
                    placeholder="Card holder"
                    value={formData.cardHolder || ""}
                    onChange={(e) => handleFieldChange("cardHolder", e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">CVC</label>
                  <input
                    type="text"
                    placeholder="CVC"
                    value={formData.cvc || ""}
                    onChange={(e) => handleFieldChange("cvc", e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* PayPal Option */}
          <div className="border border-gray-200 rounded-lg p-4 sm:p-6 hover:bg-gray-50 cursor-pointer transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input type="radio" id="paypal" name="payment" className="w-4 h-4" />
                <label htmlFor="paypal" className="text-sm sm:text-base font-semibold text-gray-900 cursor-pointer">
                  PayPal
                </label>
              </div>
              <img src="/paypal-logo.png" alt="PayPal" className="h-6 w-15 object-contain" />
            </div>
          </div>

          {/* Bitcoin Option */}
          <div className="border border-gray-200 rounded-lg p-4 sm:p-6 hover:bg-gray-50 cursor-pointer transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input type="radio" id="bitcoin" name="payment" className="w-4 h-4" />
                <label htmlFor="bitcoin" className="text-sm sm:text-base font-semibold text-gray-900 cursor-pointer">
                  Bitcoin
                </label>
              </div>
              <img src="/bitcoin-logo.jpg" alt="Bitcoin" className="h-6 w-15 object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* CONFIRMATION SECTION */}
      <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 border border-gray-100">
        <div className="flex justify-between items-start mb-6 sm:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Confirmation</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              We are getting to the end. Just few clicks and your rental is ready!
            </p>
          </div>
          <span className="text-xs sm:text-sm text-blue-600 font-semibold">Step 4 of 4</span>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {/* Checkboxes */}
          <div className="space-y-3 sm:space-y-4 pb-6 sm:pb-8 border-b border-gray-100">
            <div className="flex items-start gap-3 sm:gap-4">
              <input
                type="checkbox"
                id="marketing"
                checked={formData.marketingConsent === "true"}
                onChange={(e) => handleFieldChange("marketingConsent", e.target.checked ? "true" : "false")}
                className="w-5 h-5 mt-1 sm:w-4 sm:h-4"
              />
              <label htmlFor="marketing" className="text-xs sm:text-sm text-gray-700 cursor-pointer leading-relaxed">
                I agree with sending an Marketing and newsletter emails. No spam, promissed!
              </label>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <input
                type="checkbox"
                id="terms"
                checked={formData.termsConsent === "true"}
                onChange={(e) => handleFieldChange("termsConsent", e.target.checked ? "true" : "false")}
                className="w-5 h-5 mt-1 sm:w-4 sm:h-4"
              />
              <label htmlFor="terms" className="text-xs sm:text-sm text-gray-700 cursor-pointer leading-relaxed">
                I agree with our terms and conditions and privacy policy.
              </label>
            </div>
          </div>

          {/* Rent Now Button */}
          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base rounded-lg transition-colors mb-6 sm:mb-8"
          >
            Rent Now
          </button>

          {/* Security Message */}
          <div className="flex items-start gap-3 p-4 sm:p-6 bg-blue-50 rounded-lg border border-blue-100">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">All your data are safe</h4>
              <p className="text-xs sm:text-sm text-gray-600">
                We are using the most advanced security to provide you the best experience ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
