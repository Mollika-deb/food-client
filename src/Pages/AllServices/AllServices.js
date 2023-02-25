import React, { useEffect, useState } from 'react';
import ServiceItem from '../Home/Services/ServiceItem';

const AllServices = () => {

    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='my-10'>
            <h1 className='text-6xl text-center font-bold' style={{ fontFamily: 'Dancing Script', color:'#8DB255'  }}>Here Find Our All Delicious Items!!</h1>
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