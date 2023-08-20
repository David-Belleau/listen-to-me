import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  StateApiData,
  GetUserAuthorizationApiData,
} from "../../../utils/types/apiData";

const initialState: StateApiData<GetUserAuthorizationApiData> = {
  isLoading: false,
  isSuccess: false,
  data: {
    code: "",
    error: "",
    state: "",
  },
  isError:false,
  error:{}
};

const getUserAuthorizationSlice = createSlice({
  name: "getUserAuthorization",
  initialState,
  reducers: {
    getUserAuthorizationRequest: (state) => {
      state.isLoading = true;
    },
    getUserAuthorizationSuccessful(
      state,
      action: PayloadAction<GetUserAuthorizationApiData>
    ) {
      state.isSuccess = true;
      state.data = action.payload;
    },
    getUserAuthorizationFailing: (state, action: PayloadAction<{}>) => {
      state.isSuccess = true;
      state.error = action.payload;
    },
  },
});

export const {
  getUserAuthorizationRequest,
  getUserAuthorizationSuccessful,
  getUserAuthorizationFailing,
} = getUserAuthorizationSlice.actions;
export default getUserAuthorizationSlice.reducer;
