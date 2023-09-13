import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllServices from '../../AllServices/AllServices';
import ServiceItem from './ServiceItem';

const Services = () => {
    const [services, setServices] = useState([]);
    

    useEffect(() => {
        fetch('https://food-review-server-three.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='w-[90vw] md:[90vw] lg:[80vw] mx-auto'>
            <div className='mt-16 lg:mt-32'>
            <h1 className='text-3xl lg:text-4xl text-center text-orange-700' style={{ fontFamily: 'Playfair Display',   }}>Recommendations</h1>
                <h2 className='text-2xl lg:text-3xl text-center font-semibold pt-3' style={{ fontFamily: 'Playfair Display', color: '#7A942E' }}>Our Featured Meals
                </h2>
                <p className='text-base lg:block hidden pt-4 text-center font-normal'  >Our Biryani and other delicious food have earned a name through <br/> our loyal patrons over the years. Now we are happy  to bring our new official <br/> ‘Foodka’  Application to enjoy  the same delicacies on the go.  </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-10'>
            {
                services.map(service => <ServiceItem
                    key={service._id}
                    service={service}
                ></ServiceItem>)
            }
          
        </div>

    

        <div className='flex justify-center mt-5 '>
        <Link  to='/allservices'> <button className="btn  px-24 text-white mb-4 "  style={{ backgroundColor: '#7A942E',   }}>See All</button></Link>
        </div>
        </div>
    );
};

export default Services;