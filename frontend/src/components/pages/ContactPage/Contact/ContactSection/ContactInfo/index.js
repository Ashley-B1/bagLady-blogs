import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className='contact-info'>
      <h4 className='cp-preference'>
        Email me please!
      </h4>
      <p className='cp-email-detail'>
        Send me an email at <span className='contact-email'>stormi.seuneu@outlook.com</span> for any of the following reasons:
      </p>
    </div>
  );
};

export default ContactInfo;
