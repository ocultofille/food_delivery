import { DarkModeContext } from '../utils/DarkModeContext';
import { useContext } from "react";
const SearchRestuarant = ({searchText,handleSearch,inputData})=>{
  const { isDarkMode } = useContext(DarkModeContext);
    return(
        <div className="search d-flex justify-content-center ">
            <input type="text" value={searchText}  onChange={handleSearch} placeholder="Search..." className={isDarkMode?"search-field_light text-black":"search-field_dark text-white" } style={isDarkMode?{background:"white"}:{background:"rgb(49,49,49)"}} />
            <button onClick={inputData} className={isDarkMode?"search-button text-black":"search-button text-light"}>
              <i className="bi bi-search"></i>
            </button>
          </div>
    )
}

export default SearchRestuarant