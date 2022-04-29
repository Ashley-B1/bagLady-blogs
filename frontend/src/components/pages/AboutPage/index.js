import React from 'react';
import './AboutPage.css';

import WrapperTop from '../SplashPage/SplashWrapper/WrapperTop'
import AboutSummary from './AboutSummary';
import AboutGoal from './AboutGoal';
import AboutStory from './AboutStory';
import CodingStory from './CodingStory';
import Footer from '../../Footer';

const AboutPage = () => {
  return (
    <div className='about-page'>
      <WrapperTop />
      <AboutSummary />
      <AboutGoal />
      <AboutStory />
      <CodingStory />
      <Footer />
    </div>
  );
};

export default AboutPage;
