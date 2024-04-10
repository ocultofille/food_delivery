import { DarkModeContext } from '../utils/DarkModeContext';
import { useContext } from "react";
import { IMG_URL_L2 } from "../utils/config"
const Topcarousel =({imageId})=>{
    // console.log("imageid",imageId)
    const { isDarkMode } = useContext(DarkModeContext);
    return(
        <>
            <span className="imgGrid mt-3 " style={isDarkMode?{}:{position:"relative"}}>
                <img src="https://www.vhv.rs/file/max/20/207495_shadow-png.png "  className="mx-1 rounded-4 " style={isDarkMode?{display:"none"}:{ width: "165px",height:"206px",objectFit: "cover",position:"absolute", zIndex:"1",display:"block"}}/>
                <img  alt="veg" className="d-flex mx-1 rounded-4 " src={IMG_URL_L2+imageId} style={{ width: "165px",height:"auto",objectFit: "cover",position:"relative"  }}/>
            </span>
            
        </>
    )
}
export default Topcarousel