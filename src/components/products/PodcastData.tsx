import { useParams } from "react-router-dom";
import { SeparatorTemplate } from "./SeparatorTemplate";
import { DataTemplate } from "./DataTemplate";

export const PodcastData = () => {
  let { podcastId } = useParams();

  return (
    <>
      <SeparatorTemplate children="Liste des podcasts" />
      <DataTemplate id={podcastId!} title="podcast" data="show" />
    </>
  );
};
