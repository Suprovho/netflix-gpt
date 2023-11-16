import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../utils/userSlice";
import MoviesReducer from "./movieSlice"

const appStore = configureStore({
  reducer: {
    user: useReducer,
    movies:MoviesReducer,
  },
});

export default appStore;
