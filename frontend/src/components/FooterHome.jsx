import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-home-page-container">
      <Link to="/create-bird">
        <button type="button" className="button-add">
          +
        </button>
      </Link>
    </div>
  );
}
export default Footer;
