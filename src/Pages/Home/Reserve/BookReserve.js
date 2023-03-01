import React from 'react';

const BookReserve = () => {
    return (
        <div>
            <div className="   bg-base-100 mx-10 mt-20" >
            <h1 className='text-5xl text-center text-orange-700' style={{ fontFamily: 'Playfair Display',   }}>MAKE SOME PLACE</h1>
                <h2 className='text-4xl text-center font-semibold text-green-700 pt-3' style={{ fontFamily: 'Playfair Display',  color: '#7A942E'}}>Book a Table</h2>
                <p className='text-xl pt-4 text-center font-normal' >Book a table online. Leads will reach in your email.   Forget   the blues amidst  <br/> our authentic  flavors at a click.</p>
          <form  className='mt-16 ' >
                <div className="grid grid-cols-1 my-6 lg:grid-cols-3   gap-4">
                    <input 
           name="name" type="text" placeholder="Name" className="input input-bordered  " />

                    <input    name="email" type="text" placeholder="Your Email" className="input input-bordered " readOnly/>
                    <input    name="phone" type="text" placeholder="Your Phone" className="input input-bordered  " readOnly/>
                </div>
                <div className="grid grid-cols-1 my-6 lg:grid-cols-3  gap-4">
                    <input 
           name="date" type="text" placeholder="Date" className="input input-bordered  " />

                    <input    name="time" type="text" placeholder="Time" className="input input-bordered  " readOnly/>
                    <input    name="Seat" type="text" placeholder="Seat" className="input input-bordered  " readOnly/>
                </div>
                
                <textarea name="message" className="textarea  textarea-success h-96 w-full mt-3 " placeholder="your messages"></textarea>
               <div className='flex justify-center'>
               
               <button  className="btn mt-3 bg-orange-600" >Post your review</button>
               </div>
            </form> 
          </div>
        </div>
    );
};

export default BookReserve;