import SliderTemplate from "./SliderTemplate";
import { SwiperSlide } from "swiper/react";
import { Separator } from "./Separator";
import {
  useGetChartAlbumsQuery,
  useGetChartArtistsQuery,
  useGetChartTracksQuery,
} from "../../services/deezerApiCalls";
import { Skeleton } from "../../shadcn/components/skeleton";
import { Link } from "react-router-dom";
import { SiYoutubemusic } from "react-icons/si";

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
                    <p className="text-center text-sm sm:text-xl w-34 truncate">
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
      <Separator children="Top titres" />
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
                    <p className="text-center text-sm sm:text-xl w-34 truncate">
                      "{track.title}"
                    </p>
                    <p className="text-center text-sm sm:text-xl w-34 truncate italic">
                      {track.artist.name}
                    </p>
                    <Link to={`track/${track.id}`}>
                      <SiYoutubemusic className="text-orange w-4 sm:w-8 h-8 mx-auto my-1 sm:my-2 " />
                      <img
                        src={`https://e-cdns-images.dzcdn.net/images/cover/${track.md5_image}/250x250-000000-80-0-0.jpg`}
                        alt={track.title}
                        className="w-48 mx-auto rounded"
                      />
                    </Link>
                  </SwiperSlide>
                )
              )}
            </>
          }
        />
      )}
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
                    <p className="text-center text-sm sm:text-xl w-34 truncate">
                      "{album.title}"
                    </p>
                    <p className="text-center text-sm sm:text-xl w-34 truncate italic">
                      {album.artist.name}
                    </p>
                    <Link to={`album/${album.id}`}>
                      <SiYoutubemusic className="text-orange w-4 sm:w-8 h-8 mx-auto my-1 sm:my-2 " />
                      <img
                        src={album.cover_xl}
                        alt={album.title}
                        className="w-48 mx-auto rounded"
                      />
                    </Link>
                  </SwiperSlide>
                )
              )}
            </>
          }
        />
      )}
    </>
  );
};
