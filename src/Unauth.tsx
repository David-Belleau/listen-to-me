import React from "react";

const Unauth = () => {
  return (
    <div
      style={{ backgroundImage: `url('images/bg_site.jpg')` }}
      className="bg-cover bg-no-repeat h-screen"
    >
      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex flex-col items-center gap-10">
        <img src="./images/logo_site.svg" alt="Logo du site" className="w-40" />
        <button className="rounded-lg bg-black text-white p-2 font-semibold cursor-pointer transition-all duration-400 ease-in-out hover:bg-orange focus:bg-neutral-200 focus:text-black">
          Se connecter
        </button>
      </div>
    </div>
  );
};

export default Unauth;
