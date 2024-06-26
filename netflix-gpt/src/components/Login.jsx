import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL, USER_AVATAR } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useDispatch } from "react-redux";
import { addUser } from "../state-management/userSlice";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const email = useRef(null);
  const fullName = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              //navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              console.log(error)
            });
         
        
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          console.log("sign in", user);
          //navigate("/browse")
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);

        });
    }
  };
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img className="h-100" src={BG_URL} alt="logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 absolute p-12 bg-black my-24 mx-auto left-0 right-0 bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className=" text-white p-2 my-2 w-full bg-gray-700 rounded-lg"
            type="text"
            ref={fullName}
            placeholder="Enter your Full Name"
          />
        )}

        <input
          className="p-2 my-2 w-full bg-gray-700 rounded-lg text-white"
          type="text"
          ref={email}
          placeholder="Enter your E-mail address"
        />

        <input
          className=" text-white p-2 my-2 w-full bg-gray-700 rounded-lg"
          type="password"
          ref={password}
          placeholder="Enter your password "
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <button
          className="p-4 my-2 bg-red-700 w-full text-white rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 text-white cursor-pointer"
          onClick={toggleSignInForm}
        >
          {!isSignInForm
            ? "Already Registered,Sign In now!"
            : "New to Neflix? Sign Up now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
