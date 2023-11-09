import { useContext } from "react";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Navbar from "../Shared/Navber/Navbar";
import Footer from "../Shared/Footer/Footer";
// import Swal from "sweetalert2";







const Manage = () => {
   
    const manage= useLoaderData();
    const {user} = useContext(AuthContext)
    // console.log(manage);
    const manages = manage.filter(element => element.dEmail == user?.email)

    // const handleDelivered=id=>{
        
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You want deliverd this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //       }).then((result) => {
    //         if (result.isConfirmed) {
           
    //           fetch(`http://localhost:5000/requestFood/${id}`,{
    //             method: 'PATCH',
    //             headers:{
    //                 'content-type':'application/json'
    //             },
    //             body:JSON.stringify({status:'confirm'})
    //           })
    //           .then(res=>res.json())
    //           .then(data=>{
    //             console.log(data);
    //             if(data.modifiedCount >0){
    //                  Swal.fire(
    //             'Deleted!',
    //             'Your coffee has been deleted.',
    //             'success'
    //           )
           
    //             }
    //           })
    //         }
    //       })
    // }
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
        
        <th>Requester Name</th>
        <th>Requester Email</th>
        <th>Requester Time</th>
        <th>Requester Date</th>
        <th>Status</th>
        
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        manages.map(mange => 
            <tr key={mange._id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
           
            <td>
              {mange.dName}
              <br/>
             
            </td>
           
            <th>
            <td>{mange.dEmail}</td>
            </th>
            <th>
            <td>{mange.time}</td>
            </th>
            <th>
            <td>{mange.date}</td>
            </th>
            
            <th>
            <td>
               
                <button className="btn btn-warning btn-sm"> Delivered</button>
                
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

export default Manage;