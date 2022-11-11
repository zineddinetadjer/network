import React from "react";
import FollowersCard from "../followerscard/FollowersCard";
import InfoCard from "../infocard/InfoCard";
import LogoSearch from "../search/LogoSearch";
const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
