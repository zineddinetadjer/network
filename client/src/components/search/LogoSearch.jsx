import React from "react";
import Logo from "../../img/14.png";
import { UilSearch } from "@iconscout/react-unicons";
import "./logosearch.css";

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="Search">
        <input type="text" placeholder="Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
