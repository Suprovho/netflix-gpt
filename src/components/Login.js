import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";

const Login = () => {
  const [IsSignInForm, SetSignInForm] = useState(true);
  const [errorMessage,setErrorMessage]=useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullName=useRef(null);

  const toggleSignInForm = () => {
    SetSignInForm(!IsSignInForm);
  };

  const handelButtonClick = () => {
    //validate the form data
    const Message= checkValidate(email.current.value, password.current.value,fullName.current.value);
    setErrorMessage(Message);
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

      <form
        className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black text-white rounded-lg bg-opacity-75"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="font-bold text-3xl py-4">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full text-base font-sans font-normal bg-[#333333] rounded-lg"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full text-base font-sans font-normal bg-[#333333] rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full text-base font-sans font-normal bg-[#333333] rounded-lg"
        />
          
        <p className="text-red-500 font-semibold text-lg py-4">{errorMessage}</p>

        <button
          className="p-4 my-6 bg-[#e50914] w-full text-base font-sans font-medium rounded-lg cursor-pointer"
          onClick={handelButtonClick}
        >
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 text-base font-normal cursor-pointer"
          onClick={toggleSignInForm}
        >
          {IsSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
