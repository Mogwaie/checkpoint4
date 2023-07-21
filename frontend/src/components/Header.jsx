import React from "react";
import birdLogo from "../assets/images/Bird_logo.png";
import birdLogo2 from "../assets/images/Bird_logo2.png";

function Header() {
  return (
    <div className="header-ctn">
      <img src={birdLogo} alt="logo bird left of title" className="bird-logo" />
      <h1>BirDex</h1>
      <img
        src={birdLogo2}
        alt="logo bird right of title"
        className="bird-logo"
      />
    </div>
  );
}
export default Header;
