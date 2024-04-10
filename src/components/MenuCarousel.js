import {MENU_CAR_IMG } from "../utils/config"
const MenuCarousel =({creativeId})=>{
 return(
    <div className="mt-3" >
    <img alt="img" className="rounded-4" src={MENU_CAR_IMG +creativeId} style={{ height: "300px", width: "340px", objectFit: "cover" }} />
    </div>
 )
}
export default MenuCarousel 