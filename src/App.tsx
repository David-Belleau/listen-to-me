import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/error/ErrorFallback";
import { Home } from "./pages/Home";
import { Error404 } from "./pages/Error404";
import { PrivateRoutes } from "./components/auth/PrivateRoutes";
import { AlbumId } from "./pages/AlbumId";
import { TrackId } from "./pages/TrackId";
import { ToggleBg, ToggleText } from "./utils/darkMode";

export const App = () => {
  const { toggleBg } = ToggleBg();
  const { toggleText } = ToggleText();

  return (
    <div className={toggleBg + " " + toggleText}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/track/:trackId" element={<TrackId />} />
            <Route path="/album/:albumId" element={<AlbumId />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </div>
  );
};
