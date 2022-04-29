import React, { useState } from 'react';
import './ContactConcern.css';

const ContactConcerns = () => {
  const [showConcern, setShowConcern] = useState(false);
  const [showEmployment, setShowEmployment] = useState(false);

  return (
    <div className='contact-concerns'>
      <ul className='concern-list'>
        <li className='concerns'>
          <i onClick={() => setShowConcern(!showConcern)} className="concern-item fa-solid fa-caret-right"></i>
          + QUESTIONS / CONCERNS
        </li>
        {showConcern && (
          <p className='concern-toggle'>
            If there's an issue/bug/glitch with this site please feel free to shoot me an email! If you are interested in the code behind the blog please go to <a href='https://github.com/Ashley-B1/bag-lady-blogs' className='link git-link'>my git repository</a>.
          </p>
        )}
        <li className='concerns'>
          <i onClick={() => setShowEmployment(!showEmployment)} className="concern-item fa-solid fa-caret-right"></i>
          + EMPLOYMENT OPPORTUNITIES
        </li>
        {showEmployment && (
          <p className='concern-toggle'>
            I am looking for freelance and full time opportunities so please feel free to shoot me an email if you want me on your team or just want to collaborate! I am based in Texas but willing to relocate to Georgia, Arkansas, or Oklahoma for full time employment.
          </p>
        )}
      </ul>
    </div>
  );
};

//<i class="fa-solid fa-caret-right"></i>

export default ContactConcerns;
