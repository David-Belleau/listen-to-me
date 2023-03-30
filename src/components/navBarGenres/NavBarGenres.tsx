import React from "react";

export const NavBarGenres = () => {
  return (
    <div className="bg-gray">
      <div className="grid grid-cols-4 sm:flex justify-center sm:gap-8 text-center py-3">
        <button className="hover:text-orange">Rap</button>
        <button className="hover:text-orange">Pop</button>
        <button className="hover:text-orange">Electro</button>
        <button className="hover:text-orange">Reggae</button>
        <button className="hover:text-orange">Rock</button>
        <button className="hover:text-orange">Hip-Hop</button>
        <button className="hover:text-orange">Dance Hall</button>
        <button className="hover:text-orange">RnB</button>
      </div>
    </div>
  );
};

