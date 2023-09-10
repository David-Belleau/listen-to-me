import { Header } from "../header/Header";
import { Products } from "../products/Products";
import { Contact } from "../contact/Contact";
import { Footer } from "../footer/Footer";
import { app_id, redirect_uri, uri } from "../../services/deezerConfig";

export const Auth = () => {
  const handleClick = () => {
    window.location.href = `${uri}auth.php?app_id=${app_id}&redirect_uri=${redirect_uri}&response_type=token&perms=basic_access,email`;
  };

  let authCode = window.location.hash.substring(1).split("&")[0].split("=")[1];

  if (authCode && authCode !== "undefined") {
    localStorage.setItem("currentAuthCode", authCode);
  }

  let currentAuthCode = localStorage.getItem("currentAuthCode");

  return (
    <>
      {currentAuthCode?.length !== 0 ? (
        <>
          <Header />
          <Products />
          <Contact />
          <Footer />
        </>
      ) : (
        <div
          style={{ backgroundImage: `url( 'images/bg_site.jpg')` }}
          className="bg-cover bg-center bg-no-repeat h-screen"
        >
          <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex flex-col items-center gap-10">
            <img
              src="./images/logo_site.svg"
              alt="Logo du site"
              className="w-48"
            />
            <button
              className="rounded-lg m-auto bg-black text-white px-4 py-2 font-semibold cursor-pointer transition-all duration-400 ease-in-out hover:bg-orange focus:bg-neutral-200 focus:text-black"
              onClick={handleClick}
            >
              Se connecter
            </button>
          </div>
        </div>
      )}
    </>
  );
};
