import { Contact } from "../components/contact/Contact";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { AlbumData } from "../components/products/AlbumData";

const AlbumId = () => {
  return (
    <>
      <Header />
      <AlbumData />
      <Contact />
      <Footer />
    </>
  );
};

export default AlbumId;
