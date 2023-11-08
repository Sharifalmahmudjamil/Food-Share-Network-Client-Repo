import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {FaEye ,FaEyeSlash } from 'react-icons/fa';
import swal from 'sweetalert';
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Providers/AuthProviders";


const Register = () => {

  const {createUser, updateUser}=useContext(AuthContext);

    // eslint-disable-next-line no-unused-vars
    const [error,setError]=useState("");
    const [showPassword,setShowPassword]=useState(false);
    
  

    const handleRegister=e=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form=new FormData(e.currentTarget);

        const name= form.get("name");
        const photo= form.get("photo");
        const email= form.get("email");
        const password= form.get("password");
        const accepted=form.get("terms");
        console.log(email,password,name,accepted,photo);

    //    const toastId = toast.loading('logging in....')


         // password validation
         if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password))
         {
              // console.log("success")
     //   setError("password at least 6 ")
       swal("Password Minimum six characters, at least one letter, one number and one special character");
         }
         else if(!accepted)
         toast ("Please Accept our Terms And Condition!!")
       
         else{
             setError("");


          
             if(email){
              createUser(email,password)
            //   toast.success('logged in .. ',{id:toastId})
            
           
              .then(result=>console.log(result.user))
              
             

              .catch(error=> (error.message))
             
              toast("Create Account Successfully , Please Login");
              
              e.target.reset();
              
              
         
              
          }

         }

              // create user
      createUser(email,password)
     
    .then(result=>{
        console.log(result.user) 
        updateUser(name, photo)
      
        e.target.reset()
        
        

    })
    .catch(error=>{
        console.error(error)
    });

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            
            <div className="hero-content flex-col lg:w-1/2 ">
            <div className="text-center lg:text-center">
              <h1 className="text-5xl font-bold text-[#FF444A]">Create an account</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               
              <form onSubmit={handleRegister} className="card-body">
              
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  
                  <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  
                  <input type="text" name="photo" placeholder="Enter Your photoUrl" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="Email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                <div className="flex relative ">
                <span className="label-text">Password <small className="text-rose-600">Password Minimum six characters, at least one letter, one number and one special character</small> </span>
                    <div onClick={()=>setShowPassword (!showPassword)}>
                  {
                   showPassword? <FaEyeSlash className="absolute mt-16 -ml-5 "></FaEyeSlash>: <FaEye className="absolute mt-16 -ml-5"></FaEye>
                    
                    
                    }
            
                  </div>
                </div>
                  </label>
            
                
                  <input 
                  type={ showPassword ?"password": "text"}
                  name="password" 
                  placeholder="Enter Your Password" 
                  className="input input-bordered" required />
                 
                 
            
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                  <div className="mb-2">
                  <input type="checkbox" name="terms" id="terms" />
                  <label className="ml-2" htmlFor="terms">Accept Our <a className="text-[#FF444A]" href="">Terms And Condition</a> </label>
            
                  </div>
                </div>
                
                <div className="form-control mt-6">
                  <button className="btn btn-error">Create an account</button>
                </div>
                <div className="form-control mt-6">
                  <Link to="/" className="btn btn-error">GO BACK HOME</Link>
                </div>
              </form>
            
              <p className="text-center mb-8 p-5">Already have an Account? <Link className="text-[#FF444A] font-bold" to="/login">Please Login</Link></p>
                   
            </div>
            
            </div>
            <ToastContainer></ToastContainer>
            
            </div>
        </div>
    );
};

export default Register;