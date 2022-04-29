import React, {useState} from "react";
import "./CodingStory.css";

const CodingStory = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="coding-story">
      <div className="coding-title">
        <h3 className="cs-title">
          In summer 2020, I started my coding journey and never looked back.
        </h3>
      </div>
      <div className="coding-snippet">
        <p className="cs-snippet">
          In December of the previous year, I faced the most traumatic
          experience through losing my mom. I was only 22 years old when my
          mother had a stroke in front of me and died 6 days later in the
          hospital. I was working a dead end job at a call center collecting
          student loans, it was the most depressing job ever. I had senior
          citizens call me begging for a refund after the government took money
          out of their disability for a college they never graduated from, so
          they could pay for their dire hip surgery. I knew I had to make a
          major change in my life.
        </p>
        <p className="cs-snippet">
          A month later, January 2020, was the start of the global epidemic
          called Coronavirus. I was laid off 2 months later in March and had
          nothing to do while in quarantine. I started seeing commercials for
          coding bootcamps and looked into the tech industry for a potential
          career. I started classes at Coding Dojo summer of 2020, little did I
          know how much my life would change from that one decision.
        </p>
      </div>
      <button className="cs-more" onClick={() => setShow(!show)}>MORE OF MY STORY</button>
      {show && (
        <div className="more-story">
          <p className='grace-quote'>
            <i>I believe in individuality, that everybody is special, and it's up to them to find that quality and let it live. --Grace Jones</i>
          </p>
          <p className="cs-story">
            I started classes in June of 2020 at Coding Dojo and aced my HTML & CSS course on first try. I passed my clone project with a high score but it looked rushed and minimal. We moved on to the Javascript portion after 2 weeks of HTML/CSS. I felt like they were stuffing information in our brains which caused my peers and I to cram. Cramming is not a great way to learn, multiple studies have proven that it actually does more harm than good. Not only were the teaching techniques harmful, but it was also expensive. I paid $400/month for a crammed education and I had other bills to take care of. I decided to unenroll from Coding Dojo and do the self taught route.
          </p>
          <p className="cs-story">
            I practiced building static websites on my local machine with HTML and CSS. I would build out wireframes using paper and dry erase boards. I used resources like geeks for geeks, W3 Schools, MDN, and stack overflow for troubleshooting. I became immersed in my projects and wanted to dive deeper into development to see how to make fully functional websites and how to host them. I knew that I would end up in a never ending rabbit hole if I tried to find an entry point via the self taught route so I decided to re-enroll in a bootcamp.
          </p>
          <p className="cs-story">
            I did a deep dive research on different bootcamps and landed on App Academy. I liked their class structure and payment plans. I did not have to pay a dime until after I landed a job, which was the selling point. Unfortunately, at the time I was in a very toxic living situation with a boyfriend and was still mourning the loss of my mother. I wanted to just code the pain away. I used school as an emotional crutch instead of a learning opportunity. I started App Academy April of 2021 and did well in my classes, asked great questions, and was a great peer programmer, however when classes were over I had to face my personal demons.
          </p>
          <p className="cs-story">
            I got sick 2 times during my cohort and had to be deferred. I also had an emotionally draining partner with narcissistic tendencies. I felt exhausted both in and out of class, and had very little support. I felt defeated and lost and did not know what to do. I loved coding, I felt so much satisfaction debugging and building out websites. So why wasn't I doing well in school? Well to simply put it, I couldn't handle my emotions and overwhelmed myself to the point of exhaustion. My cohort mates would still come to me for debugging tips, especially for the front-end portion, that's when I knew it wasn't code I was struggling with, but my life in general. It was time for a change.
          </p>
          <p className="cs-story">
            After my last deferral in February of 2022, I realized I have all the skills for front-end development such as HTML, CSS, Javascript, React, React-Redux, and Pug. I also have some backend skills such as Express, Sequelize, and PostgreSQL. Bootcamp did help me get and use the proper resources to be a developer such as GitHub and explaining what and why we use certain syntax over another. I also have several peers that were able to graduate that are now my mentors. I'm glad boot camps surrounded me with like-minded peers and gave me an in-depth scope of what software development is. I will take the skills I learned in the last 2 years to create a platform for people who just want an outlet for their emotions.
          </p>
        </div>
      )}
    </div>
  );
};

export default CodingStory;
