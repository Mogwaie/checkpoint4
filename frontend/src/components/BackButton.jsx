import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import backArrow from "../assets/images/backArrow.png";

function BackButton({ path }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <button className="button-back" type="button" onClick={handleClick}>
      <img src={backArrow} alt="" className="back-button" />
    </button>
  );
}

BackButton.propTypes = {
  path: PropTypes.string.isRequired,
};

export default BackButton;
