import React from 'react';
import './ContactPage.css';

import WrapperTop from '../SplashPage/SplashWrapper/WrapperTop';
import Contact from './Contact';
import Footer from '../../Footer'

const ContactPage = () => {
  return (
    <div className='contact-page'>
      <WrapperTop />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
