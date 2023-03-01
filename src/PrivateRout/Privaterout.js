import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuhtContext } from '../Context/Authprovider/AuthProvider';

const Privaterout = ({children}) => {
    const {user} = useContext(AuhtContext)
    const location = useLocation()
    if(user){
        return <h1 className="text-5xl">Loading....</h1>
    }
   
        if(user && user.uid){
            return children;
        }
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    
};

export default Privaterout;