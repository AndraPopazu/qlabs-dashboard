import React from 'react';
import './heroBanner.css';

//import BannerBackground from 'assets/hero-banner-bk.png';
//console.log('BannerBackground',BannerBackground)

const HeroBanner = () => {
  return (
    <div className="heroBanner">
      <div className="heroLogo">
        <img src="assets/Logo White@2x.png" alt="Talent Match" />
        <h1>Find your precious gem!</h1>
      </div>
    </div>
  );
};

export default HeroBanner;
