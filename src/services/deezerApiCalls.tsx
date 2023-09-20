import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { host } from "./deezerConfig";

export const getMusicData = createApi({
  reducerPath: "getMusicData",
  baseQuery: fetchBaseQuery({
    baseUrl: `${host}`,
  }),
  endpoints: (builder) => ({
    getChartArtists: builder.query({
      query: () => ({
        url: "chart-artists",
      }),
    }),
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
    getArtistsData: builder.query({
      query: () => ({
        url: "artists-data",
      }),
    }),
  }),
});

export const {
  useGetChartArtistsQuery,
  useGetChartTracksQuery,
  useGetChartAlbumsQuery,
  useGetArtistsDataQuery,
  useGetChartPlaylistsQuery,
  useGetChartPodcastsQuery
} = getMusicData;
