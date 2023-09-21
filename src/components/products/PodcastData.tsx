import { useParams } from "react-router-dom";
import { Skeleton } from "../loading/Skeleton";
import { SeparatorTemplate } from "./SeparatorTemplate";
import { ToggleWidget } from "../../utils/darkMode";

export const PodcastData = () => {
  let { podcastId } = useParams();
  const { toggleWidget } = ToggleWidget();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <>
      <SeparatorTemplate children="Liste des podcasts" />
      {podcastId && podcastId?.length !== 0 ? (
        <>
          <iframe
            title="podcast-widget"
            src={`https://widget.deezer.com/widget/${toggleWidget}/show/${podcastId}`}
            className="w-11/12 m-auto h-72"
          ></iframe>
        </>
      ) : (
        <Skeleton />
      )}
    </>
  );
};
