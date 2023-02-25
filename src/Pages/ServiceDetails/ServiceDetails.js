import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const {title, img, description, price} = useLoaderData();

    return (
        <div >
        <div className=" grid md:grid-cols-2  flex-col lg:flex-row mt-16 mx-10 ">
        <div className=" bg-base-100 hover:shadow-xl ">
                <div>
                <h1 className="text-5xl font-bold text-center mb-10" style={{ fontFamily: 'Oleo Script', color:'#8DB255'  }}>See The Details of the item</h1>
                </div>
                <figure className="px-10 pt-10">
    <img  src= {img} alt="Shoes" className="rounded-xl w-full" style={{ height: '250px'  }}/>
  </figure>
  <div className="card-body items-center text-center" >
    <h2 className="card-title text-3xl" style={{ fontFamily: 'Oleo Script',   }}>{title}</h2>
    <p className='text-xl' style={{ fontFamily: 'Oleo Script', color:'#8DB255'  }}>{price} TK</p>
    <p>{description}...</p>
    <div className="card-actions ">
     <Link > <button className="btn mt-3 px-24" style={{ backgroundColor: '#7A942E'  }}>Buy Now</button></Link>
    </div>
  </div>
            </div>
          <div className=" max-w-lg  bg-base-100 ml-16" >
          <h1 className="text-5xl font-bold text-center" style={{ fontFamily: 'Oleo Script', color:'#8DB255'  }}>Give your review please!</h1>
            
          </div>
        </div>
      </div>
    );
};

export default ServiceDetails;