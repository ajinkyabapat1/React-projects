import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = (props) => {
  const cartItms = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearCartItem = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div className="text-center m-4 p-4">
        <h1 className=" text-2xl font-bold text-green-500">Cart</h1>
        <div className="w-6/12 m-auto ">
          <button
            className="p-2 mb-10  bg-red-400 text-white rounded-lg"
            onClick={clearCartItem}
          >
            Clear Cart
          </button>
          <div className="m-4 p-4 text-center">
          {cartItms.length == 0 ? (
           <span className="text-bold text-violet-900 border-solid ">"Your Cart is empty!😞 ..Please add some  tasty food 😃"</span> 
          ) : (
            <ItemList items={cartItms} />
          )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
