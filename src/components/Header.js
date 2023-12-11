import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const [navbar, setNavBar] = useState(false);
  const [openProfile, SetProfile] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

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
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //? unsubscribe when component unmount

    return () => unsubscribe();
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    //! adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div
      className={
        navbar
          ? "px-8 py-2  flex justify-between fixed bg-fixed  w-screen z-[100] bg-gray-950 h-20 items-center scroll-smooth top-0"
          : "px-8 py-2  bg-gradient-to-b from-black flex justify-between absolute items-center w-screen z-[100] scroll-smooth scroll-m-0"
      }
    >
      <img className="w-40 h-20" src={LOGO} alt="nav-logo" />
      {user && (
        <div className="flex p-5 items-center">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-1 px-4 mx-4 my-2 bg-purple-800 text-white rounded-md"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            src={user?.photoURL}
            alt="user-Icon"
            className="w-9 h-9 cursor-pointer"
            onClick={() => SetProfile((prev) => !prev)}
          />
          {openProfile && (
            <div className="flex flex-col dropDownProfile  rounded-sm">
              <ul className="flex flex-col gap-4 cursor-pointer">
                <li className="text-sm font-normal text-slate-200 hover:underline underline-offset-4  capitalize font-sans">
                  {user.displayName}
                </li>
                <li>
                  <button
                    className="font-semibold text-base text-white hover:text-red-500 hover:font-semibold"
                    onClick={handleSignOut}
                  >
                    Sign out of Netflix
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
