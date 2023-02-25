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
        <div className="hero w-full">
        <div className="hero-content grid md:grid-cols-2  flex-col lg:flex-row mt-32 h-max">
          <div className="text-center lg:text-left">
           
          <img id="" src={image} alt="" className="rounded-3xl" style={{ height:'350px'  }}/>
          <div className="form-control mt-6">
          <button onClick={handleGoogleSignIn} className="btn  bg-emerald-600" Type="submit" value="Login With Google">Login With Google</button>
            </div>
          </div>
          <div className="card w-full max-w-lg shadow-2xl bg-base-100" style={{ height:'300px'  }}>
          <h1 className="text-5xl font-bold text-center" style={{ fontFamily: 'Oleo Script', color:'#8DB255'  }}>Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-2xl">Email</span>
                </label>
                <input type="text" name="email" placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-2xl">Password</span>
                </label>
                <input type="text" name="password" placeholder="password" className="input input-bordered" required/>
               
              </div>
              <div className="form-control mt-6">
                <input className="btn  bg-emerald-600" Type="submit" value="Login"/>
                
              </div>
            </form>
            <p className=" font-semibold text-center text-xl">New to Foodka? please <Link className='text-green-700 font-bold' to='/signup'>Sign Up!</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;