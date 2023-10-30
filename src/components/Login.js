import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [IsSignInForm, SetSignInForm] = useState(true);

  const toggleSignInForm = () => {
    SetSignInForm(!IsSignInForm);
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-login"
        />
      </div>

      <form className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black text-white rounded-lg bg-opacity-75">
        <h1 className="font-bold text-3xl py-4">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSignInForm && (<input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full text-base font-sans font-normal bg-[#333333] rounded-lg"
        />)}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full text-base font-sans font-normal bg-[#333333] rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full text-base font-sans font-normal bg-[#333333] rounded-lg"
        />
        <button className="p-4 my-6 bg-[#e50914] w-full text-base font-sans font-medium rounded-lg cursor-pointer">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 text-base font-normal cursor-pointer"
          onClick={toggleSignInForm}
        >
           {IsSignInForm ? "New to Netflix? Sign up now." : "Already registered? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
