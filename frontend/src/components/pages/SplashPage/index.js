import React from 'react';
import './SplashPage.css';

import SplashWrapper from './SplashWrapper/index';
import SplashContent from './SplashContent';
import Footer from '../../Footer';

const SplashPage = () => {
  return (
    <div className='splash-page'>
      <SplashWrapper />
      <SplashContent />
      <Footer />
    </div>
  );
};

export default SplashPage
