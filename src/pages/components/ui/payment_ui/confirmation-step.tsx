"use client"

import { Shield } from "lucide-react"

interface ConfirmationStepProps {
  formData: Record<string, string>
  onChange: (field: string, value: string) => void
  onSubmit?: () => void
}

export function ConfirmationStep({ formData, onChange, onSubmit }: ConfirmationStepProps) {
  return (
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
              onChange={(e) => onChange("marketingConsent", e.target.checked ? "true" : "false")}
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
              onChange={(e) => onChange("termsConsent", e.target.checked ? "true" : "false")}
              className="w-5 h-5 mt-1 sm:w-4 sm:h-4"
            />
            <label htmlFor="terms" className="text-xs sm:text-sm text-gray-700 cursor-pointer leading-relaxed">
              I agree with our terms and conditions and privacy policy.
            </label>
          </div>
        </div>

        {/* Rent Now Button */}
        <button
          onClick={onSubmit}
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
  )
}
