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
// import Grocery from "./components/Grocery";
const Grocery = lazy(() => import("./components/Grocery"));
const RestaurantMenu=lazy(()=>import('./components/RestaurantMenu'))
const About=lazy(()=>import('./components/About'))

const AppLayout = () => {
  const [userName,setUserName]=useState('Ajinkya Bapat')

  // useEffect(()=>{
  //   setUserName
  // },[])
  return (
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
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
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);
