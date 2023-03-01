import React from 'react';
import { Link } from 'react-router-dom';

const Reserve = () => {
    return (
        <div className='my-36 bg-slate-100 p-32 '>
            <h1 className='text-5xl text-center text-orange-700' style={{ fontFamily: 'Playfair Display',   }}> Rservations</h1>
                <h2 className='text-4xl text-center font-semibold text-green-700 pt-3' style={{ fontFamily: 'Playfair Display',  color: '#7A942E'}}>Private Dining at Tasty Meals</h2>
                <p className='text-xl pt-4 text-center font-normal' >Book a table online. Leads will reach in your email.   Forget   the blues amidst  <br/> our authentic  flavors at a click.</p>

                <div className='flex justify-center mt-5 '>
        <Link  to='/reserve'> <button className="btn bg-orange-600 text-white mb-4 "  >Make Reservation</button></Link>
        </div>
        </div>
    );
};

export default Reserve;