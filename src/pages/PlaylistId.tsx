import { Contact } from "../components/contact/Contact";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { PlaylistData } from "../components/products/PlaylistData";

const PlaylistId = () => {
  return (
    <>
      <Header />
      <PlaylistData />
      <Contact />
      <Footer />
    </>
  );
};

export default PlaylistId;
