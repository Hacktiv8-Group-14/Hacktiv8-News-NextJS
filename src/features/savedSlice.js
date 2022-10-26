import { createSlice } from "@reduxjs/toolkit";
import {HYDRATE} from 'next-redux-wrapper';

const dataStorage = typeof window !== "undefined" && localStorage.getItem("savedNews")
// if (typeof window !== "undefined") {
//   dataStorage = localStorage.getItem("savedNews");
// }

const initialState = {
  savedNews: JSON.parse(dataStorage) || [],
};

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    addSavedNews: (state, action) => {
      state.savedNews = [...state.savedNews, action.payload];
      localStorage.setItem("savedNews", JSON.stringify([...state.savedNews]));
    },
    deleteSavedNews: (state, action) => {
      const filteredData = state.savedNews.filter(
        (d) => d.title !== action.payload.title
      );
      state.savedNews = [...filteredData];
      localStorage.setItem("savedNews", JSON.stringify(filteredData));
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
          ...state,
          ...action.payload.saved,
      };
    },
  }
});

export const { addSavedNews, deleteSavedNews, setSavedNews } = savedSlice.actions;
export default savedSlice.reducer;
