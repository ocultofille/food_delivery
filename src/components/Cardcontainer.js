
import { Shimmer } from "./Shimmer";
import { Shimmercarousel } from "./Shimmer";
// import { RES_URL } from "../utils/config";
import Topcarousel from "./Topcarousel"
import { useState, useEffect } from "react"
import useOnline from "../utils/useOnline";
import useResturantlist from "../utils/useResturantlist";
import Card from "./Card";
import SearchRestuarant from "./SearchResturant";
import FilterResturant from "./FilterResturant";
import ErrorMessage from "./ErrorMessage";
import { DarkModeContext } from '../utils/DarkModeContext';
import { useContext } from "react";
const Cardcontainer = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const resturantObj = useResturantlist();
  const { title, title2, restaurantCollection, filtredCollection, updater, carousel, Errormsg } = resturantObj
  const [searchText, setsearchText] = useState("");
  const [catagory, setActiveCatogery] = useState("");
  const isOnline = useOnline()
  // console.log('resObj', resturantObj);

  const handleSearch = (e) => {
    setsearchText(e.target.value)
  }
  const inputData = () => {

    const filtredData = restaurantCollection.filter(resItem => resItem?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
    console.log("filtred", filtredData);
    updater(filtredData)

  }

  const handleReset = () => {
    updater(restaurantCollection)
    setActiveCatogery("")
  }
  
  const handleCategory = (val) => {
    console.log("val",val);
    switch (val) {
      
      case "Rating":
        const filtredRating = restaurantCollection.filter(resItem => resItem?.info?.avgRating > 4.5)
        if (filtredCollection !== restaurantCollection && catagory === val) {
          handleReset()
        }
        else {
          updater(filtredRating)
    
          setActiveCatogery(val)
        }
        break;

      case "Delivery":
        const filtredDelivery = restaurantCollection.filter(resItem => resItem?.info?.sla?.deliveryTime < 30)
        if (filtredCollection !== restaurantCollection && catagory === val) {
          handleReset()
        }
        else {
          updater(filtredDelivery)
          setActiveCatogery(val)
    
        }
        break;
        
      case "Veg":
        const filtredData = restaurantCollection.filter(resItem => resItem?.info?.veg)
          if (filtredCollection !== restaurantCollection && catagory === val) {
            handleReset()
          }
          else {
            updater(filtredData)
            setActiveCatogery(val)
            // console.log(filtredData);
      
          }
        break;

        
      default:
        handleReset()
        break;
    }
  }

  
  console.log("online", isOnline);
  if (!isOnline) {
    return(<ErrorMessage/>)
    
  }
  return (
    // !errorMsg ?
    <>
      <div div className="container pt-3" >
        <SearchRestuarant
          searchText={searchText}
          handleSearch={handleSearch}
          inputData={inputData}
        />
      </div>

      <div className="container px-5" style={isDarkMode?{borderBottom:"1px solid lightgray"}:{borderBottom:"1px solid #3b3a3a"}} >
        <div className="mukta-medium mt-3" style={isDarkMode?{color:"#212529"}:{color:"rgb(180,180,180)"}}>{title}</div>
        <div className="d-flex carOverflow mb-5">
          {carousel.length !== 0 ?
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
       
      </div>
      <div className=" container " >
        <div className="mukta-medium mt-3 ms-5" style={isDarkMode?{color:"#212529"}:{color:"rgb(180,180,180)"}}>{title2}</div>
        <FilterResturant 
          handleCategory={handleCategory}
          catagory={catagory}
          />
        <div className=" justify-content-center d-flex flex-wrap gap-4 mt-3 pb-2 " style={isDarkMode?{borderBottom:"1px solid lightgray"}:{borderBottom:"1px solid #3b3a3a"}} >
          {
            filtredCollection.length !== 0 ?

              filtredCollection.map((card) => {

                return (
                  <Card
                    key={card?.info.id}
                    {...card?.info}
                  />)
              }) : <Shimmer />
          }
          
        </div>
        
      </div>
    </>

    // :<Errormsg/>



  )
};

export default Cardcontainer
