import { useState } from "react"
import { DarkModeContext } from '../utils/DarkModeContext';
import { useContext } from "react";
import {MENU_IMG_URL} from "../utils/config"

const NormalMenu = ({title,itemCards,showList, isNested,showNestedList ,toggleFunction,toggleNested}) => {
    const { isDarkMode } = useContext(DarkModeContext);
   
    return (
        <div>
            <div className="d-flex justify-content-between  align-items-center mt-5 mb-3" onClick={(isNested? toggleNested:toggleFunction)}>
            <div  >{title} ({itemCards.length})</div>
            <div className="" style={{fontWeight:"600"}}>{showList?<i class="bi bi-chevron-up"></i>:<i class="bi bi-chevron-down"></i>}</div>    
            </div> 
            {

                (isNested ? showNestedList:showList) && itemCards.map(itemCard => {
                    return (
                        <div key={itemCard?.card?.info.name} className=" d-flex justify-content-between pb-3 align-items-center mt-2" style={isDarkMode?{ borderBottom: "1px solid #e9e9eb" }:{ borderBottom: "1px solid rgb(59,58,58)" }}>
                            <div className="d-flex  mt-4 flex-column">
                                <div>{itemCard?.card?.info.isVeg ? <img alt="veg" className="logoVeg text-danger" height="17px" src="https://m.media-amazon.com/images/I/31xw3zCEReL.jpg" /> : <img alt="veg" height="15px" src="https://m.media-amazon.com/images/I/51x8XtJjq7L._AC_UF350,350_QL80_.jpg" />}</div>
                                <div className="kanit-bold  mt-1 fw-normal" style={isDarkMode?{ color: "#3e4152", fontSize: "1rem" }:{ color: "rgb(180,180,180)", fontSize: "1rem" }}>{itemCard?.card?.info.name}</div>
                                <div className="kanit-bold  mt-1 fw-normal" style={isDarkMode?{ color: "#3e4152", fontSize: "0.8rem" }:{ color: "rgb(180,180,180)", fontSize: "0.8rem" }}>{itemCard?.card?.info.price ? `₹` + itemCard?.card?.info?.price / 100 :  `  ₹` + itemCard?.card?.info.defaultPrice/100 }</div>
                                <div className="poppins-regular  fw-normal mt-1 " style={isDarkMode?{ color: "rgba(40,44,63,0.45)", fontSize: "0.8rem" }:{ color: "rgba(138,138,138,0.5)", fontSize: "0.8rem"}}> {itemCard?.card?.info.description}</div>
                            </div>
                            <div className="d-flex ps-1 flex-column">
                                <img className="rounded-3" style={{ backgroundColor: `hsl(${(Math.random() * 360) | 0}, 40%, 85%)`, width: "150px", height: "120px", objectFit: "cover" }} alt="img" src={itemCard?.card?.info.imageId ? MENU_IMG_URL + itemCard?.card?.info.imageId : "https://cdn-icons-png.freepik.com/512/1056/1056265.png"} />
                                <button type="button" className="text-success bg-white fw-bold btn  btm-small mx-auto border addBtn ">ADD</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}
export default NormalMenu