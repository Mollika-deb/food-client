import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceItem from './ServiceItem';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='mt-32'>
            <h1 className='text-6xl text-center font-bold' style={{ fontFamily: 'Dancing Script', color:'#8DB255'  }}>Recommendations</h1>
                <h2 className='text-4xl text-center font-thin pt-3' style={{ fontFamily: 'Oleo Script',  }}>Our Featured Meals</h2>
                <p className='text-xl pt-4 text-center font-normal'>Our Biryani and other delicious food have earned a name through <br/> our loyal patrons over the years. Now we are happy  to bring our new official <br/> ‘Foodka’  Application to enjoy  the same delicacies on the go.  </p>
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
        <Link  to='/allservices'> <button className="btn bg-orange-600 px-24 text-white mb-4 " >See All</button></Link>
        </div>
        </div>
    );
};

export default Services;