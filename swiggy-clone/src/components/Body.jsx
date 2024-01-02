import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurants, setRestList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const filterRestaurant = () => {
    const filterRestauntList = listOfRestaurants.filter(
      (val) => val.info.avgRating > 4
    );
    setFilteredRestaurants(filterRestauntList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
console.log("data",json,json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setRestList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
console.log(filteredRestaurants)
  return filteredRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((data) =>
                data.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setRestList(filteredRestaurant);
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Find Restaurant
          </button>
        </div>
        <button className="filter-btn" onClick={filterRestaurant}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
         <Link to={"restaurant/"+restaurant?.info?.id}> <RestaurantCard key={restaurant?.info?.id} resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
