import React from 'react';
import './ContactSection.css';

import ContactConcerns from './ContactConcerns';
import ContactInfo from './ContactInfo';
import ContactSummary from './ContactSummary';

const ContactSection = () => {
  return (
    <div className='contact-section'>
      <ContactSummary />
      <ContactInfo />
      <ContactConcerns />
    </div>
  );
};

export default ContactSection;
