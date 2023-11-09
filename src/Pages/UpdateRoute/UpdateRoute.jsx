import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";


const UpdateRoute = () => {
    const { user}=useContext(AuthContext);
    const email = user?.email
    const dName = user?.displayName
    const image = user?.photoURL
    const updateFood= useLoaderData();
    // console.log(updateFood);
    const {name,photo,quantity,location,date,notes,_id}=updateFood;

    const handleUpdateFood = e =>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const quantity= form.quantity.value;
        const location= form.location.value;
        const date= form.date.value;
        const notes= form.notes.value;
        const photo=form.photo.value;

        const updateFood= {name,quantity,location,date,notes,photo,email,dName,image}
        
        console.log(updateFood);
        
        // send data to the server site
        fetch(`https://food-share-network-serversite.vercel.app/addFood/${_id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(updateFood)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Food Update SuccessFully',
                    icon: 'success',
                    confirmButtonText: 'Closed'
                  })
            }
        })

    }
    return (
        <div>
               <div className=" p-24 bg-rose-500">
           <Link to="/">
           <button className="btn lg:btn-outline mb-5">Back To Home</button>
           </Link>
            <h2 className="text-3xl font-extrabold text-center mb-6">Update Food</h2>
            <form onSubmit={handleUpdateFood}>
                {/* name and quantity */}
                <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Food Name</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="name" defaultValue={name} placeholder="Enter  the food Name" className="input input-bordered w-full" />
                    </label>
                    </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Food Quantity (no. of person to be served.)</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="quantity" defaultValue={quantity} placeholder="Enter the Food Quantity" className="input input-bordered w-full" />
                    </label>
                    </div>
                </div>
                {/* Supplier and test row */}
                <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text"> Pickup Location</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="location"defaultValue={location}  placeholder="Enter the  Pickup Location" className="input input-bordered w-full" />
                    </label>
                    </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text"> Expired Date</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="date" name="date" defaultValue={date} placeholder="Enter the  Expired Date" className="input input-bordered w-full" />
                    </label>
                    </div>
                </div>
                {/* Category and details row */}
                <div className="md:flex mb-8">
                {/* <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">price</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="price" placeholder="Enter the price" className="input input-bordered w-full" />
                    </label>
                    </div> */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Additional Notes</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="notes" defaultValue={notes} placeholder="Enter the Additional Notes" className="input input-bordered w-full" />
                        
                    </label>
                    </div>
                </div>
                {/* photo Url row */}
                <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text"> Food Image</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered w-full" />
                    </label>
                    </div>
                
                </div>
                
                <input type="submit" value="Update Food" className="btn btn-block btn-neutral" />
            </form>
        </div>
        </div>
    );
};

export default UpdateRoute;