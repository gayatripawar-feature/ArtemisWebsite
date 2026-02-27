import React, { useEffect, useRef, useState } from 'react';

import HeroSection from '../components/HomeSections/HeroSection.jsx';
import WhatWeDo from '../components/HomeSections/WhatWeDo.jsx';
import AboutUs from '../components/HomeSections/AboutUs.jsx';
import ServiceSection from '../components/HomeSections/ServiceSection.jsx';






const Home = () => {



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);




  return (
    <>
      <HeroSection />
      <WhatWeDo />
      <AboutUs />
      <ServiceSection />
    </>
  );
};

export default Home;

