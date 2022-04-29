import React, { useState } from "react";
import Slider from 'react-slick';
import './Bottom.css';

// imported images
import goddess from './assets/afro-goddess.jpeg';
import queen from './assets/afro-queen.webp';
import sisters from './assets/sisters.webp';
import yemaya from './assets/yemaya.jpeg';

// imported arrow icons
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

// put images in an array
const images = [ goddess, queen, sisters, yemaya ];

const WrapperBottom = () => {
  // create the next arrow component
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  // onClick property is passed via slider component
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  // image index will be set via useState using 0
  const [imageIndex, setImageIndex] = useState(0);

    // react-slick requires a settings object
    const settings = {
      infinite: true,
      lazyLoad: true,
      speed: 300,
      slidesToShow: 3,
      centerMode: true,
      centerPadding: 0,
      autoplay: true,
      dots: true,
      autoplaySpeed: 1500,
      // utilize a property on the settings object
      // that will allow us to build custom arrows
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      // before the change we are going to update image index to next slide
      beforeChange: (current, next) => setImageIndex(next),
    };

  return (
    <div className="wrapper-bottom">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className={idx === imageIndex ? 'slide activeSlide' : 'slide'}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WrapperBottom
