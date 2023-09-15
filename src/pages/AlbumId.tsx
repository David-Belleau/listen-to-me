import { Contact } from "../components/contact/Contact";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { AlbumData } from "../components/products/AlbumData";

export const AlbumId = () => {
  return (
    <>
      <Header />
      <AlbumData />
      <Contact />
      <Footer />
    </>
  );
};
