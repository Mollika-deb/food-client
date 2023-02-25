import React from 'react';
import './Banner.css'
import { Typewriter } from 'react-simple-typewriter'


const Banneritems = ({slide}) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative  w-full">
            <div className='slider-img'>
                <img id="image" src={image} alt="" className="w-full  " />
            </div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center ">
                <p className="" > 
            <span className='text-7xl font-bold text-orange-500 ' style={{ fontFamily: 'Oleo Script',  }}>
          
          <Typewriter
            words={['Welcome To FoodKA']}
            loop={10000}
            cursor
            cursorStyle='..'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span> 
        <br /><span className=' text-5xl font-bold text-orange-300' > &</span> <br/>
         <span className='text-6xl text-center font-semibold  text-orange-500' style={{ fontFamily: 'Dancing Script',   }}>Find The Delicious Bengali Food.</span> 
          </p>

            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default Banneritems;

// absolute flex  transform translate(-50%, -50%) left-50% right-50% top-50%