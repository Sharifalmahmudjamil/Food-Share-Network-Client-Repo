/* eslint-disable react/prop-types */


const AvailableFoodCard = ({allFood}) => {
    const {name,photo,dName,image,quantity,location,date,notes}= allFood;
    return (
        <div>
                   <div className="mt-10">
            
            <div className="card bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title "><span className="text-yellow-400">Food Name</span> :{name}</h2>
    <div className=" avatar">
        <h1 className="text-lg font-medium"> <span className="text-xl text-yellow-400">Donator Image</span> :</h1>
    <div className="w-16 rounded-full">
      <img src={image} />
    </div>
  </div>
  <h1 className="text-lg font-medium"> <span className="text-xl text-yellow-400">Donator Name</span> : {dName}</h1>
  <h1 className="text-lg font-medium"> <span className="text-xl text-yellow-400" >Food Quantity</span> : {quantity}</h1>
  <h1 className="text-lg font-medium"> <span className="text-xl text-yellow-400">Pickup Location</span> : {location}</h1>
  <h1 className="text-lg font-medium">  <span className="text-xl text-yellow-400">Expired Date</span> : {date}</h1>
  <h1 className="text-lg font-medium">  <span className="text-xl text-yellow-400">Additional Notes</span> : {notes}</h1>
    <div className="card-actions ">
      <button className="btn bg-yellow-400"> View Detail</button>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default AvailableFoodCard;