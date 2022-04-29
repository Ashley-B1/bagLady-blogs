import React from 'react';
import './ContactPhoto.css';

import contactPhoto from '../../assets/contact-photo.jpg';
// style={{backgroundImage:`url(${contactPhoto})`}}

const ContactPhoto = () => {
  return (
    <div className='contact-photo'>
      <img
        src={contactPhoto}
        alt={contactPhoto}
      />
    </div>
  );
};

export default ContactPhoto;
