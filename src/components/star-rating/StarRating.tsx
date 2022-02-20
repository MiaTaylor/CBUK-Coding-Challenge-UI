import { useState } from "react";
import Star from "./Star";

interface StarRatingProps {
  currentStarRating: number | null;
  onChange: (newRating: number) => void;
}

function StarRating({ onChange, currentStarRating }: StarRatingProps) {
  const [rating, setRating] = useState<number>(
    currentStarRating !== null ? currentStarRating : 0
  );
  const changeRating = (newRating: number) => {
    setRating(newRating);
    onChange?.(newRating);
  };
  return (
    <span>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= rating}
          onClick={() => changeRating(value)}
        />
      ))}
    </span>
  );
}
export default StarRating;
