import React from 'react';
import './Feature.css'
import img1 from '../../../images/feature.jpg'
import img2 from '../../../images/feature2.jpg'
import img3 from '../../../images/feature3.jpeg'
import img4 from '../../../images/feature4.jpg'

const Features = () => {
    return (

        
       <div className='  px-10 pb-40'>
        <div>
            <h2 className='text-5xl text-center text-orange-700' style={{ fontFamily: 'Playfair Display ',   }}>Plan Your Event With</h2>
            <h2 className='text-4xl text-center font-semibold py-3 text-green-700' style={{ fontFamily: 'Playfair Display', color:'#7A942E'  }}>Our Services</h2>
            <p className='text-xl pb-7 text-center font-normal'  >Our Biryani and other delicious food have earned a name through our loyal patrons over the years. <br/> Now we are happy  to bring our new official  ‘Foodka’  Application to enjoy  the same delicacies on the go.  </p>
        </div >
         <div className='newcontainer pt-7'>
            <div className='box'>
            <img  src= {img1} alt="Shoes" />
            <h1>Wedding Reception</h1>
            </div>
            <div className='box'>
            <img  src= {img2} alt="Shoes" />
            <h1>Corporate Dinner</h1>
            </div>
            <div className='box'>
            <img  src= {img3} alt="Shoes" />
            <h1>Social Events</h1>
            </div>
            <div className='box'>
            <img  src= {img4} alt="Shoes" />
            <h1>Non Profit Event</h1>
            </div>
        </div>
       </div>
    );
};

export default Features;