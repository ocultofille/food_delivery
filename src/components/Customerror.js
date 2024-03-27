import { useRouteError } from "react-router-dom"

const CustomError =()=>{
    const errorDetail = useRouteError()
    console.log("errordetail",errorDetail);
 return (
    <div className="container mt-5 pt-5 d-flex justify-content-center align-items-center flex-column " >
        <img className="mx-auto "  alt="veg" src="https://rgicdn.s3.ap-south-1.amazonaws.com/ghrcenagpur/images/gif/404.gif" height="200px"/>
        <h2 className="display-5 me-2 text-center  fw-normal errorDetail">{errorDetail.statusText}</h2>
        <div className="text-secondary mt-5 ">{errorDetail.data}</div>
     </div>
 )
}
export default CustomError