import { Contact } from "../components/contact/Contact";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { PodcastData } from "../components/products/PodcastData";

const PodcastId = () => {
  return (
    <>
      <Header />
      <PodcastData />
      <Contact />
      <Footer />
    </>
  );
};

export default PodcastId;
