import { useLoaderData } from "react-router-dom";
import AvailableFoodCard from "./AvailableFoodCard";
import { useState } from "react";


const AvailableFood = () => {
    const [search,setSearch] = useState('');
    console.log(search);
    const allFoods= useLoaderData();
    console.log(allFoods);
    return (
        <div >
            <h1 className="text-5xl text-center">Available Foods</h1>
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
        </div>
    );
};

export default AvailableFood;