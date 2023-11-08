import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";







const Manage = () => {
   
    const manage= useLoaderData();
    const {user} = useContext(AuthContext)
    // console.log(manage);
    const manages = manage.filter(element => element.dEmail == user?.email)
    return (
        <div>
            <h1>manage{manage.length}</h1>

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
                <Link >
                <button className="btn btn-warning btn-sm">Update</button>
                </Link>
                </td>
            
            </th>
          </tr>
            
            )
     }
     
   
    </tbody>
   
    
    
  </table>
</div>

            
        </div>
    );
};

export default Manage;