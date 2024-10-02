import { createBrowserRouter } from "react-router-dom";
import Auth from "../screen/Auth";
import ErrorPage from "../errorHandler/errorPage";
import Dashboard from "../screen/Dashboard";

const router = createBrowserRouter([
   {
    path:'/',
    element:<Auth/>,
    errorElement:<ErrorPage/>
   },{
     path:'/dashboard',
     element:<Dashboard/>,
     errorElement:<ErrorPage/>
   }
])

export default router