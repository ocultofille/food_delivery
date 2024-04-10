import { DarkModeContext } from '../utils/DarkModeContext';
import { useContext } from "react";

export const Shimmer = () => {
    const { isDarkMode } = useContext(DarkModeContext);
    return (
        new Array(20).fill(0).map((card, index) => {

            return (
                <div key={index} className="my-4 me-4">
                    <div className="customCard d-flex flex-column">
                        <div className={isDarkMode?"shimmerImage rounded-3 shine":"shimmerImage rounded-3 shine_dark"} >
                        </div>
                        <div className={isDarkMode?" nameContainer shine":"nameContainer  shine_dark"}></div>
                        <div className="d-flex gap-1">
                            <div className={isDarkMode?"ratingContainer shine me-auto":"ratingContainer shine_dark me-auto"} ></div>
                            <div className={isDarkMode?'shine':"shine_dark"}></div>
                        </div>
                        <div className={isDarkMode?' cusineContainer shine':"cusineContainer shine_dark"}></div>
                        <div className={isDarkMode?'locationContainer shine':" locationContainer shine_dark"}></div>
                    </div>
                </div>
            )
        })

    )
}

export const Shimmercarousel = () => {
    const { isDarkMode } = useContext(DarkModeContext);
    return (
        <div className=" container-fluid mt-3 rounded-3 shimmerWidth mx-auto carShimmer roboto-thin" style={isDarkMode?{background:"#212529"}:{background:"rgb(49,49,49"}}>
            <img alt="duck"className="loadingGif me-2" src="https://i.gifer.com/XOsX.gif" /> Looking  for some good food near you ...
        </div>
    )
}

export const Shimmermenu = () => {
    const { isDarkMode } = useContext(DarkModeContext);
    return (

        <div className='container-fluid'style={isDarkMode?{background:"white"}:{background:"rgb(31,31,31)"}}>
            <div className="container  menuBlock " >
            <div className="d-flex justify-content-between  pb-4 align-items-center" style={{ borderBottom: "1px dashed lightgrey" }}>
                <div className="d-flex   gap-1 flex-column">
                    <div className={isDarkMode?" rounded-3 shine ":"rounded-3 shine_dark"} style={{ height: "25px", width: "150px" }}></div>
                    <div className={isDarkMode?" rounded-3 shine" :"rounded-3 shine_dark"}style={{ height: "12px", width: "50px" }}>  </div>
                    <div className={isDarkMode?" rounded-3 shine" :"rounded-3 shine_dark"}style={{ height: "12px", width: "80px" }}> </div>
                    <div className={isDarkMode?" rounded-3 shine mt-3":" rounded-3 shine_dark mt-3"} style={{ height: "14px", width: "200px" }}><div /></div>
                </div>
                <div>
                    <div className={isDarkMode?" shine rounded-3 rating text-center d-flex flex-column mt-5 ":" shine_dark rounded-3 rating text-center d-flex flex-column mt-5 "} style={{ height: "60px", width: "50px" }} >
                    </div>
                </div>
            </div>
            <div className="d-flex mt-2 gap-3">
                <div className={isDarkMode?" rounded-3 shine ":"rounded-3 shine_dark"} style={{ height: "20px", width: "100px" }}></div>
                <div className={isDarkMode?" rounded-3 shine ":"rounded-3 shine_dark"} style={{ height: "20px", width: "100px" }}></div>
            </div>
            <div>
                <div className=" mt5  justify-content-center d-flex gap-3">
                    <div className={isDarkMode?" my-5 shine rounded-4":"my-5 shine_dark rounded-4"} style={{ height: "400px", width: "350px" }}></div>
                    <div className={isDarkMode?" my-5 shine rounded-4":"my-5 shine_dark rounded-4"} style={{ height: "400px", width: "350px" }}></div>
                </div>
            </div>

            <div className=" mt5 " >
                <div className={isDarkMode?" mt-3 shine rounded-4":"mt-3 shine_dark rounded-4"} style={{ height: "15px", width: "100px" }}></div>
                <div className={isDarkMode?" mt-1 shine rounded-4":"mt-3 shine_dark rounded-4"} style={{ height: "30px", width: "100%" }}></div>
                <div className={isDarkMode?" mt-3 shine rounded-4":"mt-3 shine_dark rounded-4"} style={{ height: "15px", width: "100px" }}></div>
                <div className={isDarkMode?" mt-1 shine rounded-4":"mt-3 shine_dark rounded-4"} style={{ height: "30px", width: "100%" }}></div>
                <div className={isDarkMode?" mt-3 shine rounded-4":"mt-3 shine_dark rounded-4"} style={{ height: "15px", width: "100px" }}></div>
                <div className={isDarkMode?" mt-1 shine rounded-4":"mt-3 shine_dark rounded-4"} style={{ height: "30px", width: "100%" }}></div>
            </div>
        </div>
        </div>

        // <div  className="container menuBlock my-5 bg-success " >
        //     <div className="  d-flex justify-content-between  pb-4  mt-5 " style={{ borderBottom: "1px dashed lightgrey" }}>
        //         <div className="shine mt-5 rounded-3"style={{height:"20px",width:"100px"}}></div>
        //         <div></div>
        //     </div>
        // </div>
        // <div className="container menuBlock mt-5 bg-success " style={{width:"60%",height:"auto"}}  >
        //     <div className="  d-flex justify-content-between  pb-4 align-items-center mt-5 " style={{ borderBottom: "1px dashed lightgrey" }}>
        //         <div className=" shine d-flex  rounded-3 flex-column" style={{width:"150px",height:"10px"}} >
        //             {/* <div className="  shine border rounded-3 rating text-center d-flex flex-column mt-5 " height="50px">
        //                 <div className="  shine text-success  mukta-medium fw-bolder py-2 border-bottom ">hjhb</div>
        //                 <div className="  shine text-secondary  mukta-medium fw-bolder py-2 " >jhb</div>
        //             </div> */}
        //         </div>
        //     </div>
        // </div>
    )
}