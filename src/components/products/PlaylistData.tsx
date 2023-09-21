import { useParams } from "react-router-dom";
import { SeparatorTemplate } from "./SeparatorTemplate";
import { DataTemplate } from "./DataTemplate";

export const PlaylistData = () => {
  let { playlistId } = useParams();

  return (
    <>
      <SeparatorTemplate children="Liste des titres" />
      <DataTemplate id={playlistId!} title="playlist" data="playlist" />
    </>
  );
};
