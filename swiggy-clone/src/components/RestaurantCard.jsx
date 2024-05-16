import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  console.log("card",props)
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
    areaName,
  } = resData?.info;

  return (
    <div className=" rounded-xl m-4 p-4 w-[230px] bg-gray-50 hover:bg-gray-200">
      <img
        className="res-logo rounded-md"
        alt="res-logo"
        src={`${CDN_URL}` + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-xl text-violet-900">{name}</h3>
      <h4>{areaName}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString} </h4>
    </div>
  );
};

export const isPromoted = (RestaurantCard) => {
  return (props) => {
  
    return (
      <>
        <label className="absolute p-2 rounded-lg bg-black text-white font-normal"> Accepting orders 🟢</label>
        <RestaurantCard {...props}/>
      </>
    );
  };
};
export default RestaurantCard;
