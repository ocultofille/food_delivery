import { Fragment } from "react";
import { IMG_URL_L1 } from "../utils/config";
import { Link } from "react-router-dom";
const Card = ({ cloudinaryImageId,name,aggregatedDiscountInfoV3, sla, avgRating, cuisines, areaName,id}) => {
    return (
        <Fragment >
         
            <Link to={`menu/${id}`} className="dummyCard shrink-on-hover" style={{textDecoration:"none"}}>
                <div className="img" >
                <div className="gradient text-light  rounded-3"><div className="discount kanit-bold ps-2 mx-auto fw-bold" >{aggregatedDiscountInfoV3?.header}{" "}{aggregatedDiscountInfoV3?.subHeader}</div></div>
                    <img className="rounded-3  resImg" src={IMG_URL_L1+cloudinaryImageId} alt="resimg" width="100%" style={{ height: "150px", objectFit: "cover"}} />
                    
                </div>
               
                <div className="h5 fw-bolder cusine resName">{name}</div>
                <div className="d-flex gap-1">
                    <div className="fw-bold text-dark"><span className="bg-success text-light me-1 rounded-circle star"><i className="bi bi-star-fill"></i></span>{avgRating }</div>
                    <div className="fw-bold text-dark ">{sla?.slaString}</div>
                </div>
                <div className="text-secondary cusine">{cuisines.join(", ")}</div>
                <div className="text-secondary">{areaName}<i className="bi bi-geo-alt-fill"></i></div>
            </Link>
           
        </Fragment>
    )
};
export default Card;
