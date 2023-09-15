import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({service}) => {

    const{img, _id,  title, description, price} = service;
    return (
        <div className="card bg-base-100  hover:shadow-xl shadow-md ">
  <figure className="">
    <img  src= {img} alt="Shoes" className="rounded-xl w-full" style={{ height: '250px'  }}/>
  </figure>
  <div className="card-body items-center text-center" >
    <h2 className="card-title lg:text-2xl text-orange-700" style={{ fontFamily: 'Oleo Script',   }}>{title}</h2>
    <p className='text-xl' style={{ fontFamily: 'Oleo Script',  }}>{price} TK</p>
    <p>{description?.slice(0,100)}...</p>
    <div className="card-actions ">
     <Link to={`/servicedetails/${_id}`}> <button className="btn btn-sm bg-orange-600 px-10 mt-3" >View details</button></Link>
    </div>
  </div>
  
</div>
    );
};

export default ServiceItem;