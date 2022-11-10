import React from "react";
import Logo from "../../img/14.png";
import { Link } from "react-router-dom";
import { UilSearch } from "@iconscout/react-unicons";
import "./logosearch.css";

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <Link to="../home">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>
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
