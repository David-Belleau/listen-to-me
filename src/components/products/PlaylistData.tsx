import { useParams } from "react-router-dom";
import { Skeleton } from "../loading/Skeleton";
import { SeparatorTemplate } from "./SeparatorTemplate";

export const PlaylistData = () => {
  let { playlistId } = useParams();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <>
      <SeparatorTemplate children="Liste des titres" />
      {playlistId && playlistId?.length !== 0 ? (
        <>
          <iframe
            title="playlist-widget"
            src={`https://widget.deezer.com/widget/light/playlist/${playlistId}`}
            className="w-11/12 m-auto h-72"
          ></iframe>
        </>
      ) : (
        <Skeleton />
      )}
    </>
  );
};
