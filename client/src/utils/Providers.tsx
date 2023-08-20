import { Provider } from "react-redux";
import { store } from "../redux/app/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ProvidersProps } from "./types/components";

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );
};
