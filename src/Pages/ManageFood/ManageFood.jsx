import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navber/Navbar";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Footer from "../Shared/Footer/Footer";
import { Helmet } from "react-helmet-async";





const ManageFood = () => {
    
    const allFood= useLoaderData();
    const {user} = useContext(AuthContext)
    
    console.log(user);
    // console.log(allFood);
    const foods = allFood.filter(element => element.email == user?.email)
    // console.log(item);
    // setFoods(item)
    // console.log(foods);
    
   const handleDelete=_id=>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
           
              fetch(`https://food-share-network-serversite.vercel.app/addFood/${_id}`,{
                method: 'DELETE'
              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data);
                if(data.deletedCount >0){
                     Swal.fire(
                'Deleted!',
                'Your coffee has been deleted.',
                'success'
              )
            //   remove the user from ui
                        // const remainingFood=foods.filter(food=>food._id!==food.id)
                        // setFoods(remainingFood);
                }
              })
            }
          })
   }
    

    
    
 
    
 
    return (
        <div>
            <Helmet>
                <title>FoodShare Network || Manage My Food</title>
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
        <th>Donator Image</th>
        <th>Food Name</th>
        <th>Food Image</th>
        <th>Donator Name</th>
        <th>Food Quantity</th>
        <th>PickUp Location</th>
        <th>Expire Date</th>
        <th>Action</th>
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
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={food.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                 
                </div>
              </div>
            </td>
            <td>
              {food.name}
              <br/>
             
            </td>
            <td>
            <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={food.photo} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              <br/>
             
            </td>
            <td>{food.dName}</td>
            <th>
            <td>{food.quantity}</td>
            </th>
            <th>
            <td>{food.location}</td>
            </th>
            <th>
            <td>{food.date}</td>
            </th>
            <th>
            <td><button onClick={()=>handleDelete(food._id)} className="btn btn-warning btn-circle">Delete</button></td>
            </th>
            <th>
            <td>
                <Link to={`/update/${food._id}`}>
                <button className="btn btn-warning btn-sm">Update</button>
                </Link>
                </td>
            <td>
                <Link to={`/manage/${food._id}`}>
                <button className="btn btn-warning btn-sm">Manage</button>
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

export default ManageFood;