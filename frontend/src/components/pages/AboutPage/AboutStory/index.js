import React from 'react';
import './AboutStory.css';

import storyPic from '../assets/story-pic.jpg';

const AboutStory = () => {
  return (
    <div className='about-story'>
      <div className='author-story'>
        <p className='story'>
          From an early age my social growth was stunted by 2 major factors of my life; I was highly emotional and I had a speech impediment. My mom enrolled me in speech classes at the age of 4 all the way until I was about 12. One thing that help me develop proper speech was poems. My mom was a poet amongst a plethora of things. One of my favorite memories growing up was writing poems with her. Ya see, poems killed 2 birds with one stone for me. The first "bird" was my speech because after we would write the poem, I would practice reading it out loud in spoken word form. The second "bird" was my emotions, because it allowed me to put words to my inner thoughts. I finally felt acknowledged and free of my past aggressions. I found my perfect emotional outlet through my words, which was ironic seeing that I couldn't speak properly beforehand.
        </p>
        <p className='story'>
          I guess that's why I have a strong connection with frontend development. At first I had a "coding" impediment, I just spat out code in hopes that the computer would understand it. Fortunately, after tedious practice I am now a fluent speaker of front-end development. Front-end development helps me connect the abstract pieces of my thoughts into a virtual canvas. I am able to express my creativity and aesthetic through all of my projects. In the words of the great Erykah Badu, "I'm an artist, and I'm sensitive about my sh*t".
        </p>
      </div>
      <div className='story-photo' style={{backgroundImage:`url(${storyPic})`}}></div>
    </div>
  );
};

export default AboutStory;
