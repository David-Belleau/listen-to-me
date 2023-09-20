import { useParams } from "react-router-dom";
import { Skeleton } from "../../shadcn/components/Skeleton";
import { Separator } from "./Separator";

export const TrackData = () => {
  let { trackId } = useParams();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <>
      <Separator children="Titre à écouter" />
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
    </>
  );
};
