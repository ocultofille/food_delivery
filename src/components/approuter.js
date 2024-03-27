import App from "../App";
import About from "./About";
import Body from "./Body";
import Contact from "./Contact."; 
import {createBrowserRouter} from "react-router-dom"
import CustomError from "./Customerror";
import {Menu} from "./Menu";
const approuter = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement:<CustomError/>,
      children:[
        {
            path:"/about",
            element:<About/>,
            
        },
        {
            path:"/contact",
            element:<Contact/>,
           
        },
        {
            path:"",
            element:<Body/>,
           
        },
        {
            path:"menu/:resId",
            element:<Menu/>
        }

      ]
    }
  ]);
  export default approuter 