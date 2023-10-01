import { configureStore } from "@reduxjs/toolkit";
import { getMusicData } from "../../services/deezerApiCalls";
import darkModeSlice from "../features/darkModeSlice";

export const store = configureStore({
  reducer: {
    [getMusicData.reducerPath]: getMusicData.reducer,
    darkMode: darkModeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getMusicData.middleware),

  devTools: process.env.NODE_ENV !== "production",
});
