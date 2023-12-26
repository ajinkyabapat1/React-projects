import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { resList } from "../utils/mockData";
const Body = () => {
  const [listOfRestaurants, setRestList] = useState([]);
  const filterRestaurant = () => {
    const filterRestauntList = listOfRestaurants.filter((val) => val.info.avgRating > 4);
    setRestList(filterRestauntList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterRestaurant}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
