import React from "react";

import Star from "./Star";
import { useState } from "react";

const createArray = (length) => [...Array(length)];

const StarRating = ({
  style = {},
  totalStars = 5,
  selectedStars,
  ...props
}) => {
  const [currentStars, setCurrentStars] = useState(selectedStars || 0);

  return (
    <div style={{ padding: "10px", ...style }} {...props}>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={currentStars > i}
          onSelect={() => setCurrentStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars{" "}
      </p>
    </div>
  );
};

export default StarRating;
