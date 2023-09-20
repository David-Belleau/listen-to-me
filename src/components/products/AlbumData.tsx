import { useParams } from "react-router-dom";
import { Skeleton } from "../loading/Skeleton";
import { SeparatorTemplate } from "./SeparatorTemplate";

export const AlbumData = () => {
  let { albumId } = useParams();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <>
      <SeparatorTemplate children="Liste des titres" />
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
    </>
  );
};
