import React, { useEffect, useState } from 'react';
import ServiceItem from '../Home/Services/ServiceItem';

const AllServices = () => {

    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('https://food-review-server-three.vercel.app/allservices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='lg:w-[80vw] w-[90vw] mx-auto'>
            <div className=' my-10'>
            <h1 className='lg:text-4xl text-3xl text-center font-bold' style={{ fontFamily: 'Dancing Script', color:'#8DB255'  }}>Here Find Your Favouite Items!!</h1>
            <h2 className='lg:text-3xl text-2xl text-center font-thin pt-3' style={{ fontFamily: 'Oleo Script',  }}>Our Featured Meals</h2>
                <p className='text-base pt-4 text-center font-normal'>Our Biryani and other delicious food have earned a name through <br/> our loyal patrons over the years. Now we are happy  to bring our new official <br/> ‘Foodka’  Application to enjoy  the same delicacies on the go.  </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
            {
                services.map(service => <ServiceItem
                    key={service._id}
                    service={service}
                    >
                </ServiceItem>)
            }
        </div>
        </div>
    );
};

export default AllServices;

