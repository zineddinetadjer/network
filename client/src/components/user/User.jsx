import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createChat } from "../../actions/ChatActions";
import { followUser, unFollowUser } from "../../actions/UserAction";
import { Link } from "react-router-dom";
import chat from "../../img/comment.png";

const User = ({ person }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );

  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  //follow and unfollow users
  const handleFollow = () => {
    following
      ? dispatch(unFollowUser(person._id, user))
      : dispatch(followUser(person._id, user));

    setFollowing((prev) => !prev);
  };

  // go to chat or create one
  const handleChat = () => {
    const newChat = {
      senderId: user._id,
      receiverId: person._id,
    };
    dispatch(createChat(newChat));
  };
  return (
    <div>
      <div className="follower">
        <div>
          <img
            src={
              person.profilePicture
                ? serverPublic + person.profilePicture
                : serverPublic + "defaultProfile.png"
            }
            alt="profile"
            className="followerImg"
          />
          <div className="name">
            <span>{person.firstname}</span>
            <span>{person.lastname}</span>
          </div>
        </div>
        <button
          className={
            following ? "button fc-button UnfollowButton" : "button fc-button"
          }
          onClick={handleFollow}
        >
          {following ? "Unfollow" : "Follow"}
        </button>
        <Link to="../chat">
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleChat}
          >
            <img src={chat} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default User;
