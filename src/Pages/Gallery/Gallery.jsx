import Aos from "aos";

import 'aos/dist/aos.css'

import { AiFillHeart } from "react-icons/ai";
import { FaEye } from 'react-icons/fa';
import { BsEmojiHeartEyes} from "react-icons/bs";
import { useEffect } from "react";





const Gallery = () => {
        useEffect(()=>{
                Aos.init()
              },[])
    return (

        <div data-aos="zoom-in-down">
            
        <div className="overflow-hidden" >
       
            
            <h1 className="text-5xl font-bold text-center mt-4 ">Our Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-auto container mt-6 ">
            <div className="card w-96 bg-slate-200 shadow-xl">
  <figure><img src="https://i.ibb.co/SDjPRpk/people-bringing-supplies-neighbors.jpg" alt="" /></figure>

        <div className="flex gap-4 justify-center lg:p-2">
        <AiFillHeart className="text-rose-700 text-2xl "></AiFillHeart>
        <FaEye className="text-2xl"></FaEye>
        <BsEmojiHeartEyes className="text-lg text-rose-600"></BsEmojiHeartEyes>
        </div>
  
</div>
            <div className="card w-96 bg-slate-200 shadow-xl">
  <figure><img className="object-cover" src="https://i.ibb.co/2WC4JND/medium-shot-volunteers-with-food-donations.jpg" alt="" /></figure>

  <div className="flex gap-4 justify-center lg:p-2">
        <AiFillHeart className="text-rose-700 text-2xl "></AiFillHeart>
        <FaEye className="text-2xl"></FaEye>
        <BsEmojiHeartEyes className="text-lg text-rose-600"></BsEmojiHeartEyes>
        </div>

 
</div>
            <div className="card w-96 bg-slate-200 shadow-xl">
  <figure><img src="https://i.ibb.co/Tr3YL8r/outdoor-food-drive-event-with-volunteers-different-ethnicities-serving-homeless-individuals-emphasiz.jpg" alt="Shoes" /></figure>

  <div className="flex gap-4 justify-center lg:p-2">
        <AiFillHeart className="text-rose-700 text-2xl "></AiFillHeart>
        <FaEye className="text-2xl"></FaEye>
        <BsEmojiHeartEyes className="text-lg text-rose-600"></BsEmojiHeartEyes>
        </div>
 
</div>
            <div className="card w-96 bg-slate-200 shadow-xl">
  <figure><img src="https://i.ibb.co/nLpf6HD/photo-focus-caucasian-man-serving-bread-chicken-baked-beans-poor-hungry-african-american-person-non.jpg" alt="Shoes" /></figure>

  <div className="flex gap-4 justify-center lg:p-2">
        <AiFillHeart className="text-rose-700 text-2xl "></AiFillHeart>
        <FaEye className="text-2xl"></FaEye>
        <BsEmojiHeartEyes className="text-lg text-rose-600"></BsEmojiHeartEyes>
        </div> 
 
</div>
            <div className="card w-96 bg-slate-200 shadow-xl">
  <figure><img src="https://i.ibb.co/MnpxCtC/close-up-people-with-food-donations.jpg" alt="Shoes" /></figure>

  <div className="flex gap-4 justify-center lg:p-2">
        <AiFillHeart className="text-rose-700 text-2xl "></AiFillHeart>
        <FaEye className="text-2xl"></FaEye>
        <BsEmojiHeartEyes className="text-lg text-rose-600"></BsEmojiHeartEyes>
        </div> 
 
</div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/L5qB9G0/charity-foodbank-volunteer-group.jpg" alt="Shoes" /></figure>
  <div className="flex gap-4 justify-center lg:p-2">
        <AiFillHeart className="text-rose-700 text-2xl "></AiFillHeart>
        <FaEye className="text-2xl"></FaEye>
        <BsEmojiHeartEyes className="text-lg text-rose-600"></BsEmojiHeartEyes>
        </div> 
 
</div>

</div>

        </div>
       
        </div>
        
    );
};

export default Gallery;