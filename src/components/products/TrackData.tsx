import { useParams } from "react-router-dom";
import { SeparatorTemplate } from "./SeparatorTemplate";
import { DataTemplate } from "./DataTemplate";

export const TrackData = () => {
  let { trackId } = useParams();

  return (
    <>
      <SeparatorTemplate children="Titre à écouter" />
      <DataTemplate id={trackId!} title="track" data="track" />
    </>
  );
};
