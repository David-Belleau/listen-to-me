import { SwiperSlide } from "swiper/react";
import {
  useGetChartAlbumsQuery,
  useGetChartPlaylistsQuery,
  useGetChartPodcastsQuery,
  useGetChartTracksQuery,
} from "../../services/deezerApiCalls";
import { Link } from "react-router-dom";
import { ProductsTemplate } from "./ProductsTemplate";

export const Products = () => {
  const { data: tracks, isLoading: loadTracks } =
    useGetChartTracksQuery("chart tracks");
  const { data: albums, isLoading: loadAlbums } =
    useGetChartAlbumsQuery("chart albums");
  const { data: playlists, isLoading: loadPlaylists } =
    useGetChartPlaylistsQuery("chart playlists");
  const { data: podcasts, isLoading: loadPodcasts } =
    useGetChartPodcastsQuery("chart podcasts");

  return (
    <>
      <ProductsTemplate
        heading="Top titres"
        products={tracks}
        loading={loadTracks}
        template={
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
                  <p className="text-center text-sm sm:text-xl w-34 truncate font-semibold">
                    {track.title}
                  </p>
                  <p className="text-center text-sm sm:text-xl w-34 truncate italic">
                    {track.artist.name}
                  </p>
                  <Link to={`track/${track.id}`}>
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
      <ProductsTemplate
        heading="Top albums"
        products={albums}
        loading={loadAlbums}
        template={
          <>
            {albums?.data.map(
              (album: {
                id: number;
                cover_xl: string;
                title: string;
                artist: { name: string };
              }) => (
                <SwiperSlide key={album.id}>
                  <p className="text-center text-sm sm:text-xl w-34 truncate font-semibold">
                    {album.title}
                  </p>
                  <p className="text-center text-sm sm:text-xl w-34 truncate italic">
                    {album.artist.name}
                  </p>
                  <Link to={`album/${album.id}`}>
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
      <ProductsTemplate
        heading="Top playlists"
        products={playlists}
        loading={loadPlaylists}
        template={
          <>
            {playlists?.data.map(
              (playlist: { id: number; picture_xl: string; title: string }) => (
                <SwiperSlide key={playlist.id}>
                  <p className="text-center text-sm sm:text-xl w-34 truncate">
                    {playlist.title}
                  </p>
                  <Link to={`playlist/${playlist.id}`}>
                    <img
                      src={playlist.picture_xl}
                      alt={playlist.title}
                      className="w-48 mx-auto rounded"
                    />
                  </Link>
                </SwiperSlide>
              )
            )}
          </>
        }
      />
      <ProductsTemplate
        heading="Top podcasts"
        products={podcasts}
        loading={loadPodcasts}
        template={
          <>
            {podcasts?.data.map(
              (podcast: { id: number; picture_xl: string; title: string }) => (
                <SwiperSlide key={podcast.id}>
                  <p className="text-center text-sm sm:text-xl w-34 truncate">
                    {podcast.title}
                  </p>
                  <Link to={`podcast/${podcast.id}`}>
                    <img
                      src={podcast.picture_xl}
                      alt={podcast.title}
                      className="w-48 mx-auto rounded"
                    />
                  </Link>
                </SwiperSlide>
              )
            )}
          </>
        }
      />
    </>
  );
};
