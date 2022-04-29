import React from "react";
import './SplashWrapper.css'

import WrapperTop from "./WrapperTop";
import WrapperBottom from "./WrapperBottom";

const SplashWrapper = () => {
  return (
    <div className='splash-wrapper'>
      <WrapperTop />
      <WrapperBottom />
    </div>
  );
};

export default SplashWrapper;
