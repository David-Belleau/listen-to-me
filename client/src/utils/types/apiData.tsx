import { store } from "../../redux/app/store";

// useSelector & useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// data state
export type StateApiData<T> ={
  isLoading: boolean;
  isSuccess: boolean;
  data: T,
  isError:boolean,
  error:{}
}

// user authorization data
export type GetUserAuthorizationApiData = {
  code: string,
  error: string,
  state:string
};

// token data
export type GetTokenApiData = {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
};
