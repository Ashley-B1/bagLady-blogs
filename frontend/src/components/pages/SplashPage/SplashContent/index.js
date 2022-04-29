import React from "react";
import './SplashContent.css'

import SideBar from "../../../SideBar";
import SplashPosts from "../SplashPosts";

const SplashContent = () => {
  return (
    <div className="splash-content">
      <SplashPosts />
      <SideBar />
    </div>
  );
};

export default SplashContent
