"use client";

import { Star, ChevronDown } from "lucide-react";

interface Review {
  id: string;
  author: string;
  role: string;
  avatar: string;
  date: string;
  rating: number;
  text: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
  totalCount: number;
}

export function ReviewsSection({ reviews, totalCount }: ReviewsSectionProps) {
  return (
    <div className="w-full bg-[#f6f7f9] rounded-lg p-4 sm:p-5 md:p-6">
      {/* Header */}
      <div className="p-6 rounded-[10px] bg-white">
        <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
            Reviews
          </h2>
          <span className="inline-flex items-center justify-center px-2 py-1 bg-blue-600 text-white text-xs sm:text-sm font-semibold rounded">
            {totalCount}
          </span>
        </div>

        {/* Reviews List */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="pb-4 sm:pb-5 md:pb-6 border-b border-gray-200 last:border-b-0 last:pb-0"
            >
              {/* Reviewer Info */}
              <div className="flex flex-col xs:flex-row xs:items-start xs:justify-between gap-3 sm:gap-4 mb-2 sm:mb-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <img
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.author}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <p className="text-sm sm:text-base font-semibold text-gray-900 truncate">
                      {review.author}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 truncate">
                      {review.role}
                    </p>
                  </div>
                </div>
                <span className="text-xs sm:text-sm text-gray-500">
                  {review.date}
                </span>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-2 sm:mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={`sm:w-4 sm:h-4 ${
                      i < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        <button className="mt-4 sm:mt-5 md:mt-6 text-blue-600 hover:text-blue-700 text-sm sm:text-base font-medium flex items-center gap-2 transition-colors">
          Show All
          <ChevronDown size={16} className="sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}
