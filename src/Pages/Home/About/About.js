import React from 'react';

import about3 from '../../../images/about3.jpg'
import about4 from '../../../images/about5.avif'
import './About.css'

const About = () => {
    return (
        <div className='w-[90vw] md:w-[90vw] lg:w-[90vw] mx-auto overflow-hidden'>
            <div className='lg:flex gap-14 justify-center items-center'> 
            <div id="aboutImage" className='flex w-1/2 mr-20'>
                <img className='mt-32 h-[300px] lg:h-[500px] w-[50vw] lg:w-[25vw] object-cover'  src={about3} alt=""/>
                <img  className='mt-20 mb-14 ml-10 h-[300px] lg:h-[500px]  w-[50vw] lg:w-[25vw] object-cover' src={about4} alt=""/>
            </div>
            <div className='  text-center '>
                <h1 className='text-3xl lg:text-4xl text-center text-orange-700' style={{ fontFamily: 'Playfair Display',   }}>Welcome to our site</h1>
                <h2 className='text-2xl text-center font-semibold text-green-700 pt-3' style={{ fontFamily: 'Playfair Display',  color: '#7A942E'}}>About Our Restaurant</h2>
                <p className='text-base pt-4 text-center font-normal lg:block hidden' >Our Biryani and other delicious food have earned a name through <br/> our loyal patrons over the years. Now we are happy  to bring our new official <br/> ‘Foodka’  Application to enjoy  the same delicacies on the go.  Forget  <br/> the blues amidst  our authentic  flavors at a click.</p>
            </div>
            </div>
        </div>
    );
};

export default About;