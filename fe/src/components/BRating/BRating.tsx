"use client";

import { Rating } from "flowbite-react";

interface BRatingProps {
  filled: number;
}

export default function BRating({ filled }: BRatingProps): React.ReactElement {
  return (
    <Rating>
      {[...Array(5)].map((_, i) => {
        if (filled > i) return <Rating.Star key={`rating-star-${i}`} filled={true} />;
        return <Rating.Star key={`rating-star-${i}`} filled={false} />;
      })}
    </Rating>
  );
}
