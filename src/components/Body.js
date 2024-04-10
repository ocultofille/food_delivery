import Cardcontainer from "./Cardcontainer";
import React, { useContext } from 'react';
import { DarkModeContext } from '../utils/DarkModeContext';
import DarkModeToggle from "./DarkModeToggle";
const Body=()=>{
    const { isDarkMode } = useContext(DarkModeContext);

   return(
    <div style={isDarkMode?{background:"white"}:{background:"rgb(31,31,31)"}}>
        
        <Cardcontainer/>
    </div>
   )
   
};

export default Body;