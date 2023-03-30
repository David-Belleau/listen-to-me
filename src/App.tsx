import "./App.css";
import { Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home";
import {Error404} from "./pages/Error404";
import { ErrorBoundary } from "react-error-boundary";
import {ErrorFallback} from "./components/error/ErrorFallback";

export const App = () => {
  return (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </ErrorBoundary>
  );
};

