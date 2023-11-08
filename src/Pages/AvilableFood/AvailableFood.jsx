import { useLoaderData } from "react-router-dom";
import AvailableFoodCard from "./AvailableFoodCard";
import { useState } from "react";
import Navbar from "../Shared/Navber/Navbar";
import Footer from "../Shared/Footer/Footer";


const AvailableFood = () => {
    const [search,setSearch] = useState('');
    console.log(search);
    const allFoods= useLoaderData();
    console.log(allFoods);
    return (
        <div >
            <Navbar></Navbar>
            <h1 className="text-5xl text-center mt-5">Available Foods</h1>
            <div className="lg:ml-96 mt-5">
            <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-warning w-3/5" />
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto container">
            
          
            {
                allFoods.filter((allFood)=> {
                    return search.toLowerCase() === ''? allFood:allFood.name.toLowerCase().includes(search)
                }).map(allFood => <AvailableFoodCard
                     key={allFood._id}
                     allFood={allFood}
                     >

                     </AvailableFoodCard>)
            }
        </div>
        <Footer></Footer>
        </div>
    );
};

export default AvailableFood;