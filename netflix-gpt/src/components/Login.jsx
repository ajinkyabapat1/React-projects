import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";
import { checkValidData } from "../utils/validate";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
  };
  return (
    <div>
      <Header />
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
          type="text"
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
          {isSignInForm
            ? "Already Registered,Sign In now!"
            : "New to Neflix? Sign Up now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
