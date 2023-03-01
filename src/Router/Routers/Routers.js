import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddItems from "../../Pages/AddItems/AddItems";
import AllServices from "../../Pages/AllServices/AllServices";
import Home from "../../Pages/Home/Home/Home";
import BookReserve from "../../Pages/Home/Reserve/BookReserve";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyRevew/MyReview";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import SignUp from "../../Pages/SignUp/SignUp";
import Privaterout from "../../PrivateRout/Privaterout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
           {
            path:'/',
            element:<Home></Home>
           },
           {
            path:'/login',
            element: <Login></Login>
           },
           {
             path:'/signup',
             element:<SignUp></SignUp>
           },
           {
            path:'/allservices',
            element:<AllServices></AllServices> 
           },
           {
            path:'/servicedetails/:id',
            element:<ServiceDetails></ServiceDetails>,
            loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
           },
           
          
           {
            path:'/myreview',
            element: <MyReview></MyReview>
           },
           {
              path:'/additems',
              element:<AddItems></AddItems>
           },
           {
            path:'/reserve',
            element:<BookReserve></BookReserve>
           }
        ]
    }

])

export default router;