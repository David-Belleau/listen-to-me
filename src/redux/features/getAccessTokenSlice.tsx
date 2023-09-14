import { createSlice } from "@reduxjs/toolkit";

const accessTokenSlice = createSlice({
  name: "accessToken",
  initialState: "",
  reducers: {
    addAccessToken: (state, action) => state + action.payload,
  },
  /*  removeArticle: (state, action) => {
      return state.filter(article => article.id !== action.payload.id);
    },
    setArticles: (state, action) => {
      return action.payload;
    } */
});

export const { addAccessToken /* , removeArticle, setArticles */ } =
  accessTokenSlice.actions;
export default accessTokenSlice.reducer;
