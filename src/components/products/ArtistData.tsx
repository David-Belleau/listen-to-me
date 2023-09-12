import { Header } from "../header/Header";
import { Contact } from "../contact/Contact";
import { Footer } from "../footer/Footer";
import { useGetArtistsDataQuery } from "../../services/deezerApiCalls";
import { useParams } from "react-router-dom";

export const ArtistData = () => {
  const { data, isLoading } = useGetArtistsDataQuery("artist data");
  return (
    <>
      <Header />
      <div>albums et morceaux !</div>
      <Contact />
      <Footer />
    </>
  );
};
