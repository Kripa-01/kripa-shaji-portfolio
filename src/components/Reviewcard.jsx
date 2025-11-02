// components/ReviewCard.jsx
import React from 'react';

const ReviewCard = () => {
  return (
    <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 max-w-xs border border-gray-800 shadow-2xl">
      <div className="flex items-center gap-2 mb-3">
        <h3 className="text-white font-semibold text-base">Client Review From</h3>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <h3 className="text-white font-semibold text-base">Australia</h3>
        <span className="bg-blue-500 text-white text-xs px-2.5 py-1 rounded-md font-bold">5.0</span>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">
        Outstanding Web Developer, Delivering All Expectations Highly Experienced Without Hesitation, Recommended!!
      </p>
    </div>
  );
};

export default ReviewCard;