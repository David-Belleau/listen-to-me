import { store } from "../../redux/app/store";

// useSelector & useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// get token
export type GetTokenDataApi = {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token:string
};
export type GetTokenStateApi = {
  data: GetTokenDataApi;
  loading: boolean;
  successful: boolean;
  failing: object;
};
