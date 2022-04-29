import React from "react";
import "./PostContent.css";

import Post from './Post';
import SideBar from '../../../SideBar';

const PostContent = () => {
  return (
    <div className="sp-post-content">
      <Post />
      <SideBar />
    </div>
  );
};

export default PostContent;
