import { useContext, useState } from "react";
// import swal from 'sweetalert';
import { FaGoogle,FaEye ,FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import swal from "sweetalert";




const Login = () => {
  const {signIn,googleSignIn}= useContext(AuthContext)
  const location=useLocation();

    // google signIn
    const handleGoogleLogin=()=>{
      googleSignIn()
      .then(result=>console.log(result.user))
      navigate(location?.state? location.state : '/')
      .catch(error=>{
        console.error(error)
      })
    }

  // eslint-disable-next-line no-unused-vars
  const [error,setError]=useState("");  
    const [showPassword,setShowPassword]=useState(false);
    const navigate=useNavigate();

    const handleLogin=e=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form=new FormData(e.currentTarget);
        const email= form.get("email");
        const password= form.get("password");
        console.log(email,password);

         // sign in
         signIn(email,password)
         .then(result=>{
           console.log(result.user);
           e.target.reset();
           
 
           navigate(location?.state? location.state : '/')
 
         })
         .catch(error=>{
             console.error(error)
             swal("Your Email and password invalid.please Check your Email and Password ")
         })
    }
    return (
        <div>
            
            <div className=" hero min-h-screen  bg-base-200">
            <div className="hero-content flex-col lg:w-1/2 ">
                     
    <div className="text-center lg:text-center">
      <h1 className="text-5xl font-bold text-yellow-400">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="Email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
        <div>
        <label className="label">
            
            <span className="label-text">Password</span>
            <div onClick={()=>setShowPassword (!showPassword)}>
      {
       showPassword? <FaEyeSlash className="absolute mt-8 -ml-5 "></FaEyeSlash>: <FaEye className="absolute mt-8 -ml-5"></FaEye>
        
        
        }

      </div>
          </label>
        </div>
          <input 
         type={ showPassword ?"password": "text"}
          name="password"
           placeholder="Password" 
           className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn  bg-yellow-500 text-white">Login</button>
        </div>
                <div className="  gap-2 mt-4 ">
                    
                   
                
                    <button onClick={handleGoogleLogin} className="btn btn-neutral w-full">
                    <FaGoogle ></FaGoogle>
                      Log in with Google</button>
                    
                    
                    
                  </div>
      </form>
      {
        error&& <p>{swal}</p>
      }
      <p className="text-center mb-8 p-5">Do not Have An Account ? <Link className="text-yellow-500 font-bold" to="/register">Create an Account</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;