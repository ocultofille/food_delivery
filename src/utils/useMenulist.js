import { useState,useEffect } from "react"
const useMenulist = (id)=>{
    const [menuList, setMenuList] = useState([]);
    const menuUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    const getMenu = async () => {
        try {
            const data = await fetch(menuUrl)
            const json = await data.json();
            setMenuList(json?.data.cards)
            // console.log("json data ", json?.data.cards[0]?.card?.card?.info);
        }
        catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        getMenu();
    })
    return menuList;
}

export default useMenulist