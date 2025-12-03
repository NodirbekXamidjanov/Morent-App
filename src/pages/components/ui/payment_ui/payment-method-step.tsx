"use client"

interface PaymentMethodStepProps {
  formData: Record<string, string>
  onChange: (field: string, value: string) => void
}

export function PaymentMethodStep({ formData, onChange }: PaymentMethodStepProps) {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 border border-gray-100">
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
                  onChange={(e) => onChange("cardNumber", e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Expiration Date</label>
                <input
                  type="text"
                  placeholder="DD/MM/YY"
                  value={formData.expiryDate || ""}
                  onChange={(e) => onChange("expiryDate", e.target.value)}
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
                  onChange={(e) => onChange("cardHolder", e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">CVC</label>
                <input
                  type="text"
                  placeholder="CVC"
                  value={formData.cvc || ""}
                  onChange={(e) => onChange("cvc", e.target.value)}
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
  )
}
