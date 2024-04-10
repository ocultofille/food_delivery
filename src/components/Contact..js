import React from "react"
import { useEffect, useState } from "react"
const Contact = () => {

    const [contactList, setContactList] = useState([]);

    const [contactId,setContactId] = useState("partner-onboarding");

    const handleListData = (val)=>{
        setContactId(val) ;
     }
     console.log("id",contactId);
    const CONTACT_URL = `https://www.swiggy.com/dapi/support/issues/${contactId}`
    console.log("url",CONTACT_URL);
    const getData = async () => {
        try {
            const data = await fetch(CONTACT_URL)
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
    }, [])
    
    
     
    return (
        <div className="container-fluid p-5  " style={{ backgroundColor: "#37718e" }}>
            <div className="mx-5">
                <div className="px-4  pt-4 mukta-medium mt-3 ms-5" style={{ color: "white", fontSize: "2.5rem" }}>Help & Support</div>
                <div className="text-white small ms-5 px-4" style={{ fontSize: "15px" }}>Let's take a step ahead and help you better.</div>
            </div>
            <div className="d-flex  mx-5 p-5   mt-5 bg-white">
                <div style={{ minWidth: " 300px", background: "#edf1f7" }}>
                    <ul type="none" className="mt-5">
                        <li className="py-2 px-5">
                            <span className="montserrat-regular fw-bold" onClick={()=>handleListData("partner-onboarding")} style={{ color: "#535665" }}>Partner Onboarding</span>
                        </li>
                        <li className="py-4 px-5">
                            <span className="montserrat-regular fw-bold" onClick={()=>handleListData("legal")} style={{ color: "#535665" }}>Legal</span>
                        </li>
                        <li className="py-4 px-5">
                            <span className="montserrat-regular fw-bold"onClick={()=>handleListData("faq")}  style={{ color: "#535665" }}>FAQs</span>
                        </li>
                    </ul>
                </div>
                <div className="mt-3" style={{ background: "#fff", padding: "37px 0 0 50px", position: "relative", minHeight: "80vh" }}>
                    <div className="kanit-bold  text-capitalize fw-bolder "> {contactList?.issues?.meta?.type}</div>
                    <div>
                        {contactList?.issues?.data.map(listData => {
                            // console.log("options", listData?.options[0]?.type);
                            return (
                                <div className=" border-bottom mb-4 p-1">
                                    <div className="kanit-bold  mt-1 fw-normal  mb-3" style={{ color: "#3e4152", fontSize: "1.1rem" }} > {listData.title}</div>
                                    <div>
                                        <div className="text-secondary " style={{ color: "rgba(40,44,63,0.45)", fontSize: "0.8rem" }} >{listData?.description}</div>
                                        <a className=" fw-bold " style={{textDecoration:"none",color:"#fc8019"}} href="#">{listData?.hyperLinkText}</a>
                                        <div className="text-uppercase mt-4  fw-bold " >{ listData?.options[0]?.type ? <span className=" p-2 " style={{color:"#fc8019", border:"1px solid #fc8019"}}> {"Send An "+ listData?.options[0]?.type} </span>: ""}</div>
                                        <div className="ms-3   text-secondary mt-2" style={{fontSize:"8px"}}>{listData?.options[0]?.waitTime}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    )

}



export default Contact


