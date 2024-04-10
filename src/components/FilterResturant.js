const FilterResturant = ({handleCategory,catagory})=>{
    return(
        <div className="filterBtns roboto-thin text-center mt-3 " >
        <input type="button" className="btn text-secondary filterBtn  roboto-thin mx-2 p-2 px-3 rounded-5 fw-normal" value="Rating  4.5+" onClick={() => handleCategory("Rating")} style={{ borderColor: catagory === "Rating" ? "black" : "lightgray" }} />
        <input type="button" className="btn filterBtn  roboto-thin text-secondary mx-2 p-2 px-3 rounded-5 fw-normal" value="Fast Delivery" onClick={() => handleCategory("Delivery")} style={{ borderColor: catagory === "Delivery" ? "black" : "lightgray" }} />
        <input type="button" className="btn filterBtn  roboto-thin text-secondary mx-2 p-2 px-3 rounded-5 fw-normal" value="Pure Veg" onClick={() => handleCategory("Veg")} style={{ borderColor: catagory === "Veg" ? "black" : "lightgray" }} />

      </div>
    )
}

export default FilterResturant