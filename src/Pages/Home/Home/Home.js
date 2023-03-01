import React from 'react';
import About from '../About/About';
import Features from '../Features/Features';
import Reserve from '../Reserve/Reserve';
import Services from '../Services/Services';

import Video from '../Vedio/Video';
import Banner from './Banner/Banner';
import Choise from './Choise/Choise';
import Slider from './Swiper/Slider';



const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <About></About>
          <Services></Services>
          <Video></Video>
          <Reserve></Reserve>
          <Features></Features>
          
          <Choise></Choise>
          <Slider></Slider>
        
         
        </div>
    );
};

export default Home;