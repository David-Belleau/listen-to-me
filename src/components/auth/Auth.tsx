import { Header } from "../header/Header";
import { Products } from "../products/Products";
import { Contact } from "../contact/Contact";
import { Footer } from "../footer/Footer";
import { app_id, redirect_uri, uri } from "../../services/deezerConfig";
import { AuthButton } from "./AuthButton";

export const Auth = () => {
  const handleClick = () => {
    // redirect to authenticate application
    window.location.href = `${uri}auth.php?app_id=${app_id}&redirect_uri=${redirect_uri}&response_type=token&perms=basic_access,email`;
  };

  // get access token in url
  let accessToken = window.location.hash.substring(1).split("&")[0].split("=")[1];

  if (accessToken && accessToken?.length !== 0) {
    localStorage.setItem("currentAccessToken", accessToken);
  }

  let currentAccessToken = localStorage.getItem("currentAccessToken");

  if (currentAccessToken && currentAccessToken?.length !== 0) {
    return (
      <>
        <Header />
        <Products />
        <Contact />
        <Footer />
      </>
    );
  }
  return <AuthButton handleClick={handleClick} />;
};
