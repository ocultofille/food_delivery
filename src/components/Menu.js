import { useParams } from "react-router-dom"
import {Shimmermenu} from "./Shimmer";
import useMenulist from "../utils/useMenulist"
import {MENU_IMG_URL,MENU_OFFER_IMG,MENU_CAR_IMG}from "../utils/config"
export const Menu = () => {
    const params = useParams();
    const { resId } = params
   
    const  menuList = useMenulist(resId);
    
    if (menuList.length === 0)
        return (<Shimmermenu />)
    else {
        const { name, cuisines, areaName, avgRating, sla, feeDetails, totalRatingsString, costForTwoMessage } = menuList[2]?.card?.card?.info
        const { offers } = menuList[3]?.card?.card?.gridElements?.infoWithStyle
        const filtredData = menuList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(item => item?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        const nestedData = menuList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(item => item?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
        const { title, carousel } = menuList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card
        console.log("top", offers);

        // console.log("length",menuList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card.carousel);
        return (
            <div className="container menuBlock mt-5" >
                <div className="d-flex justify-content-between  pb-4 align-items-center mt-5 " style={{ borderBottom: "1px dashed lightgrey" }}>
                    <div className="d-flex flex-column">
                        <div className="resName poppins-regular fw-bold mt-5">{name}</div>
                        <div className="text-secondary poppins-regular cuisines small"> {cuisines.join(",")} </div>
                        <div className="text-secondary poppins-regular cuisines small"> {areaName}, {sla?.lastMileTravelString}</div>
                        <div className="text-secondary poppins-regular cuisines small mt-3"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu" alt="img"/> {feeDetails?.message}</div>
                    </div>
                    <div>
                        <div className="border rounded-3 rating text-center d-flex flex-column mt-5 " height="50px">
                            <div className="text-success  mukta-medium fw-bolder py-2 border-bottom " style={{ fontSize: "15px" }}><i className="bi bi-star-fill"></i> {avgRating}</div>
                            <div className="text-secondary  mukta-medium fw-bolder py-2 " style={{ fontSize: "10px" }}>{totalRatingsString}</div>
                        </div>
                    </div>
                </div>
                <div className="d-flex" style={{ color: "#3e4152" }}>
                    <div className="me-4">
                        <i className="bi bi-clock-fill"></i>
                        <span className="poppins-regular ms-2 fw-bolder">{sla?.slaString}</span>
                    </div>
                    <div >
                        <span className="  fw-bolder  text-white " style={{borderRadius: "50%", fontSize: "12px", padding: "1px 5px", lineHeight: "2px", backgroundColor: "#3e4152" }}>₹</span>
                        <span className="poppins-regular ms-2 fw-bolder" >{costForTwoMessage}</span>
                    </div>
                </div>


                <div className=" mt-4 container  bannerContainer  gap-2">
                    { 
                    
                        offers.map((offerBanner,index) => {
                            // console.log("banner",offerBanner);
                            return (
                                <button key={index} type="button" className="btn me-2" style={{ width: "auto", height: "auto", border: "1px solid #e9e9eb" }}>

                                    <div className="d-inline">
                                        <img alt="img" src={MENU_OFFER_IMG + offerBanner?.info?.offerLogo} style={{ height: "20px" }} />
                                        <span className="poppins-regular ms-2 fw-bolder" style={{ color: "#686b78" }}>{offerBanner?.info?.header}</span>
                                    </div>
                                    <div>
                                        <span className="roboto-regular ms-2 fw-bolder" style={{ color: "#93959f", fontSize: "0.7rem" }}>{offerBanner?.info?.couponCode} {` | ` + offerBanner?.info?.description}</span>
                                        <span></span>
                                    </div>

                                </button>

                            )
                        })
                    }
                </div>

                <div >
                    {!carousel ? "" :
                        <>
                            <div className="kanit-bold mt-5 menuTitle " style={{ fontSize: "1.33rem" }} >{title}</div>

                            <div className="d-flex gap-4 bannerContainer">
                                {

                                    carousel.map((carouselImg,index) => {
                                        // console.log("map",MENU_CAR_IMG+carouselImg?.creativeId);
                                        return (
                                            <div key={carouselImg?.creativeId}className="mt-4" >
                                                <img alt="img" className="rounded-4" src={MENU_CAR_IMG + carouselImg?.creativeId} style={{ height: "300px",width: "340px",objectFit:"cover" }} />
                                            </div>
                                        )

                                    })

                                }
                            </div>
                        </>
                     } 

                </div>

                {filtredData.map((filter) => {
                    // console.log('filters',filter);
                    return (
                        <div>
                            <div key={filter?.card?.card?.title} className="kanit-bold mt-5 menuTitle" >{filter?.card?.card?.title} ({filter?.card?.card?.itemCards.length})</div>
                            {
                                filter?.card?.card?.itemCards.map(itemCard => {
                                    // console.log("itemCard",itemCard);
                                    return (
                                        <div key={itemCard?.card?.info.name} className=" d-flex justify-content-between pb-3 align-items-center " style={{ borderBottom: "1px solid #e9e9eb" }}>
                                            <div className="d-flex  mt-4 flex-column">
                                                <div>{itemCard?.card?.info.isVeg ? <img alt="veg" className="logoVeg text-danger" height="17px" src="https://m.media-amazon.com/images/I/31xw3zCEReL.jpg" /> : <img  alt="veg" height="15px" src="https://m.media-amazon.com/images/I/51x8XtJjq7L._AC_UF350,350_QL80_.jpg" />}</div>
                                                <div className="kanit-bold  mt-1 fw-normal" style={{ color: "#3e4152", fontSize: "1rem" }}>{itemCard?.card?.info.name}</div>
                                                <div className="kanit-bold  mt-1 fw-normal" style={{ color: "#3e4152", fontSize: "0.8rem" }}>{itemCard?.card?.info.price ? `₹` + itemCard?.card?.info.price / 100 : ""}</div>
                                                <div className="poppins-regular  mt-1 " style={{ color: "rgba(40,44,63,0.45)", fontSize: "0.8rem" }}> {itemCard?.card?.info.description}</div>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <img className="rounded-3" style={{ backgroundColor: `hsl(${(Math.random() * 360) | 0}, 40%, 85%)`, width: "150px", height: "120px", objectFit: "cover" }} alt="img" src={itemCard?.card?.info.imageId ? MENU_IMG_URL + itemCard?.card?.info.imageId : "https://cdn-icons-png.freepik.com/512/1056/1056265.png"} />
                                                <button type="button" className="text-success bg-white fw-bold btn  btm-small mx-auto border addBtn ">ADD</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    )

                })}

                {nestedData.map(nestedItems => {
                    // console.log("23",nestedItems?.card);
                    return (
                        <>
                            <div key={nestedItems?.card?.card?.title} className="kanit-bold mt-5 menuTitle" >{nestedItems?.card?.card?.title} ({nestedItems?.card?.card?.categories.length})</div>
                            {

                                nestedItems?.card?.card?.categories.map(categorie => {
                                    // console.log('itemCardmmm',categorie);
                                    return (
                                        <>
                                            <div key={categorie?.title} className=" kanit-bold  mt-1 fw-normal mt-5 " style={{ color: "#3e4152", fontSize: "1.22rem" }}>{categorie?.title} ({categorie?.itemCards.length})</div>
                                            {
                                                categorie?.itemCards.map(itemCard => {
                                                    // console.log("itemCard",itemCard);
                                                    return (
                                                        <div key={itemCard?.card?.info.name} className=" d-flex justify-content-between pb-3 align-items-center " style={{ borderBottom: "1px solid #e9e9eb" }}>
                                                            <div className="d-flex  mt-4 flex-column">
                                                                <div>{itemCard?.card?.info.isVeg ? <img alt="img"className="logoVeg text-danger" height="17px" src="https://m.media-amazon.com/images/I/31xw3zCEReL.jpg" /> : <img alt="img" height="15px"  src="https://m.media-amazon.com/images/I/51x8XtJjq7L._AC_UF350,350_QL80_.jpg" />}</div>
                                                                <div className="kanit-bold  mt-1 fw-normal" style={{ color: "#3e4152", fontSize: "1rem" }}>{itemCard?.card?.info.name}</div>
                                                                <div className="kanit-bold  mt-1 fw-normal" style={{ color: "#3e4152", fontSize: "0.8rem" }}>{itemCard?.card?.info.price ? `₹` + itemCard?.card?.info.price / 100 : ""}</div>
                                                                <div className="poppins-regular  mt-1 " style={{ color: "rgba(40,44,63,0.45)", fontSize: "0.8rem" }}> {itemCard?.card?.info.description}</div>
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <img className="rounded-3" style={{ backgroundColor: `hsl(${(Math.random() * 360) | 0}, 40%, 85%)`, width: "120px", height: "100px", objectFit: "cover" }} alt="img" src={itemCard?.card?.info.imageId ? MENU_IMG_URL + itemCard?.card?.info.imageId : "https://cdn-icons-png.freepik.com/512/1056/1056265.png"} />
                                                                <button type="button" className="text-success bg-white fw-bold btn  btm-small mx-auto border addBtn ">ADD</button>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </>
                                    )
                                })
                            }
                        </>
                    )

                })}


            </div>


        )

    }


}



