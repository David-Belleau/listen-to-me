import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  let currentAccessToken = localStorage.getItem("currentAccessToken");
  return <>{currentAccessToken && currentAccessToken?.length !== 0 ? <Outlet /> : <Navigate to="/" />}</>;
};
