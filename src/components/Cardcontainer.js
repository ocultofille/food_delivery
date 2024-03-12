import Errormsg from "./Errormsg";
import Shimmer from "./Shimmer";
import Shimmercarousel from "./Shimmercarousel";
import { RES_URL } from "../utils/config";
import Topcarousel from "./Topcarousel"
import { useState, useEffect } from "react"
import Card from "./Card";
const Cardcontainer = () => {
  const [title, setTitle] = useState("")
  const [title2, setTitle2] = useState("")
  const [restaurants, setResturants] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filtred, setfiltred] = useState([]);
  const [catagory, setActiveCatogery] = useState("");
  const [errorMsg, setErrorMsg] = useState("")

  const getData = async () => {
    try {
      const data = await fetch(RES_URL);
      const json = await data.json();
      console.log(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info.costForTwo);
      setResturants(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setfiltred(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setTitle(json.data.cards[0]?.card?.card.header.title)
      setTitle2(json.data.cards[1]?.card?.card.header.title)
      setCarousel(json.data.cards[0]?.card?.card?.imageGridCards?.info)
    } catch (error) {
      console.log("error", error);
      setErrorMsg("there is problem to fetchdata from API")


    }
  }
  const handleSearch = (e) => {
    setsearchText(e.target.value)
  }
  const inputData = () => {

    const filtredData = restaurants.filter(resItem => resItem?.info?.name.toLowerCase().includes(searchText.toLowerCase()))

    setfiltred(filtredData)
  }

  const handleRating = () => {
    const filtredData = restaurants.filter(resItem =>
      resItem?.info?.avgRating > 4.5
    )
    if (filtred !== restaurants && catagory === "Rating") {
      handleReset()
    }
    else {
      setfiltred(filtredData)

      setActiveCatogery("Rating")
      console.log(filtredData);
    }
  }


  const handleDelivery = () => {
    const filtredData = restaurants.filter(resItem =>
      resItem?.info?.sla?.deliveryTime < 30
    )
    if (filtred !== restaurants && catagory === "delivery") {
      handleReset()
    }
    else {
      setfiltred(filtredData)
      setActiveCatogery("delivery")
      console.log(filtredData);

    }
  }

  const handleVeg = () => {
    const filtredData = restaurants.filter(resItem =>
      resItem?.info?.veg
    )
    if (filtred !== restaurants && catagory === "Veg") {
      handleReset()
    }
    else {
      setfiltred(filtredData)
      setActiveCatogery("Veg")
      console.log(filtredData);

    }
  }

  const handleReset = () => {
    setfiltred(restaurants)
    setActiveCatogery("")
  }


  useEffect(
    () => {
      getData();
      // console.log("use effect");
    }, []
  )

  return (
    !errorMsg ?
      <>
        <div div className="container mt-3" >
          <div className="search d-flex justify-content-center ">
            <input type="text" value={searchText} onChange={handleSearch} placeholder="Search..." className="search-field" />
            <button onClick={inputData} className="search-button">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>

        <div className="container px-5">
          <div className="mukta-medium mt-3">{title}</div>
          <div className="d-flex carOverflow">
            {carousel.length !== 0 ?
              carousel.map((carData) => {
                return (
                  <Topcarousel
                    key={carData?.info?.id}
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
            <input type="button" className="btn text-secondary filterBtn  roboto-thin mx-2 p-2 px-3 rounded-5" value="Rating  4.5+" onClick={handleRating} style={{ borderColor: catagory == "Rating" ? "black" : "lightgray" }} />
            <input type="button" className="btn filterBtn  roboto-thin text-secondary mx-2 p-2 px-3 rounded-5" value="Fast Delivery" onClick={handleDelivery} style={{ borderColor: catagory == "delivery" ? "black" : "lightgray" }} />
            <input type="button" className="btn filterBtn  roboto-thin text-secondary mx-2 p-2 px-3 rounded-5" value="Pure Veg" onClick={handleVeg} style={{ borderColor: catagory == "Veg" ? "black" : "lightgray" }} />

          </div>
          <div className=" justify-content-center d-flex flex-wrap gap-4 mt-3">
            {
              filtred.length !== 0 ?

                filtred.map((card) => {
                  return (
                    <Card
                      key={card?.info.name}
                      {...card?.info}
                    />)
                }) :<Shimmer/>
            }
          </div>
          <hr />
        </div>
      </>

      :<Errormsg/>
     


  )
};

export default Cardcontainer
