import React from 'react';
import video from '../../../images/video.mp4';
import './video.css'

const Video = () => {
    return (
        <div className='flex mx-32 justify-center items-center my-32'>
            <div className='w-1/2 text-center '>
            <h1 className='text-5xl text-center text-orange-700' style={{ fontFamily: 'Playfair Display',   }}>Video journey</h1>
            <h2 className='text-4xl text-center font-semibold text-green-700 pt-3' style={{ fontFamily: 'Playfair Display',  color: '#7A942E'}}>to Bengali Classic cuisine.</h2>
            <p className='text-1xl pt-4 text-center font-normal'  style={{ fontFamily:  'Playfair Display'  }}>Our Biryani and other delicious food have earned a name through <br/> our loyal patrons over the years. Now we are happy  to bring our new official <br/> ‘Foodka’  Application to enjoy  the same delicacies on the go.  Forget  <br/> the blues amidst  our authentic  flavors at a click.</p>
        </div>

        <div id="aboutvideo" className='flex w-1/2 ml-10 '>
        <video className=' ml-10' src={video} controls />
        </div>
        
    </div>
    );
};

export default Video;