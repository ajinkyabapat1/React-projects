import RestaurantCard, { isPromoted } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.JS";
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
  const RestaurantCardPromoted = isPromoted(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      "data%%%%%%%%%",

      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>Looks like you are offline please check network</h1>;
  }
  return filteredRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className=" m-4 p-4">
          <input
            type="text"
            className="search-box  border border-solid border-black w-50 h-10"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 m-4 rounded-lg bg-green-200"
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
          <button
            className="filter-btn rounded-lg px-4 py-2 m-4 bg-gray-300 w50 h-10 "
            onClick={filterRestaurant}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link to={"restaurant/" + restaurant?.info?.id}>
            {" "}
            {restaurant?.info?.isOpen ? (
              <RestaurantCardPromoted resData={restaurant}/>
            ) : (
              <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
