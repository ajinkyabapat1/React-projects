import React, { useEffect, useId, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from 'react-router-dom'
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from '../utils/useRestaurantMenu'
function RestaurantMenu(props) {
  const [resInfo, setResInfo] = useState(null);
  const {resId}=useParams()
  //const resInfo = useRestaurantMenu(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_URL+resId
      );
    const json = await data.json();
    console.log(">>", json);
    setResInfo(json.data);
  };

  return resInfo == null ? (
    <Shimmer />
  ) : (
    <div className=" flex  max-w-sm rounded  shadow-lg m-4 p-4">
      <div>
      <h1 className="flex" >{resInfo.cards[2].card.card.info.name}</h1>
      </div>
      
      <div>
      <h2 >Menu</h2>
      </div>
     
      <ul className="flex-col">
        {resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map(
          (data, i) => (
        
            <li className="p-4 "key={i}>{data?.card?.info?.name +" -Rs."+Math.abs(+data?.card?.info?.price/100)
              
            }</li>
          )
        )}
      </ul>
      <ul></ul>
    </div>
  );
}

export default RestaurantMenu;
