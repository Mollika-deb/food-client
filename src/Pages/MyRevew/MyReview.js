import React, { useContext, useEffect, useState } from 'react';
import { AuhtContext } from '../../Context/Authprovider/AuthProvider';
import MyReviewItem from './MyReviewItem';

const MyReview = () => {
    const [myreviews, setMyreviews] = useState([]);
    const { user } = useContext(AuhtContext);
  
    useEffect(() => {
        if (user?.email) { 
          fetch(`https://food-review-server-three.vercel.app/myreviews?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setMyreviews(data));
        }
      }, [user?.email]);

      const handleDelete = id =>{
        const proceed = window.confirm('are you sure to delete ths review??');
        if(proceed){
            fetch(`https://food-review-server-three.vercel.app/myreviews/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount > 0){
                  alert('deleted successfully')
                  const remaining = myreviews.filter(rev => rev._id !== id);
                  setMyreviews(remaining)
                }
            })
   

            
        }
    }
  
    return (
      <div>

        <h1 className='text-5xl mt-16 text-center text-orange-700' style={{ fontFamily: 'Playfair Display',   }}>Delete Or Update Your Reviews</h1>
        <h1 className='text-4xl text-center pb-4  text-green-700 pt-3' style={{ fontFamily: 'Playfair Display',  color: '#7A942E'}}>You Have Total: {myreviews.length} Reviews!</h1>
        <p className='text-xl  text-center font-normal' >Here you cn see all of your reviews. If you want You can  delete your reviews. <br/> Also if you wnt you cab update your previous reviwes.    </p>
        <div className='grid lg:grid-cols-2 gap-7 mx-10 my-10'>
        {
          myreviews.map((myreview) => (
            <MyReviewItem 
            key={myreview._id}
             myreview={myreview}
             handleDelete = {handleDelete}
              />
          ))}
         
        </div>
        
      </div>
    );
  };
  

export default MyReview;