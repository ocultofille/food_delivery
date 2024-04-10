import { DarkModeContext } from '../utils/DarkModeContext';
import { useContext } from "react";
const Menuheader = ({name, cuisines, areaName, avgRating, sla, feeDetails, totalRatingsString, costForTwoMessage})=>{
    const { isDarkMode } = useContext(DarkModeContext);
    return(
        <>
        <div className="d-flex justify-content-between  pb-4 align-items-center " style={isDarkMode?{ borderBottom: "1px dashed lightgrey" }:{ borderBottom: "1px dashed  rgb(59,58,58)" }}>
                    <div className="d-flex flex-column">
                        <div className="resName poppins-regular fw-bold mt-5" style={isDarkMode?{color:"#3e4152"}:{color:"rgb(180,180,180)"}}>{name}</div>
                        <div className="text-secondary poppins-regular cuisines small"> {cuisines.join(",")} </div>
                        <div className="text-secondary poppins-regular cuisines small"> {areaName}, {sla?.lastMileTravelString}</div>
                        <div className="mt-3">
                            <span style={isDarkMode?{color:"#3e4152",fontSize:"20px"}:{color:"darkgray",fontSize:"20px"}}>
                                <i className="bi bi-bicycle"></i> 
                            </span> 
                                <span  className="text-secondary poppins-regular cuisines small " style={{lineHeight:"3px"}}>{feeDetails?.message}</span>
                        </div>
                    </div>
                    <div>
                        <div className={isDarkMode?" rounded-3 rating_light text-center d-flex flex-column mt-5 ":" rounded-3 rating_dark text-center d-flex flex-column mt-5"} height="50px">
                            <div className="text-success  mukta-medium fw-bolder py-2 " style={isDarkMode?{ fontSize: "15px",borderBottom:"1px solid lightgrey" }:{ fontSize: "15px",borderBottom:"1px solid rgb(59,58,58)" }}><i className="bi bi-star-fill"></i> {avgRating}</div>
                            <div className="text-secondary  mukta-medium fw-bolder py-2 " style={{ fontSize: "10px" }}>{totalRatingsString}</div>
                        </div>
                    </div>
                </div>
                <div className="d-flex" style={isDarkMode?{ color: "#3e4152" }:{color:"rgb(180,180,180)"}}>
                    <div className="me-4">
                        <i className="bi bi-clock-fill"></i>
                        <span className="poppins-regular ms-2 fw-bolder">{sla?.slaString}</span>
                    </div>
                    <div >
                        <span className="  fw-bolder rupeeEdit " style={isDarkMode?{ backgroundColor: "#3e4152",color:"white" }:{color:"rgb(31,31,31",background:"rgb(180,180,180"}}>₹</span>
                        <span className="poppins-regular ms-2 fw-bolder" >{costForTwoMessage}</span>
                    </div>
                </div>

        </>
        
    )
}

export default Menuheader;