import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navber/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Footer from "../Shared/Footer/Footer";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const MyFoodRequest = () => {

    const foodReq= useLoaderData();
    console.log(foodReq);
    const {user} = useContext(AuthContext)
    // eslint-disable-next-line no-unused-vars
    const [req,setReq]= useState([]);
    const foods = foodReq.filter(element => element.dEmail == user?.email)


    const handleCancelReq=id =>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to cancel this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, cancel Request it!'
      }).then((result) => {
        if (result.isConfirmed) {
       
          fetch(`https://food-share-network-serversite.vercel.app/requestFood/${id}`,{
            method: 'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            if(data.deletedCount >0){
                 Swal.fire(
            'Cancel Request!',
            'Cancel Request Successfully',
            'success'
          )
        //   remove the user from ui
                 const remaining=foods.filter(food=>food._id !== id);
                 setReq(remaining);
            }
          })
        }
      })
    }

    return (
        <div>
            <Helmet>
                <title>FoodShare Network || Food Request</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="overflow-x-auto">
  <table className="table  ">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        
        
        <th>Donator Name</th>
        
        <th>PickUp Location</th>
        <th>Expire Date</th>
        <th>Request Date</th>
        <th>Donation Amount</th>
        <th>Status</th>
        <th>Action</th>
        
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        foods.map(food => 
            <tr key={food._id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
          
           
           
            <td>{food.dName}</td>
            
            <th>
            <td>{food.location}</td>
            </th>
            <th>
            <td>{food.date}</td>
            </th>
            <th>
            <td>{food.req}</td>
            </th>
            <th>
            <td>{food.money}</td>
            </th>
            <th>
            <td></td>
            </th>
            
            <th>
            <td>
                <Link>
                <button onClick={()=>handleCancelReq(food._id)} className="btn btn-warning btn-sm"> Cancel Request</button>
                </Link>
                </td>
           
            </th>
          </tr>
            
            )
     }
     
   
    </tbody>
   
    
    
  </table>
</div>
<Footer></Footer>
        </div>
    );
};

export default MyFoodRequest;

