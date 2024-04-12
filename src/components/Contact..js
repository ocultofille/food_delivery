import React from "react"
import { useEffect, useState } from "react"
import { DarkModeContext } from '../utils/DarkModeContext';
import { useContext } from "react";

// import ContactListData from "./ContactListData";
const Contact = () => {

    const { isDarkMode } = useContext(DarkModeContext);
    const [contactList, setContactList] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [contactUrl, setContactUrl] = useState("https://www.swiggy.com/dapi/support/issues/partner-onboarding");
    const [showList,setShowList]=useState(false)
    const handleListData = (val) => {
        setContactUrl(`https://www.swiggy.com/dapi/support/issues/${val}`)
    }
    const getData = async () => {
        try {
            const data = await fetch(contactUrl)
            const json = await data.json()
            console.log("json", json);
            setContactList(json?.data)
        }
        catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        getData();
    }, [contactUrl])

    const handleShow = (val) => {
        if (val === activeIndex) {
            setActiveIndex(-1)
        }
        else {
            setActiveIndex(val)
        }
    }


    return (
        <div className="container-fluid p-5  " style={isDarkMode?{ backgroundColor: "#37718e" }:{background:"black"}}>
            <div className="mx-5">
                <div className="px-4  pt-4 mukta-medium mt-3 ms-5" style={isDarkMode?{ color: "white", fontSize: "2.5rem" }:{ color: "rgb(180,180,180)", fontSize: "2.5rem" }}>Help & Support</div>
                <div className=" small ms-5 px-4" style={isDarkMode?{ color:"white",fontSize: "15px" }:{ color:"rgb(180,180,180)",fontSize: "15px" }}>Let's take a step ahead and help you better.</div>
            </div>
            <div className="d-flex  mx-5 p-5   mt-5" style={isDarkMode?{background:"white"}:{background:"rgba(31,31,31,0.4)"}}>
                <div style={isDarkMode?{ minWidth: " 300px", background: "#edf1f7" }:{ minWidth: " 300px", background: "rgba(49,49,49,0.2)" }}>
                    <ul type="none" className="mt-5">
                        <li className="py-2 px-5">
                            <span className="montserrat-regular fw-bold" onClick={() => handleListData("partner-onboarding")} style={isDarkMode?{ color: "#535665", cursor: "pointer" }:{ color: "rgb(120,120,120)",cursor: "pointer"}}>Partner Onboarding</span>
                        </li>
                        <li className="py-4 px-5">
                            <span className="montserrat-regular fw-bold" onClick={() => handleListData("legal")} style={isDarkMode?{ color: "#535665", cursor: "pointer" }:{ color: "rgb(120,120,120)",cursor: "pointer"}}>Legal</span>
                        </li>
                        <li className="py-4 px-5">
                            <span className="montserrat-regular fw-bold" onClick={() => handleListData("faq")} style={isDarkMode?{ color: "#535665", cursor: "pointer" }:{ color: "rgb(120,120,120)",cursor: "pointer"}}>FAQs</span>
                        </li>
                    </ul>
                </div>
                <div className="mt-3" style={{ background: "none", padding: "37px 0 0 50px", position: "relative", minHeight: "80vh", width:"950px" }}>
                    <div className="kanit-bold  text-capitalize fw-bolder " style={isDarkMode?{color:"#282c3f"}:{color:"rgb(180,180,180)"}}> {contactList?.issues?.meta?.type}</div>
                    <div>
                        {contactList?.issues?.data.map((listData,index) => {
                            // console.log("options", listData?.options[0]?.type);
                            return (
                                <>
                                    <div key={index} className=" mb-4 p-1"  style={isDarkMode?{width:"100%", borderBottom:"1px solid lightgrey"}:{width:"100%", borderBottom:"1px solid "}}>
                                        <div className="d-flex justify-content-between  align-items-center mt-2 mb-3" style={isDarkMode?{ color: "#3e4152", fontSize: "1.1rem" }:{ color: "rgb(120,120,120)", fontSize: "1.1rem" }} onClick={()=>{setShowList(!showList)}} >
                                            <div className="kanit-bold  mt-1 fw-normal  mb-1"  style={{fontSize:"1rem"}}> {listData.title}</div>
                                            <div className="" style={{ fontWeight: "600" }}><i className="bi bi-chevron-up"></i></div>
                                        </div>


                                        {showList&&<div  className="me-5">
                                            <div className="" style={isDarkMode?{ color: "rgba(40,44,63,0.45)", fontSize: "0.8rem" }:{color:"rgb(56,56,56)",fontSize: "0.8rem"}} >{listData?.description}</div>
                                            <a className=" fw-bold " style={isDarkMode?{ textDecoration: "none", color: "#fc8019" }:{ textDecoration: "none", color: "rgb(254, 80, 5)" }} href="#">{listData?.hyperLinkText}</a>
                                            <div className="text-uppercase mt-4  fw-bold " >{listData?.options[0]?.type ? <span className=" p-2 " style={isDarkMode?{ color: "#fc8019", border: "1px solid #fc8019" }:{ color: "rgb(254, 80, 5)", border: "1px solid rgb(254, 80, 5)" }}> {"Send An " + listData?.options[0]?.type} </span> : ""}</div>
                                            <div className="ms-3   text-secondary mt-2" style={{ fontSize: "8px" }}>{listData?.options[0]?.waitTime}</div>
                                        </div>}
                                    </div>


                                </>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    )

}



export default Contact


