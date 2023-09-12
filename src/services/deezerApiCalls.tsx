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
    getArtistsData: builder.query({
      query: (id) => ({
        url: `artists-data${id}`,
      }),
    }),
  }),
});

export const {
  useGetChartArtistsQuery,
  useGetChartTracksQuery,
  useGetChartAlbumsQuery,
  useGetArtistsDataQuery,
} = getMusicData;
