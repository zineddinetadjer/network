import React from "react";
import FollowersCard from "../followerscard/FollowersCard";
import ProfileCard from "../profilecard/ProfileCard";
import LogoSearch from "../search/LogoSearch";
import "./profileside.css";

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <ProfileCard location="homePage" />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
