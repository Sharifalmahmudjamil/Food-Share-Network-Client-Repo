import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
// import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";


const SingleFoodDetails = () => {

    const food= useLoaderData();
    const {user}=useContext(AuthContext);
    console.log(user);
    const {name,photo,dName,quantity,location,date,notes,_id}= food;

    const handleRequestAdd = e =>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const dName= form.dName.value;
        const dEmail= form.email.value;
        const location= form.location.value;
        const date= form.date.value;
        const notes= form.notes.value;
        const photo=form.photo.value;
        const fId=form.id.value;
        const user= form.uEmail.value;
        const req = form.rDate.value;
        const money= form.money.value;

        const singleFood={name,dName,dEmail,location,date,notes,photo,fId,user,req,money}
        console.log(singleFood);

        // send to the server side
        fetch('http://localhost:5000/requestFood',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(singleFood)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                toast('Request SuccessFully')
                // Swal.fire({
                //     title: 'Success!',
                //     text: 'Food Added SuccessFully',
                //     icon: 'success',
                //     confirmButtonText: 'Closed'
                //   })
            }
        })
    }

    return (
        <div>
           
            
            <div>
                <h1 className="text-5xl text-center">Donor Information</h1>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th> Donar Name</th>
        <th>Food Pickup Location</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>{dName}</td>
        <td>{location}</td>
       
      </tr>
      {/* row 2 */}
      {/* <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        
      </tr> */}
   
    
    </tbody>
  </table>
</div>
<div>
    <h1 className="text-5xl font-medium text-center mt-5">  Single Food details</h1>
</div>
<div className="mt-10 overflow-x-hidden">
            
            <div className="card w-96 bg-base-100 shadow-xl mx-auto ">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title "><span className="text-yellow-400">Food Name</span> :{name}</h2>
  
  
  <h1 className="text-lg font-medium"> <span className="text-xl text-yellow-400" >Food Quantity</span> : {quantity}</h1>
  
  <h1 className="text-lg font-medium">  <span className="text-xl text-yellow-400">Expired Date</span> : {date}</h1>
  
    <div className="card-actions ">
      
      {/* <button className="btn bg-yellow-400"> Request Button</button> */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-yellow-400" onClick={()=>document.getElementById('my_modal_4').showModal()}>Request Button</button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    

  <form onSubmit={handleRequestAdd}>
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
                        <span className="label-text">Food Donator Email</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="email" name="email" placeholder="Enter the email" className="input input-bordered w-full" />
                    </label>
                    </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Food Donator Name</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="dName"  placeholder="Enter the Food Donator Name" className="input input-bordered w-full" />
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
                        
                        <input type="text" name="location" defaultValue={location} placeholder="Enter the  Pickup Location" className="input input-bordered w-full" />
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
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text"> Food Id</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="id" defaultValue={_id} placeholder="Enter the Food Id" className="input input-bordered w-full" />
                    </label>
                    </div>
                </div>
                {/* Category and details row */}
                <div className="md:flex mb-8">
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">User Email</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="email" name="uEmail"defaultValue={user.email} placeholder="Enter the User Email" className="input input-bordered w-full" />
                    </label>
                    </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Additional Notes</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="notes"defaultValue={notes} placeholder="Enter the Additional Notes" className="input input-bordered w-full" />
                        
                    </label>
                    </div>
                </div>
                {/* photo Url row */}
                <div className="mb-8 flex">
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text"> Food Image</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="photo"defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered w-full" />
                    </label>
                    </div>
                <div className="form-control  md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">  Request Date</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="date" name="rDate" placeholder="Enter the Date" className="input input-bordered w-full" />
                    </label>
                    </div>
                <div className="form-control  md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Donation Money</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="money" placeholder="Enter the Donation Money" className="input input-bordered w-full" />
                    </label>
                    </div>
              
               
                
                </div>
               
                
                <input type="submit" value="Request" className="btn btn-block btn-neutral" />
            </form>
    
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
        </div>
        <ToastContainer></ToastContainer>

        </div>
    );
};

export default SingleFoodDetails;