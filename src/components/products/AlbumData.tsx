import { Header } from "../header/Header";
import { Contact } from "../contact/Contact";
import { Footer } from "../footer/Footer";
import { useParams } from "react-router-dom";
import { Skeleton } from "../../shadcn/components/skeleton";
import { Separator } from "./Separator";

export const AlbumData = () => {
  let { albumId } = useParams();

  return (
    <>
      <Header />
      <Separator children="Liste des titres" />
      {albumId && albumId?.length !== 0 ? (
        <>
          <iframe
            title="album-widget"
            src={`https://widget.deezer.com/widget/light/album/${albumId}`}
            className="w-11/12 m-auto h-72"
          ></iframe>
        </>
      ) : (
        <Skeleton />
      )}
      <Contact />
      <Footer />
    </>
  );
};
