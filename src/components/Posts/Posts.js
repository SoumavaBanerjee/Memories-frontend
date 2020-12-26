import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import makeStyles from "./styles";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = makeStyles();

  // console.log(posts);

  return (
    <div>
      <h1>Multiple posts here</h1>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
