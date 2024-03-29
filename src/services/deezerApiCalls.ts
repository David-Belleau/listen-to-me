import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { host } from "./deezerConfig";

export const getMusicData = createApi({
  reducerPath: "getMusicData",
  baseQuery: fetchBaseQuery({
    baseUrl: `${host}`,
  }),
  endpoints: (builder) => ({
    getChartTracks: builder.query({
      query: () => ({
        url: "chart-tracks",
      }),
    }),
    getChartAlbums: builder.query({
      query: () => ({
        url: "chart-albums",
      }),
    }),
    getChartPlaylists: builder.query({
      query: () => ({
        url: "chart-playlists",
      }),
    }),
    getChartPodcasts: builder.query({
      query: () => ({
        url: "chart-podcasts",
      }),
    }),
  }),
});

export const {
  useGetChartTracksQuery,
  useGetChartAlbumsQuery,
  useGetChartPlaylistsQuery,
  useGetChartPodcastsQuery,
} = getMusicData;
