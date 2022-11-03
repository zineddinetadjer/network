import React from "react";
import PostSide from "../../components/postside/PostsSide";
import ProfileCard from "../../components/profilecard/ProfileCard";
import ProfileLeft from "../../components/profileleft/ProfileLeft";
import RightSide from "../../components/rightside/RightSide";
import "./profile.css";
const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />

      <div className="Profile-center">
        <ProfileCard location="profilePage" />
        <PostSide />
      </div>

      <RightSide />
    </div>
  );
};

export default Profile;
