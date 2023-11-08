import { useLoaderData } from "react-router-dom";



const Manage = () => {
    const manage= useLoaderData();
    console.log(manage);
    
    return (
        <div>
            <h1>manage</h1>

            
        </div>
    );
};

export default Manage;