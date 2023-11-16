import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGIN_BG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [IsSignInForm, SetSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  
  const handelButtonClick = (e) => {
    //sign in signup logic
    e.preventDefault();

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!IsSignInForm) {
      //* sign up logic

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
            photoURL:USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //* sign In logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    SetSignInForm(!IsSignInForm);
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src={LOGIN_BG}
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

        <p className="text-red-500 font-semibold text-lg py-4">
          {errorMessage}
        </p>

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
