import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './LayOut/MainLayOut';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import AuthProviders from './Providers/AuthProviders';
import Register from './Pages/Register/Register';
import AddFood from './Pages/AddFood/AddFood';
import AvailableFood from './Pages/AvilableFood/AvailableFood';

import SingleFoodDetails from './Pages/SingleFoodDetails/SingleFoodDetails';
import ManageFood from './Pages/ManageFood/ManageFood';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/addFood')
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'addFood',
        element:<AddFood></AddFood>
      },
      {
        path:'availableFood',
        element:<AvailableFood></AvailableFood>,
        loader:()=>fetch('http://localhost:5000/availableFood/sort')
      },
      {
        path: 'viewDetails/:id',
        element:<SingleFoodDetails></SingleFoodDetails>,
        loader:({params})=>fetch(`http://localhost:5000/addFood/${params.id}`)
      },
      {
        path:"manageFood",
        element:<ManageFood></ManageFood>,
        loader:()=> fetch('http://localhost:5000/addFood')
        
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
