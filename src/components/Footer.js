import { DarkModeContext } from '../utils/DarkModeContext';
import { useContext } from "react";
const Footer = () => {
    const { isDarkMode } = useContext(DarkModeContext);
    return (
        <div className={isDarkMode?"containerFluid footer   text-light":"containerFluid footer   text-light "}  style={isDarkMode?{background:"#212529"}:{background:"rgb(24,24,24)"}}>
            <div className=" container px-5  pt-1"  >
               <div className="footerData d-flex flex-row justify-content-center gap-5 " style={{fontSize:"30px",width:"100%"}}>
                    <i className="footerIcon grow bi bi-linkedin"></i>
                    <i className="footerIcon grow bi bi-facebook"></i>
                    <i className="footerIcon grow bi bi-instagram"></i>
                    <i className="footerIcon grow bi bi-twitter"></i>
                </div>
                <div className="small mt-5">© 2024 Food Delivery App </div>
            </div>
            
        </div>

    )
}

export default Footer;