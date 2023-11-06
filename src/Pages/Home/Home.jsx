import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Navbar from "../Shared/Navber/Navbar";
import { useState } from "react";
import FeaturedFood from "../FeaturedFood/FeaturedFood";







const Home = () => {
    const foods= useLoaderData();
    console.log(foods);
    // eslint-disable-next-line no-unused-vars
    const [data,setData]=useState(foods.slice(0,6))
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="text-5xl text-center mt-6">
            <h1>Featured Foods</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto container">
               
               
                 {
                    data.map(food => <FeaturedFood 
                        
                        key={food._id}
                        food={food}
                        
                        ></FeaturedFood>)
                 }
            </div>
           <div className="text-center mt-4">
           <Link to='/availableFood'>
           <button className="btn btn-outline btn-warning">Show All</button>
           </Link>
           </div>
        </div>
    );
};

export default Home;