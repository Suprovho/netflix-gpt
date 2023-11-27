import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../utils/userSlice";
import MoviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
const appStore = configureStore({
  reducer: {
    user: useReducer,
    movies:MoviesReducer,
    gpt:gptReducer,
    config: configReducer,
  },
});

export default appStore;
