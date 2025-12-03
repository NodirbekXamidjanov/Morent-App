"use client";

import { Heart, Star } from "lucide-react";

interface CarCardProps {
  image?: string;
  name: string;
  rating: number;
  reviewCount: number;
  description: string;
  specs: {
    typeLabel: string;
    typeValue: string;
    capacityLabel: string;
    capacityValue: string;
    steeringLabel: string;
    steeringValue: string;
    gasLabel: string;
    gasValue: string;
  };
  pricePerDay: number;
  originalPrice: number;
  onRent?: () => void;
  onLike?: () => void;
  liked?: boolean;
}

export function CarCard({
  name,
  rating,
  reviewCount,
  description,
  specs,
  pricePerDay,
  originalPrice,
  onRent,
  onLike,
  liked = false,
}: CarCardProps) {
  return (
    <div className=" bg-white rounded-lg shadow-sm border border-gray-100">
      {/* Header with image and like button */}
      <div className="relative">
        <button
          onClick={onLike}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          aria-label="Add to favorites"
        >
          <Heart
            size={20}
            className={liked ? "fill-red-500 text-red-500" : "text-gray-400"}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6">
        {/* Title */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3 sm:mb-4 flex-wrap">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < Math.floor(rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-gray-600">
            {reviewCount.toLocaleString()}+ Reviewer
          </span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-5 leading-relaxed">
          {description}
        </p>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-gray-100">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
              {specs.typeLabel}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-gray-900">
              {specs.typeValue}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
              {specs.capacityLabel}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-gray-900">
              {specs.capacityValue}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
              {specs.steeringLabel}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-gray-900">
              {specs.steeringValue}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
              {specs.gasLabel}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-gray-900">
              {specs.gasValue}
            </p>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                ${pricePerDay.toFixed(2)}
              </span>
              <span className="text-xs sm:text-sm text-gray-500">/days</span>
            </div>
            <p className="text-xs text-gray-400 line-through">
              ${originalPrice.toFixed(2)}
            </p>
          </div>
          <button
            onClick={onRent}
            className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2 md:py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold rounded-md transition-colors"
          >
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
}
