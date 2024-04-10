import React from "react"
// import Form from "./Form";
//https://i.insider.com/61987ce5a0817900199c11e2?width=1000&format=jpeg&auto=webp
import { DarkModeContext } from '../utils/DarkModeContext';
import { useContext } from "react";
import { useState, useEffect } from "react";

const About = () => {
    const { isDarkMode } = useContext(DarkModeContext);
    return (
        <>
            <div className=" mukta-regular  px-5 container-fluid aboutHeader" style={isDarkMode?{backgroundImage:"url('https://careers.swiggy.com/assets/img/banner3.jpg')"}:{backgroundImage:"url('https://www.sureteam.co.uk/wp-content/uploads/2019/06/New_healthy_working_system.jpeg')",backgroundPosition:"90%"}} >
                <div className="container px-5  mx-5 " style={isDarkMode?{color:"white"}:{color:"rgb(254, 80, 5)"}}>
                    <div className="px-5 mx-5">
                        <div className="fw-bolder " style={{fontWeight:"bold" , margin:"0px"}} ><span style={{fontWeight:"bold"}}>Discover</span></div>
                        <span className="">The Swiggster</span>
                        <br />
                        In You
                    </div>
                </div>
            </div>

            <div class="container-fluid "style={isDarkMode?{background:"white"}:{background:"black"}}>
            <div className="container  mx-5 ">
                <div className=" text-center pt-5 roboto-thin " style={isDarkMode?{ fontWeight: "lighter", fontSize: "20px",color:"black" }:{ fontWeight: "lighter", fontSize: "20px",color:"#757575" }}>
                    We build innovative products & solutions that deliver unparalleled convenience to urban consumers.
                    The best part? Every bit of your work at Swiggy will help elevate the lives of our users across India.
                </div>
                <div className="text-center montserrat-regular  mt-4" style={isDarkMode?{ fontWeight: "lighter", fontSize: "35px", wordSpacing: "4px", letterSpacing: "5px" ,color:"black" }:{ fontWeight: "lighter", fontSize: "35px", wordSpacing: "4px", letterSpacing: "5px" , color:"#888484"}}> Where Do You Belong?</div>
                <div className="d-flex  flex-wrap  container justify-content-between mx-5 px-5 mt-5 align-items-center" style={{gap:"auto"}}>
                    <div className={isDarkMode?"d-flex flex-column align-items-center aboutData  aboutCard ":"d-flex flex-column align-items-center aboutData  aboutCard_dark "}>
                        <img width="150px" src="https://careers.swiggy.com/assets/img/icons/ic_1.png" />
                        <div className="d-flex  flex-column  justify-content-center  align-items-center">
                            <div className="text-center my-5 montserrat-regular " style={{ fontWeight: "bold", fontSize: "20px", letterSpacing: "7px" ,color:""}}>TECHNOLOGY
                            </div>
                            <button type="button" className="btn  montserrat-regular rounded-1 text-center aboutBtn">Explore</button>
                        </div>
                    </div>

                    <div className={isDarkMode?"d-flex flex-column align-items-center aboutData  aboutCard":"d-flex flex-column align-items-center aboutData  aboutCard_dark"}>
                        <img width="150px" src="https://careers.swiggy.com/assets/img/icons/ic_2.png" />
                        <div className="d-flex  flex-column  justify-content-center  align-items-center">
                            <div className="text-center my-5 montserrat-regular " style={{ fontWeight: "bold", fontSize: "20px", letterSpacing: "7px" }}>BUSINESS
                            </div>
                            <button type="button" className="btn  montserrat-regular rounded-1 text-center aboutBtn">Explore</button>
                        </div>
                    </div>


                    <div className={isDarkMode?"d-flex flex-column align-items-center aboutData  aboutCard ":"d-flex flex-column align-items-center aboutData  aboutCard_dark "}>
                        <img width="150px" src="https://careers.swiggy.com/assets/img/icons/ic_3.png" />
                        <div className="d-flex  flex-column  justify-content-center  align-items-center">
                            <div className="text-center my-5 montserrat-regular " style={{ fontWeight: "bold", fontSize: "20px", letterSpacing: "7px" ,color:""}}>CLOUD KITCHEN
                            </div>
                            <button type="button" className="btn  montserrat-regular rounded-1 text-center aboutBtn">Explore</button>
                        </div>
                    </div>


                    <div className={isDarkMode?"d-flex flex-column align-items-center aboutData  aboutCard ":"d-flex flex-column align-items-center aboutData  aboutCard_dark "}>
                        <img width="150px" src="https://careers.swiggy.com/assets/img/icons/ic_4.png" />
                        <div className="d-flex  flex-column  justify-content-center  align-items-center">
                            <div className="text-center my-5 montserrat-regular " style={{ fontWeight: "bold", fontSize: "20px", letterSpacing: "7px" ,color:""}}>CUSTOMER CARE
                            </div>
                            <button type="button" className="btn  montserrat-regular rounded-1 text-center aboutBtn">Explore</button>
                        </div>
                    </div>

                    <div className={isDarkMode?"d-flex flex-column align-items-center aboutData  aboutCard ":"d-flex flex-column align-items-center aboutData  aboutCard_dark "}>
                        <img width="150px" src="https://careers.swiggy.com/assets/img/icons/ic_5.png" />
                        <div className="d-flex  flex-column  justify-content-center  align-items-center">
                            <div className="text-center my-5 montserrat-regular " style={{ fontWeight: "bold", fontSize: "20px", letterSpacing: "7px" ,color:""}}>CAMPUS
                            </div>
                            <button type="button" className="btn  montserrat-regular rounded-1 text-center aboutBtn">Explore</button>
                        </div>
                    </div>


                    <div className={isDarkMode?"d-flex flex-column align-items-center aboutData  aboutCard ":"d-flex flex-column align-items-center aboutData  aboutCard_dark "}>
                        <img width="150px" src="https://careers.swiggy.com/assets/img/icons/ic_6.png" />
                        <div className="d-flex  flex-column  justify-content-center  align-items-center">
                            <div className="text-center my-5 montserrat-regular " style={{ fontWeight: "bold", fontSize: "20px", letterSpacing: "7px" ,color:""}}>CORPORATE SUPPORT FUNCTIONS
                            </div>
                            <button type="button" className="btn  montserrat-regular rounded-1 text-center aboutBtn">Explore</button>
                        </div>
                    </div>

                </div>
            </div>
            </div>

        </>

    )
}

export default About