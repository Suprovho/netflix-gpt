import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    upcomingMovies: null,
    TrendingMovies:null,
    externalId: null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },

    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },

    addTrendingMovies: (state, action) => {
      state.TrendingMovies = action.payload;
    },

    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
       
    addExternalId:(state,action)=>{
      state.externalId = action.payload;
    },

  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addUpcomingMovies,
  addTrendingMovies,
  addExternalId,
} = movieSlice.actions;
export default movieSlice.reducer;
