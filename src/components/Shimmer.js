

export const Shimmer = () => {
    return (
        new Array(20).fill(0).map((card, index) => {

            return (
                <div key={index} className="my-4 me-4">
                    <div className="customCard d-flex flex-column">
                        <div className="shimmerImage rounded-3 shine" >
                        </div>
                        <div className="nameContainer shine"></div>
                        <div className="d-flex gap-1">
                            <div className="ratingContainer shine me-auto"></div>
                            <div className=" shine"></div>
                        </div>
                        <div className="cusineContainer shine"></div>
                        <div className="locationContainer shine"></div>
                    </div>
                </div>
            )
        })

    )
}

export const Shimmercarousel = () => {
    return (
        <div className=" container-fluid mt-3 rounded-3 shimmerWidth mx-auto bg-dark carShimmer roboto-thin">
            <img alt="duck"className="loadingGif me-2" src="https://i.gifer.com/XOsX.gif" /> Looking  for some good food near you ...
        </div>
    )
}

export const Shimmermenu = () => {
    return (

        <div className="container  menuBlock mt-5" >
            <div className="d-flex justify-content-between  pb-4 align-items-center mt-5 " style={{ borderBottom: "1px dashed lightgrey" }}>
                <div className="d-flex   gap-1 flex-column">
                    <div className=" rounded-3 shine resName poppins-regular fw-bold mt-5" style={{ height: "25px", width: "150px" }}></div>
                    <div className=" rounded-3 shine" style={{ height: "12px", width: "50px" }}>  </div>
                    <div className=" rounded-3 shine" style={{ height: "12px", width: "80px" }}> </div>
                    <div className=" rounded-3 shine mt-3" style={{ height: "14px", width: "200px" }}><div /></div>
                </div>
                <div>
                    <div className="border shine rounded-3 rating text-center d-flex flex-column mt-5 " style={{ height: "60px", width: "50px" }} >
                    </div>
                </div>
            </div>
            <div className="d-flex mt-2 gap-3">
                <div className=" rounded-3 shine " style={{ height: "20px", width: "100px" }}></div>
                <div className=" rounded-3 shine " style={{ height: "20px", width: "100px" }}></div>
            </div>
            <div>
                <div className=" mt5  justify-content-center d-flex gap-3">
                    <div className=" my-5 shine rounded-4" style={{ height: "400px", width: "350px" }}></div>
                    <div className=" my-5 shine rounded-4" style={{ height: "400px", width: "350px" }}></div>
                </div>
            </div>

            <div className=" mt5 " >
                <div className=" mt-3 shine rounded-4" style={{ height: "15px", width: "100px" }}></div>
                <div className=" mt-1 shine rounded-4" style={{ height: "30px", width: "100%" }}></div>
                <div className=" mt-3 shine rounded-4" style={{ height: "15px", width: "100px" }}></div>
                <div className=" mt-1 shine rounded-4" style={{ height: "30px", width: "100%" }}></div>
                <div className=" mt-3 shine rounded-4" style={{ height: "15px", width: "100px" }}></div>
                <div className=" mt-1 shine rounded-4" style={{ height: "30px", width: "100%" }}></div>
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