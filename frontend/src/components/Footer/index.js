import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

import aboutPic from './assets/about-pic.jpeg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='foot-note'>
        <h3 className='foot-header'>DISCLAIMER</h3>
        <span className='foot-disclaimer'>
          <p className='f-disclaimer'>
            This site is not intended to provide and does not constitute medical, legal, or other professional advice. The content on Bag Lady Blog is designed to support, not replace, medical or psychiatric treatment. Please seek professional care if you believe you may have a condition.
          </p>
        </span>
      </div>
      <div className='foot-note'>
        <h3 className='foot-header'>WHO RUNS BAG LADY?</h3>
        <div className='foot-about'>
          <img
            src={aboutPic}
            alt={aboutPic}
          />
          <p className='foot-about-summary'>
            Skye is my name, and emotional support is my game. This website was created by me, but meant to be shared with the world! I want to build a community of like-minded individuals who just want to express themselves the best way they know how! 
          </p>
        </div>
      </div>
      <div className='foot-note'>
        <h3 className='foot-header'>CONTACT</h3>
        <div className='foot-contact-info'>
          <a className='link' href='https://github.com/Ashley-B1'>
            <i className="foot-icons fa-brands fa-github"></i>
          </a>
          <a className='link' href='https://www.linkedin.com/in/ashley-skye-brown-8386291a9'>
            <i className="foot-icons fa-brands fa-linkedin-in"></i>
          </a>
          <Link className='link' to='/contact'>
            <p className='contact-link'>CONTACT</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
