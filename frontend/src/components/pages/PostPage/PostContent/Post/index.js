import React from "react";
import "./Post.css";

import PostTop from "./PostTop";
import PostBottom from "./PostBottom";

const Post = () => {
  return (
    <div className="post">
      <PostTop />
      <PostBottom />
    </div>
  );
};

export default Post;
