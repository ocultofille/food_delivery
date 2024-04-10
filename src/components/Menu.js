import { useParams } from "react-router-dom"
import { Shimmermenu } from "./Shimmer";
import useMenulist from "../utils/useMenulist"
import Menuheader from "./Menuheader";
import NestedMenu from "./NestedMenu";
import OfferBanner from "./OfferBanner";
import MenuCarousel from "./MenuCarousel";
import NormalMenu from "./NormalMenu";
import { useState } from "react";
import { DarkModeContext } from '../utils/DarkModeContext';
import { useContext } from "react";
export const Menu = () => {
    const { isDarkMode } = useContext(DarkModeContext);
    const params = useParams();
    const { resId } = params
    const menuList = useMenulist(resId);
    const [activeIndex, setActiveIndex] = useState(0)
    if (menuList.length === 0)
        return (<Shimmermenu />)
    else {
        // const { name, cuisines, areaName, avgRating, sla, feeDetails, totalRatingsString, costForTwoMessage } = menuList[2]?.card?.card?.info
        const { offers } = menuList[3]?.card?.card?.gridElements?.infoWithStyle
        const filtredData = menuList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(item => item?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        const nestedData = menuList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(item => item?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
        const { title, carousel } = menuList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card
        console.log("top", offers);
        const handleShow = (val) => {
            if (val === activeIndex) {
                setActiveIndex(-1)
            }
            else {
                setActiveIndex(val)
            }
        }

        // console.log("length",menuList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card.carousel);
        return (
            <div className="container-fliud" style={isDarkMode?{background:"white"}:{background:"rgb(31,31,31)"}}>
                <div className="container menuBlock " >
                    <Menuheader
                        {...menuList[2]?.card?.card?.info}
                    />
                    <div className=" mt-4 container  bannerContainer  gap-2">
                        {
                            offers.map((offerBanner, index) => {
                                // console.log("banner",offerBanner);
                                return (
                                    <OfferBanner
                                        key={index}
                                        {...offerBanner?.info}
                                    />
                                )
                            })
                        }
                    </div>
                    <div >
                        {!carousel ? "" :
                            <>
                                <div className="kanit-bold mt-5 menuTitle " style={isDarkMode?{ fontSize: "1.33rem", color:"#3e4152" ,border:"none"}:{fontSize: "1.33rem", color:"rgb(180,180,180)",border:"none"}} >{title}</div>
                                <div className="d-flex gap-4 bannerContainer">
                                    {
                                        carousel.map((carouselImg, index) => {
                                            // console.log("map",MENU_CAR_IMG+carouselImg?.creativeId);
                                            return (
                                                <MenuCarousel
                                                    key={carouselImg?.creativeId}
                                                    {...carouselImg}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </>
                        }

                    </div>
                    {filtredData.map((filter, index) => {
                        // console.log('filters',filter);
                        return (
                            <div className="menuTitle kanit-bold" style={isDarkMode?{color:"rgb(62,65,82)",borderBottom:"10px solid #e9e9eb"}:{color:"rgb(180,180,180)",borderBottom:"10px solid #3b3b3b"}} >

                                <NormalMenu
                                    key={filter?.card?.card?.title}
                                    {...filter?.card?.card}
                                    showList={activeIndex === index}
                                    toggleFunction={() => { handleShow(index) }}
                                />
                            </div>


                        )

                    })}
                    {nestedData.map((nestedItems, indexNest) => {
                        // console.log("23",nestedItems?.card);
                        return (
                            <div className="menuTitle kanit-bold" style={isDarkMode?{color:"rgb(62,65,82)",borderBottom:"10px solid #e9e9eb"}:{color:"rgb(180,180,180)",borderBottom:"10px solid #3b3b3b"}} >
                                <NestedMenu
                                    key={nestedItems?.card?.card?.title}
                                    {...nestedItems?.card?.card}
                                    showList={activeIndex === indexNest}
                                    toggleFunction={() => { handleShow(indexNest) }}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>


        )

    }


}



