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
        <div className='  mx-10 '>
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
      <button className="btn mt-3 px-24" style={{ backgroundColor: '#7A942E'  }}>Buy Now</button>
    </div>
  </div>
            </div>
          <div className="max-w-xl   bg-base-100 ml-16 " >
          <h1 className="text-5xl font-bold text-center" style={{ fontFamily: 'Oleo Script', color:'#8DB255'  }}>Give your review please!</h1>
          <form onSubmit={handlePostReview} className='mt-16  mr-32' >
                <div className="grid grid-cols-1 my-6 lg:grid-cols-2  gap-4">
                    <input 
          value={user?.displayName} name="name" type="text" placeholder="Name" className="input input-bordered w-full " />

                    <input   defaultValue={user?.email} name="email" type="text" placeholder="Your Email" className="input input-bordered w-full " readOnly/>
                </div>
                <input  name="itemName" type="text" placeholder="Item name" className="input input-bordered w-full " />
                <textarea name="message" className="textarea  textarea-success h-96 w-full mt-3 " placeholder="your messages"></textarea>
               <div className='flex justify-center'>
               
               <button  className="btn mt-3" style={{ backgroundColor: '#7A942E'  }}>Post your review</button>
               </div>
            </form> 
          </div>
        </div>

       

       <div>
       <h1 className='text-7xl text-center  mt-32 font-bold' style={{ fontFamily: 'Dancing  Script', color:'#8DB255'  }}>Review Section! </h1>
       <h1 className='text-3xl text-center font-semibold text-gray-700 my-4' style={{ fontFamily:  'Oleo Script',   }}> Total Reviews: {reviews.length}</h1>
       <p className='text-xl  text-center font-normal'  style={{ fontFamily:  'Playfair Display'  }}>Here you can see all of the reviews of that items  You also can give the <br/> review of that item  so, Wriite your review and give us feedback!  </p>
       </div>
        <div className='display-container grid lg:grid-cols-2 gap-7 mx-10 my-10'>
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