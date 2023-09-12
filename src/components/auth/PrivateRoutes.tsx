import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  let currentAuthCode = localStorage.getItem("currentAuthCode");
  return <>{currentAuthCode && currentAuthCode?.length !== 0 ? <Outlet /> : <Navigate to="/" />}</>;
};
