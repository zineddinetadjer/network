import React from "react";
import { Followers } from "../../data/FollowersData";
import "./followerscard.css";

const FollowersCard = () => {
  return (
    <div className="FollowersCard">
      <h3>Who is Following you</h3>

      {Followers.map((follower, id) => {
        return (
          <div className="follower">
            <div>
              <img src={follower.img} alt="profile" className="followerImg" />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
