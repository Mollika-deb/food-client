import React, { useContext } from 'react';
import { AuhtContext } from '../../Context/Authprovider/AuthProvider';

const MyReviewItem = ({myreview, handleDelete}) => {
    const {user} = useContext(AuhtContext)
    const {_id, customerName, email,  itemName, message} = myreview

    // const handleDelete = id =>{
    //     const proceed = window.confirm('are you sure to delete ths review??');
      
    //           if(proceed){
               
    //           }
            
    //       }
        
    
   
    
    return (
        <div className="card shadow-2xl  ">
  <div className="card-body items-start pl-16 text-center">
    <h2  className='text-3xl text-center font-bold text-orange-700' style={{ fontFamily: 'Oleo Script',   }}>Item Name :{itemName}</h2>
    <p className='text-2xl text-center font-bold text-gray-600' style={{ fontFamily: 'Oleo Script',   }}>User Email  : {email}</p>
    <p className='text-xl text-center font-bold text-gray-600' style={{ fontFamily: 'Oleo Script',   }}>User Name: {customerName}</p>
    <p className='text-xl text-center font-bold text-gray-600' style={{ fontFamily: 'Oleo Script',   }}>Review: {message}</p>
    <p >{user.photoURL}</p>
    <div className=" justify-end">
      <button className="btn px-12" style={{backgroundColor:'#7A942E' }}>Edit</button>
      <button onClick={()=>handleDelete(_id)} className="btn px-10 ml-4 bg-orange-600" >Delete</button>
    </div>
  </div>
</div>
    );
};

export default MyReviewItem;