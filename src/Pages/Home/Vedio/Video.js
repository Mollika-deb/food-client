import React from 'react';
import video from '../../../images/video.mp4';
import './video.css'

const Video = () => {
    return (
        <div className='w-[90vw] md:w-[90vw] lg:w-[80vw] mx-auto my-10 lg:my-32 overflow-hidden'>
            <div className='lg:flex gap-10 justify-center items-center '>
            <div className=' text-center '>
            <h1 className='text-3xl lg:text-4xl text-center text-orange-700' style={{ fontFamily: 'Playfair Display',   }}>Video journey</h1>
            <h2 className='text-2xl lg:text-3xl text-center font-semibold text-green-700 pt-3' style={{ fontFamily: 'Playfair Display',  color: '#7A942E'}}>to Bengali Classic cuisine.</h2>
            <p className='text-1xl pt-4 text-center font-normal lg:block hidden'  style={{ fontFamily:  'Playfair Display'  }}>Our Biryani and other delicious food have earned a name through <br/> our loyal patrons over the years. Now we are happy  to bring our new official <br/> ‘Foodka’  Application to enjoy  the same delicacies on the go.  Forget  <br/> the blues amidst  our authentic  flavors at a click.</p>
        </div>

        <div id="aboutvideo" className=' mt-5 lg:mt-0 '>
        <video className='w-full lg:w-[40vw] ' src={video} controls />
        </div>
        
    </div>
        </div>
    );
};

export default Video;