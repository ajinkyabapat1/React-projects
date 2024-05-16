import React, { useEffect, useId, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

import RestaurantCategory from "./RestaurantCategory";

function RestaurantMenu(props) {
  const [resInfo, setResInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();
  //const resInfo = useRestaurantMenu(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();

    setResInfo(json.data);
  };

  const categories =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return resInfo == null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-6 text-xl">
        {resInfo.cards[2].card.card.info.name}
      </h1>
      <p className="font-medium ">
        {" "}
        {resInfo.cards[2].card.card.info.cuisines.join(",")} -{" "}
        {resInfo.cards[2].card.card.info.costForTwoMessage}
      </p>
      {categories.map((data, index) => {
        return (
          <RestaurantCategory
            data={data.card.card}
            showItems={index == showIndex ? true : false}
            setShowIndex={()=>setShowIndex(index)}
          />
        );
      })}
    </div>
  );
}

export default RestaurantMenu;
