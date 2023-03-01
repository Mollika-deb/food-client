import React, { useContext, useEffect, useState } from 'react';
import { AuhtContext } from '../../Context/Authprovider/AuthProvider';
import MyReviewItem from './MyReviewItem';

const MyReview = () => {
    const [myreviews, setMyreviews] = useState([]);
    const { user } = useContext(AuhtContext);
  
    useEffect(() => {
        if (user?.email) { 
          fetch(`http://localhost:5000/myreviews?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setMyreviews(data));
        }
      }, [user?.email]);
  
    return (
      <div>

        <h1 className='text-5xl mt-16 text-center text-orange-700' style={{ fontFamily: 'Playfair Display',   }}>Delete Or Update Your Reviews</h1>
        <h1 className='text-4xl text-center pb-4  text-green-700 pt-3' style={{ fontFamily: 'Playfair Display',  color: '#7A942E'}}>You Have Total: {myreviews.length} Reviews!</h1>
        <p className='text-xl  text-center font-normal' >Here you cn see all of your reviews. If you want You can  delete your reviews. <br/> Also if you wnt you cab update your previous reviwes.    </p>
        <div className='grid lg:grid-cols-2 gap-7 mx-10 my-10'>
        {
          myreviews.map((myreview) => (
            <MyReviewItem key={myreview._id} myreview={myreview} />
          ))}
         
        </div>
        
      </div>
    );
  };
  

export default MyReview;