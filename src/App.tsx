import React from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "./components/auth/PrivateRoutes";
import { ToggleBg, ToggleText } from "./utils/darkMode";

const Home = React.lazy(() => import("./pages/Home"));
const Error404 = React.lazy(() => import("./pages/Error404"));

const TrackId = React.lazy(
  () => import(/* webpackPrefetch: true */ "./pages/TrackId")
);
const AlbumId = React.lazy(
  () => import(/* webpackPrefetch: true */ "./pages/AlbumId")
);

export const App = () => {
  const { toggleBg } = ToggleBg();
  const { toggleText } = ToggleText();

  return (
    <div className={toggleBg + " " + toggleText}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/track/:trackId" element={<TrackId />} />
          <Route path="/album/:albumId" element={<AlbumId />} />
        </Route>
      </Routes>
    </div>
  );
};
