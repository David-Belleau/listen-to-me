import { configureStore } from "@reduxjs/toolkit";
import { getMusicData } from "../../services/deezerApiCalls";

export const store = configureStore({
  reducer: {
    [getMusicData.reducerPath]: getMusicData.reducer,
    // music:getUserAuthorizationSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getMusicData.middleware),

  devTools: process.env.NODE_ENV !== "production",
});
