import { CallToActionButton, SeeAllProductsButton } from "./ProductButtons";
import SliderTemplate from "./SliderTemplate";
import { SwiperSlide } from "swiper/react";
import { Separator } from "./Separator";
import {
  useGetChartAlbumsQuery,
  useGetChartArtistsQuery,
  useGetChartTracksQuery,
} from "../../services/deezerApiCalls";
import { Skeleton } from "../../shadcn/components/skeleton";

export const Products = () => {
  const { data: artists, isLoading: loadArtists } =
    useGetChartArtistsQuery("chart artists");
  const { data: tracks, isLoading: loadTracks } =
    useGetChartTracksQuery("chart tracks");
  const { data: albums, isLoading: loadAlbums } =
    useGetChartAlbumsQuery("chart albums");

  return (
    <>
      <Separator children="Top artistes" />
      {!artists || loadArtists === true ? (
        <Skeleton />
      ) : (
        <SliderTemplate
          children={
            <>
              {artists?.data.map(
                (artist: { id: number; picture_xl: string; name: string }) => (
                  <SwiperSlide key={artist.id}>
                    <p className="text-center text-base sm:text-xl w-34 truncate">
                      {artist.name}
                    </p>
                    <img
                      src={artist.picture_xl}
                      alt={artist.name}
                      className="w-48 mx-auto rounded"
                    />
                  </SwiperSlide>
                )
              )}
            </>
          }
        />
      )}
      <Separator children="Top morceaux" />
      {!tracks || loadTracks === true ? (
        <Skeleton />
      ) : (
        <SliderTemplate
          children={
            <>
              {tracks?.data.map(
                (track: {
                  id: number;
                  md5_image: string;
                  title: string;
                  artist: {
                    name: string;
                  };
                }) => (
                  <SwiperSlide key={track.id}>
                    <p className="text-center text-base sm:text-xl w-34 truncate">
                      "{track.title}"
                    </p>
                    <p className="text-center text-base sm:text-xl w-34 truncate">
                      {track.artist.name}
                    </p>
                    <img
                      src={`https://e-cdns-images.dzcdn.net/images/cover/${track.md5_image}/250x250-000000-80-0-0.jpg `}
                      alt={track.title}
                      className="w-48 mx-auto rounded"
                    />
                  </SwiperSlide>
                )
              )}
            </>
          }
        />
      )}
      {/* <SeeAllProductsButton
        url="/allTracks"
        children="Voir tous les morceaux"
      /> */}
      <Separator children="Top albums" />
      {!albums || loadAlbums === true ? (
        <Skeleton />
      ) : (
        <SliderTemplate
          children={
            <>
              {albums?.data.map(
                (album: {
                  id: number;
                  cover_xl: string;
                  title: string;
                  artist: { name: string };
                }) => (
                  <SwiperSlide key={album.id}>
                    <p className="text-center text-base sm:text-xl w-34 truncate">
                      "{album.title}"
                    </p>
                    <p className="text-center text-base sm:text-xl w-34 truncate">
                      {album.artist.name}
                    </p>
                    <img
                      src={album.cover_xl}
                      alt={album.title}
                      className="w-48 mx-auto rounded"
                    />
                  </SwiperSlide>
                )
              )}
            </>
          }
        />
      )}
      {/* <SeeAllProductsButton url="/allAlbums" children="Voir tous les albums" /> */}
    </>
  );
};
