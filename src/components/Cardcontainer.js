import Errormsg from "./Errormsg";
import {Shimmer} from "./Shimmer";
import {Shimmercarousel} from "./Shimmer";
// import { RES_URL } from "../utils/config";
import Topcarousel from "./Topcarousel"
import { useState, useEffect } from "react"
import useOnline from "../utils/useOnline";
import useResturantlist from "../utils/useResturantlist";
import Card from "./Card";
const Cardcontainer = () => {
  const  resturantObj = useResturantlist();
  const{title,title2,restaurantCollection,filtredCollection,updater,carousel,Errormsg}=resturantObj
  const [searchText, setsearchText] = useState("");
  const [catagory, setActiveCatogery] = useState("");
  const isOnline = useOnline()
console.log('resObj',resturantObj);

  const handleSearch = (e) => {
    setsearchText(e.target.value)
  }
  const inputData = () => {

    const filtredData = restaurantCollection.filter(resItem => resItem?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
    console.log("filtred",filtredData);
    updater(filtredData)
    
  }


  const handleRating = () => {
    const filtredData = restaurantCollection.filter(resItem =>resItem?.info?.avgRating > 4.5)
    if (filtredCollection !== restaurantCollection && catagory === "Rating") {
      handleReset()
    }
    else {
      updater(filtredData)

      setActiveCatogery("Rating")
    }
  }

  const handleDelivery = () => {
    const filtredData = restaurantCollection.filter(resItem =>resItem?.info?.sla?.deliveryTime < 30)
    if (filtredCollection !== restaurantCollection && catagory === "delivery") {
      handleReset()
    }
    else {
      updater(filtredData)
      setActiveCatogery("delivery")

    }
  }

  const handleVeg = () => {
    const filtredData = restaurantCollection.filter(resItem =>resItem?.info?.veg
    )
    if (filtredCollection !== restaurantCollection && catagory === "Veg") {
      handleReset()
    }
    else {
      updater(filtredData)
      setActiveCatogery("Veg")
      // console.log(filtredData);

    }
  }

  const handleReset = () => {
    updater(restaurantCollection)
    setActiveCatogery("")
  }

  
  console.log("online",isOnline);
if (!isOnline){
  return <Errormsg/>
}
  return (
    // !errorMsg ?
      <>
        <div div className="container mt-3" >
          <div className="search d-flex justify-content-center ">
            <input type="text" value={searchText}  onChange={handleSearch} placeholder="Search..." className="search-field" />
            <button onClick={inputData} className="search-button">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
        
        <div className="container px-5">
          <div className="mukta-medium mt-3">{title}</div>
          <div className="d-flex carOverflow">
            { carousel.length !== 0 ?
              carousel.map((carData) => {
                
                return (
                  <Topcarousel
                    key={carData?.id}
                    {...carData}
                  />

                )
              }) : <Shimmercarousel />

            }
          </div>
          <hr />
        </div>
        <div className=" container " >
          <div className="mukta-medium mt-3 ms-5">{title2}</div>
          <div className="filterBtns roboto-thin text-center mt-3 ">
            <input type="button" className="btn text-secondary filterBtn  roboto-thin mx-2 p-2 px-3 rounded-5" value="Rating  4.5+" onClick={handleRating} style={{ borderColor: catagory === "Rating" ? "black" : "lightgray" }} />
            <input type="button" className="btn filterBtn  roboto-thin text-secondary mx-2 p-2 px-3 rounded-5" value="Fast Delivery" onClick={handleDelivery} style={{ borderColor: catagory === "delivery" ? "black" : "lightgray" }} />
            <input type="button" className="btn filterBtn  roboto-thin text-secondary mx-2 p-2 px-3 rounded-5" value="Pure Veg" onClick={handleVeg} style={{ borderColor: catagory === "Veg" ? "black" : "lightgray" }} />

          </div>
          <div className=" justify-content-center d-flex flex-wrap gap-4 mt-3">
            {
              filtredCollection.length !== 0 ?

                filtredCollection.map((card) => {
                  
                  return (
                    <Card
                      key={card?.info.id}
                      {...card?.info}
                    />)
                }) :<Shimmer/>
            }
          </div>
          <hr />
        </div>
      </>

      // :<Errormsg/>
     


  )
};

export default Cardcontainer
