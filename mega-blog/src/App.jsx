import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appWrite/Auth/auth";
import { login, logout } from "./store/authSlice";
import {Header,Footer} from './components/index'
function App() {
  //console.log(import.meta.env.VITE_APPWRITE_URL)   // why import meta becuse project created using vite else it could be process.env

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  },[]);

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        {/* <main>
        TODO:  <Outlet />
        </main> */}
        <Footer />
      </div>
    </div>
  ) : null
}

export default App;
