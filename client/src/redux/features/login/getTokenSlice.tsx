import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetTokenApiData, StateApiData } from "../../../utils/types/apiData";

const initialState: StateApiData<GetTokenApiData> = {
  isLoading: false,
  isSuccess: false,
  data: {
    access_token: "",
    token_type: "",
    scope: "",
    expires_in: 0,
    refresh_token: "",
  },
  isError: false,
  error: {},
};

const getTokenSlice = createSlice({
  name: "getToken",
  initialState,
  reducers: {
    getTokenRequest: (state) => {
      state.isLoading = true;
    },
    getTokenSuccessful(state, action: PayloadAction<GetTokenApiData>) {
      state.isSuccess = true;
      state.data = action.payload;
    },
    getTokenFailing: (state, action: PayloadAction<{}>) => {
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export const { getTokenRequest, getTokenSuccessful, getTokenFailing } =
  getTokenSlice.actions;
export default getTokenSlice.reducer;
