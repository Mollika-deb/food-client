import React from 'react';
import './slider.css'





import img1 from '../../../../images/trend3.jpg';
import img2 from '../../../../images/about4.jpg';
import img3 from '../../../../images/trend5.webp';
import img4 from '../../../../images/trend6.jpg';
import img5 from '../../../../images/trend7.webp';
import img6 from '../../../../images/about1.jpg';
import slide_image_7 from '../../../../images/about5.avif';





const Slider = () => {
    return (
       <div className='mx-8 mt-32'>
        <div>
            <h2 className='text-5xl text-center text-orange-700' style={{ fontFamily: 'Playfair Display ',   }}>See Our Trending Items</h2>
            <h2 className='text-4xl text-center font-semibold py-3 text-green-700' style={{ fontFamily: 'Playfair Display', color:'#7A942E'  }}>Our Services</h2>
           
        </div >
        <div className='newcontainer pt-7'>
            <div className='box'>
            <img  src= {img1} alt="Shoes" />
            
            </div>
            <div className='box'>
            <img  src= {img2} alt="Shoes" />
            
            </div>
            <div className='box'>
            <img  src= {img3} alt="Shoes" />
           
            </div>
            <div className='box'>
            <img  src= {img4} alt="Shoes" />
           
            </div>
            <div className='box'>
            <img  src= {img5} alt="Shoes" />
            
            </div>
            <div className='box'>
            <img  src= {img6} alt="Shoes" />
            
            </div>
        </div>
       </div>
    );
};

export default Slider;