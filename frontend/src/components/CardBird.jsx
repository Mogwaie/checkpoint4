import React from "react";
import PropTypes from "prop-types";

export default function CardBird({ bird }) {
  return (
    <div className="card-container">
      <img src={bird.image} alt="image de l'oiseau" />
      <h2>{bird.name}</h2>
    </div>
  );
}

CardBird.propTypes = {
  bird: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
};
