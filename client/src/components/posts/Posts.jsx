import React from "react";
import "./posts.css";
import Post from "../post/Post";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  });
  return (
    <div className="Posts">
      {posts.map((post, id) => {
        return <Post data={post} id={id} />;
      })}
    </div>
  );
};

export default Posts;
