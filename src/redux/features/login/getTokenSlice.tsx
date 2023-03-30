import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { GetTokenStateApi, GetTokenDataApi } from '../../../utils/types/apiCalls';

const initialState: GetTokenStateApi = {
  data: {
    access_token: "",
    token_type: "",
    scope: "",
    expires_in: 0,
    refresh_token:""
  },
  loading: false,
  successful: false,
  failing: {},
};

const getTokenSlice = createSlice({
  name: "getToken",
  initialState,
  reducers: {
    getTokenRequest: (state) => {
      state.loading = true;
    },
    getTokenSuccessful(state, action: PayloadAction<GetTokenDataApi>) {
      state.successful = true;
      state.data = action.payload;
    },
    getTokenFailing: (state, action: PayloadAction<{}>) => {
      state.failing = action.payload;
    },
  },
});

export const { getTokenRequest,getTokenSuccessful,getTokenFailing } = getTokenSlice.actions;
export default getTokenSlice.reducer;
