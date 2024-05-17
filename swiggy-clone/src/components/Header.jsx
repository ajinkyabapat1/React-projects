import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.JS";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
  const btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState(btnName);
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  console.log(data)
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to={""}> Home</Link>
          </li>
          <li className="px-4">
            <Link to={"grocery"}> Instamart</Link>
          </li>
          <li className="px-4">
            <Link to={"about"}> About Us</Link>
          </li>
          <li className="px-4">
            <Link to={"contact"}> Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() =>
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login")
            }
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold text-orange-600">Hello {data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
