import { Provider } from "react-redux";
import { store } from "../redux/app/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ProvidersProps } from "./types";
import { ErrorFallback } from "../components/error/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";

// all application providers
export const Providers = ({ children }: ProvidersProps) => {
  return (
    <Provider store={store}>
      <Router>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          {children}
        </ErrorBoundary>
      </Router>
    </Provider>
  );
};
