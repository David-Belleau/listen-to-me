import { store } from "../redux/app/store";

// useSelector & useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// components
export type SliderProps = {
  children: JSX.Element;
};
export type ProductProps = {
  url?: string;
  children?: string;
};
export type ProvidersProps = {
  children: JSX.Element;
};
export type AuthButtonProps = {
  handleClick: () => void;
};