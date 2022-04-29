import React from "react";
import "./SideBar.css";

import { Link } from 'react-router-dom';

import author from "./assets/author.jpeg";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="sb-items">
        <div className="sb-title">About Skye</div>
        <img src={author} alt="author" />
      </div>
      <div className="sb-items">
        <div className="sb-author-bio">
          <p className="sb-author">
            Hello World! My name is Skye and I am a frontend developer who took her love of technology and art and turned it into a career. I'm here to break the barriers down for women, especially WOC in the STEM field. The first time I ever touched a computer was in 1999! I was 2 years old when my granny, a former Apple employee, introduced me to the World Wide Web. We used to play games on her computer as a form of bonding. It's quite odd to say my granny was my gateway to technology, but it's true. My granny was a tech savvy woman who passed her love for modern technology down to me. Now that I have the torch, I want ignite the path for other women to take charge in the tech field.
          </p>
        </div>
      </div>
      <div className="about-more">
        <Link to='/about' className="link about-link">
          Read More...
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
