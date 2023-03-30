import {NavBarGenres} from "../navBarGenres/NavBarGenres";
import {NavBarMain} from "../navBarMain/NavBarMain";

export const Header = () => {
  return (
    <>
      <NavBarMain />
      <NavBarGenres />
    </>
  );
};

