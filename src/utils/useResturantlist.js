import { useEffect, useState } from "react";
import { RES_URL } from "./config";
const useResturantlist = () => {

    const [title, setTitle] = useState("")
    const [title2, setTitle2] = useState("")
    const [restaurants, setResturants] = useState([]);
    const [carousel, setCarousel] = useState([]);
    const [filtred, setfiltred] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

  

    const getData = async () => {
        try {
            const data = await fetch(RES_URL);
            const json = await data.json();
            // console.log(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info.costForTwo);
            setResturants(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setfiltred(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setTitle(json.data.cards[0]?.card?.card.header.title)
            setTitle2(json.data.cards[1]?.card?.card.header.title)
            setCarousel(json.data.cards[0]?.card?.card?.imageGridCards?.info)
        } catch (error) {
            console.log("error", error);
            // setErrorMsg("there is problem to fetchdata from API")


        }
    }

    useEffect(
        () => {
            getData();
            // console.log("use effect");
        }, []
    )

    const resturantObj={
        title: title,
        title2: title2,
        restaurantCollection: restaurants,
        filtredCollection:filtred,
        carousel:carousel,
        errorMsg:errorMsg,
        updater:setfiltred

    }



    return resturantObj
}
export default useResturantlist