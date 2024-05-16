import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data ,showItems,setShowIndex}) => {
  //const[showItems,setShowItems]=useState(false)
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 b g-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
       {showItems && <ItemList items={data.itemCards} />} 
        {/* {showItems && <ItemList items={data.itemCards} dummy={dummy} />} */}
      </div>
    </div>
  );
};

export default RestaurantCategory;
