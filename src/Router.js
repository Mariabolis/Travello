import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Dest from "./pages/Dest";
import Hotel from "./pages/Hotel";
import TravelGuide from "./pages/TravelGuide";
import Book from "./pages/Book";
import NotFoundPage from "./pages/NotFoundPage";
import Contact from "./pages/Contact";
import Regestration from "./pages/Regestration";
import LogIn from "./pages/LogIn";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/resetPassword";


export const router = createBrowserRouter ([
    {
        path:"/",
        element:<App/>,
        children:[
           {
            path:"/Home",
            element:<Home/>
           },
           {
            path:"/About",
            element:<About/>,
           },
           {
            path:"/Services",
            element:<Services/>,
           },
           {
            path:"/Destinations",
            element:<Dest/>
           },
           {
            path:"/Hotel",
            element:<Hotel/>
           },
           {
            path:"/travel-guids",
            element:<TravelGuide/>
           },
           {
            path:"/Booking",
            element:<Book/>,
           },
           {
            path:"/Contact",
            element:<Contact/>
           },
           
           {
            path:"/Regestration",
            element:<Regestration/>
           },
           {
            path:"/ForgetPassword",
            element:<ForgetPassword/>
           },
           {
            path:"/ResetPassword/:Token",
            element:<ResetPassword/>
           },
           {
            path:"/",
            element:<LogIn/>
           },

           {
            path:"*",
            element:<NotFoundPage/>,
           }
    ]
    }
])