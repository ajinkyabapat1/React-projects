import React, { useEffect } from "react";
import { LOGO } from "../utils/constants";
import { auth } from "../utils/fireBase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../state-management/userSlice";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { toggleGptSearchView } from "../state-management/gptSlice";
const Header = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const onSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };
  useEffect(() => {
    handleGptSearch();
  }, []);
  return (
    <div className="flex justify-between w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="netflix logo" />
      {currentUser && (
        <div className="flex p-2 justify-between">
          
          <button
            className="px-4 py-2 bg-purple-800 font-bold text-white rounded-lg mx-4  hover:bg-purple-950"
            onClick={handleGptSearch}
          >
            {" "}
            GPT Search
          </button>
          <img
            className="w-12 h-12 "
            src={currentUser?.photoURL}
            alt="user icon"
          />
          <button className="text-white font-bold px-2" onClick={onSignOut}>
            <PowerSettingsNewIcon className="text-red-500 font-bold" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
