import { Header } from "../header/Header";
import { Contact } from "../contact/Contact";
import { Footer } from "../footer/Footer";
import { useParams } from "react-router-dom";
import { Skeleton } from "../../shadcn/components/skeleton";
import { Separator } from "./Separator";

export const TrackData = () => {
  let { trackId } = useParams();

  return (
    <>
      <Header />
      <Separator children="Titre à écouter"/>
      {trackId && trackId?.length !== 0 ? (
        <>
          <iframe
            title="track-widget"
            src={`https://widget.deezer.com/widget/light/track/${trackId}`}
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
