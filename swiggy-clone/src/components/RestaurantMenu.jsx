import React, { useEffect, useId, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from 'react-router-dom'
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from '../utils/useRestaurantMenu'
function RestaurantMenu(props) {
  //const [resInfo, setResInfo] = useState(null);
  const {resId}=useParams()
  const resInfo = useRestaurantMenu(resId);
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
    <div className="menu">
      <h1>{resInfo.cards[0].card.card.info.name}</h1>
      <h2>Menu</h2>
      <ul>
        {resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map(
          (data, i) => (
        
            <li key={i}>{data?.card?.info?.name +" -Rs."+Math.abs(+data?.card?.info?.price/100)
              
            }</li>
          )
        )}
      </ul>
      <ul></ul>
    </div>
  );
}

export default RestaurantMenu;
