import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuhtContext } from '../../Context/Authprovider/AuthProvider';
import ReviewItem from './ReviewItem';


const ServiceDetails = () => {

    const {title, _id, img, description, price} = useLoaderData();
    console.log(_id);
   
    
    const [reviews, setReviews] = useState([])
    const {user} = useContext(AuhtContext);


    const handlePostReview = event  =>{
      event.preventDefault();

      const form = event.target;

      const name = user.displayName;
      const email = user?.email || 'unregisterd';
      const itemName = form.itemName.value;
      const message = form.message.value;

      const postReviews = {
        itemId :  _id,
        customerName : name,
        email,
        itemName,
        message
      }

      fetch('https://food-review-server-three.vercel.app/reviews',{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(postReviews),

      })
      .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Review posted successfully');
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }

    useEffect(()=>{
      fetch(`https://food-review-server-three.vercel.app/reviews?itemId=${_id}`)
      .then(res => res.json())
      .then(data => setReviews(data))
    },[_id])
    


   



    return (
        <div className='w-[90vw] lg:w-[80vw]  mx-auto '>
        <div className="  mt-16 lg:flex gap-14 ">
        <div className=" bg-base-100 hover:shadow-xl lg:w-[50vw] ">
                <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-center mb-" style={{ fontFamily: 'Oleo Script', color:'#8DB255'  }}>See The Details of the item</h1>
                </div>
                <figure className="px-10 pt-10">
    <img  src= {img} alt="Shoes" className="rounded-xl w-full" style={{ height: '250px'  }}/>
  </figure>
  <div className="card-body items-center text-center" >
    <h2 className="card-title text-2xl" style={{ fontFamily: 'Oleo Script',   }}>{title}</h2>
    <p className='text-xl' style={{ fontFamily: 'Oleo Script', color:'#8DB255'  }}>{price} TK</p>
    <p className='text-sm'>{description}...</p>
    <div className="card-actions ">
      <button className="btn mt-3 px-24" style={{ backgroundColor: '#7A942E'  }}>Buy Now</button>
    </div>
  </div>
            </div>
          <div className="lg:w-[50vw]   bg-base-100  " >
          <h1 className="text-3xl lg:text-4xl font-bold text-center" style={{ fontFamily: 'Oleo Script', color:'#8DB255'  }}>Give your review please!</h1>
          <form onSubmit={handlePostReview} className='mt-8' >
                <div className="flex  gap-4">
                    <input 
          value={user?.displayName} name="name" type="text" placeholder="Name" className="input input-bordered w-full rounded-full " />

                    <input   defaultValue={user?.email} name="email" type="text" placeholder="Your Email" className="input input-bordered w-full rounded-full " readOnly/>
                </div>
                <input  name="itemName" type="text" placeholder="Item name" className="input input-bordered w-full rounded-full my-4 " />
                <textarea name="message" className="textarea  textarea-success h-64 lg:h-96 w-full outline-none" placeholder="your messages"></textarea>
               <div className='flex justify-center'>
               
               <button  className="btn mt-3" style={{ backgroundColor: '#7A942E'  }}>Post your review</button>
               </div>
            </form> 
          </div>
        </div>

       

       <div>
       <h1 className='text-3xl lg:text-5xl text-center  lg:mt-32 mt-16 font-bold' style={{ fontFamily: 'Dancing  Script', color:'#8DB255'  }}>Review Section! </h1>
       <h1 className='text-2xl text-center font-semibold text-gray-700 my-4' style={{ fontFamily:  'Oleo Script',   }}> Total Reviews: {reviews.length}</h1>
       
       </div>
        <div className='display-container grid lg:grid-cols-2 md:grid-cols-1 mt-10 grid-cols-1 gap-7 lg:mx-10 '>
         {
          reviews.map(review => <ReviewItem
          kye={review._id}
          review = {review}></ReviewItem>)
         }
        </div>
      </div>
    );
};

export default ServiceDetails;