import { useParams } from "react-router-dom";
import { Skeleton } from "../loading/Skeleton";
import { Separator } from "./Separator";

export const PodcastData = () => {
  let { podcastId } = useParams();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <>
      <Separator children="Liste des podcasts" />
      {podcastId && podcastId?.length !== 0 ? (
        <>
          <iframe
            title="podcast-widget"
            src={`https://widget.deezer.com/widget/light/show/${podcastId}`}
            className="w-11/12 m-auto h-72"
          ></iframe>
        </>
      ) : (
        <Skeleton />
      )}
    </>
  );
};


