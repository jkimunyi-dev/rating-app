import React from "react";
import StarRating from "./StarRating";
import { FaTrashAlt } from "react-icons/fa";

const Color = ({ id, title, color, rating, onRemove = (f) => f }) => {
  console.log(rating);
  return (
    <section>
      <h1> {title} </h1>
      <button onClick={() => onRemove(id)}>
        <FaTrashAlt />
      </button>
      <div style={{ height: 50, backgroundColor: color }}>
        <StarRating selectedStars={rating} />
      </div>
    </section>
  );
};

export default Color;
