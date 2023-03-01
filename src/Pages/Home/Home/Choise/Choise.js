import React from 'react';
import img1 from '../../../../images/logo1.png'
import img2 from '../../../../images/logo2.png'
import img3 from '../../../../images/logo3.png'

const Choise = () => {
    return (
        <div className='mx-10 mt-32'>
            <h2 className='text-5xl text-center text-orange-700' style={{ fontFamily: 'Playfair Display ',   }}>Why Choose Us</h2>
            <h2 className='text-3xl text-center font-semibold pt-4 pb-7 text-green-700' style={{ fontFamily: 'Playfair Display', color:'#7A942E'  }}>Countless Experience</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-6'>
                <div className=' bg-slate-100 p-7'>
                <div className='grid lg:grid-cols-3   '>
                <img  src= {img1} alt="Shoes" />
                <h1 className='text-3xl font-bold text-orange-600'>Experienced</h1>
                </div>
                <p className='ml-32'>Average people say this to console themselves when they feel helpless to make a positive change in the world.</p>
                </div>
               <div  className=' bg-slate-100 p-7'>
               <div className='grid lg:grid-cols-3 gap-4 '>
                <img  src= {img2} alt="Shoes" />
                <h1 className='text-3xl font-bold text-orange-600'>Cheap</h1>
                </div>
                <p className='ml-32 mt-0'>Average people say this to console themselves when they feel helpless to make a positive change in the world.</p>
               </div>
                <div  className=' bg-slate-100 p-7'>
                <div className='flex '>
                <img  src= {img3} alt="Shoes" />
                <h1 className='text-3xl font-bold ml-16 text-orange-600'>24/7 Service
</h1>
                </div>
                <p className='ml-32'>Average people say this to console themselves when they feel helpless to make a positive change in the world.</p>
                </div>
            </div>
        </div>
    );
};

export default Choise;