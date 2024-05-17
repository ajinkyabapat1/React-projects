import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
//import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
// import Grocery from "./components/Grocery";
import {Provider} from 'react-redux'

const Grocery = lazy(() => import("./components/Grocery"));
const RestaurantMenu=lazy(()=>import('./components/RestaurantMenu'))
const About=lazy(()=>import('./components/About'))
const Cart=lazy(()=>import("./components/Cart"))
const AppLayout = () => {
  const [userName,setUserName]=useState('Ajinkya Bapat')

  // useEffect(()=>{
  //   setUserName
  // },[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "about", element: <Suspense fallback={<Shimmer />}><About/></Suspense> },
      { path: "contact", element: <Contact /> },
      { path: "restaurant/:resId", element: <Suspense fallback={<Shimmer />}><RestaurantMenu/></Suspense> },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {path:"cart",element:<Suspense fallback={<Shimmer />}>
      <Cart/>
    </Suspense>}
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);
