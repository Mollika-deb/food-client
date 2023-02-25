import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({service}) => {

    const{img, _id,  title, description, price} = service;
    return (
        <div className="card bg-base-100 hover:shadow-xl">
  <figure className="px-10 pt-10">
    <img  src= {img} alt="Shoes" className="rounded-xl w-full" style={{ height: '250px'  }}/>
  </figure>
  <div className="card-body items-center text-center" >
    <h2 className="card-title text-3xl" style={{ fontFamily: 'Oleo Script',   }}>{title}</h2>
    <p className='text-xl' style={{ fontFamily: 'Oleo Script', color:'#8DB255'  }}>{price} TK</p>
    <p>{description.slice(0,100)}...</p>
    <div className="card-actions ">
     <Link to={`/servicedetails/${_id}`}> <button className="btn mt-3" style={{ backgroundColor: '#7A942E'  }}>View details</button></Link>
    </div>
  </div>
  
</div>
    );
};

export default ServiceItem;