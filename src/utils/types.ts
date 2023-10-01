import { store } from "../redux/app/store";

// useSelector & useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// components
export type SwiperProps = {
  ariaLabel:string,
  children: JSX.Element;
};
export type SeparatorTemplateProps = {
  children: string;
};
export type ProductsTemplateProps = {
  ariaLabel: string;
  heading: string;
  products: {};
  loading: boolean;
  template: JSX.Element;
};
export type DataTemplateProps = {
  id: string;
  title: string;
  data: string;
};
export type ProvidersProps = {
  children: JSX.Element;
};
export type AuthButtonProps = {
  handleClick: () => void;
};
