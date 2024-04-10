import { ERR_ICON } from "../utils/config"
const ErrorMessage =()=>{
    return (
        <div className="containetr my-3 py-3" >
             <div className="d-flex justify-content-center align-items-cneter py-5 my-3" height="100px">
             <div className="mukta-medium mt-5 pt-5"style={{color:"#808080"}}>
             <img className="errorIcon" alt="err" src={ERR_ICON}/>
                Error : Check your Connection
            </div>
             </div>
        </div>
    )
}
export default  ErrorMessage