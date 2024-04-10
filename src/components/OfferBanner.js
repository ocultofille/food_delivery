import { DarkModeContext } from '../utils/DarkModeContext';
import { useContext } from "react";
import {MENU_OFFER_IMG} from "../utils/config"
const OfferBanner = ({offerLogo,header,couponCode,description})=>{
    const { isDarkMode } = useContext(DarkModeContext);
    return(
        <button type="button" className="btn me-2" style={isDarkMode?{ width: "auto", height: "auto", border: "1px solid #e9e9eb" }:{ width: "auto", height: "auto", border: "1px solid rgb(59,58,58)"}}>

        <div className="d-inline">
            <img alt="img" src={MENU_OFFER_IMG + offerLogo} style={{ height: "20px" }} />
            <span className="poppins-regular ms-2 fw-bolder" style={isDarkMode?{ color: "#686b78" }:{color:"rgb(75,75,75)"}}>{header}</span>
        </div>
        <div>
            <span className="roboto-regular ms-2 fw-bolder" style={isDarkMode?{ color: "#93959f", fontSize: "0.7rem" }:{ color: "rgb(85,83,83)", fontSize: "0.7rem" }}>{couponCode} {` | ` + description}</span>
            <span></span>
        </div>

    </button>
    )
}

export default OfferBanner;