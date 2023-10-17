import React from "react";

export default function StarRating({ rating, totalStars = 5 }) {
  return (
    <div>
      {[...Array(totalStars)].map((_, i) => (
        <span
          key={i}
          className={`star ${i < Math.round(rating) ? "filled" : ""}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}
