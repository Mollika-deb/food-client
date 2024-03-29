import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuhtContext } from '../../../Context/Authprovider/AuthProvider';

const Navbar = () => {
  const {user, logOut } = useContext(AuhtContext)
    return (
        <div className="navbar bg-black text-orange-600 font-semibold text-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/myreview'>My Review</Link></li>
        <li><Link to='additems'>Add Items</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        
        
        
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-2xl">FoodKA</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-base px-1">
    <li><Link to='/'>Home</Link></li>
        <li><Link to='/myreview' >My Review</Link></li>
        <li><Link to='additems'>Add Items</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        
    </ul>
  </div>
  <div className="navbar-end lg:mr-5">
   
  
  {
     
      user?.uid?
         
          <button onClick={logOut} className="btn btn-outline bg-black text-orange-600">Sign Out</button>
      :
      <>
             
             <Link to='/signup' className="text-orange-600 text-base">Sign Up</Link>
             <Link to='login' className="text-orange-600 text-base ml-2 lg:ml-5">Sign In</Link>
             
      </>

  
  }
  </div>
</div>
    );
};

export default Navbar;