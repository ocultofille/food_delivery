import { DarkModeContext } from '../utils/DarkModeContext';
import { useContext } from "react";
import NormalMenu from "./NormalMenu"
import { useState } from "react";
const NestedMenu = ({ title, categories,showList,toggleFunction }) => {
    const { isDarkMode } = useContext(DarkModeContext);
    const [nestedIndex,setNestedIndex] = useState(0);
    const handleShow =(val) => {
        if(val===nestedIndex){
            setNestedIndex(-1)
        }
        else{
            setNestedIndex(val)
        }
    }
    console.log("title",title);
    return (
        <>
            <div className="d-flex justify-content-between  align-items-center mt-5 mb-1" onClick={toggleFunction}>
                <div className=" mt-5 mb-3" >{title} ({categories.length})</div>
                <div className="" style={{fontWeight:"600"}}>{showList?<i class="bi bi-chevron-up"></i>:<i class="bi bi-chevron-down"></i>}</div>
            </div>
            {

               showList&&categories.map((categorie,index) => {
                    // console.log('itemCardmmm',categorie);
                    return (
                        <div className="kanit-bold  mt-1 fw-normal " style={isDarkMode?{ color: "#3e4152", fontSize: "1.22rem" }:{color:"rgb(180,180,180)",fontSize:"1.22rem"}}>
                            <NormalMenu
                                key={categorie?.title}
                                {...categorie}
                                isNested  = {true}
                                showNestedList = {nestedIndex===index}
                                toggleNested={()=>handleShow(index)}

                            />
                        </div>
                    )
                })
            }
        </>
    )
}

export default NestedMenu