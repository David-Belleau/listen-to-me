import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authCode",
  initialState: "",
  reducers: {
    addAuthCode: (state, action) => state + action.payload,
  },
  /*  removeArticle: (state, action) => {
      return state.filter(article => article.id !== action.payload.id);
    },
    setArticles: (state, action) => {
      return action.payload;
    } */
});

export const { addAuthCode /* , removeArticle, setArticles */ } =
  authSlice.actions;
export default authSlice.reducer;
