import { Fragment } from "react";
import { IMG_URL_L1 } from "../utils/config";
import { Link } from "react-router-dom";
import { DarkModeContext } from '../utils/DarkModeContext';
import { useContext } from "react";
const Card = ({ cloudinaryImageId,name,aggregatedDiscountInfoV3, sla, avgRating, cuisines, areaName,id}) => {
    const { isDarkMode } = useContext(DarkModeContext);
    return (
        <Fragment >
         
            <Link to={`menu/${id}`} className="dummyCard shrink-on-hover" style={{textDecoration:"none"}}>
                <div className="img" >
                <div className="gradient rounded-3"><div className="discount kanit-bold ps-2 mx-auto fw-bold" style={isDarkMode?{color:"white"}:{color:"#c3c3c4"}} >{aggregatedDiscountInfoV3?.header}{" "}{aggregatedDiscountInfoV3?.subHeader}</div></div>
                    <img className="rounded-3  resImg" src={IMG_URL_L1+cloudinaryImageId} alt="resimg" width="100%" style={{ height: "150px", objectFit: "cover"}} />
                    
                </div>
               
                <div className={isDarkMode?"h5 fw-bolder cusine resName_light":"h5 fw-bolder cusine resName_dark"}>{name}</div>
                <div className="d-flex gap-1">
                    <div className={isDarkMode?"fw-bold text-dark":"fw-bold text-secondary"}><span className="text-light me-1 rounded-circle star" style={isDarkMode?{background:"green"}:{background:"#FE5005"}}><i className="bi bi-star-fill"></i></span>{avgRating }</div>
                    <div className={isDarkMode?"fw-bold text-dark ":"fw-bold text-secondary "}>{sla?.slaString}</div>
                </div>
                <div className="text-secondary cusine">{cuisines.join(", ")}</div>
                <div className="text-secondary">{areaName}<i className="bi bi-geo-alt-fill"></i></div>
            </Link>
           
        </Fragment>
    )
};
export default Card;
