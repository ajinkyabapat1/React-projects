import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.JS";


const Header = () => {
  const btnName="Login";

  const[btnNameReact,setBtnNameReact]=useState(btnName);
  const  onlineStatus=useOnlineStatus();
 
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>{onlineStatus?"🟢":"🔴"}</li>
            <li><Link to={""}> Home</Link></li>
            <li><Link to={"grocery"}> Instamart</Link></li>
            <li><Link to={"about"}>  About Us</Link></li>
            <li><Link to={"contact"}>  Contact Us</Link></li>
            <li>Cart</li>
            <button className="login" onClick={()=>btnNameReact==='Login'?setBtnNameReact("Logout"):setBtnNameReact("Login")}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };


  export default Header;
