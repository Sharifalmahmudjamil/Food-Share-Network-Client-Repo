import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";


const Navbar = () => {
  const { user , logout}= useContext(AuthContext);

  const handleSignOut=()=>{
    logout()
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.error(error)
      // An error happened.
    });
  }

  const navLinks=
  <>
  <li className="lg:text-black "><NavLink to="/"
  className={({isActive})=>isActive ? 'btn btn-outline btn-sm': ' btn btn-ghost btn-sm'}
  >Home</NavLink></li>

  <li className="lg:text-black"><NavLink to="/availableFood"
  className={({isActive})=>isActive ? 'btn btn-outline btn-sm': ' btn btn-ghost btn-sm'}
  
  >Available Foods</NavLink></li>

 
    {/* <li className="lg:text-black"><NavLink to="/addFood"
    className={({isActive})=>isActive ? 'btn btn-outline btn-sm': ' btn btn-ghost btn-sm'}>Add Food</NavLink></li>
   
      
  
 

  <li className="lg:text-black"><NavLink to="/manageFood"
  className={({isActive})=>isActive ? 'btn btn-outline btn-sm': ' btn btn-ghost btn-sm'}

  >Manage My Foods</NavLink></li>
  <li className="lg:text-black"><NavLink to="/foodReq" className={({isActive})=>isActive ? 'btn btn-outline btn-sm': ' btn btn-ghost btn-sm'}> My Food Request</NavLink></li> */}

  {
    user?.email?<>
    {/* <li className="lg:text-black"><NavLink to="/availableFood"
  className={({isActive})=>isActive ? 'btn btn-outline btn-sm': ' btn btn-ghost btn-sm'}
  
  >Available Foods</NavLink></li> */}

 
    <li className="lg:text-black"><NavLink to="/addFood"
    className={({isActive})=>isActive ? 'btn btn-outline btn-sm': ' btn btn-ghost btn-sm'}>Add Food</NavLink></li>
   
      
  
 

  <li className="lg:text-black"><NavLink to="/manageFood"
  className={({isActive})=>isActive ? 'btn btn-outline btn-sm': ' btn btn-ghost btn-sm'}

  >Manage My Foods</NavLink></li>
  <li className="lg:text-black"><NavLink to="/foodReq" className={({isActive})=>isActive ? 'btn btn-outline btn-sm': ' btn btn-ghost btn-sm'}> My Food Request</NavLink></li>
  {/* <button onClick={handleSignOut} className=" lg:btn lg:btn-neutral hidden btn-sm bg-rose-600 text-white">SignOut</button> */}
  </> :
   <Link to="/register">
   <button className="btn btn-sm bg-orange-500 text-white">Register</button>
   </Link> 

  }
   
  </>

    return (
        <div className="">
            <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-white shadow-2xl ">
      <div className="w-full max-w-[1200px] mx-auto">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div>
      <img className=" lg:w-[40px] lg:h-[40px] w-10 h-10 ml-3" src="https://i.ibb.co/TrTMhFd/logo.png" alt="" /> 
      <div className="flex-1 px-2 mx-2 text-xl font-semibold mt-3"><span className="text-yellow-400 ">FoodShare</span> Network</div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          {navLinks}
          {
              user?
              <>
              
            

        <div className="dropdown dropdown-bottom dropdown-end">
  <label tabIndex={0} className="btn btn-xs bg-rose-500 m-1">profile</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><span>{user.email}</span></li>
    
    <li><img className="w-20 h-20 rounded-full"  src={user.photoURL} alt="" /></li>
    <li><span className="text-rose-500">{user.displayName}</span></li>

  </ul>
</div>

              <button onClick={handleSignOut} className=" lg:btn  lg:btn-neutral btn-sm  bg-rose-600 text-white">SignOut</button>
              </>
              :
              <Link to="/login">
              <button className="btn btn-sm  bg-yellow-500 text-white">Login</button>
              </Link>
            }
        </ul>
      </div>
      </div>
    </div>
    {/* Page content here */}
    
    
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
      {navLinks}

      {
              user?
              <>
              
            

        <div className="dropdown dropdown-bottom dropdown-end">
  <label tabIndex={0} className="btn btn-xs bg-rose-500 m-1">profile</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><span>{user.email}</span></li>
    <li><img className="w-20 h-20 rounded-full"  src={user.photoURL} alt="" /></li>
    <li><span className="text-rose-500">{user.displayName}</span></li>

  </ul>
</div>
              <button onClick={handleSignOut} className=" lg:btn   lg:btn-neutral btn-sm bg-rose-600 text-white">SignOut</button>
              </>
              :
              <Link to="/login">
              <button className="btn btn-sm  bg-yellow-500 text-white">Login</button>
              </Link>
            }
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Navbar;