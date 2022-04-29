import React from "react";
import "./AboutSummary.css";

import mainPic from "../assets/main-pic.jpeg";

const AboutSummary = () => {
  return (
    <div className="about-summary">
      <div
        style={{ backgroundImage: `url(${mainPic})` }}
        className="about-image"
      ></div>
      <div className="about-top">
        <div className="about-intro">
          <h3 className="introduction">Hello, I'm Skye !</h3>
          <p className="intro-summary">
            As a young child I was made fun of for being over emotional. I was
            deemed a "cry baby" by family and peers, and soon after I started to
            withdraw from social activities. I was taught that my emotions were
            a hindrance in my everyday life. My mom basically told me to "suck
            it up" and get over it, unfortunately that made things worse. The
            "suck it up and get over it" mentality caused me to hold in all my
            emotions without the proper outlets which led to a life of
            depression, burnout, and emotional exhaustion. It's time to stop
            thinking of our emotions as an adversity, emotions are what keeps us
            human.
          </p>
        </div>
        <div className="intro-bottom">
          <h4 className="intro-motto">
            Time to eliminate things that no longer evolve me.
          </h4>
          <p className="motto-info">
            It's time to take the stigma away from embracing and nurturing one's
            feelings. Emotions are not bad, but the way we handle them can be.
            We all deserve to live physically, emotionally, and mentally healthy
            lives. 
          </p>
          <p className="summary-affirmation"><i>Let go of what doesn't serve you.</i></p>
        </div>
      </div>
    </div>
  );
};

export default AboutSummary;
