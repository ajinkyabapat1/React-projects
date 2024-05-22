import React, { useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-100" src={BG_URL} alt="logo" />
      </div>
      <form className=" w-3/12 absolute p-12 bg-black my-24 mx-auto left-0 right-0 bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-2 my-2 w-full bg-gray-700 rounded-lg"
            type="text"
            placeholder="Enter your Full Name"
          />
        )}

        <input
          className="p-2 my-2 w-full bg-gray-700 rounded-lg"
          type="text"
          placeholder="Enter your E-mail address"
        />

        <input
          className="p-2 my-2 w-full bg-gray-700 rounded-lg"
          type="text"
          placeholder="Enter your password "
        />
        <button className="p-4 my-2 bg-red-700 w-full text-white rounded-lg">
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
