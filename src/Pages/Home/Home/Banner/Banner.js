import React from 'react';
import img1 from '../../../../images/bg5.jpg'
import img2 from '../../../../images/bg12.png'
import img3 from '../../../../images/bg11.jpg'
 import img4 from '../../../../images/pg15.jpg'

import Banneritems from './Banneritems';


const Banner = () => {
    const BannerData = [
        {
            image: img1,
            prev: 4,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: img4,
            prev: 3,
            id: 4,
            next: 1
        }
    ]
    return (
        <div className="carousel w-full ">
           {
            BannerData.map(slide => <Banneritems
            key={slide.id}
            slide = {slide}
            ></Banneritems>)
           }
        </div>
    );
};

export default Banner;