import logoSite from '../../assets/images/logo_site.svg'

type AuthButtonProps ={
  handleClick: () => void,
}

export const AuthButton = ({ handleClick }: AuthButtonProps) => {
  return (
    <div
      style={{ backgroundImage: `url( 'images/bg_site.jpg')` }}
      className="bg-cover bg-center bg-no-repeat h-screen"
      aria-label='bg-site'
    >
      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex flex-col items-center gap-10">
        <img src={logoSite} alt="logo du site" className="w-48" />
        <button
          className="rounded-lg m-auto bg-black text-white px-4 py-2 font-semibold cursor-pointer transition-all duration-400 ease-in-out hover:bg-orange focus:bg-neutral-200 focus:text-black"
          onClick={handleClick}
        >
          Se connecter
        </button>
      </div>
    </div>
  );
};
