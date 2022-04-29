import React from 'react';
import './Contact.css';

import ContactPhoto from './ContactPhoto';
import ContactSection from './ContactSection';

const Contact = () => {
  return (
    <div className='contact'>
      <ContactPhoto />
      <ContactSection />
    </div>
  );
};

export default Contact;
