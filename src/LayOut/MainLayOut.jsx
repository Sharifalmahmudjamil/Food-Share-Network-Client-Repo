import { Outlet } from "react-router-dom";



const MainLayOut = () => {
    return (
        <div className="font-poppins">
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayOut;