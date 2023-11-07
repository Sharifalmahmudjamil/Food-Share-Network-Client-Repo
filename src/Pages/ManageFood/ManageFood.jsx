import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navber/Navbar";





const ManageFood = () => {
    
    const allFood= useLoaderData();
    console.log(allFood);
    
   
    

    
    
 
    
 
    return (
        <div>
            <Navbar></Navbar>
          
        <h1>{allFood.length}</h1>

       
        
        
        </div>
    );
};

export default ManageFood;