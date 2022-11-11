import React from "react";
import ProfileSide from "../../components/profileSide/ProfileSide";
import PostsSide from "../../components/postside/PostsSide";
import RightSide from "../../components/rightside/RightSide";
import "./home.css";
import NavBar from "../../components/navbar/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home">
        <ProfileSide />
        <PostsSide />
        <RightSide />
      </div>
    </>
  );
};

export default Home;
