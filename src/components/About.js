import React from "react"
// import Form from "./Form";
import { useState, useEffect } from "react";
const About = () => {
    return (
        <>
            <div className=" mukta-regular  px-5 container-fluid aboutHeader" >
                <div className="text-white container px-5  mx-5 ">
                    <div className="px-5 mx-5">
                        <b className="fw-bolder " >Discover</b>
                        <br />
                        <span className="">The Swiggster</span>
                        <br />
                        In You
                    </div>
                </div>
            </div>

            <div className="container  mx-5 my-5">
                <div className=" text-center my-3 roboto-thin " style={{ fontWeight: "lighter", fontSize: "20px" }}>
                    We build innovative products & solutions that deliver unparalleled convenience to urban consumers.
                    The best part? Every bit of your work at Swiggy will help elevate the lives of our users across India.
                </div>
                <div className="text-center montserrat-regular " style={{ fontWeight: "lighter", fontSize: "35px", wordSpacing: "4px", letterSpacing: "5px" }}> Where Do You<b> Belong?</b></div>
                <div className="d-flex  flex-wrap  container justify-content-between mx-5 px-5 my-5 align-items-center" style={{gap:"auto"}}>
                    <div className="d-flex  flex-column align-items-center aboutData  aboutCard ">
                        <img width="150px" src="https://careers.swiggy.com/assets/img/icons/ic_1.png" />
                        <div className="d-flex  flex-column  justify-content-center  align-items-center">
                            <div className="text-center my-5 montserrat-regular " style={{ fontWeight: "bold", fontSize: "20px", letterSpacing: "7px" }}>TECHNOLOGY
                            </div>
                            <button type="button" className="btn  montserrat-regular rounded-1 text-center aboutBtn">Explore</button>
                        </div>
                    </div>

                    <div className="d-flex flex-column align-items-center aboutData  aboutCard ">
                        <img width="150px" src="https://careers.swiggy.com/assets/img/icons/ic_2.png" />
                        <div className="d-flex  flex-column  justify-content-center  align-items-center">
                            <div className="text-center my-5 montserrat-regular " style={{ fontWeight: "bold", fontSize: "20px", letterSpacing: "7px" }}>BUSINESS
                            </div>
                            <button type="button" className="btn  montserrat-regular rounded-1 text-center aboutBtn">Explore</button>
                        </div>
                    </div>


                    <div className="d-flex flex-column align-items-center aboutData  aboutCard ">
                        <img width="150px" src="https://careers.swiggy.com/assets/img/icons/ic_3.png" />
                        <div className="d-flex  flex-column  justify-content-center  align-items-center">
                            <div className="text-center my-5 montserrat-regular " style={{ fontWeight: "bold", fontSize: "20px", letterSpacing: "7px" }}>CLOUD KITCHEN
                            </div>
                            <button type="button" className="btn  montserrat-regular rounded-1 text-center aboutBtn">Explore</button>
                        </div>
                    </div>


                    <div className="d-flex  flex-column align-items-center aboutData  aboutCard ">
                        <img width="150px" src="https://careers.swiggy.com/assets/img/icons/ic_4.png" />
                        <div className="d-flex  flex-column  justify-content-center  align-items-center">
                            <div className="text-center my-5 montserrat-regular " style={{ fontWeight: "bold", fontSize: "20px", letterSpacing: "7px" }}>CUSTOMER CARE
                            </div>
                            <button type="button" className="btn  montserrat-regular rounded-1 text-center aboutBtn">Explore</button>
                        </div>
                    </div>

                    <div className="d-flex flex-column align-items-center aboutData  aboutCard ">
                        <img width="150px" src="https://careers.swiggy.com/assets/img/icons/ic_5.png" />
                        <div className="d-flex  flex-column  justify-content-center  align-items-center">
                            <div className="text-center my-5 montserrat-regular " style={{ fontWeight: "bold", fontSize: "20px", letterSpacing: "7px" }}>CAMPUS
                            </div>
                            <button type="button" className="btn  montserrat-regular rounded-1 text-center aboutBtn">Explore</button>
                        </div>
                    </div>


                    <div className="d-flex flex-column align-items-center aboutData  aboutCard ">
                        <img width="150px" src="https://careers.swiggy.com/assets/img/icons/ic_6.png" />
                        <div className="d-flex  flex-column  justify-content-center  align-items-center">
                            <div className="text-center my-5 montserrat-regular " style={{ fontWeight: "bold", fontSize: "20px", letterSpacing: "7px" }}>CORPORATE SUPPORT FUNCTIONS
                            </div>
                            <button type="button" className="btn  montserrat-regular rounded-1 text-center aboutBtn">Explore</button>
                        </div>
                    </div>

                </div>
            </div>

        </>

    )
}

export default About