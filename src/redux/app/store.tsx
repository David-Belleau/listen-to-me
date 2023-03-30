import { configureStore } from "@reduxjs/toolkit";
import getTokenSlice from "../features/login/getTokenSlice";

export const store = configureStore({
  reducer: {
    getToken: getTokenSlice
  },
});


