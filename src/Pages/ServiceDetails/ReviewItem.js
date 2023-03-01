import React from 'react';

const ReviewItem = ({review}) => {
    const {customerName, email,  itemName, message} = review
    
    
    return (
        <div className="card shadow-2xl  ">
        <div className="card-body items-start pl-16 text-center">
          <h2  className='text-3xl text-center font-bold text-black' style={{ fontFamily: 'Oleo Script',  color:'#8DB255' }}>Item Name :{itemName}</h2>
          <p className='text-2xl text-center font-bold text-gray-600' style={{ fontFamily: 'Oleo Script',   }}>User Email  : {email}</p>
          <p className='text-xl text-center font-bold text-gray-600' style={{ fontFamily: 'Oleo Script',   }}>User Name: {customerName}</p>
          <p className='text-xl text-center font-bold text-gray-600' style={{ fontFamily: 'Oleo Script',   }}>Review: {message}</p>
         
          <div className=" justify-end">
            <button className="btn px-12" style={{backgroundColor:'#7A942E' }}>Edit</button>
            <button  className="btn px-10 ml-4" style={{backgroundColor:'#26A65B' }}>Delete</button>
          </div>
        </div>
      </div>
    );
};

export default ReviewItem;