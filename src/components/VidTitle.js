import React from "react";

const VidTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="text-base py-6 font-normal w-1/4">{overview}</p>
      <div className="flex gap-3">
        <button className="bg-white text-black pY-3 px-5 text-lg font-semibold  rounded-sm  flex items-center hover:bg-opacity-75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            id="play"
          >
            <path fill="none" d="M-838-2232H562v3600H-838z"></path>
            <path d="M16 10v28l22-14z"></path>
            <path fill="none" d="M0 0h48v48H0z"></path>
          </svg>
          Play
        </button>

        <button className="bg-gray-400 text-white pY-3 px-5 text-lg bg-opacity-50 rounded-sm font-semibold  flex items-center gap-1 hover:bg-opacity-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="35"
            height="35"
            viewBox="0,0,256,256"
          >
            <g
              fill="#ffffff"
              // fill-Rule="nonzero"
              // stroke-width="1"
              // stroke-linecap="butt"
              // stroke-linejoin="miter"
              // stroke-miterlimit="10"
              // stroke-dasharray=""
              // stroke-dashoffset="0"
            >
              <g transform="scale(5.33333,5.33333)">
                <path d="M24,4c-11.02793,0 -20,8.97207 -20,20c0,11.02793 8.97207,20 20,20c11.02793,0 20,-8.97207 20,-20c0,-11.02793 -8.97207,-20 -20,-20zM24,7c9.40662,0 17,7.59339 17,17c0,9.40661 -7.59338,17 -17,17c-9.40661,0 -17,-7.59339 -17,-17c0,-9.40661 7.59339,-17 17,-17zM24,14c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM23.97656,20.97852c-0.82766,0.01293 -1.48843,0.69381 -1.47656,1.52148v11c-0.00765,0.54095 0.27656,1.04412 0.74381,1.31683c0.46725,0.27271 1.04514,0.27271 1.51238,0c0.46725,-0.27271 0.75146,-0.77588 0.74381,-1.31683v-11c0.00582,-0.40562 -0.15288,-0.7963 -0.43991,-1.08296c-0.28703,-0.28666 -0.67792,-0.44486 -1.08353,-0.43852z"></path>
              </g>
            </g>
          </svg>
           More Info
        </button>
      </div>
    </div>
  );
};

export default VidTitle;
