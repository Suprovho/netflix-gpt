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
  const [showProfile, setShowProfile] = useState(true);
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
    setShowProfile(!showProfile);
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div
      className={
        navbar
          ? "px-8 py-2  flex  md:flex-row md:justify-between justify-center fixed w-screen z-[100] bg-gray-950 h-20 items-center scroll-smooth top-0"
          : "px-8 py-2  bg-gradient-to-b from-black flex  md:flex-row flex-wrap  justify-center md:justify-between absolute items-center w-screen z-[100] scroll-smooth scroll-m-0"
      }
    >
      <img className="md:w-40 md:h-20 w-32 h-auto" src={LOGO} alt="nav-logo" />
      {user && (
        <div className="flex p-5 items-center">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white font-sans outline-none border-none cursor-pointer rounded-sm"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className=""
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-1 px-4 mx-4 my-2 hover:scale-110 text-white rounded-md"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#ffffff"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                >
                  <g transform="scale(4,4)">
                    <path d="M32,8c-0.91125,0 -1.82195,0.30919 -2.56445,0.92969l-20.63477,17.24219c-0.765,0.639 -1.0373,1.75333 -0.5293,2.61133c0.647,1.092 2.07877,1.30534 3.00977,0.52734l0.71875,-0.59961v18.28906c0,2.761 2.239,5 5,5h30c2.761,0 5,-2.239 5,-5v-18.28711l0.71875,0.59961c0.374,0.313 0.8273,0.46484 1.2793,0.46484c0.695,0 1.38462,-0.36069 1.76563,-1.05469c0.465,-0.848 0.19122,-1.91906 -0.55078,-2.53906l-3.21289,-2.68555v-8.49805c0,-1.105 -0.895,-2 -2,-2h-2c-1.105,0 -2,0.895 -2,2v3.48438l-11.43555,-9.55469c-0.7425,-0.6205 -1.6532,-0.92969 -2.56445,-0.92969zM32,12.15234c0.11475,0 0.22877,0.03919 0.32227,0.11719l15.67773,13.09961v20.63086c0,1.105 -0.895,2 -2,2h-8v-14c0,-1.105 -0.895,-2 -2,-2h-8c-1.105,0 -2,0.895 -2,2v14h-8c-1.105,0 -2,-0.895 -2,-2v-20.63281l15.67773,-13.09766c0.0935,-0.078 0.20752,-0.11719 0.32227,-0.11719z"></path>
                  </g>
                </g>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#ffffff"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                >
                  <g transform="scale(8.53333,8.53333)">
                    <path d="M13,3c-5.511,0 -10,4.489 -10,10c0,5.511 4.489,10 10,10c2.39651,0 4.59738,-0.85101 6.32227,-2.26367l5.9707,5.9707c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-5.9707,-5.9707c1.41266,-1.72488 2.26367,-3.92576 2.26367,-6.32227c0,-5.511 -4.489,-10 -10,-10zM13,5c4.43012,0 8,3.56988 8,8c0,4.43012 -3.56988,8 -8,8c-4.43012,0 -8,-3.56988 -8,-8c0,-4.43012 3.56988,-8 8,-8z"></path>
                  </g>
                </g>
              </svg>
            )}
          </button>
          {showProfile && (
            <div>
              <img
                src={user?.photoURL}
                alt="user-Icon"
                className="w-9 h-9 cursor-pointer"
                onClick={() => SetProfile((prev) => !prev)}
              />
              {openProfile && (
                <div className="flex flex-col dropDownProfile  rounded-sm ">
                  <ul className="flex flex-col gap-4 cursor-pointer">
                    <li className="text-sm font-semibold text-slate-200 hover:underline underline-offset-4  capitalize font-sans">
                      {user.displayName}
                    </li>
                    <li>
                      <button
                        className="font-semibold text-base text-white hover:text-red-600 hover:font-semibold"
                        onClick={handleSignOut}
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
