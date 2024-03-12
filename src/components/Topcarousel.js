import { IMG_URL_L2 } from "../utils/config"
const Topcarousel =({imageId})=>{
    // console.log("imageid",imageId)
    return(
        <>
            <span className="imgGrid "><img className="d-flex mx-1" src={IMG_URL_L2+imageId} style={{ width: "165px",height:"auto",objectFit: "cover" }}/></span>
            
        </>
    )
}
export default Topcarousel