import { Link } from "react-router-dom";
import { BiSolidError } from "react-icons/bi";

export const PageNotFound = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-gray h-screen">
      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex flex-col gap-10 text-center font-bold">
        <BiSolidError
          size={80}
          className="text-orange m-auto"
          aria-label="Icône de prudence"
        />
        <h1 className="text-6xl">Erreur 404</h1>
        <p className="text-xl">La page que vous recherchez n'existe pas !</p>
        <Link
          to="/"
          className="rounded-lg m-auto bg-black text-white px-4 py-2 font-semibold cursor-pointer transition-all duration-400 ease-in-out hover:bg-orange focus:bg-neutral-200 focus:text-black"
        >
          Revenir à la page d'accueil
        </Link>
      </div>
    </div>
  );
};
