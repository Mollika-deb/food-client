import React from 'react';

import about3 from '../../../images/about3.jpg'
import about4 from '../../../images/about5.avif'
import './About.css'

const About = () => {
    return (
        <div className='flex mx-10 justify-center items-center '>
            <div id="aboutImage" className='flex w-1/2 '>
                <img className='mt-32'  src={about3} alt=""/>
                <img  className='mt-20 mb-14 ml-10' src={about4} alt=""/>
            </div>
            <div className='w-1/2 text-center '>
                <h1 className='text-6xl text-center font-bold' style={{ fontFamily: 'Dancing Script', color:'#8DB255'  }}>Welcome to our site</h1>
                <h2 className='text-4xl text-center font-thin pt-3' style={{ fontFamily: 'Oleo Script',  }}>About Our Restaurant</h2>
                <p className='text-xl pt-4 text-center font-normal'>Our Biryani and other delicious food have earned a name through <br/> our loyal patrons over the years. Now we are happy  to bring our new official <br/> ‘Foodka’  Application to enjoy  the same delicacies on the go.  Forget  <br/> the blues amidst  our authentic  flavors at a click.</p>
            </div>
        </div>
    );
};

export default About;