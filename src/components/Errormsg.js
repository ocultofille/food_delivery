import { ERR_ICON } from "../utils/config"

const Errormsg = ()=> {
    return(
        <div className="containetr my-3 py-3" >
            <div className="d-flex justify-content-center align-items-cneter py-5 my-3" height="1000px">
            <img className="errorIcon"  src={ERR_ICON}/>
            <div className="mukta-medium text-danger mt-5 pt-5">
                Error : Fail to Fetch The API 
            </div>
        </div>
        </div>
    )

}

export  default Errormsg