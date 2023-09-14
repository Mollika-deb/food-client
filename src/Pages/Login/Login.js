import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate, } from 'react-router-dom';
import { AuhtContext } from '../../Context/Authprovider/AuthProvider';

import image from '../../images/login1.jpg'

const Login = () => {
    const { signIn, googleProviderLogIn } = useContext(AuhtContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'



    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        googleProviderLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => console.log(error));
    };

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;


        signIn(email, password)

            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, {replace: true})
            })
            .catch(error => console.log(error))

    }
    return (
        <div className="mt-16 w-[90vw] lg:w-[80vw] mx-auto">
        <div className="lg:flex gap-16">
          <div className="text-center lg:w-1/2 w-full">
           
          <img id="" src={image} alt="" className="rounded-full " style={{ height:'350px'  }}/>
          <div className="form-control mt-6">
          <button onClick={handleGoogleSignIn} className="btn  bg-emerald-600 rounded-full" Type="submit" value="Login With Google">Login With Google</button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full" style={{ height:'300px'  }}>
         
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-base">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered rounded-full" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-base">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered rounded-full" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-base">Password</span>
                </label>
                <input type="text" name="password" placeholder="password" className="input input-bordered rounded-full" required/>
               
              </div>
              <div className="form-control mt-6">
                <input className="btn  bg-emerald-600 rounded-full" Type="submit" value="Login"/>
                
              </div>
            </form>
            <p className=" font-semibold text-center text-base">New to Foodka? please <Link className='text-green-700 font-bold' to='/signup'>Sign Up!</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;