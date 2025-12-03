"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface RentalSummaryProps {
  carImage?: string;
  carName: string;
  rating: number;
  reviewCount: number;
  subtotal: number;
  tax: number;
  totalPrice: number;
}

export function RentalSummary({
  carImage = "/nissan-gt-r-luxury-sports-car.jpg",
  carName,
  rating,
  reviewCount,
  subtotal,
  tax,
  totalPrice,
}: RentalSummaryProps) {
  const [promoCode, setPromoCode] = useState("");

  return (
    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-5 md:p-6">
      {/* Header */}
      <div className="mb-5 sm:mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
          Rental Summary
        </h2>
        <p className="text-xs sm:text-sm text-gray-600">
          Prices may change depending on the length of the rental and the price
          of your rental car
        </p>
      </div>

      {/* Car Info */}
      <div className="flex gap-3 sm:gap-4 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-gray-100">
        <img
          src={carImage || "/placeholder.svg"}
          alt={carName}
          className="w-16 sm:w-20 h-12 sm:h-16 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
            {carName}
          </h3>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={
                    i < Math.floor(rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="text-xs text-gray-600">
              {reviewCount.toLocaleString()}+ Reviewer
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Details */}
      <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm text-gray-600">Subtotal</span>
          <span className="text-sm sm:text-base font-semibold text-gray-900">
            ${subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm text-gray-600">Tax</span>
          <span className="text-sm sm:text-base font-semibold text-gray-900">
            ${tax.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Promo Code */}
      <div className="mb-5 sm:mb-6">
        <div className="flex gap-2 sm:gap-3">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Apply promo code"
            className="flex-1 px-3 sm:px-4 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-lg placeholder-gray-400 text-gray-900 focus:outline-none focus:border-blue-600 transition-colors"
          />
          <button className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors whitespace-nowrap">
            Apply now
          </button>
        </div>
      </div>

      {/* Total Price */}
      <div className="bg-gray-50 rounded-lg p-4 sm:p-5">
        <p className="text-xs sm:text-sm text-gray-600 mb-2">
          Total Rental Price
        </p>
        <p className="text-xs sm:text-sm text-gray-600 mb-2">
          Overall price and includes rental discount
        </p>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          ${totalPrice.toFixed(2)}
        </h3>
      </div>
    </div>
  );
}
