import { useParams } from "react-router-dom";
import { SeparatorTemplate } from "./SeparatorTemplate";
import { DataTemplate } from "./DataTemplate";

export const AlbumData = () => {
  let { albumId } = useParams();

  return (
    <>
      <SeparatorTemplate children="Liste des titres" />
      <DataTemplate id={albumId!} title="album" data="album" />
    </>
  );
};
