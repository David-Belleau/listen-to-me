import { LuHeadphones } from "react-icons/lu";
import type { AuthButtonProps } from "../../utils/types";

export const AuthButton = ({ handleClick }: AuthButtonProps) => {
  return (
    <div
      style={{
        backgroundImage: `url('/images/bg_site.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
      className="bg-cover bg-center bg-no-repeat h-screen"
      aria-label="bg-site"
    >
      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex flex-col items-center gap-10">
        <div className="flex flex-col justify-center items-center">
          <div className="text-orange h-12 border-4 rounded-full p-2">
            <LuHeadphones className="text-orange" size={20} />
          </div>
          <p className="font-black text-2xl w-48 text-center">Listen to me</p>
        </div>
        <button
          className="rounded-lg m-auto text-white bg-black hover:bg-orange hover:text-black focus:bg-black focus:text-orange px-4 py-2 font-semibold cursor-pointer transition-all duration-400 ease-in-out"
          onClick={handleClick}
        >
          Se connecter
        </button>
      </div>
    </div>
  );
};
