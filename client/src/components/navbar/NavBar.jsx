import React from "react";
import Logo from "../../img/14.png";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { Link } from "react-router-dom";
import { UilSearch } from "@iconscout/react-unicons";
import { UilSetting } from "@iconscout/react-unicons";

import "./navbar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
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
      <div className="navIcons">
        <Link to="../home">
          <img src={Home} alt="" />
        </Link>
        <UilSetting />
        <img src={Noti} alt="" />
        <Link to="../chat">
          <img src={Comment} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
