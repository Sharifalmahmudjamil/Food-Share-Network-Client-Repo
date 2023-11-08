import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navber/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Footer from "../Shared/Footer/Footer";


const MyFoodRequest = () => {
    const foodReq= useLoaderData();
    console.log(foodReq);
    const {user} = useContext(AuthContext)

    const foods = foodReq.filter(element => element.dEmail == user?.email)
    return (
        <div>
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
                <button className="btn btn-warning btn-sm"> Cancel Request</button>
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

